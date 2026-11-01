/** Single place for the Shopify storefront origin used by every checkout / buy-now / "view in store" link.
 *  Permanent myshopify domain works regardless of DNS; switch to https://shop.alcode.ae once that domain is live on Shopify. */
export const SHOP_ORIGIN = 'https://8sq2wc-ye.myshopify.com';
/** Store contact email (shown in footer, contact page, cart help, JSON-LD). */
export const EMAIL = 'info@alcode.ae';
/** Store WhatsApp, international digits only. Do not substitute another number. */
export const WHATSAPP_NUMBER = '971563244942';
export const WHATSAPP = WHATSAPP_NUMBER;
/** 0 means no free-shipping offer: every non-empty order pays a flat 25 AED. */
export const FREE_SHIPPING_THRESHOLD = 0;
export const waMe = (text?: string) => `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
