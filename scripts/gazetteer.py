# Build content/gazetteer.json: place names used in articles → coordinates from English Wikipedia (prop=coordinates).
import json,urllib.request,urllib.parse
names={'الكويت':'Kuwait City','البصرة':'Basra','بوشهر':'Bushehr','البحرين':'Manama','لنجة':'Bandar Lengeh','أبوظبي':'Abu Dhabi','صير بني ياس':'Sir Bani Yas','رأس الخيمة':'Ras Al Khaimah (city)','الذيد':'Al Dhaid','البريمي':'Al-Buraimi','صحار':'Sohar, Oman','مسقط':'Muscat','مطرح':'Muttrah','نزوى':'Nizwa','هرمز':'Hormuz Island','غمرون':'Bandar Abbas','جمرون':'Bandar Abbas','بندر عباس':'Bandar Abbas','الشارقة':'Sharjah','الأحساء':'Al-Ahsa Oasis','القطيف':'Qatif','خارك':'Kharg Island','قشم':'Qeshm Island','دلما':'Dalma Island','ليوا':'Liwa Oasis','حلب':'Aleppo','دمشق':'Damascus','القاهرة':'Cairo','لار':'Lar, Iran','شيراز':'Shiraz','الأهواز':'Ahvaz','المحمرة':'Khorramshahr','كنك':'Kong, Iran','قيس':'Kish Island','الفاو':'Al-Faw','عانة':'Anah','الحلة':'Hillah','سورت':'Surat','بومباي':'Mumbai','مدينة زايد':'Madinat Zayed','جبل الظنة':'Jebel Dhanna, Abu Dhabi','الجبل الأخضر':'Jebel Akhdar (Oman)','خصب':'Khasab, Oman','دبا':'Dibba Al-Hisn','شناص':'Shinas','برسبوليس':'Persepolis','سقطرى':'Socotra','الدوحة':'Doha','أصفهان':'Isfahan','المخا':'Mocha, Yemen','عدن':'Aden','جدة':'Jeddah'}
out={}; titles=sorted(set(names.values()))
for i in range(0,len(titles),40):
  chunk=titles[i:i+40]
  q=urllib.parse.urlencode({'action':'query','prop':'coordinates','colimit':'max','titles':'|'.join(chunk),'format':'json','redirects':1})
  d=json.load(urllib.request.urlopen(urllib.request.Request('https://en.wikipedia.org/w/api.php?'+q,headers={'User-Agent':'alcode-mag/1.0'})))
  m={x['from']:x['to'] for x in d['query'].get('normalized',[])+d['query'].get('redirects',[])}
  pages={p['title']:p for p in d['query']['pages'].values()}
  for k,t in names.items():
    if t not in chunk: continue
    tt=m.get(m.get(t,t),m.get(t,t)); p=pages.get(tt)
    if p and 'coordinates' in p: c=p['coordinates'][0]; out[k]={'lat':round(c['lat'],3),'lon':round(c['lon'],3),'source':f'Wikipedia (en), «{tt}»: https://en.wikipedia.org/wiki/{urllib.parse.quote(tt.replace(" ","_"))}'}
    else: print('MISS',k,t)
json.dump(out,open('content/gazetteer.json','w'),ensure_ascii=False,indent=1); print(len(out),'places')
