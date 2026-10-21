# Spot-check «…» quotes in incoming articles against book PDFs (normalised Arabic, whitespace-insensitive).
import re,glob,unicodedata,sys
BOOK={'31':'kaempfer','32':'kaempfer','33':'tenreiro','34':'tenreiro','35':'mandelslo','36':'mandelslo','37':'upton','38':'upton','39':'hamdan_dhafra','40':'hamdan_dhafra','01':'rosenthal','02':'trucial','03':'stuhlmann','04':'stocqueler','05':'valentijn','06':'garcia','07':'buckingham','08':'heude','09':'godinho','10':'aucher',
 '21':'stuhlmann','22':'buckingham','23':'buckingham','24':'godinho','25':'stocqueler','26':'rosenthal','27':'rosenthal','28':'garcia','29':'valentijn','30':'godinho'}
def norm(t):
  t=unicodedata.normalize('NFKC',t)
  t=re.sub(r'[\u064B-\u065F\u0670\u0640\u200c-\u200f\u202a-\u202e]','',t)
  t=t.translate(str.maketrans('أإآٱىة','اااايه'))
  return re.sub(r'[^\u0621-\u064A]','',t)
cache={}
tot=bad=0
for n in sys.argv[1:] or sorted(BOOK):
  f=[x for x in glob.glob(f'incoming_articles/{n}_*.md') if not x.endswith('_images.md')][0]
  main=open(f).read().split('## المصدر')[0]
  b=BOOK[n]; P=cache.setdefault(b,norm(open(f'/tmp/pdf_{b}.txt').read()))
  qs=[q for q in re.findall(r'«([^«»]{30,})»',main)]
  miss=[]
  for q in qs:
    parts=[norm(x) for x in re.split(r'\.\.\.|…',q) if len(norm(x))>12]
    def ok(x):
      if x in P: return True
      k=max(i for i in range(len(x)+1) if x[:i] in P)  # page-break/footnote split
      if k<8: return False
      for m in re.finditer(re.escape(x[:k]),P):
        if x[k:] in P[m.end():m.end()+4000]: return True
      return False
    if not all(ok(p) for p in parts): miss.append(q)
  tot+=len(qs); bad+=len(miss)
  print(n,b,f'{len(qs)-len(miss)}/{len(qs)} found', *[('  MISS: '+m[:90]) for m in miss[:6]],sep='\n' if miss else ' ')
print('total',tot,'missing',bad)
