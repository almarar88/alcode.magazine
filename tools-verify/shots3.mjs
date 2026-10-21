import puppeteer from 'puppeteer-core';
const B = process.env.B || 'http://127.0.0.1:4173/', D = '/workspace/store-shots3';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const errs = [];
for (const [n, p, w, h, act] of [['author-1440', 'author/', 1440, 900], ['author-390', 'author/', 390, 844], ['author-hero-1440', 'author/', 1440, 900, 'top'], ['author-works-tab-1440', 'author/', 1440, 900, 'works'], ['author-awards-390', 'author/', 390, 844, 'awards'], ['home-teaser-1440', '', 1440, 900, 'teaser'], ['home-teaser-390', '', 390, 844, 'teaser']]) {
  const pg = await b.newPage(); pg.on('pageerror', e => errs.push(String(e))); await pg.setViewport({ width: w, height: h }); await pg.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await pg.goto(B + p, { waitUntil: 'networkidle0' }); await pg.$$eval('img', a => a.forEach(i => i.loading = 'eager'));
  if (act === 'works' || act === 'awards') { if (act === 'awards') await pg.$eval('#tab-awards', e => e.click()); await pg.$eval('#cv', e => window.scrollTo(0, e.getBoundingClientRect().top + scrollY - 100)); }
  if (act === 'teaser') await pg.$eval('#author-t', e => window.scrollTo(0, e.getBoundingClientRect().top + scrollY - 200));
  await new Promise(r => setTimeout(r, 2000));
  await pg.screenshot({ path: `${D}/${n}.png`, fullPage: !act }); await pg.close();
}
// functional checks
const pg = await b.newPage(); await pg.setViewport({ width: 1280, height: 900 }); await pg.goto(B + 'author/', { waitUntil: 'networkidle0' });
const t = await pg.evaluate(() => document.body.innerText);
console.log('no contact', !/0504454238|gmail/.test(t));
console.log('cards', await pg.$$eval('#books article', a => a.length));
await pg.$eval('button[aria-controls="tl-e2021"]', e => e.click()); console.log('timeline expands', await pg.$eval('#tl-e2021', e => !e.hidden && e.textContent.includes('IMT')));
await pg.$eval('#tab-members', e => e.click()); console.log('tab', await pg.$eval('#panel-members', e => !e.hidden && e.textContent.includes('متحف المقطع')));
await pg.$eval('#tab-works', e => e.click()); console.log('store links in works', await pg.$$eval('#panel-works a', a => a.length));
await pg.type('#wq', 'ديوان'); console.log('works search', await pg.$$eval('#panel-works li', a => a.length));
console.log('nav link', await pg.$$eval('header a[href$="/author/"]', a => a.length), 'footer', await pg.$$eval('footer a[href$="/author/"]', a => a.length));
console.log('errors', errs.length, errs.slice(0, 2)); await b.close();
