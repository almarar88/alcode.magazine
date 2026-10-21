import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
for (const [w,t] of [[1440,'light'],[390,'dark']]) { const p=await b.newPage(); await p.setViewport({width:w,height:900});
 await p.emulateMediaFeatures([{name:'prefers-color-scheme',value:t}]);
 await p.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle0'}); await p.mouse.move(w*0.2,200); await new Promise(r=>setTimeout(r,1500));
 await p.screenshot({path:`/workspace/alcode_mag/screens/logo-home-${w}-${t}.png`});
 await p.evaluate(()=>scrollTo(0,document.body.scrollHeight)); await new Promise(r=>setTimeout(r,1500));
 await p.screenshot({path:`/workspace/alcode_mag/screens/logo-footer-${w}-${t}.png`}); }
await b.close();
