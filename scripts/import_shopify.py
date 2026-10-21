#!/usr/bin/env python3
"""Pull the real catalog from the public Shopify endpoints of https://alcode.ae and save it locally.
Writes content/catalog.json and public/books/*.webp. Run manually; the build never hits the network."""
import json, re, html, io, os, urllib.request, urllib.parse
from PIL import Image
SHOP='https://alcode.ae'; ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UA={'User-Agent':'Mozilla/5.0 alcode-store-import'}
def get(u):
  return urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=60).read()
def j(u): return json.loads(get(u))
prods=[]; page=1
while True:
  b=j(f'{SHOP}/products.json?limit=250&page={page}')['products']
  if not b: break
  prods+=b; page+=1
cols=[c for c in j(f'{SHOP}/collections.json?limit=250')['collections']]
SKIP={'books','frontpage'}
member={}; frontpage=[]
for c in cols:
  ps=j(f'{SHOP}/collections/{urllib.parse.quote(c["handle"])}/products.json?limit=250')['products']
  if c['handle']=='frontpage': frontpage=[p['handle'] for p in ps]
  if c['handle'] in SKIP: continue
  for p in ps: member.setdefault(p['handle'],[]).append(c['handle'])
def paras(h):
  h=re.sub(r'<br\s*/?>','\n',h or ''); parts=re.split(r'</p>|\n',h)
  out=[html.unescape(re.sub(r'<[^>]+>','',x)).strip() for x in parts]
  return [x for x in out if x]
outdir=os.path.join(ROOT,'public','books'); os.makedirs(outdir,exist_ok=True)
books=[]
for p in prods:
  imgs=[]
  for i,im in enumerate(p['images']):
    name=f"{p['id']}-{i+1}"; src=im['src']
    raw=get(src); I=Image.open(io.BytesIO(raw)).convert('RGB')
    for suf,w in (('',1200),('-sm',480)):
      J=I.copy(); J.thumbnail((w,w*2)); J.save(os.path.join(outdir,name+suf+'.webp'),'WEBP',quality=84)
    imgs.append({'src':f'books/{name}.webp','sm':f'books/{name}-sm.webp','w':I.width,'h':I.height,'alt':im.get('alt') or p['title']})
  books.append({'id':p['id'],'handle':p['handle'],'title':p['title'],'author':p['vendor'],'type':p['product_type'],'tags':p['tags'],
    'published':p['published_at'],'created':p['created_at'],'description':paras(p['body_html']),
    'variants':[{'id':v['id'],'title':v['title'],'price':v['price'],'compare':v['compare_at_price'],'available':v['available'],'sku':v['sku']} for v in p['variants']],
    'images':imgs,'collections':member.get(p['handle'],[])})
data={'source':SHOP,'collections':[{'handle':c['handle'],'title':c['title'],'description':paras(c.get('description',''))} for c in cols if c['handle'] not in SKIP],
  'featured':frontpage,'books':books}
json.dump(data,open(os.path.join(ROOT,'content','catalog.json'),'w'),ensure_ascii=False,indent=1)
print('books',len(books),'images',sum(len(b['images']) for b in books),'collections',len(data['collections']))
