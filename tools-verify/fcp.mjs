import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const block of [[], ['*.woff2'], ['*.webp'], ['*.woff2', '*.webp']]) {
  const pg = await b.newPage(); await pg.setViewport({ width: 390, height: 844 });
  const c = await pg.createCDPSession(); await c.send('Network.enable'); await c.send('Network.setBlockedURLs', { urls: block });
  await pg.goto('http://127.0.0.1:4173/', { waitUntil: 'load' }); await new Promise(r => setTimeout(r, 1500));
  console.log(block.join(',') || 'none', await pg.evaluate(() => JSON.stringify(performance.getEntriesByType('paint').map(e => [e.name, Math.round(e.startTime)]))));
  await pg.close();
}
await b.close();
