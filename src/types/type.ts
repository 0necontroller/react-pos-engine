import React from 'react'
import { ReceiptContentComponent } from '../components/ReceiptContentComponent'

export interface Item {
  name: string
  price: number
  quantity: number
}
export interface CustomField {
  key: string
  value: string
}
export interface Customer {
  name: string
  address: string
  phone: string
  email: string
}
export interface Order {
  id: string
  date: number
  items: Item[]
  subtotal: number
  tax: number
  total: number
  customer: Customer
  customFields: CustomField[]
  notes?: string
}

// --- Package Props Interface ---
export interface PrintOptions {
  layout: number
  alignment: 'start' | 'center' | 'end'
  primaryColor: string
  textColor: string
  borderColor: string
  headerBgColor: string
  baseFontSize: number
  paperSize: string
  fontFamily: string
  logoUrl: string
  headerText: string
  footerText: string
  sellerName: string
  showSignature: boolean
  showTaxBreakdown: boolean
  customCss: string

  // Currency
  currency?: string // e.g. "KES", "USD", "EUR"
  locale?: string // e.g. "en-KE", "en-US"
  currencyDisplay?: 'symbol' | 'code' | 'name' // choose "code" to show "KES"
}

export interface LayoutProps extends PrintOptions {
  order: Order
  alignStyle: 'left' | 'center' | 'right'
  formatItemTotal: (item: Item) => string
}

export const formatCurrency = (
  amount: number,
  opts?: {
    currency?: string
    locale?: string
    currencyDisplay?: 'symbol' | 'code' | 'name'
  },
): string => {
  const value = amount / 100

  const currency = opts?.currency ?? 'USD'
  const locale = opts?.locale ?? 'en-US'
  const currencyDisplay = opts?.currencyDisplay ?? 'symbol'

  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      currencyDisplay,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  } catch {
    // safe fallback (in case of bad locale/currency)
    return `${currency} ${value.toFixed(2)}`
  }
}
export const ReceiptContent = React.memo(ReceiptContentComponent)
export interface DemoContainerProps {
  title: string
  children: React.ReactNode
}
