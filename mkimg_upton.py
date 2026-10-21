import json,sys,shutil,os
NN,slug,spec=sys.argv[1:4]
base='/workspace/alcode_mag/incoming_articles'
figs={f['n']:f for f in json.load(open('/workspace/books/upton/illus/figs.json'))}
os.makedirs(f'{base}/images/{NN}',exist_ok=True)
out=[f'# صور المقال {NN}\n']
for k,s in enumerate(json.load(open(spec)),1):
    f=figs[s['n']]
    fn=os.path.basename(f['img']); dst=f'{base}/images/{NN}/{NN}_{k}_{fn}'
    shutil.copy('/workspace/books/upton/illus/'+f['img'],dst)
    out.append(f"""## الصورة {k}
- المسار: {dst}
- الوصف: {s['desc']}
- التعليق كما ورد تحتها في الكتاب: شكل {f['n']}: {f['cap']}. {f['artist']}، {f['year']}.
- طبيعة الصورة: صورة فنية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره
- المصدر الأصلي للصورة: {f['artist']}، {f['year']}؛ {f.get('coll','')}؛ ويكيميديا كومنز ({f['lic']})
- موضعها في الكتاب: ص {s['page']}{s.get('note','')}
- added_by_editor: true
- page_approx: false (رقم الصفحة متحقَّق منه بموضع الصورة في ملف PDF)
""")
open(f'{base}/{NN}_{slug}_images.md','w').write('\n'.join(out)); print('ok')
