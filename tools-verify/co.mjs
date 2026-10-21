import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); await pg.setViewport({ width: 1280, height: 900 });
await pg.goto('https://alcode.ae/cart/56093875306569:1,56093875273801:2', { waitUntil: 'networkidle2', timeout: 60000 }); await new Promise(r => setTimeout(r, 4000));
console.log(pg.url().replace(/\?.*/, '')); const t = await pg.evaluate(() => document.body.innerText);
console.log(['جزر الخليج', 'منطقة الظفرة', '160', '100', '360', 'Order summary', 'ملخص'].map(s => s + ':' + t.includes(s)).join(' '));
await pg.screenshot({ path: '/workspace/store-shots/shopify-checkout.png' }); await b.close();
