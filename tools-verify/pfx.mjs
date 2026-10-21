import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const base=process.argv[2];
for (const u of ['','article/12-jebel-akhdar-1902-cox/','gallery/','timeline/','category/economy-trade/']) {
 const p=await b.newPage(); const errs=[]; const bad=[];
 p.on('pageerror',e=>errs.push(e.message)); p.on('response',r=>{ if(r.status()>=400) bad.push(r.status()+' '+r.url()); });
 await p.goto(base+u,{waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,800));
 const info=await p.evaluate(()=>({h1:document.querySelector('h1')?.innerText.slice(0,40), imgs:[...document.images].filter(i=>i.complete&&i.naturalWidth==0).length}));
 console.log(u||'/', JSON.stringify(info), errs.slice(0,2), bad.slice(0,3)); await p.close(); }
await b.close();
