# متجر الكود للكتب · Alcode Books

Static store front for the books of مؤسسة الكود, served at https://blog.alcode.ae (GitHub Pages, deployed on push to `main`).
The old magazine is preserved in git history at tag `magazine-final`.

- Catalog data comes only from the real Shopify store (https://alcode.ae public `products.json` / `collections.json`):
  `python3 scripts/import_shopify.py` → `content/catalog.json` + `public/books/*.webp`. The build never hits the network.
- Cart is stored in the browser; checkout and "buy now" use Shopify cart permalinks `https://alcode.ae/cart/VARIANT:QTY,…`, so payment happens on Shopify.
- Build: `SITE_BASE=/ SITE_ORIGIN=https://blog.alcode.ae npm run build` (prerenders every route).
- Tests (tools-verify/): `store.mjs` (functional), `check.mjs` (overflow), `axe2.mjs` (accessibility); page list via `STOREPAGES`.
