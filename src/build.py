#!/usr/bin/env python3
"""Reconstruye index.html de Euskara Bidea concatenando src/ en el orden de orden.txt.
Los .js se envuelven en <script>...</script>; los .html se copian tal cual.
Uso:  python3 build.py [salida.html]   (por defecto ../index.html.nuevo). Resultado idéntico byte a byte."""
import os,sys
D=os.path.dirname(os.path.abspath(__file__))
orden=[l.strip() for l in open(D+'/orden.txt',encoding='utf-8') if l.strip()]
def parte(f):
    c=open(D+'/'+f,encoding='utf-8',newline='').read()
    return '<script>\n'+c+'</script>\n' if f.endswith('.js') else c
out=''.join(parte(f) for f in orden)
dst=sys.argv[1] if len(sys.argv)>1 else os.path.join(D,'..','index.html.nuevo')
open(dst,'w',encoding='utf-8',newline='').write(out)
print(dst,len(out.encode('utf-8')),'bytes')
