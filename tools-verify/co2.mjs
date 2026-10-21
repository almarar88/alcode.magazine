import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); await pg.setViewport({ width: 1280, height: 900 });
await pg.goto('https://alcode.ae/', { waitUntil: 'networkidle2', timeout: 60000 });
const r = await pg.evaluate(async () => {
  await fetch('/cart/clear.js', { method: 'POST' });
  await fetch('/cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ id: 56093875306569, quantity: 1 }, { id: 56093875273801, quantity: 2 }] }) });
  const cart = await (await fetch('/cart.js')).json();
  const out = { total: cart.total_price / 100, taxes_included: cart.taxes_included, rates: {} };
  for (const prov of ['Abu Dhabi', 'Dubai', 'Sharjah']) {
    const q = new URLSearchParams({ 'shipping_address[country]': 'United Arab Emirates', 'shipping_address[province]': prov, 'shipping_address[zip]': '00000' });
    const t = await (await fetch('/cart/shipping_rates.json?' + q)).text(); out.rates[prov] = t.slice(0, 600);
  }
  return out;
});
console.log(JSON.stringify(r, null, 1));
await pg.goto('https://alcode.ae/checkout', { waitUntil: 'networkidle2', timeout: 60000 }); await new Promise(r => setTimeout(r, 5000));
const t = await pg.evaluate(() => document.body.innerText); console.log('---checkout---\n' + t.split('\n').filter(l => /شحن|ضري|Tax|VAT|Shipping|المجموع|Subtotal|Total|د\.إ|AED/i.test(l)).join('\n'));
await pg.screenshot({ path: '/workspace/store-shots2/shopify-checkout.png' });
await pg.evaluate(() => fetch('/cart/clear.js', { method: 'POST' })); await b.close();
