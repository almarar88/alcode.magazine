import puppeteer from 'puppeteer-core';
const B='http://127.0.0.1:4173/'; const br = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const pg = await br.newPage(); await pg.setViewport({width:390,height:844}); const w=ms=>new Promise(r=>setTimeout(r,ms));
await pg.goto(B+'article/31-palm-cultivation-kaempfer/',{waitUntil:'networkidle0'}); await pg.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight*.4)); await w(1000);
await pg.goto(B,{waitUntil:'networkidle0'}); await pg.goto(B+'article/31-palm-cultivation-kaempfer/',{waitUntil:'networkidle0'}); await w(700);
console.log('bar', await pg.evaluate(()=>!![...document.querySelectorAll('button')].find(b=>/تابع من حيث/.test(b.textContent))));
await pg.evaluate(()=>[...document.querySelectorAll('button')].find(b=>/تابع من حيث/.test(b.textContent)).click()); await w(3000);
console.log('y ratio', await pg.evaluate(()=>scrollY/(document.documentElement.scrollHeight-innerHeight)));
await pg.evaluate(()=>scrollTo(0,0)); await w(300); await pg.screenshot({path:'/tmp/feat/res.png'}); await br.close();
