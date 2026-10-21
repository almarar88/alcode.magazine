import puppeteer from 'puppeteer-core';
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const list=[['',1440,'home20-1440'],['',390,'home20-390'],['article/12-jebel-akhdar-1902-cox/',1440,'art12-1440'],['article/12-jebel-akhdar-1902-cox/',390,'art12-390'],['article/19-bushehr-port-1816-buckingham/',1440,'art19-1440'],['article/19-bushehr-port-1816-buckingham/',390,'art19-390']];
for (const [u,w,n] of list){const p=await b.newPage();await p.setViewport({width:w,height:900});await p.goto('http://127.0.0.1:4173/'+u,{waitUntil:'networkidle0'});
 await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=500){scrollTo(0,y);await new Promise(r=>setTimeout(r,80));}scrollTo(0,0);await new Promise(r=>setTimeout(r,1200));});
 await p.screenshot({path:`/workspace/alcode_mag/screens/${n}.png`,fullPage:true});await p.screenshot({path:`/tmp/v_${n}.png`});await p.close();}
await b.close();
