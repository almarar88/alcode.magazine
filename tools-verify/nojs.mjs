import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); await pg.setJavaScriptEnabled(false); await pg.setViewport({ width: 390, height: 844 });
await pg.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle0' }); await pg.screenshot({ path: '/workspace/alcode_mag/tmpcrop/nojs.png' });
const pg2 = await b.newPage(); await pg2.setViewport({ width: 390, height: 844 });
await pg2.goto('http://127.0.0.1:4173/', { waitUntil: 'load' });
console.log(await pg2.evaluate(() => JSON.stringify(performance.getEntriesByType('paint').map(e => [e.name, Math.round(e.startTime)])) + ' dcl ' + Math.round(performance.getEntriesByType('navigation')[0].domContentLoadedEventEnd)));
await b.close();
