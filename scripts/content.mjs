// Build-time data: reads content/catalog.json (imported from the real Shopify store by scripts/import_shopify.py),
// writes src/generated/store.json + public/sitemap.xml, and exports the route list for prerendering.
import fs from 'node:fs'; import path from 'node:path';
import { SITE, url } from './site.mjs'; import { INT, FLAGS } from './integrations.mjs';
const root = path.resolve(import.meta.dirname, '..');
const cat = JSON.parse(fs.readFileSync(path.join(root, 'content/catalog.json'), 'utf8'));
// Transparent cut-outs (scripts/cutout.py) are used when present and not rejected after visual review; originals stay as fallback.
const reject = new Set(fs.existsSync(path.join(root, 'content/cut-reject.json')) ? JSON.parse(fs.readFileSync(path.join(root, 'content/cut-reject.json'), 'utf8')) : []);
const withCut = im => { const n = path.basename(im.src, '.webp'); return !reject.has(n) && fs.existsSync(path.join(root, `public/books/cut/${n}.webp`)) ? { ...im, cut: `books/cut/${n}.webp`, cutSm: `books/cut/${n}-sm.webp` } : im; };
const inside = JSON.parse(fs.readFileSync(path.join(root, 'content/inside.json'), 'utf8'));
const books = cat.books.map(b => ({ ...b, images: b.images.map(withCut), price: Number(b.variants[0].price), available: b.variants.some(v => v.available) }));
const collections = cat.collections.map(c => ({ ...c, count: books.filter(b => b.collections.includes(c.handle)).length })).filter(c => c.count);
const authors = [...new Set(books.map(b => b.author).filter(Boolean))];
fs.mkdirSync(path.join(root, 'src/generated'), { recursive: true });
fs.writeFileSync(path.join(root, 'src/generated/store.json'), JSON.stringify({ shop: cat.source, books, collections, featured: cat.featured, authors, inside, integrations: { analytics: INT.analytics, flags: FLAGS } }));
export function routesList() {
  const first = b => b.description[0] || '';
  return [
    { path: '', title: SITE.title, desc: SITE.description },
    { path: 'books/', title: 'كل الكتب', desc: `جميع إصدارات مؤسسة الكود (${books.length} كتابًا) مع البحث والتصنيف والترتيب بالسعر والأحدث.` },
    ...collections.map(c => ({ path: `collection/${c.handle}/`, title: c.title, desc: c.description[0] || c.title })),
    ...books.map(b => ({ path: `book/${b.handle}/`, title: b.title, desc: `${first(b)} السعر ${b.price} درهم.`.trim(), image: b.images[0]?.src, kind: 'product' })),
    { path: 'author/', title: 'عن المؤلف: علي أحمد الكندي المرر', desc: 'شاعر وباحث في التاريخ والأدب والتراث المحلي: نبذة تعريفية، المسيرة، التأهيل العلمي، المؤلفات والجوائز، وكتبه في متجر الكود.', image: 'author/ali-alkindi-720.webp' },
    { path: 'cart/', title: 'سلة التسوق', desc: 'سلة مشترياتك من متجر الكود.' },
    { path: 'wishlist/', title: 'قائمة الأمنيات', desc: 'الكتب التي حفظتها في متصفحك.' },
    { path: 'about/', title: 'عن المتجر', desc: SITE.description },
    { path: 'contact/', title: 'تواصل معنا', desc: 'طرق التواصل مع متجر الكود.' },
    { path: 'privacy/', title: 'سياسة الخصوصية', desc: 'كيف يتعامل متجر الكود مع بيانات الزوار.' },
    { path: 'terms/', title: 'شروط الاستخدام', desc: 'شروط استخدام موقع متجر الكود.' },
  ];
}
const sm = routesList().filter(r => !['cart/', 'wishlist/'].includes(r.path)).map(r => `<url><loc>${encodeURI(url(r.path))}</loc></url>`).join('');
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sm}</urlset>\n`);
console.log(`store: ${books.length} books, ${collections.length} collections`);
