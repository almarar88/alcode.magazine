import puppeteer from 'puppeteer-core'; import fs from 'node:fs';
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const pages = '|article/welcome-to-the-magazine/|article/01-pearl-banks-rosenthal/|article/08-muscat-1817-heude/|article/12-jebel-akhdar-1902-cox/|article/19-bushehr-port-1816-buckingham/|write/|category/history/|gallery/|dashboard/|credits/|search/|timeline/|saved/'.split('|');
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const theme of ['light', 'dark']) for (const p of pages) {
  const pg = await b.newPage(); await pg.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }, { name: 'prefers-reduced-motion', value: 'reduce' }]);
  await pg.setViewport({ width: 1280, height: 900 }); await pg.goto('http://127.0.0.1:4173/' + p, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 800));
  await pg.evaluate(axe);
  const r = await pg.evaluate(async () => (await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa'] })).violations.map(v => ({ id: v.id, n: v.nodes.length, ex: v.nodes.slice(0, 3).map(n => n.target.join(' ').slice(0, 80) + ' :: ' + (n.any[0]?.message || '').slice(0, 110)) })));
  console.log(theme, '/' + p, r.length ? JSON.stringify(r, null, 0) : 'clean');
  await pg.close();
}
await b.close();
