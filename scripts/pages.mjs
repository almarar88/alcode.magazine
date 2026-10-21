// After vite build: write one index.html per route (correct title/description/OG), plus 404.html fallback.
import './prerender-env.mjs'; import { setRoute } from './prerender-env.mjs';
import fs from 'node:fs'; import path from 'node:path';
import { routesList } from './content.mjs'; import { SITE, url } from './site.mjs';
const out = path.resolve(import.meta.dirname, '../dist');
let tpl = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
// Prerendered HTML paints on its own; the app bundle is started right after the first frame so it never delays first paint.
const entry = tpl.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)[1];
tpl = tpl.replace(/<script type="module" crossorigin src="[^"]+"><\/script>/, '').replace(/<link rel="modulepreload"[^>]*>/g, '')
  .replace('</body>', `<script>requestAnimationFrame(function(){setTimeout(function(){var s=document.createElement('script');s.type='module';s.crossOrigin='';s.src='${entry}';document.head.appendChild(s);},0)});</script>\n</body>`);
const { render } = await import(path.resolve(import.meta.dirname, '../dist-ssr/entry-server.js'));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
for (const r of routesList()) {
  const t = r.path ? `${r.title} — ${SITE.title}` : `${SITE.title} · ${SITE.titleEn}`;
  let html = tpl.replace(/<title>.*?<\/title>/, `<title>${esc(t)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(r.desc)}`)
    .replace('<!--og-->', `<link rel="canonical" href="${encodeURI(url(r.path))}"><meta property="og:title" content="${esc(t)}"><meta property="og:description" content="${esc(r.desc)}"><meta property="og:type" content="${r.path.startsWith('article') ? 'article' : 'website'}"><meta property="og:url" content="${encodeURI(url(r.path))}">${r.image ? `<meta property="og:image" content="${url(r.image)}">` : ''}<meta name="twitter:card" content="summary_large_image">`);
  setRoute(SITE.base + r.path); let body = '';
  try { body = await render(); } catch (e) { console.warn('prerender failed for /' + r.path, e.message); }
  body = body.replace(/<link rel="preload" as="image"(?![^>]*fetchPriority)[^>]*>/g, "");
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const dir = path.join(out, r.path); fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}
fs.writeFileSync(path.join(out, '404.html'), tpl.replace('<!--og-->', ''));
console.log('pages written:', routesList().length);
