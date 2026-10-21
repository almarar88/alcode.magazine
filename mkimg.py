import json,sys,shutil,os
# usage: mkimg.py NN slug book "img:page[:desc]" ...
nn,slug,book=sys.argv[1:4]
figs=json.load(open(f'/workspace/books/{book}/illus/figs.json'))
d=f'/workspace/alcode_mag/incoming_articles/images/{nn}'; os.makedirs(d,exist_ok=True)
out=[f'# صور المقال {nn}\n']
for i,spec in enumerate(sys.argv[4:],1):
    parts=spec.split(':',2); img,page=parts[0],parts[1]; desc=parts[2] if len(parts)>2 else ''
    f=[x for x in figs if x.get('img')==img][0]
    dst=f'{d}/{nn}_{i}_{img}'; shutil.copy(f'/workspace/books/{book}/illus/{img}',dst)
    src=f.get('artist') or f.get('src') or ''
    yr=f.get('year','')
    out.append(f"## الصورة {i}\n- المسار: {dst}\n- الوصف: {desc}\n- التعليق (كما في الكتاب): {f['cap']}\n- المصدر الأصلي للصورة: {src}{('، '+yr) if yr else ''}\n- موضعها في الكتاب: ص {page}\n")
open(f'/workspace/alcode_mag/incoming_articles/{nn}_{slug}_images.md','w').write('\n'.join(out))
print('\n'.join(out))
