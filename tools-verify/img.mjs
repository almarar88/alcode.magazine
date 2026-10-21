import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); await pg.setViewport({ width: 1440, height: 900 }); const f=[]; pg.on('requestfailed', r => f.push(r.url())); pg.on('response', r => r.status() >= 400 && f.push(r.status()+' '+r.url()));
await pg.goto(process.env.B || 'http://127.0.0.1:4173/', { waitUntil: 'networkidle0' });
for (let y = 0; y < 6000; y += 400) { await pg.evaluate(y => scrollTo(0, y), y); await new Promise(r => setTimeout(r, 300)); }
await new Promise(r => setTimeout(r, 1500));
console.log(await pg.$$eval('main img', a => a.filter(i => !i.complete || !i.naturalWidth).map(i => i.getAttribute('src') + ' ' + i.complete + ' ' + i.naturalWidth)), f);
await b.close();
