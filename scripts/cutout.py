#!/usr/bin/env python3
"""Remove photo/mockup backgrounds from book images (rembg/u2net), trim to the book edges.
Writes public/books/cut/<name>.webp (+ -sm) with alpha; originals in public/books/ stay as fallback."""
import json, os, sys
from PIL import Image, ImageDraw, ImageFilter
import numpy as np
from scipy import ndimage
from scipy.spatial import ConvexHull
from rembg import remove, new_session
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sess=new_session(os.environ.get('MODEL','isnet-general-use'))
cat=json.load(open(f'{ROOT}/content/catalog.json'))
only=set(sys.argv[1:])
for b in cat['books']:
  for im in b['images']:
    name=os.path.basename(im['src'])[:-5]
    if only and name not in only: continue
    I=Image.open(f"{ROOT}/public/{im['src']}").convert('RGB')
    O=remove(I,session=sess,post_process_mask=True)
    # books are convex: keep the main components and fill the convex hull, so white cover areas aren't punched out
    m=np.array(O.getchannel('A'))>40; lab,n=ndimage.label(m)
    if n:
      sz=ndimage.sum(m,lab,range(1,n+1)); keep=np.isin(lab,1+np.nonzero(sz>=0.08*sz.max())[0])
      ys,xs=np.nonzero(keep); pts=np.c_[xs,ys]; h=ConvexHull(pts)
      a=Image.new('L',I.size,0); ImageDraw.Draw(a).polygon([tuple(map(int,pts[v])) for v in h.vertices],fill=255)
      a=a.filter(ImageFilter.GaussianBlur(1.2)); O=I.convert('RGBA'); O.putalpha(a)
    box=a.getbbox()
    if box: O=O.crop(box)
    pad=int(max(O.size)*0.02); C=Image.new('RGBA',(O.width+2*pad,O.height+2*pad),(0,0,0,0)); C.paste(O,(pad,pad)); O=C
    for suf,w in (('',1000),('-sm',420)):
      J=O.copy(); J.thumbnail((w,w)); J.save(f"{ROOT}/public/books/cut/{name}{suf}.webp",'WEBP',quality=86,method=6)
    print(name,O.size,flush=True)
