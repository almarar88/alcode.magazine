import json,sys,urllib.request,urllib.parse
UA={'User-Agent':'AlcodeMagDemo/1.0 (almarar88@users.noreply.github.com)'}
def q(params):
    params.update(format='json',action='query')
    r=urllib.request.Request('https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode(params),headers=UA)
    return json.load(urllib.request.urlopen(r,timeout=30))
out=[]
for term in sys.argv[1:]:
    d=q(dict(generator='search',gsrsearch=f'filetype:bitmap {term}',gsrnamespace=6,gsrlimit=12,prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=1200))
    for p in (d.get('query',{}).get('pages',{}) or {}).values():
        ii=p['imageinfo'][0]; m=ii.get('extmetadata',{})
        g=lambda k:(m.get(k,{}).get('value') or '')
        out.append(dict(term=term,title=p['title'],lic=g('LicenseShortName'),date=g('DateTimeOriginal')[:60],desc=g('ImageDescription')[:200],artist=g('Artist')[:100],thumb=ii.get('thumburl'),page=ii['descriptionurl'],w=ii['width'],h=ii['height']))
json.dump(out,open('/tmp/cands.json','w'),ensure_ascii=False,indent=0)
for o in out: print(o['term'],'|',o['title'][:70],'|',o['lic'],'|',o['date'][:25],'|',o['desc'][:90].replace('\n',' '))
