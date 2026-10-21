import puppeteer from 'puppeteer-core'; import fs from 'node:fs';
const axe = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
const pages = (process.env.PAGES ?? process.env.STOREPAGES ?? '').split('|');
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const theme of ['light', 'dark']) for (const p of pages) {
  const pg = await b.newPage(); await pg.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }, { name: 'prefers-reduced-motion', value: 'reduce' }]);
  await pg.setViewport({ width: 1280, height: 900 }); await pg.goto((process.env.BASE||'http://127.0.0.1:4173/') + p, { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 800));
  await pg.evaluate(axe);
  const r = await pg.evaluate(async () => (await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa'] })).violations.map(v => ({ id: v.id, n: v.nodes.length, ex: v.nodes.slice(0, 3).map(n => n.target.join(' ').slice(0, 80) + ' :: ' + (n.any[0]?.message || '').slice(0, 110)) })));
  console.log(theme, '/' + p, r.length ? JSON.stringify(r, null, 0) : 'clean');
  await pg.close();
}
await b.close();
