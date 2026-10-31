import { chromium } from 'playwright';
const [base, dir, ...paths] = process.argv.slice(2);
const b = await chromium.launch();
for (const [w,h,tag] of [[390,844,'m'],[1440,900,'d']]) { const p = await b.newPage({viewport:{width:w,height:h}});
 for (const pa of paths) { await p.goto(base+pa,{waitUntil:'networkidle'}); await p.waitForTimeout(800); const n=(pa.replace(/[^a-z]/gi,'_')||'home').slice(0,30); await p.screenshot({path:`${dir}/${tag}-${n}.png`, fullPage: pa==='/'}); } }
await b.close();
