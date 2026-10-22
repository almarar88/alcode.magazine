import puppeteer from 'puppeteer-core';
const B = process.env.B || 'http://127.0.0.1:4173/', D = '/workspace/store-shots4';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const errs = []; const ok = (c, m) => console.log((c ? 'PASS ' : 'FAIL ') + m);
const page = async (w, h) => { const pg = await b.newPage(); pg.on('pageerror', e => errs.push(String(e))); pg.on('console', m => m.type() === 'error' && errs.push(m.text())); await pg.setViewport({ width: w, height: h }); return pg; };
const wait = t => new Promise(r => setTimeout(r, t));
for (const [w, h, tag] of [[1440, 900, 'desktop'], [390, 844, 'mobile']]) {
  const pg = await page(w, h);
  await pg.goto(B, { waitUntil: 'networkidle0' });
  // instant search
  await pg.click('header a[aria-controls="hsearch"]'); await pg.type('#hq', 'الظفرة'); await wait(400);
  const n = await pg.$$eval('#hres [role=option]', a => a.length); ok(n > 0, `${tag} instant search results ${n}`);
  await pg.screenshot({ path: `${D}/instant-search-${tag}.png` });
  await pg.keyboard.press('Enter'); await wait(800); ok(pg.url().includes('/book/'), `${tag} enter opens top result`);
  // book page: share + add with fly + recent
  await pg.$$eval('img', a => a.forEach(i => i.loading = 'eager')); await wait(800);
  ok(!!(await pg.$('button ::-p-text(نسخ الرابط)')), `${tag} share buttons`);
  await pg.$eval('main button.ink-btn', e => e.click()); await wait(250);
  ok((await pg.$$('.fly-img')).length === 1, `${tag} fly-to-cart animation`); await pg.screenshot({ path: `${D}/fly-to-cart-${tag}.png` }); await wait(900);
  await pg.$eval('header a[aria-controls="minicart"]', e => e.click()); await wait(400);
  const mc = await pg.$eval('#minicart', e => e.innerText); ok(/الشحن/.test(mc) && mc.includes('25') && !/ضريب|VAT/i.test(mc), `${tag} mini cart shows shipping 25, no tax`);
  const href = await pg.$eval('#minicart a.store-btn', a => a.href); ok(/^https:\/\/8sq2wc-ye\.myshopify\.com\/cart\/\d+:1$/.test(href), `${tag} mini cart checkout ${href}`);
  await pg.screenshot({ path: `${D}/mini-cart-${tag}.png` });
  await pg.$eval('#minicart button[aria-label^="إغلاق"]', e => e.click());
  // catalog price filter
  await pg.goto(B + 'books/', { waitUntil: 'networkidle0' }); const all = await pg.$$eval('main article', a => a.length);
  await pg.$eval('[aria-label="السعر"] button:nth-of-type(2)', e => e.click()); await wait(900); const f = await pg.$$eval('main article', a => a.length);
  ok(f > 0 && f < all && pg.url().includes('price='), `${tag} price filter ${all}→${f}`); await pg.screenshot({ path: `${D}/catalog-price-${tag}.png` });
  // home with recently viewed
  await pg.goto(B, { waitUntil: 'networkidle0' }); ok(!!(await pg.$('#recent')), `${tag} recently viewed on home`);
  await pg.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 100)); } scrollTo(0, 0); }); await pg.$$eval('img', a => a.forEach(i => i.loading = 'eager')); await wait(1500);
  await pg.screenshot({ path: `${D}/home-${tag}.png`, fullPage: true });
  await pg.goto(B + 'book/' + encodeURIComponent('رحلة-مايلز') + '/', { waitUntil: 'networkidle0' }); await pg.$$eval('img', a => a.forEach(i => i.loading = 'eager')); await wait(1200);
  await pg.screenshot({ path: `${D}/book-${tag}.png`, fullPage: true });
  await pg.close();
}
ok(errs.length === 0, 'no console errors ' + errs.slice(0, 3).join(' | ')); await b.close();
