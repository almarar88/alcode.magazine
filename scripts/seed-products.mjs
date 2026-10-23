// Generates supabase/seed_products.sql from content/catalog.json (the store's current Shopify data).
// Re-run after catalog changes; upserts by handle so prices/availability stay in sync with the site.
import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const { books } = JSON.parse(fs.readFileSync(path.join(root, 'content/catalog.json'), 'utf8'));
const q = s => s == null ? 'null' : `'${String(s).replace(/'/g, "''")}'`;
const rows = books.map(b => { const v = b.variants.find(x => x.available) || b.variants[0];
  return `(${q(b.handle)}, ${q(b.title)}, ${Math.round(Number(v.price) * 100)}, ${v.available}, ${q(b.images[0]?.sm || b.images[0]?.src)}, ${b.id}, ${v.id})`; });
const sql = `insert into public.products (handle, title, price_fils, available, image, shopify_product_id, shopify_variant_id) values\n${rows.join(',\n')}\n` +
  `on conflict (handle) do update set title = excluded.title, price_fils = excluded.price_fils, available = excluded.available, image = excluded.image,\n` +
  `  shopify_product_id = excluded.shopify_product_id, shopify_variant_id = excluded.shopify_variant_id, updated_at = now();\n`;
fs.writeFileSync(path.join(root, 'supabase/seed_products.sql'), sql);
console.log('seed rows:', rows.length);
