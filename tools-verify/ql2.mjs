import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [w,h] of [[1440,1000],[390,844]]) {
const pg = await b.newPage(); await pg.setViewport({ width: w, height: h });
await pg.goto('http://127.0.0.1:4173/books/', { waitUntil: 'networkidle0' });
await pg.$$eval('img', a => a.forEach(i => i.loading = 'eager'));
await pg.$eval('button[aria-label^="نظرة سريعة"]', e => e.click()); await new Promise(r => setTimeout(r, 2500));
const r = await pg.evaluate(() => { const ql = document.querySelector('.quicklook').closest('li'); const card = document.querySelector('ul[data-view] > li'); const a = card.getBoundingClientRect(), c = ql.getBoundingClientRect(); return { y: a.top + scrollY - 20, h: c.bottom - a.top + 40 }; });
await pg.screenshot({ path: `/workspace/store-shots2/quicklook-${w}.png`, clip: { x: 0, y: r.y, width: w, height: r.h }, captureBeyondViewport: true }); await pg.close(); }
await b.close();
