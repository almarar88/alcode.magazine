import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await b.newPage(); const errs = []; pg.on('pageerror', e => errs.push(String(e))); pg.on('console', m => m.type() === 'error' && errs.push(m.text()));
await pg.setViewport({ width: 1440, height: 900 });
await pg.goto('http://127.0.0.1:4173/gallery/', { waitUntil: 'networkidle0' });
await pg.waitForSelector('figure button'); await pg.click('figure button'); await new Promise(r => setTimeout(r, 600));
console.log('lightbox', await pg.evaluate(() => !!document.querySelector('[role=dialog]'))); await pg.keyboard.press('Escape'); await new Promise(r => setTimeout(r, 500));
console.log('closed', await pg.evaluate(() => !document.querySelector('[role=dialog]')));
await pg.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle0' });
await pg.evaluate(() => document.querySelector('a[aria-label="مقالات عن الكويت"]').dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 })));
await new Promise(r => setTimeout(r, 800)); console.log('map ->', decodeURI(await pg.evaluate(() => location.pathname)), await pg.evaluate(() => document.querySelector('h1')?.getAttribute('aria-label')));
//removed demo article check

console.log('errors', errs); await b.close();
