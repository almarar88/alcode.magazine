// Content pipeline: content/*.md(x) + frontmatter → src/generated/posts.json, public/rss.xml, public/sitemap.xml
import { INT, FLAGS } from './integrations.mjs';
import fs from 'node:fs'; import path from 'node:path'; import matter from 'gray-matter';
import { SITE, url, tagSlug } from './site.mjs';
const root = path.resolve(import.meta.dirname, '..');
const dir = path.join(root, 'content');
const allCats = JSON.parse(fs.readFileSync(path.join(dir, 'categories.json'), 'utf8'));
const REQUIRED = ['title', 'author', 'category', 'date', 'excerpt'];
const num = s => { const m = /^(\d+)-/.exec(s); return m ? +m[1] : Infinity; };
const posts = fs.readdirSync(dir).filter(f => /\.mdx?$/.test(f)).map(f => {
  const { data, content } = matter(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const k of REQUIRED) if (!data[k]) throw new Error(`${f}: missing frontmatter "${k}"`);
  if (data.draft) return null;
  let cat = allCats.find(c => c.name === data.category);
  if (!cat) { cat = { name: data.category, slug: tagSlug(data.category), blurb: '' }; cats.push(cat); }
  const words = content.replace(/```[\s\S]*?```/g, ' ').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  return { slug: f.replace(/\.mdx?$/, ''), title: data.title, author: data.author, category: cat.name, categorySlug: cat.slug,
    date, cover: data.cover || '', excerpt: data.excerpt, tags: (data.tags || []).map(String), sample: !!data.sample, book: data.book || '', coverCaption: data.coverCaption || '', era: data.era || '', eraSort: data.eraSort || 0,
    words, minutes: Math.max(1, Math.round(words / 200)), body: content.trim() };
}).filter(Boolean).sort((a, b) => b.date.localeCompare(a.date) || num(b.slug) - num(a.slug));  // newest first; same day → higher article number (unnumbered = newest)

// ── Reader features (all data is sourced: glossary.json, series.json, travelers.json, gazetteer.json, beforeafter.json) ──
const J = f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const glossary = J('glossary.json'), series = J('series.json'), travelers = J('travelers.json'), gaz = J('gazetteer.json'), beforeAfter = J('beforeafter.json');
const prose = b => b.replace(/<figure[\s\S]*?<\/figure>/g, ' ').replace(/^#.*$/gm, ' ');
// Map georeference for arabia-map-1771 (1400×944): affine fit from 7 control points, residual ≈ ±14 px in the Gulf.
const MAPX = (lon, lat) => 38.639 * lon + 14.022 * lat - 1555.777, MAPY = (lon, lat) => 2.459 * lon - 34.693 * lat + 1121.697;
const CROP = { x: 560, y: 120, w: 620, h: 400 };
for (const p of posts) {
  // glossary: wrap the first «term» occurrence in prose paragraphs (never inside figures/headings)
  const g = glossary.filter(e => e.slug === p.slug); p.glossary = g.map(({ term, meaning, source }) => ({ term, meaning, source }));
  if (g.length) {
    const parts = p.body.split(/(<figure[\s\S]*?<\/figure>|^#.*$)/m); const done = new Set();
    p.body = parts.map((part, i) => i % 2 ? part : g.reduce((acc, e, k) => { if (done.has(e.term) || !acc.includes(`«${e.term}»`)) return acc; done.add(e.term); return acc.replace(`«${e.term}»`, `«<gloss data-g="${k}">${e.term}</gloss>»`); }, part)).join('');
  }
  // series
  const sr = series.find(x => x.items.includes(p.slug));
  p.series = sr ? { slug: sr.slug, title: sr.title, index: sr.items.indexOf(p.slug), items: sr.items } : null;
  // traveler / book page
  const tr = travelers.find(t => t.name === p.author || (t.authors || []).includes(p.author)) || travelers.find(t => t.book === p.book); p.traveler = tr ? tr.slug : '';
  // journey: places named in the prose, in order of first mention, that fall on the Gulf crop of the 1771 map
  const txt = prose(p.body); const hits = [];
  for (const [name, c] of Object.entries(gaz)) { const alt = name.startsWith('ال') ? `|لل${name.slice(2)}` : ''; const m = new RegExp(`(?:^|[^\\p{L}])(?:[وفبك]?${name}${alt})(?![\\p{L}])`, 'u').exec(txt); if (!m) continue; const i = m.index;
    const x = MAPX(c.lon, c.lat) - CROP.x, y = MAPY(c.lon, c.lat) - CROP.y;
    if (x < 10 || y < 10 || x > CROP.w - 10 || y > CROP.h - 10) continue;
    hits.push({ name, i, at: +(i / txt.length).toFixed(3), x: +x.toFixed(1), y: +y.toFixed(1), source: c.source }); }
  hits.sort((a, b) => a.i - b.i);
  const stops = []; for (const h of hits) { if (stops.some(s => s.name.includes(h.name) || h.name.includes(s.name))) continue; if (stops.some(s => Math.hypot(s.x - h.x, s.y - h.y) < 6)) continue; delete h.i; stops.push(h); }
  p.journey = stops.length >= 3 ? stops : [];
  p.beforeAfter = beforeAfter.filter(b => (txt.match(new RegExp(b.place, 'g')) || []).length >= 2).map(b => b.id);
}
for (const t of travelers) { const ps = posts.filter(p => p.traveler === t.slug);
  t.posts = ps.map(p => p.slug);
  t.images = ps.flatMap(p => [...p.body.matchAll(/<img src="([^"]+)" alt="([^"]*)"[^>]*\/?>(?:<figcaption><span class="fig-cap">([\s\S]*?)<\/span>)?/g)].map(m => ({ src: m[1], alt: m[2], cap: (m[3] || '').replace(/<[^>]+>/g, ''), slug: p.slug }))).slice(0, 12); }
// Related: shared tags (×2) + same category (×1)
for (const p of posts) p.related = posts.filter(o => o !== p).map(o => ({ s: o.slug, n: o.tags.filter(t => p.tags.includes(t)).length * 2 + (o.category === p.category ? 1 : 0) }))
  .sort((a, b) => b.n - a.n).slice(0, 3).map(o => o.s);
const PLACES = ['الكويت', 'البصرة', 'بوشهر', 'البحرين', 'لنجة', 'أبوظبي', 'صير بني ياس', 'رأس الخيمة', 'الذيد', 'البريمي', 'صحار', 'مسقط', 'مطرح', 'نزوى', 'هرمز', 'غمرون', 'بندر عباس', 'الشارقة', 'الأحساء'];
const tags = [...new Set([...posts.flatMap(p => p.tags), ...PLACES])].map(t => ({ name: t, slug: tagSlug(t), count: posts.filter(p => p.tags.includes(t)).length }));
fs.mkdirSync(path.join(root, 'src/generated'), { recursive: true });
const photos = JSON.parse(fs.readFileSync(path.join(dir, 'photos.json'), 'utf8'));
const cats = allCats.filter(c => posts.some(p => p.categorySlug === c.slug));
fs.writeFileSync(path.join(root, 'src/generated/posts.json'), JSON.stringify({ posts, categories: cats, tags, photos, series, travelers, beforeAfter, mapCrop: CROP, integrations: { ...INT, flags: FLAGS } }, null, 1));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>${esc(SITE.title)}</title><link>${url()}</link><description>${esc(SITE.description)}</description><language>ar</language>
<atom:link href="${url('rss.xml')}" rel="self" type="application/rss+xml"/>
${posts.map(p => `<item><title>${esc(p.title)}</title><link>${url(`article/${p.slug}/`)}</link><guid>${url(`article/${p.slug}/`)}</guid><pubDate>${new Date(p.date + 'T08:00:00+04:00').toUTCString()}</pubDate><category>${esc(p.category)}</category><description>${esc(p.excerpt)}</description></item>`).join('\n')}
</channel></rss>\n`;
fs.writeFileSync(path.join(root, 'public/rss.xml'), rss);
const routes = routesList().filter(r => r.path !== 'account/');
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `<url><loc>${encodeURI(url(r.path))}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'public/robots.txt'), `User-agent: *\nAllow: /\nDisallow: /studio/\nDisallow: /account/\n\nSitemap: ${url('sitemap.xml')}\n`);
export function routesList() {
  return [{ path: '', title: SITE.title, desc: SITE.description },
    { path: 'search/', title: 'البحث', desc: 'ابحث في مقالات المجلة.' },
    { path: 'about/', title: 'عن المجلة', desc: SITE.description }, { path: 'account/', title: 'الحساب', desc: 'تسجيل الدخول أو إنشاء حساب للتعليق والإشعارات.' }, { path: 'contact/', title: 'تواصل معنا', desc: 'طرق التواصل مع مجلة الكود الرقمية.' }, { path: 'privacy/', title: 'سياسة الخصوصية', desc: 'كيف تتعامل مجلة الكود الرقمية مع بيانات الزوار.' }, { path: 'terms/', title: 'شروط الاستخدام', desc: 'شروط استخدام مجلة الكود الرقمية ومحتواها.' }, { path: 'gallery/', title: 'مكتبة الصور', desc: 'صور تاريخية من الخليج بتراخيص مفتوحة.' }, { path: 'credits/', title: 'حقوق الصور والمصادر', desc: 'مصدر كل صورة وترخيصها.' }, { path: 'saved/', title: 'المقالات المحفوظة', desc: 'قائمة قراءتك المحفوظة في متصفحك.' }, { path: 'travelers/', title: 'الرحالة والكتب', desc: 'صفحة لكل رحالة أو كتاب في المجلة.' }, { path: 'timeline/', title: 'الخط الزمني', desc: 'محطات مقالات المجلة مرتبة زمنياً.' },
    ...cats.map(c => ({ path: `category/${c.slug}/`, title: c.name, desc: c.blurb })),
    ...tags.map(t => ({ path: `tag/${t.slug}/`, title: `وسم: ${t.name}`, desc: `مقالات موسومة بـ ${t.name}` })),
    ...travelers.map(t => ({ path: `traveler/${t.slug}/`, title: t.name, desc: `${t.name}: مقالات المجلة عن «${t.book}» وصوره.` })),
    ...posts.map(p => ({ path: `article/${p.slug}/`, title: p.title, desc: p.excerpt, image: p.cover }))];
}
console.log(`content: ${posts.length} posts, ${cats.length} categories, ${tags.length} tags`);
