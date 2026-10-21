import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); await pg.setViewport({ width: 1280, height: 900 });
await pg.goto('https://8sq2wc-ye.myshopify.com/cart/56093875306569:1,56093875273801:2', { waitUntil: 'networkidle2', timeout: 60000 }); await new Promise(r => setTimeout(r, 4000));
console.log(pg.url().replace(/\?.*/, '').replace(/\/c\/.*/, '/c/…'));
const t = await pg.evaluate(() => document.body.innerText);
console.log(t.split('\n').filter(l => /AED|Subtotal|Total|جزر|منطقة|×|Quantity/.test(l)).slice(0, 12).join(' | '));
await pg.screenshot({ path: '/workspace/store-shots3/myshopify-checkout.png' }); await b.close();
