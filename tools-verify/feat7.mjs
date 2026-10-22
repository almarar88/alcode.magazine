import puppeteer from 'puppeteer-core';
const B = process.env.B || 'http://127.0.0.1:4173/', D = '/workspace/store-shots7';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const errs = []; const ok = (c, m) => console.log((c ? 'PASS ' : 'FAIL ') + m); const wait = t => new Promise(r => setTimeout(r, t));
const BK = 'book/' + encodeURIComponent('قصر-الحصن-النشأة-والتاريخ-1761-1985م') + '/';
const top = async (pg, sel) => { await pg.$eval(sel, e => e.scrollIntoView({ block: 'start' })); await pg.evaluate(() => scrollBy(0, -90)); await wait(800); };
const vis = pg => pg.evaluate(() => document.body.innerText);
for (const [w, h, tag] of [[1440, 900, 'desktop'], [390, 844, 'mobile'], [673, 841, 'fold']]) {
  const ctx = await b.createBrowserContext(); const pg = await ctx.newPage(); pg.on('pageerror', e => errs.push(tag + ' ' + e)); pg.on('console', m => m.type() === 'error' && errs.push(tag + ' ' + m.text()));
  await pg.setViewport({ width: w, height: h, deviceScaleFactor: w < 1000 ? 2 : 1, isMobile: w < 1000, hasTouch: w < 1000 });
  await pg.goto(B, { waitUntil: 'networkidle0' });
  const fe = await pg.$eval('[data-testid="footer-email"]', a => a.href); ok(fe === 'mailto:info@alcode.ae', `${tag} footer mailto ${fe}`);
  const ld = await pg.$$eval('script[type="application/ld+json"]', s => s.map(x => JSON.parse(x.textContent))); ok(ld.some(x => x['@type'] === 'Organization' && x.contactPoint?.[0]?.email === 'info@alcode.ae'), `${tag} home JSON-LD Organization contactPoint`);
  ok(!/[٠-٩]/.test(await vis(pg)), `${tag} home: one digit style (Latin digits) in visible text`);
  await top(pg, 'footer'); await pg.screenshot({ path: `${D}/footer-${tag}.png` });
  await pg.goto(B + 'contact/', { waitUntil: 'networkidle0' }); ok(await pg.$eval('[data-testid="contact-email"] a[href="mailto:info@alcode.ae"]', a => !!a), `${tag} contact page email`); await pg.screenshot({ path: `${D}/contact-${tag}.png` });
  await pg.goto(B + 'help/', { waitUntil: 'networkidle0' }); const fq = await pg.$$('[data-testid="faq"] details'); ok(fq.length === 7, `${tag} help FAQ ${fq.length} items`);
  const hl = await pg.$$eval('script[type="application/ld+json"]', s => s.map(x => JSON.parse(x.textContent)['@type'])); ok(hl.includes('FAQPage'), `${tag} help FAQPage JSON-LD`);
  const ht = await vis(pg); ok(/25 د\.إ\./.test(ht) && /لا تُضاف أي ضريبة/.test(ht), `${tag} help states 25 AED + no tax`);
  await pg.screenshot({ path: `${D}/help-${tag}.png`, fullPage: tag === 'mobile' });
  // catalog multi-select
  await pg.goto(B + 'books/', { waitUntil: 'networkidle0' }); const chips = await pg.$$('[data-testid="cat-multi"]'); await chips[1].click(); await wait(1200); const n1 = await pg.$$eval('#main [data-reveal]', a => a.length); await chips[3].click(); await wait(1200);
  const n2 = await pg.$$eval('#main [data-reveal]', a => a.length); const u = await pg.evaluate(() => decodeURIComponent(location.search)); ok(n2 > n1 && /c=.+,.+/.test(u), `${tag} multi-select categories ${n1} → ${n2} books (${u})`);
  await pg.screenshot({ path: `${D}/books-multi-${tag}.png` });
  await pg.reload({ waitUntil: 'networkidle0' }); await wait(500); ok((await pg.$$eval('[data-testid="cat-multi"][aria-pressed="true"]', a => a.length)) === 2, `${tag} multi-select restored from URL`);
  // inside expand in place
  await pg.goto(B + BK, { waitUntil: 'networkidle0' }); await top(pg, '[data-testid="inside-book"]'); const btn = await pg.$('[data-testid="inside-book"] button'); await btn.click(); await wait(900);
  const ex = await pg.$eval('[data-testid="inside-book"] button', e => ({ x: e.getAttribute('aria-expanded'), src: e.querySelector('img').currentSrc, w: e.getBoundingClientRect().width }));
  ok(ex.x === 'true' && !/-sm\.webp/.test(ex.src) && !(await pg.$('[role="dialog"]')), `${tag} inside image expands in place (w=${Math.round(ex.w)}, no dialog)`);
  await pg.screenshot({ path: `${D}/inside-expanded-${tag}.png` }); await btn.click(); await wait(400); ok(await pg.$eval('[data-testid="inside-book"] button', e => e.getAttribute('aria-expanded') === 'false'), `${tag} inside image collapses`);
  // cart: note → permalink, help, continue
  await pg.$eval('[data-testid="add-qty"]', e => e.click()); await wait(800);
  await pg.goto(B + 'cart/', { waitUntil: 'networkidle0' }); await pg.type('[data-testid="note"]', 'هدية إلى أحمد'); await wait(300);
  const co = await pg.$eval('[data-testid="checkout"]', a => a.href); ok(/^https:\/\/8sq2wc-ye\.myshopify\.com\/cart\/\d+:1\?note=/.test(co) && decodeURIComponent(co).endsWith('note=هدية إلى أحمد'), `${tag} checkout carries note: ${decodeURIComponent(co)}`);
  ok(await pg.$eval('[data-testid="cart-help"] a[href^="mailto:info@alcode.ae"]', a => !!a), `${tag} cart help email`);
  const cont = await pg.$eval('[data-testid="continue"]', a => a.getAttribute('href')); ok(cont.includes('/book/'), `${tag} continue shopping → last viewed book`);
  await pg.reload({ waitUntil: 'networkidle0' }); ok((await pg.$eval('[data-testid="note"]', e => e.value)) === 'هدية إلى أحمد' && (await pg.$$('[data-testid="checkout"]')).length === 1, `${tag} cart + note persist after reload`);
  ok(!/ضريبة/.test((await vis(pg)).replace(/بلا ضرائب إضافية/g, '')), `${tag} cart: no tax line`);
  await top(pg, 'aside'); await pg.screenshot({ path: `${D}/cart-${tag}.png`, fullPage: tag === 'mobile' });
  // 404
  const ne = errs.length; const r = await pg.goto(B + 'no-such-page-xyz/', { waitUntil: 'networkidle0' }); ok(r.status() === 404 && !!(await pg.$('[data-testid="nf-search"]')), `${tag} 404 status + search form`);
  await pg.screenshot({ path: `${D}/404-${tag}.png` });
  await pg.type('#nfq', 'الظفرة'); await pg.keyboard.press('Enter'); await wait(900); errs.splice(ne); ok(/books\/\?q=/.test(pg.url()) && (await pg.$$eval('#main [data-reveal]', a => a.length)) > 0, `${tag} 404 search → results`);
  await ctx.close();
}
const sm = await (await fetch(B + 'sitemap.xml')).text(); ok(sm.includes('/help/') && sm.includes('<lastmod>') && (sm.match(/<url>/g) || []).length === 38, 'sitemap has help/ + lastmod, 38 urls');
ok(!errs.length, 'no console errors ' + errs.slice(0, 3).join(' | ')); await b.close();
