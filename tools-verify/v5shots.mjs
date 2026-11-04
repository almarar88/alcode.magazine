import { chromium } from 'playwright';
const B='http://localhost:8817/';
const H='جزر-الخليج-العربي-جغرافيتها-وتاريخها', C='أدب-الرحلات-والتقارير-البريطانية';
const pages=[['home',''],['books','books/'],['search','books/?q=%D8%A7%D9%84%D8%B8%D9%81%D8%B1%D8%A9'],['collection',`collection/${C}/`],['book',`book/${H}/`],['cart','cart/'],['wishlist','wishlist/'],['themes','t/'],['theme','t/dhafra/'],['author','author/'],['about','about/'],['contact','contact/'],['help','help/'],['privacy','privacy/'],['terms','terms/'],['404','404.html']];
const O='/workspace/store-v5-shots/';const b=await chromium.launch();let issues=0,checked=0;
for(const w of [390,412,768,1440]){const mob=w<1024;
 const ctx=await b.newContext({viewport:{width:w,height:mob?860:900},deviceScaleFactor:2,isMobile:mob,hasTouch:mob,reducedMotion:'reduce'});
 const p=await ctx.newPage();
 for(const [n,u] of pages){await p.goto(B+u,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
  const r=await p.evaluate(()=>{const out=[];let c=0;
   for(const el of document.querySelectorAll('h1,h2,h3,h4,p,a,span,div,li')){const cs=getComputedStyle(el);
    if(!/Ruqaa|Kufi/.test(cs.fontFamily.split(',')[0]))continue; if(![...el.childNodes].some(t=>t.nodeType===3&&t.textContent.trim()))continue;
    if(el.closest('[aria-hidden="true"],.sr-only,.v3-big,.v4-foot-mark,.marquee,[hidden]'))continue;
    if(cs.display==='none'||cs.visibility==='hidden')continue;
    const er=el.getBoundingClientRect(); if(er.width<1)continue; c++;
    const fs=parseFloat(cs.fontSize), ink=er.top+ (er.height- (parseFloat(cs.lineHeight)||fs*1.5)*Math.max(1,Math.round(er.height/(parseFloat(cs.lineHeight)||fs*1.5))))/2; // approx
    const glyphTop=er.top+parseFloat(cs.paddingTop)+((parseFloat(cs.lineHeight)||fs*1.2)-fs)/2 - fs*0.25; // tall ascender estimate
    for(let a=el.parentElement;a&&a!==document.body;a=a.parentElement){const s=getComputedStyle(a);
     const clips=/hidden|clip/.test(s.overflowY)||/hidden|clip/.test(s.overflow)||(s.clipPath!=='none'&&!/-/.test(s.clipPath));
     const bordered=parseFloat(s.borderTopWidth)>0||s.backgroundColor!=='rgba(0, 0, 0, 0)';
     if(!clips&&!bordered)continue;const ar=a.getBoundingClientRect();const top=ar.top+parseFloat(s.borderTopWidth);
     if(glyphTop<top+2&&ar.height<window.innerHeight*2){out.push(`${el.tagName}.${(el.className+'').slice(0,18)} "${el.textContent.trim().slice(0,20)}" gtop=${glyphTop|0} ctop=${top|0} ${clips?'CLIP':'edge'} ${a.className.slice?a.className.slice(0,20):''}`);}
     if(clips)break;}}
   return {c,out:[...new Set(out)].slice(0,5)};});
  checked+=r.c; if(r.out.length){issues+=r.out.length;console.log(w,n,r.out);}
  await p.screenshot({path:`${O}${n}-${w}.png`});
  if(n==='home'&&w===412){const s=await p.$('.v3-bento-wrap');if(s){await s.scrollIntoViewIfNeeded();await p.waitForTimeout(300);await s.screenshot({path:O+'home-collections-412.png'});}}
 } await ctx.close();}
console.log('display elements checked',checked,'issues',issues);await b.close();
