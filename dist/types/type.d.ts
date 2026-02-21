import React from "react";
export interface Item {
    name: string;
    price: number;
    quantity: number;
}
export interface CustomField {
    key: string;
    value: string;
}
export interface Customer {
    name: string;
    address: string;
    phone: string;
    email: string;
}
export interface Order {
    id: string;
    date: number;
    items: Item[];
    subtotal: number;
    tax: number;
    total: number;
    customer: Customer;
    customFields: CustomField[];
    notes?: string;
}
export interface PrintOptions {
    layout: number;
    alignment: "start" | "center" | "end";
    primaryColor: string;
    textColor: string;
    borderColor: string;
    headerBgColor: string;
    baseFontSize: number;
    paperSize: string;
    fontFamily: string;
    logoUrl: string;
    headerText: string;
    footerText: string;
    sellerName: string;
    showSignature: boolean;
    showTaxBreakdown: boolean;
    customCss: string;
    currency?: string;
    locale?: string;
    currencyDisplay?: "symbol" | "code" | "name";
}
export interface LayoutProps extends PrintOptions {
    order: Order;
    alignStyle: "left" | "center" | "right";
    formatItemTotal: (item: Item) => string;
    currencyOpts: {
        currency?: string;
        locale?: string;
        currencyDisplay?: "symbol" | "code" | "name";
    };
}
export interface ReceiptContentProps extends Partial<PrintOptions> {
    order: Order;
}
export declare const formatCurrency: (amount: number, opts?: {
    currency?: string;
    locale?: string;
    currencyDisplay?: "symbol" | "code" | "name";
}) => string;
export declare const ReceiptContent: React.NamedExoticComponent<ReceiptContentProps>;
export interface DemoContainerProps {
    title: string;
    children: React.ReactNode;
}
