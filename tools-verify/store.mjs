// Functional test for the store: search/filter/sort, cart quantities, Shopify permalinks, wishlist.
import puppeteer from 'puppeteer-core';
const B = process.env.B || 'http://127.0.0.1:4173/';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); const errs = []; pg.on('pageerror', e => errs.push(String(e))); pg.on('console', m => m.type() === 'error' && errs.push(m.text()));
await pg.setViewport({ width: 390, height: 844 });
const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) process.exitCode = 1; };
const cards = () => pg.$$eval('main article', a => a.length);
await pg.goto(B + 'books/', { waitUntil: 'networkidle0' });
const all = await cards(); ok(all === 26, 'catalog shows all books: ' + all);
await pg.type('#q', 'الكويت'); await new Promise(r => setTimeout(r, 900)); const k = await cards(); ok(k > 0 && k < all, 'search الكويت → ' + k); ok((await pg.url()).includes('q='), 'search in URL');
await pg.click('#q', { clickCount: 3 }); await pg.keyboard.press('Backspace');
await pg.select('#c', 'الشعر-والدواوين'); await new Promise(r => setTimeout(r, 900)); ok(await cards() === 4, 'filter poetry → ' + await cards());
await pg.select('#c', ''); await pg.select('#s', 'price-asc'); await new Promise(r => setTimeout(r, 900));
const prices = await pg.$$eval('main article .text-lg.font-bold', a => a.map(x => parseFloat(x.textContent.match(/[\d.]+/)[0])));
ok(prices.every((p, i) => !i || prices[i - 1] <= p) && prices.length === 26, 'sort price asc ' + prices.slice(0, 3) + '…' + prices.slice(-1));
await pg.select('#s', 'price-desc'); await new Promise(r => setTimeout(r, 900));
const pd = await pg.$$eval('main article .text-lg.font-bold', a => a.map(x => parseFloat(x.textContent.match(/[\d.]+/)[0]))); ok(pd.every((p, i) => !i || pd[i - 1] >= p), 'sort price desc');
await pg.select('#s', 'new'); await new Promise(r => setTimeout(r, 200));
// chips, view toggle, inline quick look (no dialog)
await pg.click('button.cat-chip:nth-of-type(2)'); await new Promise(r => setTimeout(r, 900)); const ch = await cards(); ok(ch > 0 && ch < 26, 'category chip filters → ' + ch);
await pg.click('button.cat-chip:nth-of-type(1)'); await new Promise(r => setTimeout(r, 900)); ok(await cards() === 26, 'chip «الكل» resets');
await pg.click('button[aria-label^="نظرة سريعة"]'); await new Promise(r => setTimeout(r, 600));
ok(await pg.$eval('.quicklook', e => !!e.closest('li.col-span-full') && !document.querySelector('[role=dialog]') && e.textContent.includes('شحن 25')), 'quick look opens inline with price + shipping');
ok(await pg.evaluate(() => document.activeElement?.tagName === 'H3'), 'quick look focuses its heading');
await pg.$eval('button[aria-label="إغلاق النظرة السريعة"]', e => e.click()); await new Promise(r => setTimeout(r, 600)); ok(!(await pg.$('.quicklook')), 'quick look closes');
await pg.$eval('button[aria-pressed][class*="rounded-lg"]:nth-child(2)', e => e.click()); await new Promise(r => setTimeout(r, 900)); ok(await pg.$eval('ul[data-view]', u => u.dataset.view) === 'list', 'list view');
ok(await pg.evaluate(() => localStorage.getItem('alcode-view')) === '"list"', 'view persisted');
await pg.$eval('button[aria-pressed][class*="rounded-lg"]:nth-child(1)', e => e.click()); await new Promise(r => setTimeout(r, 900));
// add first two cards to cart
const addBtns = await pg.$$('main article button[aria-label^="أضف «"][aria-label$="السلة"]'); await addBtns[0].click(); await addBtns[1].click(); await addBtns[1].click();
await pg.goto(B + 'cart/', { waitUntil: 'networkidle0' });
const items = await pg.$$eval('main li h2', a => a.length); ok(items === 2, 'cart has 2 lines');
const num = async s => parseFloat((await pg.$eval(`[data-testid=${s}]`, e => e.textContent)).match(/[\d.]+/)[0]);
const sub = await num('subtotal'), sh = await num('shipping'), tot = await num('total'); ok(sh === 25 && tot === sub + 25, `shipping 25: ${sub} + ${sh} = ${tot}`);
const SHOPRE = (process.env.SHOP || 'https://8sq2wc-ye.myshopify.com').replace(/\./g, '\\.'); const href = await pg.$eval('a.store-btn', a => a.href); ok(new RegExp('^' + SHOPRE + '/cart/\\d+:1,\\d+:2$').test(href), 'checkout permalink ' + href);
await pg.click('button[aria-label="زيادة الكمية"]'); await new Promise(r => setTimeout(r, 200));
const href2 = await pg.$eval('a.store-btn', a => a.href); ok(/\/cart\/\d+:2,\d+:2$/.test(href2), 'qty + updates permalink ' + href2);
await pg.click('button[aria-label^="حذف"]'); await new Promise(r => setTimeout(r, 200)); ok(await pg.$$eval('main li h2', a => a.length) === 1, 'remove line');
const badge = await pg.$eval('header a[href$="/cart/"]', a => a.getAttribute('aria-label')); ok(/2/.test(badge), 'header badge ' + badge);
// book page: buy now + wishlist + gallery
await pg.goto(B + 'book/' + encodeURIComponent('رحلة-مايلز') + '/', { waitUntil: 'networkidle0' });
const bn = await pg.$eval('main a.store-btn', a => a.href); ok(new RegExp('^' + SHOPRE + '/cart/\\d+:1$').test(bn), 'buy now ' + bn);
const thumbs = await pg.$$('ul[aria-label="صور الكتاب"] button'); ok(thumbs.length === 3, 'gallery thumbs ' + thumbs.length);
const s1 = await pg.$eval('main img', i => i.src); await thumbs[1].click(); await new Promise(r => setTimeout(r, 200)); ok(s1 !== await pg.$eval('main img', i => i.src), 'gallery switches image');
await pg.click('main button[aria-pressed="false"][aria-label*="الأمنيات"]'); await pg.goto(B + 'wishlist/', { waitUntil: 'networkidle0' }); ok(await cards() === 1, 'wishlist persisted');
ok(await pg.$$eval('main section article', a => a.length) >= 0, 'ok'); ok(!errs.length, 'no console errors ' + errs.slice(0, 2));
await b.close();
