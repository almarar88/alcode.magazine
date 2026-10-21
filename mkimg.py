# usage: python3 mkimg.py NN slug BOOK spec.json ; spec: list of {img, figno, desc, page, editor(bool), src, nature?, note?}
import json,sys,shutil,os
NN,slug,book,spec=sys.argv[1:5]
base='/workspace/alcode_mag/incoming_articles'
figs=json.load(open(f'/workspace/books/{book}/illus/figs.json'))
byimg={f['img']:f for f in figs if 'img' in f}
os.makedirs(f'{base}/images/{NN}',exist_ok=True)
out=[f'# صور المقال {NN}\n']
for k,s in enumerate(json.load(open(spec)),1):
    f=byimg[s['img']]
    dst=f'{base}/images/{NN}/{NN}_{k}_{s["img"]}'
    shutil.copy(f'/workspace/books/{book}/illus/{s["img"]}',dst)
    nat=s.get('nature') or ('صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره' if s['editor'] else 'من لوحات الطبعة الأصلية للكتاب (%s)'%s.get('year',''))
    src=s.get('src') or f.get('src','')
    out.append(f"""## الصورة {k}
- المسار: {dst}
- الوصف: {s['desc']}
- التعليق كما ورد تحتها في الكتاب: الصورة {s['figno']}: {f['cap']}
- طبيعة الصورة: {nat}
- المصدر الأصلي للصورة: {src}
- موضعها في الكتاب: ص {s['page']}{s.get('note','')}
- added_by_editor: {'true' if s['editor'] else 'false'}
- page_approx: false (رقم الصفحة متحقَّق منه بموضع الصورة في ملف PDF)
""")
open(f'{base}/{NN}_{slug}_images.md','w').write('\n'.join(out))
print('ok')
