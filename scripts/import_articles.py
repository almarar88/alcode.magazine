# Import incoming_articles/*.md into content/ (light formatting only; text untouched).
import re, os, json
from PIL import Image
R='/workspace/alcode_mag'; IN=R+'/incoming_articles'
META={ # slug, category, tags, era, eraSort
 '01':('pearl-banks-rosenthal','التراث',['اللؤلؤ','الغوص','البحرين'],'طبعة 1920',1920),
 '02':('abudhabi-baniyas-whitelock','المخطوطات والرحالة',['أبوظبي','صير بني ياس','المسح البحري'],'1824',1824),
 '03':('bahrain-awal-stuhlmann','التاريخ',['البحرين','أوال','اللؤلؤ'],'1916',1916),
 '04':('kuwait-1831-stocqueler','المخطوطات والرحالة',['الكويت','شط العرب','البصرة'],'1831',1831),
 '05':('hormuz-gamron-valentyn','التاريخ',['هرمز','غمرون','البرتغاليون'],'1507–1622',1507),
 '06':('hormuz-windcatchers-silva','التراث',['هرمز','ملاقف الهواء','مسقط'],'1614–1624',1614),
 '07':('lower-gulf-islands-buckingham','المخطوطات والرحالة',['صير بني ياس','البحرين','هرمز'],'1816',1816),
 '08':('muscat-1817-heude','التاريخ',['مسقط','التجارة','البصرة'],'1817',1817),
 '09':('basra-1663-godinho','التاريخ',['البصرة','التجارة'],'1663',1663),
 '10':('bandarabbas-muscat-aucher-eloy','المخطوطات والرحالة',['بندر عباس','مسقط','مطرح','المراكب'],'1838',1838),
 '11':('gulf-trade-1863-pelly','الاقتصاد والتجارة',['الكويت','البحرين','أبوظبي','رأس الخيمة','لنجة','بوشهر','اللؤلؤ','التجارة'],'1863',1863),
 '12':('jebel-akhdar-1902-cox','المخطوطات والرحالة',['البريمي','نزوى','الجبل الأخضر','الأفلاج'],'1902',1902.1),
 '13':('batinah-musandam-dhaid-1902-cox','التراث',['مسقط','صحار','رأس الخيمة','الذيد','اللؤلؤ','الغوص'],'1902',1902.2),
 '14':('pearl-market-bombay-rosenthal','الاقتصاد والتجارة',['اللؤلؤ','بومباي','البحرين','التجارة'],'1907',1907),
 '15':('bani-kaab-1831-stocqueler','التراث',['بنو كعب','الفلاحية','الخيل'],'1831',1831.1),
 '16':('terrada-kung-basra-godinho','المخطوطات والرحالة',['البحرين','خارك','البصرة','اللؤلؤ','المراكب'],'1663',1663.1),
 '17':('lar-caravan-1617-silva','المخطوطات والرحالة',['لار','هرمز','الخانات'],'1617',1617),
 '18':('oman-plants-1838-aucher-eloy','التراث',['نزوى','الجبل الأخضر','مسقط','النبات'],'1838',1838.1),
 '19':('bushehr-port-1816-buckingham','الاقتصاد والتجارة',['بوشهر','ملاقف الهواء','التجارة','بومباي'],'1816',1816.1),
 '20':('oman-imams-aflaj-stuhlmann','التاريخ',['مسقط','نزوى','الأفلاج','هرمز'],'1916',1916.1),
 '21':('kuwait-1916-stuhlmann','التاريخ',['الكويت','البصرة'],'1916',1916.2),
 '22':('sharjah-rak-1816-buckingham','المخطوطات والرحالة',['الشارقة','رأس الخيمة','البحرين'],'1816',1816.2),
 '23':('muscat-1816-buckingham','الاقتصاد والتجارة',['مسقط','مطرح','بومباي','التجارة'],'1816',1816.3),
 '24':('muscat-arabia-1663-godinho','المخطوطات والرحالة',['مسقط','الأحساء','الخيل'],'1663',1663.2),
 '25':('basra-ahwaz-1831-stocqueler','التاريخ',['البصرة','الأهواز'],'1831',1831.2),
 '26':('pearl-origin-history-rosenthal','التراث',['اللؤلؤ'],'',0),
 '27':('famous-pearls-rosenthal','الاقتصاد والتجارة',['اللؤلؤ','مسقط','هرمز'],'',0),
 '28':('bahrain-pearls-1618-silva','التاريخ',['البحرين','اللؤلؤ','البصرة','هرمز'],'1618',1618),
 '29':('shiraz-persepolis-basra-valentyn','المخطوطات والرحالة',['شيراز','البصرة','مسقط'],'1726',1726.1),
 '30':('godinho-desert-1663','المخطوطات والرحالة',['البصرة','الأحساء'],'1663',1663.3),
 '31':('palm-cultivation-kaempfer','الزراعة والنخيل',['جمرون','بندر عباس','النخيل'],'1685–1688',1686.0),
 '32':('palm-grove-summer-kaempfer','الزراعة والنخيل',['جمرون','النخيل'],'1685–1688',1686.5),
 '33':('tenreiro-hormuz-aleppo-1528','المخطوطات والرحالة',['هرمز','البحرين','القطيف','خارك','البصرة'],'1528',1528.0),
 '34':('tenreiro-cairo-1525','المخطوطات والرحالة',['هرمز','القاهرة'],'1525',1525.0),
 '35':('mandelslo-gamron-1638','الاقتصاد والتجارة',['جمرون','بندر عباس'],'1638',1638.0),
 '36':('mandelslo-swan-voyage-1638','البحر والسفن',['جمرون','هرمز','قشم'],'1638',1638.5),
 '37':('upton-sbaa-tents','التراث',['عنزة','البادية'],'سبعينيات القرن التاسع عشر',1875.0),
 '38':('upton-arabian-horse','الخيل والإبل',['عنزة','الخيل العربية'],'1875',1875.5),
 '39':('dhafra-dates-camel-festivals','المهرجانات والفعاليات',['الظفرة','ليوا','مدينة زايد','النخيل','الهجن'],'2009–2026',2017.0),
 '40':('dalma-sea-festivals','المهرجانات والفعاليات',['دلما','الظفرة','اللؤلؤ'],'2009–2026',2018.0),
}
APPROX=set()  # md: «وبعضها تقريبي بصفحةٍ واحدة»
def imgs(n):
  f=[x for x in os.listdir(IN) if x.startswith(n+'_') and x.endswith('_images.md')][0]
  out=[]
  for blk in open(f'{IN}/{f}').read().split('## الصورة')[1:]:
    g=lambda k: (re.search(r'- '+k+r'[^:]*:\s*(.+)',blk) or [None,''])[1].strip()
    out.append(dict(path=g('المسار'),desc=g('الوصف'),cap=g('التعليق'),orig=g('المصدر الأصلي'),page=(re.search(r'ص\s*(\d+)',g('موضعها')) or [0,''])[1],added=bool(re.search(r'added_by_editor:\s*true',blk)),kind=g('طبيعة الصورة'),pbook=(re.search(r'«([^»]+)»',g('موضعها')) or [None,None])[1]))
  return out
for n,(slug,cat,tags,era,es) in META.items():
  f=[x for x in os.listdir(IN) if x.startswith(n+'_') and not x.endswith('_images.md')][0]
  txt=open(f'{IN}/{f}').read().strip()
  title=re.match(r'#\s+(.+)',txt)[1].strip(); body=re.sub(r'^#\s+.+\n+','',txt)
  srcs=re.findall(r'- الكتاب[^:\n]*:\s*(.+)',body); src=srcs[0]
  book='» و«'.join(re.search(r'«([^»]+)»',x)[1] for x in srcs)
  author=(re.search(r'تأليف:\s*([^(؛،]+)',src) or [0,'—'])[1].strip()
  paras=[p for p in body.split('\n\n')]
  first=paras[0]
  m=re.match(r'(.{60,260}?[.!؟])(\s|$)',first); excerpt=m[1] if m else first[:220].rsplit('،',1)[0]+'…'
  # pull quote: verbatim «…» from text (not the source section), 45–230 chars
  main=body.split('## المصدر')[0]
  qs=[m.group(1) for m in re.finditer(r'«([^«»]{45,230})»',main) if 'المحقق' not in main[max(0,m.start()-90):m.start()]]
  QO={'17':'يحقّ أن يكون المقام الأوّل للتمر الذي يُخرجه ذلك النخل في ناحيتها، فهو في حجمه ولونه وكمال طعمه يفوق كلّ تمرٍ يُزرع في سائر أنحاء الدنيا','19':'هي اليوم أحسن مدينةٍ في الخليج العربي كلّه ما عدا البصرة وحدها','05':'وكانت تلك نهاية مملكة هرمز هذه، المملكة الجليلة المزدهرة','08':'إنّما ينبغي أن تقدَّر بوصفها السوق الرئيسة لتجارةٍ كبيرة'}
  quote=QO.get(n) or (max(qs,key=len) if qs else None)
  assert quote in main
  ims=imgs(n); os.makedirs(f'{R}/public/articles/{n}',exist_ok=True); figs=[]
  for k,im in enumerate(ims):
    o=f'articles/{n}/{k+1}.webp'; I=Image.open(im['path']).convert('RGB'); I.thumbnail((1600,1600)); I.save(f'{R}/public/{o}','WEBP',quality=80)
    cap=im['cap']; orig=im['orig']
    if n=='01': cap='لوحة خيالية لإدمون دولاك عن أساطير اللؤلؤ، وليست مشهدًا من الخليج: '+cap
    if n=='14': cap='لوحة رمزية لإدمون دولاك عن أساطير اللؤلؤ، وليست صورةً لتجارة اللؤلؤ: '+cap
    if n=='27': cap='لوحة لإدمون دولاك من فصل الأساطير، توضيحٌ لأسطورةٍ من أساطير اللؤلؤ: '+cap
    if n=='23' and 'بومباي' in cap: cap=cap+' — من فصلٍ آخر في الكتاب (بومباي)، لا من فصل مسقط'
    if n=='22' and im['added']: cap=cap+' — من كتابٍ آخر للمحقق'
    if n=='30' and 'Bassora' in cap: cap=cap+' — من الفصل السادس عشر عن البصرة، وقد وردت أيضًا في مقالٍ سابق'
    if n=='08': cap='القرنة قرب البصرة (وليست مسقط): '+cap
    if True: orig=re.sub(r'\s*\([^()]*Persian[^()]*\)','',orig)
    ednote=''
    if n=='15' and ': اللوحة الملوّنة' in cap:  # editor note: description, not book caption
      cap,ednote=cap.split(': ',1)
    orig=re.sub(r'(ويكيميديا كومنز)(؛\s*\1)+',r'\1',orig)  # 37: dedupe repeated «ويكيميديا كومنز»
    if n in ('39','40'):  # Ahmed's own book: Commons photos printed in it — credit book page + Commons author/licence
      m=re.match(r'تصوير:\s*([^،]+)،\s*ويكيميديا كومنز\s*\(([^)]+)\)؛\s*(.*)$',orig)
      if m:
        rest3=m[3].replace(m[1]+'، ','',1); fm2=re.match(r'(«[^»]+»)،\s*ويكيميديا كومنز،\s*(\S+)',rest3)
        orig=f'تصوير: {m[1]}، {fm2[1]} ({m[2]})، ويكيميديا كومنز: {fm2[2]}' if fm2 else f'تصوير: {m[1]} ({m[2]})، {rest3}'
      cap=cap+' (صورة من ويكيميديا كومنز منشورة في الكتاب)'
    elif n=='33' and 'دمشق' in cap: cap=cap+' — من فصلٍ آخر في الكتاب؛ وإلى دمشق وحلب كانت تسير القوافل الكبرى من البصرة (صورة أضافها المحقق)'
    elif im['added']: cap=cap+' (صورة أضافها المحقق)'
    ednote=''  # editor: description not in the book; dropped
    note=f'<span class="fig-orig">طبيعة الصورة: {im["kind"]}</span>' if im['added'] and im['kind'] and n not in ('39','40') else ''
    alt=re.sub(r'[«»"]','',im['desc'])
    figs.append((o,I.size,f'<figure class="art-fig"><img src="{o}" alt="{alt}" width="{I.size[0]}" height="{I.size[1]}" loading="lazy" /><figcaption><span class="fig-cap">{cap}</span><span class="fig-src">المصدر: «{im['pbook'] or book}»، ص {im["page"]}{' تقريباً' if n in APPROX else ''}</span>{note}{ednote}<span class="fig-orig">أصل الصورة: {orig}</span></figcaption></figure>'))
  # place figures after the first paragraph of successive H2 sections; quote after first para of section 2
  out=[]; sec=0; pending=None; fi=0
  parts=main.strip().split('\n\n'); secs=[i for i,p in enumerate(parts) if p.startswith('## ')]
  slots={}
  targets=[secs[0]+1] if secs else [1]
  for j in range(1,len(figs)): 
    t=secs[min(len(secs)-2, (j*len(secs))//len(figs))]+1 if len(secs)>1 else len(parts)-1
    targets.append(t)
  for j,t in enumerate(targets): slots.setdefault(t,[]).append(figs[j][2])
  qt=secs[2]+1 if len(secs)>2 else len(parts)//2
  for i,p in enumerate(parts):
    out.append(p)
    for h in slots.get(i,[]): out.append(h)
    if quote and i==qt: out.append(f'<quote by="{author}" source="«{book}»">{quote}</quote>')
  rest='## المصدر'+body.split('## المصدر',1)[1]
  rest=re.sub(r'- page_approx: true\s*—\s*','- **أرقام الصفحات تقريبية:** ',rest); rest=re.sub(r'- page_approx: false\s*—\s*','- ',rest)
  cover=figs[0][0]; capc=re.sub(r'<[^>]+>',' ',figs[0][2].split('<figcaption>')[1].split('</span>')[0])
  fm={'title':title,'author':author,'book':book,'category':cat,'date':f'2026-10-{31-int(n):02d}' if int(n)<11 else '','cover':cover,'coverCaption':capc.strip()+' — المصدر: «'+(ims[0]['pbook'] or book)+'»، ص '+ims[0]['page']+(' تقريباً' if n in APPROX else ''),'excerpt':excerpt,'tags':tags,'era':era,'eraSort':es}
  k=int(n); import datetime as _d; fm['date']=(_d.date(2026,10,21)-_d.timedelta(days=40-k)).isoformat()  # newest = highest number, one per day ending today
  y='---\n'+''.join(f'{k}: {json.dumps(v,ensure_ascii=False)}\n' for k,v in fm.items())+'---\n\n'
  open(f'{R}/content/{n}-{slug}.md','w').write(y+'\n\n'.join(out)+'\n\n'+rest.strip()+'\n')
  print(n,len(ims),'quote' if quote else 'NOQUOTE',len(excerpt))
