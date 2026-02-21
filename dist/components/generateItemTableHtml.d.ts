import { Item } from "../types/type";
export declare const generateItemTableHtml: (items: Item[], borderColor: string, hidePrice: boolean, currencyOpts?: {
    currency?: string;
    locale?: string;
    currencyDisplay?: "symbol" | "code" | "name";
}) => string;
