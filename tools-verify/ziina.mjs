// On-site checkout (Ziina test mode) checks + screenshots. Uses the REAL Supabase functions; only the admin
// dashboard view is rendered with an intercepted (mocked) owner session, because we never sign in as the owner.
import puppeteer from 'puppeteer-core'; import fs from 'node:fs';
const B = process.env.B || 'http://127.0.0.1:4173/', D = '/workspace/ziina-shots';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const errs = []; let fails = 0; const ok = (c, m) => { if (!c) fails++; console.log((c ? 'PASS ' : 'FAIL ') + m); }; const wait = t => new Promise(r => setTimeout(r, t));
const BOOK = 'جزر-الخليج-العربي-جغرافيتها-وتاريخها', VID = 56093875306569;
const created = [];
const ORDERS = JSON.parse(fs.readFileSync('/tmp/orders.json', 'utf8'));
for (const [w, h, tag] of [[1440, 900, 'desktop'], [390, 844, 'mobile']]) {
  const ctx = await b.createBrowserContext(); const pg = await ctx.newPage();
  pg.on('pageerror', e => errs.push(tag + ' ' + e)); pg.on('console', m => m.type() === 'error' && !/status of 50[02]|status of 404/.test(m.text()) && errs.push(tag + ' ' + m.text()));
  await pg.setViewport({ width: w, height: h, deviceScaleFactor: w < 1000 ? 2 : 1, isMobile: w < 1000, hasTouch: w < 1000 });
  await pg.goto(B, { waitUntil: 'networkidle0' });
  await pg.evaluate((h, id) => { localStorage.setItem('alcode-cart', JSON.stringify([{ id, handle: h, qty: 2 }])); localStorage.setItem('alcode-note', JSON.stringify('هدية إلى أبي')); }, BOOK, VID);
  // cart → on-site checkout
  await pg.goto(B + 'cart/', { waitUntil: 'networkidle0' }); await pg.waitForSelector('[data-testid="checkout"]'); await wait(800);
  const href = await pg.$eval('[data-testid="checkout"]', a => a.getAttribute('href')); ok(href === '/checkout/', `${tag} cart checkout goes on-site (${href})`);
  await pg.screenshot({ path: `${D}/cart-${tag}.png` });
  await Promise.all([pg.waitForNavigation({ waitUntil: 'networkidle0' }), pg.click('[data-testid="checkout"]')]);
  ok(new URL(pg.url()).pathname === '/checkout/', `${tag} on /checkout/`);
  await wait(400);
  ok(await pg.$('[data-testid="test-banner"]') !== null, `${tag} test-mode banner`);
  const tot = await pg.$eval('[data-testid="co-total"]', e => e.textContent); ok(/345/.test(tot), `${tag} summary total 2×160+25 = ${tot}`);
  ok((await pg.$eval('[data-testid="co-note"]', e => e.value)) === 'هدية إلى أبي', `${tag} gift note carried from cart`);
  await pg.screenshot({ path: `${D}/checkout-form-${tag}.png`, fullPage: true });
  // validation
  await pg.click('[data-testid="pay"]'); await wait(300);
  const nerr = await pg.$$eval('.field-err', a => a.length); ok(nerr === 6, `${tag} empty submit → ${nerr} field errors`);
  ok(await pg.evaluate(() => document.activeElement?.id) === 'f-name', `${tag} focus moved to first invalid field`);
  await pg.screenshot({ path: `${D}/checkout-validation-${tag}.png`, fullPage: true });
  // fill + submit to the real backend
  await pg.type('#f-name', 'اختبار آلي'); await pg.type('#f-phone', '0501234567'); await pg.type('#f-email', 'test@example.com');
  await pg.select('#f-emirate', 'دبي'); await pg.type('#f-city', 'دبي'); await pg.type('#f-address', 'شارع تجريبي، مبنى 1، شقة 2');
  ok((await pg.$eval('#f-name', e => e.value)) === 'اختبار آلي', `${tag} typing keeps focus/value`);
  const resP = pg.waitForResponse(r => r.url().includes('/functions/v1/create-checkout') && r.request().method() === 'POST', { timeout: 30000 });
  await pg.click('[data-testid="pay"]'); const res = await resP; const body = await res.json().catch(() => ({}));
  if (body.order_id) created.push(body.order_id);
  ok(body.total_fils === 34500 && body.subtotal_fils === 32000 && body.shipping_fils === 2500, `${tag} server total ${body.total_fils} fils (DB prices + 25 shipping)`);
  if (body.payment?.redirect_url) {
    await pg.waitForNavigation({ timeout: 30000 }).catch(() => {}); ok(/ziina\.com/.test(pg.url()), `${tag} redirected to Ziina hosted page`); await wait(2500);
    await pg.screenshot({ path: `${D}/ziina-hosted-${tag}.png` }); fs.writeFileSync(`/tmp/ziina-${tag}.json`, JSON.stringify({ o: body.order_id, t: body.token, url: pg.url() }));
  } else {
    await pg.waitForSelector('[data-testid="checkout-error"]', { timeout: 10000 }).catch(() => {});
    const t = await pg.$eval('[data-testid="checkout-error"]', e => e.textContent).catch(() => '');
    ok(body.code === 'RECIPIENT_NOT_ACTIVE_WALLET' && t.includes(body.label), `${tag} Ziina refused (${body.code}); order ${body.label} saved, user sees: ${t.slice(0, 60)}…`);
    await pg.screenshot({ path: `${D}/checkout-provider-error-${tag}.png`, fullPage: true });
  }
  // order status page for that order (real order-status function)
  await pg.goto(`${B}checkout/success/?o=${body.order_id}&t=${body.token}`, { waitUntil: 'networkidle0' }); await pg.waitForSelector('[data-testid="order-no"]', { timeout: 15000 });
  ok((await pg.$eval('[data-testid="order-no"]', e => e.textContent)) === body.label, `${tag} status page shows ${body.label}`);
  await pg.screenshot({ path: `${D}/order-status-${tag}.png`, fullPage: true });
  await pg.goto(`${B}checkout/success/?o=${body.order_id}&t=00000000-0000-0000-0000-000000000000`, { waitUntil: 'domcontentloaded' }); await pg.waitForFunction(() => /لم نعثر/.test(document.body.innerText), { timeout: 20000 }).catch(() => {});
  ok(/لم نعثر على هذا الطلب/.test(await pg.evaluate(() => document.body.innerText)), `${tag} wrong access token → not found`);
  // buy-now from book page → on-site checkout with only that book
  await pg.goto(B + 'book/' + encodeURIComponent(BOOK) + '/', { waitUntil: 'networkidle0' });
  const bn = await pg.$eval('[data-testid="buy-now"]', a => a.getAttribute('href')); ok(bn.startsWith('/checkout/?buy=' + VID + ':'), `${tag} buy-now → ${bn}`);
  await pg.goto(B.replace(/\/$/, '') + bn, { waitUntil: 'networkidle0' }); await wait(400);
  ok(/شراء مباشر/.test(await pg.$eval('[data-testid="co-summary"]', e => e.textContent)), `${tag} buy-now summary`);
  // cancelled return notice
  await pg.goto(B + 'checkout/?cancelled=1', { waitUntil: 'networkidle0' }); await wait(300); ok(await pg.$('[data-testid="back-notice"]') !== null, `${tag} cancel-return notice`);
  await pg.screenshot({ path: `${D}/checkout-cancelled-${tag}.png` });
  // admin: real login screen
  await pg.goto(B + 'admin/', { waitUntil: 'networkidle0' }); await pg.waitForSelector('[data-testid="admin-login"]', { timeout: 15000 });
  ok(true, `${tag} admin shows login when signed out`); ok(/noindex/.test(await (await fetch(B + 'admin/')).text()) && /noindex/.test(await (await fetch(B + 'checkout/')).text()), `${tag} admin + checkout HTML noindex`);
  await pg.screenshot({ path: `${D}/admin-login-${tag}.png` });
  await ctx.close();
  // admin dashboard with mocked owner session (interception)
  const c2 = await b.createBrowserContext(); const p2 = await c2.newPage(); await p2.setViewport({ width: w, height: h, deviceScaleFactor: w < 1000 ? 2 : 1, isMobile: w < 1000, hasTouch: w < 1000 });
  p2.on('pageerror', e => errs.push(tag + ' admin ' + e)); if (process.env.DBG) { p2.on('console', m => console.log('c', m.text().slice(0, 200))); p2.on('requestfinished', r => console.log('req', r.method(), r.url().slice(0, 100))); p2.on('requestfailed', r => console.log('FAILREQ', r.url().slice(0, 100), r.failure()?.errorText)); }
  await p2.setBypassServiceWorker(true); await p2.setRequestInterception(true); let statusCall = null;
  const J = (r, d) => r.respond({ status: 200, contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify(d) });
  p2.on('request', r => { const u = r.url();
    if (r.method() === 'OPTIONS' && u.includes('supabase.co')) return r.respond({ status: 204, headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Methods': '*' } });
    if (u.includes('/rest/v1/rpc/is_store_owner')) return J(r, true);
    if (u.includes('/rest/v1/rpc/set_order_status')) { statusCall = JSON.parse(r.postData()); const o = ORDERS.find(x => x.id === statusCall.p_order); return J(r, { ...o, status: statusCall.p_status }); }
    if (u.includes('/rest/v1/orders')) return J(r, ORDERS.map(({ items, ...o }) => o));
    if (u.includes('/rest/v1/order_items')) { const id = decodeURIComponent(u).match(/order_id=eq\.([\w-]+)/)?.[1]; return J(r, ORDERS.find(o => o.id === id)?.items || []); }
    if (u.includes('/auth/v1/user')) return J(r, { id: '00000000-0000-4000-8000-000000000001', aud: 'authenticated', role: 'authenticated', email: 'owner@example.invalid', app_metadata: {}, user_metadata: {} });
    if (u.includes('/auth/v1/')) return J(r, {});
    r.continue(); });
  await p2.goto(B, { waitUntil: 'networkidle0' });
  await p2.evaluate(() => { const b64 = o => btoa(JSON.stringify(o)).replace(/=+$/, ''); const exp = Math.floor(Date.now() / 1000) + 3600;
    const at = b64({ alg: 'HS256', typ: 'JWT' }) + '.' + b64({ sub: '00000000-0000-4000-8000-000000000001', exp, role: 'authenticated' }) + '.mock';
    localStorage.setItem('alcode-store-auth', JSON.stringify({ access_token: at, refresh_token: 'mock', token_type: 'bearer', expires_in: 3600, expires_at: exp, user: { id: '00000000-0000-4000-8000-000000000001', aud: 'authenticated', role: 'authenticated', email: 'owner@example.invalid', app_metadata: {}, user_metadata: {}, created_at: new Date().toISOString() } })); });
  await p2.goto(B + 'admin/', { waitUntil: 'networkidle0' }); await p2.waitForSelector('[data-testid="admin-orders"]', { timeout: 15000 }).catch(() => {});
  if (process.env.DBG) { console.log(await p2.evaluate(() => document.querySelector('#main')?.innerText.slice(0, 300))); }
  const n = await p2.$$eval('[data-testid="admin-order"]', a => a.length); ok(n === ORDERS.length, `${tag} admin lists ${n} orders (mocked owner session)`);
  const firstBtn = await p2.$('[data-testid="admin-order"] button[aria-expanded]'); await firstBtn.click(); await wait(600);
  await p2.select('[data-testid="admin-order"] [data-testid="admin-status"]', 'shipped'); await wait(600);
  ok(statusCall?.p_status === 'shipped', `${tag} admin status change calls set_order_status RPC`);
  ok(/تم الشحن/.test(await p2.$eval('[data-testid="admin-order"] .status-pill', e => e.textContent)), `${tag} admin pill updated`);
  await p2.screenshot({ path: `${D}/admin-orders-${tag}.png`, fullPage: true });
  if (tag === 'mobile') { await p2.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark')); await wait(300); await p2.screenshot({ path: `${D}/admin-orders-dark-mobile.png`, fullPage: true }); }
  await c2.close();
}
fs.writeFileSync('/tmp/ziina-created.json', JSON.stringify(created));
ok(errs.length === 0, 'no console errors ' + errs.join(' | ').slice(0, 400));
console.log(fails ? `FAILED ${fails}` : 'ALL PASS');
await b.close();
