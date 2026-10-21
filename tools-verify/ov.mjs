import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); await pg.setViewport({ width: 390, height: 900 }); await pg.goto('http://127.0.0.1:4173/about/', { waitUntil: 'networkidle0' });
console.log(await pg.evaluate(() => { const W = document.documentElement.clientWidth; return [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && (r.right > W + .5 || r.left < -.5); }).slice(0, 8).map(e => e.tagName + '.' + String(e.className).slice(0, 60) + ' ' + JSON.stringify(e.getBoundingClientRect().toJSON())); }));
await b.close();
