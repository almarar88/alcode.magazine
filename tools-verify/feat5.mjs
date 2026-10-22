import puppeteer from 'puppeteer-core';
const B = process.env.B || 'http://127.0.0.1:4173/', D = '/workspace/store-shots5';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const errs = []; const ok = (c, m) => console.log((c ? 'PASS ' : 'FAIL ') + m); const wait = t => new Promise(r => setTimeout(r, t));
const BK = 'book/' + encodeURIComponent('قصر-الحصن-النشأة-والتاريخ-1761-1985م') + '/';
for (const [w, h, tag] of [[1440, 900, 'desktop'], [390, 844, 'mobile']]) {
  const ctx = await b.createBrowserContext(); const pg = await ctx.newPage(); pg.on('pageerror', e => errs.push(String(e))); pg.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await pg.setViewport({ width: w, height: h });
  await pg.goto(B + 'cart/', { waitUntil: 'networkidle0' }); ok(!!(await pg.$('svg.empty-art')), `${tag} empty cart art`); await pg.screenshot({ path: `${D}/empty-cart-${tag}.png` });
  await pg.goto(B + BK, { waitUntil: 'networkidle0' }); await pg.$$eval('img', a => a.forEach(i => i.loading = 'eager')); await wait(800);
  const ld = await pg.$eval('script[type="application/ld+json"]', s => JSON.parse(s.textContent)); ok(ld.offers?.priceCurrency === 'AED' && ld.author?.name, `${tag} JSON-LD Book/Product price ${ld.offers?.price}`);
  await pg.keyboard.press('/'); await wait(300); ok(await pg.evaluate(() => document.activeElement?.id === 'hq'), `${tag} "/" opens search`); await pg.keyboard.press('Escape');
  await pg.$eval('[aria-label="زيادة الكمية"]', e => e.click()); await pg.$eval('[aria-label="زيادة الكمية"]', e => e.click()); await wait(200);
  const bn = await pg.$eval('[data-testid="buy-now"]', a => a.href); ok(/myshopify\.com\/cart\/\d+:3$/.test(bn), `${tag} qty 3 buy-now ${bn}`);
  await pg.$eval('[data-testid="add-qty"]', e => e.click()); await wait(900); ok(await pg.evaluate(() => JSON.parse(localStorage.getItem('alcode-cart'))[0].qty === 3), `${tag} add qty 3 to cart`);
  const bb = await pg.$eval('[data-testid="bundle-buy"]', a => a.href); const st = await pg.$eval('[data-testid="bundle-sub"]', e => e.textContent), tt = await pg.$eval('[data-testid="bundle-total"]', e => e.textContent);
  ok(/cart\/\d+:1,\d+:1,\d+:1$/.test(bb) && parseFloat(tt.match(/[\d.]+/)[0]) === parseFloat(st.match(/[\d.]+/)[0]) + 25, `${tag} bundle ${st} + 25 = ${tt}`);
  await pg.screenshot({ path: `${D}/book-top-${tag}.png` });
  await pg.evaluate(() => { const r = document.querySelector('[data-testid="buy-now"]').getBoundingClientRect(); scrollTo(0, r.bottom + scrollY + 600); }); await wait(800);
  ok(await pg.$eval('.to-top', e => e.classList.contains('on')), `${tag} back-to-top visible`);
  if (tag === 'mobile') ok(await pg.$eval('.buy-bar', e => e.classList.contains('on')), 'mobile sticky buy bar');
  await pg.screenshot({ path: `${D}/book-scrolled-${tag}.png` });
  await pg.$eval('#bundle', e => e.scrollIntoView({ block: 'center' })); await wait(500); await pg.screenshot({ path: `${D}/bundle-${tag}.png` });
  if (tag === 'desktop') { await pg.evaluate(() => scrollTo(0, 0)); await pg.$eval('.book3d-wrap', e => e.click()); await wait(900); await pg.$eval('.book3d-wrap', e => e.scrollIntoView({ block: 'center' })); await wait(300); await pg.screenshot({ path: `${D}/book-3d-spine-desktop.png` });
    await pg.emulateMediaType('print'); await pg.screenshot({ path: `${D}/book-print-desktop.png`, fullPage: true }); await pg.emulateMediaType(null); }
  await pg.goto(B, { waitUntil: 'networkidle0' }); await pg.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 100)); } scrollTo(0, 0); }); await pg.$$eval('img', a => a.forEach(i => i.loading = 'eager')); await wait(1200);
  await pg.screenshot({ path: `${D}/home-${tag}.png`, fullPage: true });
  await ctx.close();
}
ok(errs.length === 0, 'no console errors ' + errs.slice(0, 3).join(' | ')); await b.close();
