/** Single place for the Shopify storefront origin used by every checkout / buy-now / "view in store" link.
 *  Permanent myshopify domain works regardless of DNS; switch to https://shop.alcode.ae once that domain is live on Shopify. */
export const SHOP_ORIGIN = 'https://8sq2wc-ye.myshopify.com';
/** Store contact email (shown in footer, contact page, cart help, JSON-LD). */
export const EMAIL = 'info@alcode.ae';
/** Store WhatsApp in E.164 without a plus. Do not substitute another number. */
export const WHATSAPP = '971563244942';
export const waMe = (text?: string) => `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
