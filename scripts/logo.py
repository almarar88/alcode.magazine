# Vectorise Ahmed's logo (potracer). Run: python3 scripts/logo.py <png>
import sys
from PIL import Image,ImageOps,ImageFilter
import numpy as np, potrace
im=Image.open(sys.argv[1]).convert('L')
ys,xs=np.where(np.array(im)<128);p=12
im=im.crop((xs.min()-p,ys.min()-p,xs.max()+p,ys.max()+p))
big=im.resize((im.width*2,im.height*2),Image.LANCZOS).filter(ImageFilter.GaussianBlur(1))
path=potrace.Bitmap(~(np.array(big)<128)).trace(turdsize=8,alphamax=1.0,opticurve=True,opttolerance=0.2)
s=.5;d=[];f=lambda q:f"{q.x*s:.1f} {q.y*s:.1f}"
for c in path:
  d.append("M"+f(c.start_point))
  for g in c.segments: d.append(("L"+f(g.c)+"L"+f(g.end_point)) if g.is_corner else ("C"+f(g.c1)+" "+f(g.c2)+" "+f(g.end_point)))
  d.append("Z")
D="".join(d);W,H=im.size
open('src/app/logoPath.ts','w').write(f"export const LOGO_VB='0 0 {W} {H}';\nexport const LOGO_W={W};export const LOGO_H={H};\nexport const LOGO_D='{D}';\n")
for n,col in [('logo-ink','#1b1712'),('logo-gold','#a8782a'),('logo-light','#f3e9d2')]:
  open(f'public/brand/{n}.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}"><path fill="{col}" fill-rule="evenodd" d="{D}"/></svg>')
rgba=Image.new('RGBA',im.size,(27,23,18,0));rgba.putalpha(ImageOps.invert(im));rgba.save('public/brand/logo-transparent.png')
open('public/favicon.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1b1712"/><svg x="7" y="10" width="50" height="44" viewBox="0 0 {W} {H}"><path fill="#d9a646" fill-rule="evenodd" d="{D}"/></svg></svg>')
print(W,H,len(path))
