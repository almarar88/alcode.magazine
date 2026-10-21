import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); pg.on('pageerror', e => console.log('ERR', String(e))); pg.on('console', m => console.log('C', m.type(), m.text()));
await pg.goto('http://127.0.0.1:4173/write/', { waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 1500));
console.log(await pg.evaluate(() => location.href + ' | ' + document.querySelector('main h1')?.textContent + ' | ' + document.querySelectorAll('input').length));
await b.close();
