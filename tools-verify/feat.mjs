import puppeteer from 'puppeteer-core'; import fs from 'node:fs';
const B=process.env.B||'http://127.0.0.1:4173/';
const br = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await br.newPage(); const errs=[]; pg.on('console', m => m.type()==='error' && errs.push(m.text())); pg.on('pageerror', e => errs.push('PE '+e.message));
const w = ms => new Promise(r => setTimeout(r, ms)); fs.mkdirSync('/tmp/feat',{recursive:true});
for (const vp of [{width:1366,height:900},{width:390,height:844,isMobile:true,deviceScaleFactor:2}]) {
  await pg.setViewport(vp); const tag=vp.width;
  await pg.goto(B+'article/07-lower-gulf-islands-buckingham/', { waitUntil: 'networkidle0' });
  console.log(tag,'journey figs', await pg.evaluate(()=>[...document.querySelectorAll('.journey')].filter(e=>e.offsetParent).length), 'series', await pg.evaluate(()=>document.querySelector('.series h2')?.textContent));
  await pg.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight*0.45)); await w(1200);
  console.log(tag,'stops shown', await pg.evaluate(()=>[...document.querySelectorAll('.journey')].find(e=>e.offsetParent)?.querySelectorAll('.j-stop').length));
  await pg.screenshot({path:`/tmp/feat/j-${tag}.png`});
  await pg.reload({ waitUntil: 'networkidle0' }); await w(600);
  console.log(tag,'resume bar', await pg.evaluate(()=>!![...document.querySelectorAll('button')].find(b=>/تابع من حيث/.test(b.textContent))));
  await pg.evaluate(()=>scrollTo(0,0)); await pg.screenshot({path:`/tmp/feat/r-${tag}.png`});
  await pg.goto(B+'article/01-pearl-banks-rosenthal/', { waitUntil: 'networkidle0' });
  const n = await pg.evaluate(()=>{const g=document.querySelectorAll('.gloss');g[0]?.scrollIntoView({block:'center'});g[0]?.click();return g.length}); await w(500);
  console.log(tag,'gloss', n, await pg.evaluate(()=>document.querySelector('.gloss-def')?.textContent));
  await pg.screenshot({path:`/tmp/feat/g-${tag}.png`});
  // select a sentence
  await pg.evaluate(()=>{const p=[...document.querySelectorAll('.prose-ar p')][3];const r=document.createRange();r.selectNodeContents(p);const s=getSelection();s.removeAllRanges();s.addRange(r);});
  await w(700); await pg.evaluate(()=>[...document.querySelectorAll('.share-dock button')].find(b=>/بطاقة/.test(b.textContent))?.click()); await w(2500);
  const src = await pg.evaluate(()=>document.querySelector('.share-dock img')?.src);
  if (src) { const b64 = await pg.evaluate(async u=>{const b=await (await fetch(u)).blob();return await new Promise(r=>{const f=new FileReader();f.onload=()=>r(f.result);f.readAsDataURL(b)})},src); fs.writeFileSync(`/tmp/feat/card-${tag}.png`,Buffer.from(b64.split(',')[1],'base64')); }
  console.log(tag,'card', !!src); await pg.screenshot({path:`/tmp/feat/s-${tag}.png`});
  await pg.goto(B+'article/23-muscat-1816-buckingham/', { waitUntil: 'networkidle0' });
  await pg.evaluate(()=>document.querySelector('.ba')?.scrollIntoView({block:'center'})); await w(800); await pg.screenshot({path:`/tmp/feat/ba-${tag}.png`});
  await pg.goto(B+'traveler/kaempfer/', { waitUntil: 'networkidle0' }); await w(600);
  console.log(tag,'traveler', await pg.evaluate(()=>[document.querySelector('h1')?.textContent, document.querySelectorAll('main a[href*="article/"]').length, document.querySelectorAll('blockquote').length]));
  await pg.screenshot({path:`/tmp/feat/t-${tag}.png`, fullPage:false});
  console.log(tag,'overflow', await pg.evaluate(()=>document.documentElement.scrollWidth>innerWidth));
}
console.log('errors', errs); await br.close();
