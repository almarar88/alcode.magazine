import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage(); const bad=[], errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('response',r=>{if(r.status()>=400) bad.push(r.status()+' '+r.url())});
await p.goto(process.argv[2],{waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,800));
console.log(await p.evaluate(()=>({h1:document.querySelector('h1')?.innerText, broken:[...document.images].filter(i=>i.naturalWidth==0).map(i=>i.src), fonts:[...document.fonts].filter(f=>f.status=='loaded').length, pdf:[...document.querySelectorAll('a[href$=".pdf"]')].map(a=>a.href)})), bad, errs);
await b.close();
