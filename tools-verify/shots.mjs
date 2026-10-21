import puppeteer from 'puppeteer-core';
const B = process.env.B || 'http://127.0.0.1:4173/', D = '/workspace/store-shots';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [n, p] of [['home', ''], ['book', 'book/' + encodeURIComponent('رحلة-مايلز') + '/'], ['catalog', 'books/'], ['cart', 'cart/']]) for (const w of [390, 1440]) {
  const pg = await b.newPage(); await pg.setViewport({ width: w, height: 900 });
  if (n === 'cart') { await pg.goto(B + 'books/', { waitUntil: 'networkidle0' }); const bt = await pg.$$('main article button.ink-btn'); await bt[0].click(); await bt[3].click(); }
  await pg.goto(B + p, { waitUntil: 'networkidle0' }); await pg.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } scrollTo(0, 0); }); await pg.$$eval('img', a => a.forEach(i => i.loading = 'eager')); await new Promise(r => setTimeout(r, 2500));
  await pg.screenshot({ path: `${D}/${n}-${w}.png`, fullPage: n !== 'catalog' }); await pg.close();
}
await b.close();
