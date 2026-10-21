import json,sys,urllib.request,urllib.parse,re
UA={'User-Agent':'AlcodeMagDemo/1.0 (almarar88@users.noreply.github.com)'}
def q(params):
    params.update(format='json',action='query')
    r=urllib.request.Request('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(params),headers=UA)
    return json.load(urllib.request.urlopen(r,timeout=30))
out=[]
import time
for cat in sys.argv[1:]:
    time.sleep(1.5)
    d=q(dict(generator='categorymembers',gcmtitle='Category:'+cat,gcmtype='file',gcmlimit=15,prop='imageinfo',iiprop='url|extmetadata|size|mime',iiurlwidth=1400))
    pages=(d.get('query') or {}).get('pages') or {}
    print('##',cat,len(pages))
    for p in pages.values():
        ii=p['imageinfo'][0]; m=ii.get('extmetadata',{})
        g=lambda k:re.sub('<[^>]+>','',(m.get(k,{}).get('value') or '')).strip()
        o=dict(cat=cat,title=p['title'],lic=g('LicenseShortName'),licurl=g('LicenseUrl'),date=g('DateTimeOriginal')[:40],desc=g('ImageDescription')[:300],artist=g('Artist')[:120],credit=g('Credit')[:200],thumb=ii.get('thumburl'),page=ii['descriptionurl'],mime=ii['mime'])
        out.append(o); print(' ',o['title'][5:75],'|',o['lic'],'|',o['date'][:20],'|',o['desc'][:100].replace('\n',' '))
json.dump(out,open('/tmp/cat_cands.json','w'),ensure_ascii=False,indent=0)
