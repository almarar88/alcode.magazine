# Downloads selected Wikimedia Commons files and records source URL, licence, author and the source's own caption.
import json,urllib.request,urllib.parse,re,io,time
from PIL import Image
UA={'User-Agent':'AlcodeMagDemo/1.0 (almarar88@users.noreply.github.com)'}
PICKS=[('mutra-1813','No. 4. A View of Mutra from the east RMG PW4796.jpg','ports'),
('ras-al-khaimah-1813','No. 5. Rus ul Khyma, with the attack of the H C-s Cruisers on the evening of 11 November 1809 RMG PW4797.jpg','ports'),
('shinas-1813','No. 13. Schinaass from the sea RMG PW4805.jpg','ports'),
('gulf-map-dutch','AMH-5116-NA Map of part of the Persian Gulf.jpg','maps')]
clean=lambda s:re.sub(r'\s+',' ',re.sub('<[^>]+>','',s or '')).strip()
out=[]
for slug,title,group in PICKS:
    u='https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(dict(action='query',format='json',titles='File:'+title,prop='imageinfo',iiprop='url|extmetadata',iiurlwidth=1400))
    d=json.load(urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=30))
    p=list(d['query']['pages'].values())[0]; ii=p['imageinfo'][0]; m=ii['extmetadata']; g=lambda k:clean(m.get(k,{}).get('value'))
    lic=g('LicenseShortName')
    if not re.search(r'public domain|cc0|no restrictions|cc by',lic,re.I): print('SKIP licence',title,lic); continue
    time.sleep(1)
    raw=urllib.request.urlopen(urllib.request.Request(ii['thumburl'],headers=UA),timeout=60).read()
    im=Image.open(io.BytesIO(raw)).convert('RGB'); im.thumbnail((1400,1400))
    im.save(f'public/photos/{slug}.webp','WEBP',quality=74); w,h=im.size
    th=im.copy(); th.thumbnail((640,640)); th.save(f'public/photos/{slug}-sm.webp','WEBP',quality=70)
    out.append(dict(slug=slug,group=group,file=f'photos/{slug}.webp',thumb=f'photos/{slug}-sm.webp',w=w,h=h,title=title,
      caption=g('ImageDescription')[:400],date=g('DateTimeOriginal')[:60],author=g('Artist')[:160],credit=g('Credit')[:240],
      licence=lic,licenceUrl=g('LicenseUrl'),source=ii['descriptionurl']))
    print('ok',slug,lic,w,h)
old=json.load(open('content/photos.json')); have={p['slug'] for p in out}
json.dump([p for p in old if p['slug'] not in have]+out,open('content/photos.json','w'),ensure_ascii=False,indent=1)
