import React, { useState, useMemo } from "react";
import {
  Layout,
  Printer,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Droplet,
  Ruler,
  PenTool,
  Zap,
  Percent,
  Type,
  ToggleLeft,
  DollarSign,
  Palette,
  Image as ImageIcon,
} from "lucide-react";
import { Order, PrintOptions } from "./types/type";
import { PAPER_SIZES } from "./utils/size";
import { useReceiptPrint } from "react-receipts";

// 🌍 --- Constants ---
const COMMON_CURRENCIES = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL",
];

const COMMON_LOCALES = [
  "en-US",
  "en-GB",
  "en-CA",
  "en-AU",
  "fr-FR",
  "fr-CA",
  "de-DE",
  "es-ES",
  "es-MX",
  "it-IT",
  "ja-JP",
  "ko-KR",
  "zh-CN",
  "zh-TW",
  "ru-RU",
  "pt-BR",
  "pt-PT",
  "nl-NL",
  "sv-SE",
  "da-DK",
  "fi-FI",
  "no-NO",
  "pl-PL",
  "tr-TR",
  "ar-SA",
  "ar-AE",
  "hi-IN",
  "bn-BD",
  "th-TH",
  "id-ID",
  "vi-VN",
].sort();

// 🧮 --- Helper Functions ---
const calculateTotals = (
  items: Order["items"],
): { subtotal: number; tax: number; total: number } => {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = Math.round(subtotal * 0.075); // 7.5% VAT for demo
  const total = subtotal + tax;
  return { subtotal, tax, total };
};

// 🧾 --- Mock Order for Demo ---
const MOCK_ORDER: Order = {
  id: "R-739482",
  date: Date.now(),
  items: [
    { name: "Premium T-Shirt (M)", price: 3500, quantity: 1 },
    { name: "Sticker Pack", price: 500, quantity: 2 },
    { name: "Coffee Mug", price: 1200, quantity: 1 },
    { name: "Enamel Pin", price: 800, quantity: 4 },
  ],
  subtotal: 7500,
  tax: 563,
  total: 8063,
  customer: {
    name: "John Doe",
    address: "123 Main St, Tech City",
    phone: "+1-555-0198",
    email: "john@example.com",
  },
  customFields: [
    { key: "Cashier", value: "JaneDoe-007" },
    { key: "Order Type", value: "In-Store" },
  ],
  notes: "Thank you for shopping with us!",
};

const App: React.FC = () => {
  const [order] = useState<Order>(MOCK_ORDER);

  // --- PRINT OPTIONS STATE ---
  const [layout, setLayout] = useState<number>(11);
  const [paperSize, setPaperSize] = useState<PrintOptions["paperSize"]>("80mm");
  const [alignment, setAlignment] =
    useState<PrintOptions["alignment"]>("center");

  const [primaryColor, setPrimaryColor] = useState("#2563EB");
  const [textColor, setTextColor] = useState("#000000");
  const [borderColor, setBorderColor] = useState("#CCCCCC");
  const [headerBgColor, setHeaderBgColor] = useState("transparent");
  const [baseFontSize, setBaseFontSize] = useState(9);
  const [fontFamily, setFontFamily] = useState("Inter, sans-serif");

  const [logoUrl, setLogoUrl] = useState("");
  const [headerText, setHeaderText] = useState("THE REACT STORE");
  const [footerText, setFooterText] = useState("THANK YOU - COME AGAIN!");
  const [sellerName, setSellerName] = useState("THE REACT STORE");

  const [showSignature, setShowSignature] = useState(true);
  const [showTaxBreakdown, setShowTaxBreakdown] = useState(true);
  const [showCustomerPhone, setShowCustomerPhone] = useState(true);
  const [showNotes, setShowNotes] = useState(true);

  const [currency, setCurrency] = useState("USD");
  const [locale, setLocale] = useState("en-US");
  const [currencyDisplay, setCurrencyDisplay] = useState<
    "symbol" | "code" | "name"
  >("symbol");

  const [customCss, setCustomCss] = useState(
    "/* Add your custom print CSS here */",
  );

  // Formatter for total preview
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      currencyDisplay: currencyDisplay,
    }).format(value / 100);

  // --- Derived Data ---
  const totals = useMemo(() => calculateTotals(order.items), [order.items]);
  const orderWithTotals = useMemo(
    () => ({ ...order, ...totals }),
    [order, totals],
  );

  const printOptions = useMemo<PrintOptions>(
    () => ({
      layout,
      paperSize,
      alignment,
      primaryColor,
      textColor,
      borderColor,
      headerBgColor,
      baseFontSize,
      fontFamily,
      logoUrl,
      headerText,
      footerText,
      sellerName,
      showSignature,
      showTaxBreakdown,
      showCustomerPhone,
      showNotes,
      customCss,
      currency,
      locale,
      currencyDisplay,
    }),
    [
      layout,
      paperSize,
      alignment,
      primaryColor,
      textColor,
      borderColor,
      headerBgColor,
      baseFontSize,
      fontFamily,
      logoUrl,
      headerText,
      footerText,
      sellerName,
      showSignature,
      showTaxBreakdown,
      showCustomerPhone,
      showNotes,
      customCss,
      currency,
      locale,
      currencyDisplay,
    ],
  );

  // --- Custom Hook ---
  const { printReceipt, ReceiptContent } = useReceiptPrint(
    orderWithTotals,
    printOptions,
  );

  // --- Handlers ---
  const handlePrint = () => printReceipt();

  const alignButtonStyle = (alignValue: PrintOptions["alignment"]) => {
    const isActive = alignment === alignValue;
    return `px-3 py-2 text-sm font-medium rounded-lg flex items-center justify-center transition-colors duration-150 ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;
  };

  const currentPaper = PAPER_SIZES[paperSize as keyof typeof PAPER_SIZES] || {
    name: paperSize,
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-4 md:p-8 flex flex-col items-center font-sans text-gray-800">
      <style>{`
        .input-style { padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 8px; width: 100%; transition: all 0.2s ease-in-out; font-size: 0.875rem; background: white; }
        .input-style:focus { border-color: ${primaryColor}; box-shadow: 0 0 0 3px rgba(59,130,246,0.3); outline: none; }
        .editor-section { padding: 20px; border-radius: 12px; background-color: white; border: 1px solid #e5e7eb; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
        .editor-title { font-weight: 600; color: #111827; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; font-size: 1.125rem; }
        .editor-label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 6px; }
      `}</style>

      <div className="max-w-7xl w-full bg-white/50 shadow-sm rounded-2xl p-4 md:p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center justify-center gap-3">
          <Zap className="text-blue-600" size={32} />
          React Receipts Live Editor
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Explore all the configuration options available in react-receipts
          below. Watch the live preview update instantly on the right.
        </p>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* --- Left Side: Configuration Editor --- */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Layout & Paper */}
              <div className="editor-section">
                <h3 className="editor-title">
                  <Layout size={20} className="text-indigo-500" /> Layout &
                  Paper
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="editor-label">
                      Template Layout (1-20)
                    </label>
                    <select
                      value={layout}
                      onChange={(e) => setLayout(Number(e.target.value))}
                      className="input-style"
                    >
                      {Array.from({ length: 20 }).map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Layout {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="editor-label">Paper Size</label>
                    <select
                      value={paperSize}
                      onChange={(e) =>
                        setPaperSize(
                          e.target.value as PrintOptions["paperSize"],
                        )
                      }
                      className="input-style"
                    >
                      <option value="58mm">58mm (POS Roll)</option>
                      <option value="80mm">80mm (POS Roll)</option>
                      <option value="100mm">100mm</option>
                      <option value="a4">A4 Document</option>
                      <option value="letter">Letter Document</option>
                    </select>
                  </div>

                  <div>
                    <label className="editor-label">Content Alignment</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setAlignment("start")}
                        className={alignButtonStyle("start")}
                      >
                        <AlignLeft size={16} className="mr-1" /> Start
                      </button>
                      <button
                        onClick={() => setAlignment("center")}
                        className={alignButtonStyle("center")}
                      >
                        <AlignCenter size={16} className="mr-1" /> Center
                      </button>
                      <button
                        onClick={() => setAlignment("end")}
                        className={alignButtonStyle("end")}
                      >
                        <AlignRight size={16} className="mr-1" /> End
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branding */}
              <div className="editor-section">
                <h3 className="editor-title">
                  <ImageIcon size={20} className="text-rose-500" /> Branding
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="editor-label">Seller / Store Name</label>
                    <input
                      type="text"
                      className="input-style"
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="editor-label">Logo URL</label>
                    <input
                      type="text"
                      className="input-style"
                      placeholder="https://example.com/logo.png"
                      value={logoUrl}
                      onChange={(e) => setLogoUrl(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Colors & Typography */}
              <div className="editor-section">
                <h3 className="editor-title">
                  <Palette size={20} className="text-emerald-500" /> Styling
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="editor-label">Primary Color</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="h-9 w-9 p-0 border-0 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="input-style flex-1 uppercase"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="editor-label">Text Color</label>
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="h-9 w-9 p-0 border-0 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="input-style flex-1 uppercase"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="editor-label">
                        Base Font Size (px)
                      </label>
                      <input
                        type="number"
                        className="input-style"
                        value={baseFontSize}
                        onChange={(e) =>
                          setBaseFontSize(Number(e.target.value))
                        }
                      />
                    </div>
                    <div>
                      <label className="editor-label">Font Family</label>
                      <input
                        type="text"
                        className="input-style"
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        placeholder="Inter, Arial, sans-serif"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Currency Settings */}
              <div className="editor-section">
                <h3 className="editor-title">
                  <DollarSign size={20} className="text-yellow-600" /> Currency
                  & Locale
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="editor-label">Currency Code</label>
                      <select
                        className="input-style"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                      >
                        {COMMON_CURRENCIES.map((code) => (
                          <option key={code} value={code}>
                            {code}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="editor-label">Locale</label>
                      <select
                        className="input-style"
                        value={locale}
                        onChange={(e) => setLocale(e.target.value)}
                      >
                        {COMMON_LOCALES.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="editor-label">Currency Display</label>
                    <select
                      value={currencyDisplay}
                      onChange={(e) =>
                        setCurrencyDisplay(e.target.value as any)
                      }
                      className="input-style"
                    >
                      <option value="symbol">Symbol ($, €)</option>
                      <option value="code">Code (USD, EUR)</option>
                      <option value="name">Name (US dollars)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Boolean Toggles */}
              <div className="editor-section md:col-span-2">
                <h3 className="editor-title">
                  <ToggleLeft size={20} className="text-orange-500" />{" "}
                  Visibility Toggles
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition">
                    <input
                      type="checkbox"
                      checked={showSignature}
                      onChange={(e) => setShowSignature(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium">Signature Line</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition">
                    <input
                      type="checkbox"
                      checked={showTaxBreakdown}
                      onChange={(e) => setShowTaxBreakdown(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium">Tax Breakdown</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition">
                    <input
                      type="checkbox"
                      checked={showCustomerPhone}
                      onChange={(e) => setShowCustomerPhone(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium">Customer Phone</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition">
                    <input
                      type="checkbox"
                      checked={showNotes}
                      onChange={(e) => setShowNotes(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium">Order Notes</span>
                  </label>
                </div>
              </div>

              {/* Custom CSS */}
              <div className="editor-section md:col-span-2">
                <h3 className="editor-title">
                  <PenTool size={20} className="text-pink-500" /> Custom CSS
                </h3>
                <textarea
                  className="input-style font-mono text-xs p-3"
                  rows={4}
                  value={customCss}
                  onChange={(e) => setCustomCss(e.target.value)}
                  placeholder=".my-custom-class { color: red; }"
                />
              </div>
            </div>
          </div>

          {/* --- Right Side: Live Preview --- */}
          <div className="lg:col-span-5 xl:col-span-4 bg-gray-900 border border-gray-800 p-[2px] rounded-2xl shadow-xl flex flex-col items-center sticky top-6 h-[calc(100vh-3rem)] overflow-hidden">
            <div className="w-full bg-gray-800/80 p-4 rounded-t-2xl flex items-center justify-between border-b border-gray-700/50">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                Live Preview
              </h2>
              <span className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-md font-mono">
                {currentPaper.name || paperSize}
              </span>
            </div>

            <div className="flex-1 w-full bg-white overflow-y-auto p-4 md:p-8 flex justify-center custom-scrollbar">
              <div
                className="shadow-2xl transition-all duration-300 ease-in-out hover:shadow-3xl"
                style={{
                  // A tiny bit of animation for when paper size changes
                  transform: "translateZ(0)",
                }}
              >
                <ReceiptContent order={orderWithTotals} {...printOptions} />
              </div>
            </div>

            <div className="w-full bg-gray-900 p-5 rounded-b-2xl border-t border-gray-800">
              <div
                className="flex justify-between items-center text-xl font-bold mb-4 px-2"
                style={{ color: primaryColor }}
              >
                <span className="text-gray-400 font-medium text-sm tracking-wider uppercase">
                  Total Amount
                </span>
                <span>{formatCurrency(orderWithTotals.total)}</span>
              </div>
              <button
                onClick={handlePrint}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-4 rounded-xl transition duration-200 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                style={{ backgroundColor: primaryColor }}
              >
                <Printer className="w-5 h-5" /> Execute Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
