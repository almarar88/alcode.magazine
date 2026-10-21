import puppeteer from 'puppeteer-core';
const BASE = process.env.BASE || 'http://127.0.0.1:4173/';
const pages = (process.env.PAGES || '|article/11-gulf-trade-1863-pelly/|article/22-sharjah-rak-1816-buckingham/|article/27-famous-pearls-rosenthal/|article/19-bushehr-port-1816-buckingham/|article/01-pearl-banks-rosenthal/|write/|category/history/|category/economy-trade/|gallery/|dashboard/|credits/|search/|saved/|timeline/|tag/الكويت/|about/').split('|');
const widths = (process.env.W || '390,673,820,1440').split(',').map(Number);
const shots = process.env.SHOTS;
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-gpu'] });
let bad = 0;
for (const theme of (process.env.THEMES || 'light').split(',')) for (const w of widths) for (const p of pages) {
  const pg = await b.newPage(); const errs = [];
  pg.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); pg.on('pageerror', e => errs.push(String(e)));
  pg.on('requestfailed', r => errs.push('REQFAIL ' + r.url()));
  await pg.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: theme }]);
  await pg.setViewport({ width: w, height: 900 });
  await pg.goto(BASE + encodeURI(p), { waitUntil: 'networkidle0' });
  await pg.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } scrollTo(0, 0); await new Promise(r => setTimeout(r, 900)); });
  const r = await pg.evaluate(() => {
    const W = document.documentElement.clientWidth; const over = [];
    for (const el of document.querySelectorAll('body *')) { const b = el.getBoundingClientRect(); if (b.width && (b.right > W + 1 || b.left < -1)) { let s = getComputedStyle(el), clip = false; for (let a = el.parentElement; a; a = a.parentElement) { const o = getComputedStyle(a); if (/(hidden|auto|scroll|clip)/.test(o.overflowX) && a !== document.body && a !== document.documentElement) { clip = true; break; } } if (!clip && s.position !== 'fixed') over.push(el.tagName + '.' + String(el.className).slice(0, 40)); } }
    return { sw: document.documentElement.scrollWidth, W, over: over.slice(0, 5) };
  });
  const flag = r.sw > r.W || r.over.length || errs.length;
  if (flag) bad++;
  console.log(`${flag ? 'FAIL' : 'ok  '} ${theme} ${w} /${p} sw=${r.sw}/${r.W} ${r.over.join(',')} ${errs.slice(0, 3).join(' | ')}`);
  if (shots) { const name = (p.replace(/\/.*$/, '') || 'home'); await pg.screenshot({ path: `${shots}/${name}-${w}${theme === 'dark' ? '-dark' : ''}.png`, fullPage: true }); }
  await pg.close();
}
await b.close(); console.log('bad', bad);
