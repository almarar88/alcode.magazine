import puppeteer from 'puppeteer-core';
const B = process.env.B || 'http://127.0.0.1:4173/', D = '/workspace/store-shots6';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const errs = []; const ok = (c, m) => console.log((c ? 'PASS ' : 'FAIL ') + m); const wait = t => new Promise(r => setTimeout(r, t));
const BK = 'book/' + encodeURIComponent('قصر-الحصن-النشأة-والتاريخ-1761-1985م') + '/';
const shotEl = async (pg, sel, path) => { await pg.$eval(sel, e => e.scrollIntoView({ block: 'start' })); await pg.evaluate(() => scrollBy(0, -90)); await wait(900); await pg.screenshot({ path }); };
for (const [w, h, tag] of [[1440, 900, 'desktop'], [390, 844, 'mobile'], [820, 1180, 'ipad'], [1180, 820, 'ipad-landscape'], [673, 841, 'fold-open'], [344, 882, 'fold-closed']]) {
  const ctx = await b.createBrowserContext(); const pg = await ctx.newPage(); pg.on('pageerror', e => errs.push(tag + ' ' + e)); pg.on('console', m => m.type() === 'error' && errs.push(tag + ' ' + m.text()));
  await pg.setViewport({ width: w, height: h, deviceScaleFactor: tag === 'desktop' ? 1 : 2, isMobile: w < 1000, hasTouch: w < 1000 });
  await pg.goto(B, { waitUntil: 'networkidle0' }); await wait(600);
  const sw = await pg.evaluate(() => document.documentElement.scrollWidth - innerWidth); ok(sw <= 0, `${tag} home no horizontal overflow`);
  await pg.screenshot({ path: `${D}/home-${tag}.png` });
  if (['desktop', 'mobile', 'fold-open'].includes(tag)) {
    ok((await pg.$$('[data-testid="shelves"] .shelf')).length === 5, `${tag} 5 shelves (new + 4 collections)`);
    ok((await pg.$$('[data-testid="trust"] li')).length === 4, `${tag} trust strip 4 items`);
    await shotEl(pg, '[data-testid="trust"]', `${D}/home-trust-${tag}.png`); await shotEl(pg, '[data-testid="shelves"] .shelf:nth-child(2)', `${D}/home-shelves-${tag}.png`);
  }
  await pg.goto(B + BK, { waitUntil: 'networkidle0' }); await wait(600);
  const sw2 = await pg.evaluate(() => document.documentElement.scrollWidth - innerWidth); ok(sw2 <= 0, `${tag} book no horizontal overflow`);
  await pg.screenshot({ path: `${D}/book-top-${tag}.png` });
  if (['desktop', 'mobile', 'fold-open', 'ipad'].includes(tag)) {
    const sp = await pg.$$eval('[data-testid="specs"] dt', a => a.map(x => x.textContent)); ok(sp.includes('المؤلف') && sp.includes('الطبعة') && sp.includes('أُضيف إلى المتجر'), `${tag} specs: ${sp.join(' | ')}`);
    ok(await pg.$eval('[data-testid="specs"] a[href$="/author/"]', a => !!a), `${tag} specs author links /author/`);
    ok(await pg.$eval('[data-testid="author-block"] a[href$="/author/"]', a => !!a), `${tag} author block links /author/`);
    const ins = await pg.$$('[data-testid="inside-book"] li'); ok(ins.length > 0, `${tag} inside-book ${ins.length} images`);
    const sc = await pg.$$('[data-testid="same-collection"] li'); ok(sc.length > 0, `${tag} same-collection ${sc.length} books`);
    const bn = await pg.$eval('[data-testid="buy-now"]', a => a.href); ok(/^https:\/\/8sq2wc-ye\.myshopify\.com\/cart\/\d+:1$/.test(bn), `${tag} buy-now ${bn}`);
    await shotEl(pg, '[data-testid="specs"]', `${D}/book-specs-${tag}.png`); await shotEl(pg, '[data-testid="inside-book"]', `${D}/book-inside-${tag}.png`);
    await shotEl(pg, '[data-testid="author-block"]', `${D}/book-author-${tag}.png`); await shotEl(pg, '[data-testid="same-collection"]', `${D}/book-collection-${tag}.png`);
  }
  if (['desktop', 'mobile'].includes(tag)) {
    await pg.$eval('[data-testid="add-qty"]', e => e.click()); await wait(800); await pg.goto(B + 'cart/', { waitUntil: 'networkidle0' }); await wait(500);
    ok(/25/.test(await pg.$eval('[data-testid="shipping"]', e => e.textContent)) && (await pg.$$('[data-testid="trust"] li')).length === 4, `${tag} cart shipping 25 + trust`);
    ok(!/ضريبة|VAT/.test((await pg.$eval('main', e => e.innerText)).replace('بلا ضرائب إضافية', '').replace('بلا ضرائب', '')), `${tag} cart: no tax line`);
    await pg.screenshot({ path: `${D}/cart-${tag}.png`, fullPage: tag === 'mobile' });
  }
  await ctx.close();
}
ok(!errs.length, 'no console errors ' + errs.slice(0, 3).join(' | ')); await b.close();
