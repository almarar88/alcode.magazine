// Build-time data: reads content/catalog.json (imported from the real Shopify store by scripts/import_shopify.py),
// writes src/generated/store.json + public/sitemap.xml, and exports the route list for prerendering.
import fs from 'node:fs'; import path from 'node:path';
import { SITE, url } from './site.mjs'; import { INT, FLAGS } from './integrations.mjs';
const root = path.resolve(import.meta.dirname, '..');
const cat = JSON.parse(fs.readFileSync(path.join(root, 'content/catalog.json'), 'utf8'));
// Transparent cut-outs (scripts/cutout.py) are used when present and not rejected after visual review; originals stay as fallback.
const reject = new Set(fs.existsSync(path.join(root, 'content/cut-reject.json')) ? JSON.parse(fs.readFileSync(path.join(root, 'content/cut-reject.json'), 'utf8')) : []);
const withCut = im => { const n = path.basename(im.src, '.webp'); return !reject.has(n) && fs.existsSync(path.join(root, `public/books/cut/${n}.webp`)) ? { ...im, cut: `books/cut/${n}.webp`, cutSm: `books/cut/${n}-sm.webp`, flat: n.startsWith('15786') } : im; };
const inside = JSON.parse(fs.readFileSync(path.join(root, 'content/inside.json'), 'utf8'));
const books = cat.books.map(b => ({ ...b, images: b.images.map(withCut), price: Number(b.variants[0].price), available: b.variants.some(v => v.available) }));
const collections = cat.collections.map(c => ({ ...c, count: books.filter(b => b.collections.includes(c.handle)).length })).filter(c => c.count);
const themeDefs = JSON.parse(fs.readFileSync(path.join(root, 'content/themes.json'), 'utf8'));
const themes = themeDefs.map(t => ({ slug: t.slug, title: t.title, desc: t.desc, handles: books.filter(b => t.match.some(m => [b.title, ...b.tags].join(' ').includes(m))).map(b => b.handle) })).filter(t => t.handles.length >= 2);
const authors = [...new Set(books.map(b => b.author).filter(Boolean))];
fs.mkdirSync(path.join(root, 'src/generated'), { recursive: true });
fs.writeFileSync(path.join(root, 'src/generated/store.json'), JSON.stringify({ shop: cat.source, books, collections, featured: cat.featured, themes, authors, inside, integrations: { analytics: INT.analytics, flags: FLAGS } }));
const ORG = { '@context': 'https://schema.org', '@type': 'Organization', name: 'مؤسسة الكود لنشر الكتب', alternateName: 'Alcode Books', url: url(''), logo: url('brand/icon-512.png'), email: 'info@alcode.ae',
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer service', email: 'info@alcode.ae', availableLanguage: ['ar'] }] };
const FAQ_LD = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  ['كم تكلفة الشحن؟', 'رسوم الشحن ثابتة: 25 درهمًا لكل طلب مهما كان عدد الكتب.'],
  ['هل تُضاف ضريبة على السعر؟', 'لا. لا تُضاف أي ضريبة؛ المبلغ هو مجموع أسعار الكتب مضافًا إليه 25 درهمًا للشحن.'],
  ['كيف يتم الدفع؟', 'تنتقل إلى صفحة الدفع الآمنة في متجر الكود الرسمي على منصة Shopify لإدخال بيانات الشحن والدفع.'],
  ['كيف أتواصل معكم؟', 'عبر البريد الإلكتروني info@alcode.ae أو حساباتنا على إنستغرام وتيك توك.'],
].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
export function routesList() {
  const first = b => b.description[0] || '';
  return [
    { path: '', title: SITE.title, desc: SITE.description, ld: ORG },
    { path: 'books/', title: 'كل الكتب', desc: `جميع إصدارات مؤسسة الكود (${books.length} كتابًا) مع البحث والتصنيف والترتيب بالسعر والأحدث.` },
    ...collections.map(c => ({ path: `collection/${c.handle}/`, title: c.title, desc: c.description[0] || c.title })),
    ...themes.map(t => ({ path: `t/${t.slug}/`, title: t.title, desc: `${t.desc} ${t.handles.length} كتب.`, image: books.find(b => b.handle === t.handles[0])?.images[0]?.src,
      ld: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: t.title, url: url(`t/${t.slug}/`), mainEntity: { '@type': 'ItemList', numberOfItems: t.handles.length,
        itemListElement: t.handles.map((h, i) => ({ '@type': 'ListItem', position: i + 1, url: url(`book/${h}/`), name: books.find(b => b.handle === h).title })) } } })),
    { path: 't/', title: 'مجموعات مختارة', desc: 'مجموعات موضوعية من إصدارات مؤسسة الكود: الظفرة، الرحلات في الخليج والجزيرة العربية، أبوظبي، الكويت وغيرها.' },
    ...books.map(b => ({ path: `book/${b.handle}/`, title: b.title, desc: `${first(b)} السعر ${b.price} درهم.`.trim(), image: b.images[0]?.src, kind: 'product', price: b.price,
      // structured data only from catalog fields
      ld: { '@context': 'https://schema.org', '@type': ['Book', 'Product'], name: b.title, author: { '@type': 'Person', name: b.author }, inLanguage: 'ar', image: url(b.images[0]?.src || ''), description: first(b),
        publisher: { '@type': 'Organization', name: 'مؤسسة الكود لنشر الكتب' }, url: url(`book/${b.handle}/`),
        offers: { '@type': 'Offer', price: String(b.price), priceCurrency: 'AED', availability: b.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock', url: url(`book/${b.handle}/`), seller: { '@type': 'Organization', name: 'مؤسسة الكود لنشر الكتب' } } },
      ld2: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'الرئيسية', item: url('') }, { '@type': 'ListItem', position: 2, name: 'كل الكتب', item: url('books/') },
        ...(b.collections[0] ? [{ '@type': 'ListItem', position: 3, name: collections.find(c => c.handle === b.collections[0])?.title || '', item: url(`collection/${b.collections[0]}/`) }] : []), { '@type': 'ListItem', position: b.collections[0] ? 4 : 3, name: b.title }] } })),
    { path: 'author/', title: 'عن المؤلف: علي أحمد الكندي المرر', desc: 'شاعر وباحث في التاريخ والأدب والتراث المحلي: نبذة تعريفية، المسيرة، التأهيل العلمي، المؤلفات والجوائز، وكتبه في متجر الكود.', image: 'author/ali-alkindi-720.webp' },
    { path: 'cart/', title: 'سلة التسوق', desc: 'سلة مشترياتك من متجر الكود.' },
    { path: 'wishlist/', title: 'قائمة الأمنيات', desc: 'الكتب التي حفظتها في متصفحك.' },
    { path: 'about/', title: 'عن المتجر', desc: SITE.description },
    { path: 'contact/', title: 'تواصل معنا', desc: 'تواصل مع متجر الكود عبر البريد الإلكتروني info@alcode.ae أو حساباتنا على إنستغرام وتيك توك.', ld: ORG },
    { path: 'help/', title: 'الشحن والدفع والأسئلة الشائعة', desc: 'الشحن 25 د.إ. ثابتة لكل طلب، بلا ضرائب، والدفع الآمن عبر متجر الكود الرسمي على Shopify.', ld: FAQ_LD },
    { path: 'privacy/', title: 'سياسة الخصوصية', desc: 'كيف يتعامل متجر الكود مع بيانات الزوار.' },
    { path: 'terms/', title: 'شروط الاستخدام', desc: 'شروط استخدام موقع متجر الكود.' },
  ];
}
const sm = routesList().filter(r => !['cart/', 'wishlist/'].includes(r.path)).map(r => `<url><loc>${encodeURI(url(r.path))}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>${r.kind === 'product' || !r.path ? '<changefreq>weekly</changefreq>' : ''}</url>`).join('');
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sm}</urlset>\n`);
console.log(`store: ${books.length} books, ${collections.length} collections`);
