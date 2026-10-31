import { chromium } from 'playwright';
const B=process.argv[2]; const b = await chromium.launch(); const p = await b.newPage({viewport:{width:390,height:844}});
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
for (const q of ['قصرالحصن','الظفره','ثيسجر']) { await p.goto(B+'/books/?q='+encodeURIComponent(q),{waitUntil:'networkidle'}); await p.waitForTimeout(400); console.log(q, await p.locator('main p[aria-live]').innerText()); }
await p.goto(B+'/'+encodeURI('book/الزبارة-التاريخ-والحضارة-1766-1938م/'),{waitUntil:'networkidle'});
await p.click('[data-testid=sample-open]'); await p.waitForTimeout(600); console.log('dialog open', await p.evaluate(()=>document.querySelector('dialog.sample').open));
await p.screenshot({path:'/workspace/store-shots/batch7/sample-viewer-m.png'}); await p.keyboard.press('ArrowLeft'); console.log(await p.locator('dialog figcaption').innerText()); await p.keyboard.press('Escape');
await p.locator('button:has-text("أضف إلى السلة")').first().click(); await p.waitForTimeout(500);
console.log('badge', await p.locator('[data-testid=bnav-cart\\/] .bnav-badge').innerText());
await p.click('[data-testid=bnav-cart\\/]'); await p.waitForTimeout(800); console.log('url', p.url());
const h = await p.$$eval('a', a=>a.map(x=>x.href).filter(h=>h.includes('myshopify.com/cart/'))); console.log('checkout', h[0]);
console.log('scrollW', await p.evaluate(()=>document.documentElement.scrollWidth), 'errs', errs); await b.close();
