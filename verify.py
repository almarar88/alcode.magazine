import re,sys,glob
art,book=sys.argv[1:3]
src=''
for f in glob.glob(f'/workspace/books/{book}/ar/*.md')+glob.glob(f'/workspace/books/{book}/notes/*')+[f'/workspace/books/{book}/ANNOTATIONS.md']:
    try: src+=open(f).read()
    except: pass
src=re.sub(r'\[\^[^\]]*\]','',src)
src=re.sub(r'\s+',' ',src)
for q in re.findall(r'«([^»]{12,})»',open(art).read()):
    qq=re.sub(r'\s+',' ',q)
    print('OK ' if qq in src else 'MISS', qq[:70])
