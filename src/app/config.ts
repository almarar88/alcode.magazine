/** Single place for the Shopify storefront origin used by every checkout / buy-now / "view in store" link.
 *  Permanent myshopify domain works regardless of DNS; switch to https://shop.alcode.ae once that domain is live on Shopify. */
export const SHOP_ORIGIN = 'https://8sq2wc-ye.myshopify.com';
/** Store contact email (shown in footer, contact page, cart help, JSON-LD). */
export const EMAIL = 'info@alcode.ae';
/** Checkout mode: 'shopify' = cart permalink to Shopify (live main); 'ziina' = on-site checkout (this branch, TEST MODE). */
export const CHECKOUT: 'shopify' | 'ziina' = 'ziina';
/** Public Supabase project values (publishable key is safe in the browser; RLS protects data). */
export const SUPABASE_URL = 'https://olkhmscftouksbgjmtjt.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_T4frPbNe2r44z8Uhp7rt9A_VWI8waxi';
export const FUNCTIONS_URL = SUPABASE_URL + '/functions/v1';
/** Ziina Embedded Checkout needs domain approval from Ziina support; until then the hosted page (redirect_url) is used. */
export const ZIINA_EMBED = false;
