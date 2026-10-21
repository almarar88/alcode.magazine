// Content pipeline: content/*.md(x) + frontmatter → src/generated/posts.json, public/rss.xml, public/sitemap.xml
import fs from 'node:fs'; import path from 'node:path'; import matter from 'gray-matter';
import { SITE, url, tagSlug } from './site.mjs';
const root = path.resolve(import.meta.dirname, '..');
const dir = path.join(root, 'content');
const allCats = JSON.parse(fs.readFileSync(path.join(dir, 'categories.json'), 'utf8'));
const REQUIRED = ['title', 'author', 'category', 'date', 'excerpt'];
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
}).filter(Boolean).sort((a, b) => b.date.localeCompare(a.date));
// Related: shared tags (×2) + same category (×1)
for (const p of posts) p.related = posts.filter(o => o !== p).map(o => ({ s: o.slug, n: o.tags.filter(t => p.tags.includes(t)).length * 2 + (o.category === p.category ? 1 : 0) }))
  .sort((a, b) => b.n - a.n).slice(0, 3).map(o => o.s);
const PLACES = ['الكويت', 'البصرة', 'بوشهر', 'البحرين', 'لنجة', 'أبوظبي', 'صير بني ياس', 'رأس الخيمة', 'الذيد', 'البريمي', 'صحار', 'مسقط', 'مطرح', 'نزوى', 'هرمز', 'غمرون', 'بندر عباس', 'الشارقة', 'الأحساء'];
const tags = [...new Set([...posts.flatMap(p => p.tags), ...PLACES])].map(t => ({ name: t, slug: tagSlug(t), count: posts.filter(p => p.tags.includes(t)).length }));
fs.mkdirSync(path.join(root, 'src/generated'), { recursive: true });
const photos = JSON.parse(fs.readFileSync(path.join(dir, 'photos.json'), 'utf8'));
const cats = allCats.filter(c => posts.some(p => p.categorySlug === c.slug));
fs.writeFileSync(path.join(root, 'src/generated/posts.json'), JSON.stringify({ posts, categories: cats, tags, photos }, null, 1));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>${esc(SITE.title)}</title><link>${url()}</link><description>${esc(SITE.description)}</description><language>ar</language>
<atom:link href="${url('rss.xml')}" rel="self" type="application/rss+xml"/>
${posts.map(p => `<item><title>${esc(p.title)}</title><link>${url(`article/${p.slug}/`)}</link><guid>${url(`article/${p.slug}/`)}</guid><pubDate>${new Date(p.date + 'T08:00:00+04:00').toUTCString()}</pubDate><category>${esc(p.category)}</category><description>${esc(p.excerpt)}</description></item>`).join('\n')}
</channel></rss>\n`;
fs.writeFileSync(path.join(root, 'public/rss.xml'), rss);
const routes = routesList();
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `<url><loc>${encodeURI(url(r.path))}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'public/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${url('sitemap.xml')}\n`);
export function routesList() {
  return [{ path: '', title: SITE.title, desc: SITE.description },
    { path: 'search/', title: 'البحث', desc: 'ابحث في مقالات المجلة.' },
    { path: 'write/', title: 'اكتب مقالاً', desc: 'محرّر المقالات مع عرض حيّ للنص.' },
    { path: 'about/', title: 'عن المجلة', desc: SITE.description }, { path: 'gallery/', title: 'مكتبة الصور', desc: 'صور تاريخية من الخليج بتراخيص مفتوحة.' }, { path: 'credits/', title: 'حقوق الصور والمصادر', desc: 'مصدر كل صورة وترخيصها.' }, { path: 'dashboard/', title: 'لوحة الناشر', desc: 'مساحة عمل للمسودات والوسائط في المتصفح.' }, { path: 'saved/', title: 'المقالات المحفوظة', desc: 'قائمة قراءتك المحفوظة في متصفحك.' }, { path: 'timeline/', title: 'الخط الزمني', desc: 'محطات مقالات المجلة مرتبة زمنياً.' },
    ...cats.map(c => ({ path: `category/${c.slug}/`, title: c.name, desc: c.blurb })),
    ...tags.map(t => ({ path: `tag/${t.slug}/`, title: `وسم: ${t.name}`, desc: `مقالات موسومة بـ ${t.name}` })),
    ...posts.map(p => ({ path: `article/${p.slug}/`, title: p.title, desc: p.excerpt, image: p.cover }))];
}
console.log(`content: ${posts.length} posts, ${cats.length} categories, ${tags.length} tags`);
