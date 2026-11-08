/* ===== v29: contenido ya visto (verbos y vocabulario) + sala de juegos «Jolak» ===== */
const LSETS={"l3": ["etxea"], "l5": ["zenbakiak"], "l6": ["familia"], "l8": ["aditzak"], "l9": ["janaria"], "l12": ["adjetiboak", "hilabeteak", "urtaroak"], "b1": ["kokapena"], "b2": ["aditzak"], "b4": ["aditzak"], "b5": ["adjetiboak"], "b6": ["sentitu"], "b7": ["lekuak"], "b8": ["errutina"], "b14": ["garraioak"], "b17": ["eguraldia"], "b18": ["erosketak"], "b19": ["osasuna"], "c1": ["zenbakiak"], "c3": ["norabidea"], "e2": ["denborak"], "e4": ["iritziak"], "e7": ["itxura"], "e9": ["denborak"], "e10": ["jatetxea"]};
const AK=()=>S.a2key===1;
const dn=id=>!!(S.lessons&&S.lessons[id]!=null);
const KVL={izan:'l2',egon:'l4',joan:'l4',etorri:'l4',eduki:'l6',ukan:'l7',eman:'b2',gustatu:'b3',ibili:'b9','joan (iragana)':'b9','etorri (iragana)':'b9','ibili (iragana)':'b9',jakin:'b15','ahal (dezaket)':'b13','ahal (naiteke)':'b13','eman (berak… niri, zuri…)':'e1',ekarri:'e12',eraman:'e12'};
function knownVerbs(){
  const ks=Object.keys(CONJ);let out;
  if(AK())out=ks.filter(k=>S.level==='a2'||lvOf(CONJ[k])==='a1');
  else if(S.level==='a2')out=ks.filter(k=>lvOf(CONJ[k])==='a1'||dn(KVL[k]));
  else out=ks.filter(k=>lvOf(CONJ[k])==='a1'&&(KVL[k]==null||dn(KVL[k])));
  return out.length?out:['izan'];
}
function seenSets(){
  const s=new Set(['agurrak','galderak','datuak']);
  Object.keys(LSETS).forEach(id=>{if(dn(id))LSETS[id].forEach(x=>s.add(x))});
  VOCAB.forEach(v=>{if(v.w.some(w=>mast(wid(v,w))>0))s.add(v.id)});
  return s;
}
function KW(){const a=allWords(),s=seenSets(),w=a.filter(x=>s.has(x.set));return w.length>=8?w:a}
/* ===== juegos ===== */
const JG={t:null,r:null,stop(){if(this.t){clearInterval(this.t);this.t=null}if(this.r){cancelAnimationFrame(this.r);this.r=null}this.live=false},live:false};
const one=a=>a[rnd(a.length)];
const jx=(sp,eu)=>S.level==='a2'?eu:sp;
const stripA=s=>String(s).replace(/^(el|la|los|las|un|una) /,'');
function gxp(n,key,score){
  S.gplays=(S.gplays||0)+1;const b=S.gbest||(S.gbest={});const nb=score>0&&(b[key]==null||score>b[key]);if(nb)b[key]=score;
  S.xp+=n;S.today+=n;touch();save();refreshHeader();checkBadges();return nb;
}
const aSeen=()=>{const a=S.level==='a2'||S.a1test===1||AK();return a?[0,1,2,3]:[dn('l2')?0:-1,dn('l7')?1:-1,dn('l9')?2:-1,dn('b2')?3:-1].filter(x=>x>=0)};
const TYN=['NOR','NOR-NORK','NOR-NORI','NOR-NORI-NORK'],TYX=['Ni Iruñera joaten naiz.','Nik ogia jaten dut.','Niri kafea gustatzen zait.','Nik amari liburua ematen diot.'];
const kOpen=()=>AK()||dn('r1')||S.level==='a2'||S.a1test===1;
const setsOf=()=>VOCAB.filter(v=>lvOf(v)===S.level&&v.w.length>=6);
const pOpen=v=>AK()||setPct(v)>=60;
function jolakView(){
  const j=UI.jg||(UI.jg={v:'menu'});
  return ({menu:jgMenu,pcat:jgPcat,pmode:jgPmode,amenu:jgAmenu})[j.v]();
}
const jBack=to=>`<button class="btn sec small" data-jg="${to}">← ${jx('Atzera','Atzera')}</button>`;
function jgMenu(){
  const b=S.gbest||{},seen=aSeen(),po=setsOf().filter(pOpen).length;
  const card=(id,ic,n,d,open,need,best)=>`<button class="card jg-game${open?'':' jg-lock'}" data-jg="${open?'go-'+id:'locked'}" data-need="${esc(need||'')}"><span class="ic">${open?ic:'🔒'}</span><span><b>${n}</b><small>${d}</small>${open?(best!=null?`<small>🏆 ${jx('Mejor','Onena')}: ${best}</small>`:''):`<span class="jg-need">🔑 ${need}</span>`}</span></button>`;
  return `<h1 class="big">Jolasak</h1><p class="sub">${jx('Practica jugando. Cada juego se abre al avanzar en las lecciones.','Jolastu ikasteko. Aurrera egin ahala jolasak irekitzen dira.')}</p>
  ${card('k','⏱️','Kontra-erlojua',jx('60 segundos: ¿cuántas conjugaciones aciertas?','60 segundu: zenbat aditz asmatzen dituzu?'),kOpen(),jx('Supera el repaso «NOR eta NORK» (lección 10 de A1)','Gainditu «NOR eta NORK» errepasoa'),b.k)}
  ${card('p','🃏','Parekatu',jx('Memoria por categorías de Hitzak. Contrarreloj o sin tiempo.','Memoria-jolasa Hitzak kategorien arabera.'),po>0,jx('Domina el 60 % de una categoría de Hitzak','Menderatu kategoria baten %60'),null)}
  ${card('a','🪂','Aditz-ehiza',jx('Frases que caen: toca solo las del tipo de verbo pedido.','Erortzen diren esaldiak: ukitu eskatutako aditz mota bakarrik.'),seen.length>=2,jx('Aprende dos tipos de verbo (hasta la lección 7)','Ikasi bi aditz mota (7. ikasgaira arte)'),null)}
  ${card('c','🧱','Kasuak',jx('Construye la palabra: elige la raíz y el final del caso (en, a, de, con, para…).','Eraiki hitza: aukeratu erroa eta kasu-atzizkia.'),ksOpen(),jx('Completa la lección 4 (Non? Nora? Nondik?)','Osatu 4. ikasgaia'),b.c)}
  <div class="card" style="font-size:15px;color:var(--muted)">${jx('Ganas XP al terminar cada partida.','Partida bakoitzaren amaieran XP irabazten duzu.')}</div>`;
}
function jgPcat(){
  const all=setsOf(),op=all.filter(pOpen);
  const card=v=>{const o=pOpen(v),p=setPct(v);return `<button class="card jg-game${o?'':' jg-lock'}" data-jg="${o?'pset':'locked'}" data-id="${v.id}" data-need="${jx('Domina el 60 % de esta categoría ('+p+' % ahora)','Menderatu kategoria honen %60 (orain %'+p+')')}" style="padding:10px 12px;margin:0"><span class="ic" style="font-size:26px">${o?v.ic:'🔒'}</span><span style="flex:1"><b style="font-size:19px">${esc(v.eu)}</b><small>${esc(v.es)}</small><span style="display:block;height:6px;background:var(--line);border-radius:99px;overflow:hidden;margin-top:6px"><i style="display:block;height:100%;width:${p}%;background:var(--berde)"></i></span></span></button>`};
  return `${jBack('menu')}<h1 class="big">Parekatu</h1><p class="sub">${jx('Elige una categoría. Se abre al dominar el 60 % de sus palabras.','Aukeratu kategoria bat. Hitzen %60 menderatzean irekitzen da.')}</p>
  <button class="card jg-game${op.length?'':' jg-lock'}" data-jg="${op.length?'pall':'locked'}" data-need="${jx('Se abre al completar al menos una categoría','Gutxienez kategoria bat osatzean irekitzen da')}" style="width:100%"><span class="ic">${op.length?'🌍':'🔒'}</span><span><b>Orokorra · ${jx('general','orokorra')}</b><small>${op.length?jx('Mezcla de tus '+op.length+' categorías completadas','Zure '+op.length+' kategoria osatuen nahastea'):jx('Completa una categoría primero','Osatu kategoria bat lehenik')}</small></span></button>
  <div class="jg-grid2">${all.map(card).join('')}</div>`;
}
function jgPmode(){
  const c=UI.jg.cfg,b=S.gbest||{};
  return `${jBack('pcat')}<h1 class="big">${esc(c.eu)}</h1><p class="sub">${jx('Elige cómo quieres jugar.','Aukeratu nola jokatu.')}</p>
  <button class="card jg-game" data-jg="ptimed"><span class="ic">⏱️</span><span><b>Kontra-erlojua</b><small>${jx('90 s: tableros de 6 parejas sin parar. Tablero completo: +20 puntos y +5 s.','90 s: 6 bikoteko taulak geldirik gabe. Taula osoa: +20 puntu eta +5 s.')}</small>${b['p-'+c.id+'-t']!=null?`<small>🏆 ${b['p-'+c.id+'-t']}</small>`:''}</span></button>
  <button class="card jg-game" data-jg="prelax"><span class="ic">🧘</span><span><b>Denborarik gabe</b><small>${jx('Un tablero de 6 parejas, con calma. Cuenta tus movimientos.','6 bikoteko taula bat, lasai. Mugimenduak zenbatzen dira.')}</small>${b['p-'+c.id+'-r']!=null?`<small>🏆 ${b['p-'+c.id+'-r']}</small>`:''}</span></button>`;
}
function jgAmenu(){
  const j=UI.jg,seen=aSeen(),all=seen.length===4;if(!j.sel)j.sel=seen.length>=2?seen.slice(0,2):[0,1];
  return `${jBack('menu')}<h1 class="big">Aditz-ehiza</h1>
  <button class="card jg-game${all?'':' jg-lock'}" data-jg="${all?'agen':'locked'}" data-need="${jx('Se abre al ver los 4 tipos de verbo','4 aditz motak ikusi ondoren irekitzen da')}" style="width:100%"><span class="ic">${all?'🌍':'🔒'}</span><span><b>Orokorra · ${jx('general','orokorra')}</b><small>${all?jx('Los 4 tipos mezclados.','4 motak nahastuta.'):jx('Te faltan: ','Falta zaizkizu: ')+TYN.filter((_,i)=>!seen.includes(i)).join(' · ')}</small></span></button>
  <p class="sub" style="margin:14px 0 4px"><b>${jx('O elige tú','Edo aukeratu zuk')}</b> ${jx('los tipos (mínimo 2):','motak (gutxienez 2):')}</p>
  ${TYN.map((n,i)=>`<button class="card jg-game" data-jg="atype" data-i="${i}" style="width:100%;margin:8px 0"><span class="ic">${j.sel.includes(i)?'✅':'⬜'}</span><span><b>${n}</b> <small style="display:inline;color:${seen.includes(i)?'var(--berde)':'var(--urre)'}">${seen.includes(i)?'✓ '+jx('visto','ikusia'):jx('aún no visto','oraindik ez')}</small><small>${TYX[i]}</small></span></button>`).join('')}
  <button class="btn block" data-jg="astart"${j.sel.length<2?' disabled style="opacity:.45"':''}>Hasi · ${jx('empezar','hasi')}</button>`;
}
function jgResult(title,score,unit,key,xp,again,extra){
  JG.stop();const nb=gxp(xp,key,score);
  $('#view').innerHTML=`<div class="result"><div style="font-size:54px">${nb?'🏆':'🎉'}</div><h1 class="big">${esc(title)}</h1><div class="num">${score}</div><p class="sub">${unit}</p><p style="color:var(--urre)">${nb?jx('¡Nuevo récord!','Errekor berria!'):jx('Mejor','Onena')+': '+S.gbest[key]} · +${xp} XP</p>${extra||''}
  <div class="stack" style="margin-top:18px"><button class="btn block" data-jg="${again}">Beste bat</button><button class="btn sec block" data-jg="menu">Jolasak</button></div></div>`;
  window.scrollTo(0,0);burst&&burst();
}
const jgHead=(t,chip,back)=>`<div class="jg-top"><button class="btn sec small" data-jg="${back}">←</button><span class="jg-title">${t}</span><span class="jg-chip" id="jchip">${chip||''}</span></div>`;
/* 1 · Kontra-erlojua */
function jgKontra(){
  JG.stop();const keys=knownVerbs();let t=60,sc=0,ok=0,fail=0,st=0,bs=0,q=null,lock=false;
  const seen=new Set();
  const nq=()=>{for(let n=0;n<60;n++){const x=genConj(one(keys));if(!seen.has(x.key)){seen.add(x.key);return x}}seen.clear();const x=genConj(one(keys));seen.add(x.key);return x};
  const next=()=>{q=nq();lock=false;draw()};
  const draw=()=>{$('#jq').textContent=q.p;$('#jh').textContent=q.hint;$('#jst').textContent=st>=3?'🔥 '+st:'';
   $('#jo').innerHTML=q.opts.map(o=>`<button class="jg-opt" data-o="${esc(o)}">${esc(o)}</button>`).join('');
   $('#jo').querySelectorAll('.jg-opt').forEach(b=>b.onclick=()=>{if(lock)return;lock=true;const good=b.dataset.o===q.ans;
    if(good){ok++;st++;bs=Math.max(bs,st);sc+=10+Math.min(st,10)*2;b.classList.add('ok');if(st%5===0)t=Math.min(75,t+3)}
    else{fail++;st=0;b.classList.add('no');[...$('#jo').children].forEach(x=>{if(x.dataset.o===q.ans)x.classList.add('ok')})}
    $('#jchip').textContent='⭐ '+sc;setTimeout(()=>{if(JG.live)next()},good?220:700)})};
  $('#view').innerHTML=jgHead('Kontra-erlojua','⭐ 0','menu')+`<div class="bar"><i id="jtb" style="width:100%"></i></div><div class="jg-hint" id="jh"></div><div class="jg-q" id="jq"></div><div class="jg-streak" id="jst"></div><div class="jg-opts" id="jo"></div><p class="sub" style="text-align:center;margin-top:12px">⏱ <b id="jtt">60</b> s · ${jx('cada 5 seguidas: +3 s','5 segidako bakoitzeko: +3 s')}</p>`;
  JG.live=true;next();
  JG.t=setInterval(()=>{t--;const e=$('#jtt');if(!e){JG.stop();return}e.textContent=Math.max(t,0);$('#jtb').style.width=Math.max(0,t/60*100)+'%';
   if(t<=0)jgResult('Kontra-erlojua',sc,`${ok} ${jx('aciertos','asmatu')} · ${fail} ${jx('fallos','huts')} · ${jx('mejor racha','arrakasta-lerro onena')} ${bs}`,'k',Math.min(40,Math.round(sc/8)),'go-k')},1000);
}
/* ===== v43 · Kasuak: constructor guiado de casos ===== */
const KS_C={
 n:{s:'-n',g:'en',p:'en',k:'p',l:'l4',r:'Responde a Non? (¿dónde?).'},
 ra:{s:'-ra',g:'a',p:'a',k:'p',l:'l4',r:'Responde a Nora? (¿adónde?).'},
 tik:{s:'-tik',g:'desde',p:'desde',k:'p',l:'l4',r:'Responde a Nondik? (¿desde dónde?).'},
 ren:{s:'-(r)en',g:'de',p:'de',k:'h',l:'l6',r:'Marca de quién es algo.'},
 ri:{s:'-(r)i',g:'a (alguien)',p:'a',k:'h',l:'l9',r:'Marca a quién se lo das o a quién le pasa.'},
 rekin:{s:'-(r)ekin',g:'con',p:'con',k:'h',l:'l12',r:'Compañía: «con».'},
 rentzat:{s:'-(r)entzat',g:'para',p:'para',k:'h',l:'l12',r:'Destinatario: «para».'}
};
const KS_P=[['etxea','la casa','etxean','etxera','etxetik'],['eskola','la escuela','eskolan','eskolara','eskolatik'],['plaza','la plaza','plazan','plazara','plazatik'],['denda','la tienda','dendan','dendara','dendatik'],['Elizondo','Elizondo','Elizondon','Elizondora','Elizondotik'],['Iruñea','Pamplona','Iruñean','Iruñera','Iruñetik']];
const KS_H=[['ama','mamá'],['aita','papá'],['anaia','el hermano'],['arreba','la hermana'],['laguna','el amigo']];
const ksAll=()=>AK()||S.level==='a2'||S.a1test===1;
const ksOpen=()=>ksAll()||dn('l4');
const ksEs=(p,es)=>(p+' '+es).replace(/^(de|a) el /,(m,x)=>x==='de'?'del ':'al ');
function jgKasuak(){
  JG.stop();const av=Object.keys(KS_C).filter(k=>ksAll()||dn(KS_C[k].l));
  if(!av.length){toast('🔒 Completa la lección 4 (Non? Nora? Nondik?)');return}
  const N=10;let r=0,sc=0,ok=0,fail=0,st=0,bs=0,q=null,a1=null,a2=null,lock=false;const used=new Set();
  const mk=()=>{for(let t=0;t<60;t++){
    const ck=one(av),c=KS_C[ck],pool=c.k==='p'?KS_P:KS_H,it=one(pool),key=ck+it[0];
    if(used.has(key))continue;used.add(key);
    const form=c.k==='p'?it[{n:2,ra:3,tik:4}[ck]]:it[0]+{ren:'ren',ri:'ri',rekin:'rekin',rentzat:'rentzat'}[ck];
    const roots=shuffle([it[0]].concat(shuffle(pool.filter(x=>x[0]!==it[0])).slice(0,3).map(x=>x[0])));
    const sufs=shuffle(av).slice(0,Math.min(4,av.length));if(!sufs.includes(ck))sufs[rnd(sufs.length)]=ck;
    return{ck,c,it,form,roots,sufs,es:cap(ksEs(c.p,it[1]))}}
    used.clear();return mk()};
  const upd=()=>{$('#kp').textContent=(a1||'…')+' + '+(a2?KS_C[a2].s:'…');$('#kck').disabled=!(a1&&a2)};
  const draw=()=>{a1=a2=null;lock=false;
    $('#jq').textContent=q.es;$('#jh').textContent=(r+1)+' / '+N;
    $('#kr1').innerHTML=q.roots.map(x=>`<button class="jg-opt" data-o="${esc(x)}">${esc(x)}</button>`).join('');
    $('#kr2').innerHTML=q.sufs.map(x=>`<button class="jg-opt" data-o="${x}">${esc(KS_C[x].s)} · ${esc(KS_C[x].g)}</button>`).join('');
    $('#kck').hidden=false;$('#kfb').innerHTML='';upd()};
  const end=()=>jgResult('Kasuak',sc,`${ok} ${jx('aciertos','asmatu')} · ${fail} ${jx('fallos','huts')} · ${jx('mejor racha','arrakasta-lerro onena')} ${bs}`,'c',Math.min(40,Math.round(sc/6)),'go-c');
  $('#view').innerHTML=jgHead('Kasuak','⭐ 0','menu')+`<div class="jg-hint" id="jh"></div><div class="jg-q" id="jq"></div><p class="sub" style="margin:10px 0 4px">1 · Hitza · ¿qué palabra?</p><div class="jg-opts" id="kr1"></div><p class="sub" style="margin:10px 0 4px">2 · Atzizkia · ¿qué final?</p><div class="jg-opts" id="kr2"></div><div class="jg-q" id="kp" style="min-height:2.4em;margin-top:12px"></div><button class="btn block" id="kck" disabled>Egiaztatu</button><div id="kfb"></div>`;
  const pickIn=(box,set)=>{$(box).onclick=e=>{const b=e.target.closest('[data-o]');if(!b||lock)return;set(b.dataset.o);[...$(box).children].forEach(x=>{x.style.outline=x===b?'3px solid var(--urre,#E8B130)':''});upd()}};
  pickIn('#kr1',v=>{a1=v});pickIn('#kr2',v=>{a2=v});
  $('#kck').onclick=()=>{if(lock||!(a1&&a2))return;lock=true;
    const g1=a1===q.it[0],g2=a2===q.ck,good=g1&&g2;
    [...$('#kr1').children].forEach(x=>{x.style.outline='';if(x.dataset.o===q.it[0])x.classList.add('ok');else if(x.dataset.o===a1)x.classList.add('no')});
    [...$('#kr2').children].forEach(x=>{x.style.outline='';if(x.dataset.o===q.ck)x.classList.add('ok');else if(x.dataset.o===a2)x.classList.add('no')});
    if(good){ok++;st++;bs=Math.max(bs,st);sc+=10+Math.min(st,5)*2}else{fail++;st=0}
    $('#jchip').textContent='⭐ '+sc;
    $('#kfb').innerHTML=`<div class="explain"><p><b>${esc(q.form)}</b> = ${esc(q.it[0])} + ${esc(q.c.s)}. ${esc(q.c.r)}${good?'':(g1?'':' La palabra era <b>'+esc(q.it[0])+'</b>.')+(g2?'':' El final era <b>'+esc(q.c.s)+'</b>.')}</p></div><button class="btn block" id="knx" style="margin-top:10px">Hurrengoa</button>`;
    $('#kck').hidden=true;say(q.form);
    $('#knx').onclick=()=>{r++;if(r>=N)end();else{q=mk();draw()}}};
  JG.live=true;q=mk();draw();
}

/* 2 · Parekatu */
function jgBoard(words){const sE={},sS={};return shuffle(words).filter(w=>!sE[w.eu]&&!sS[w.es]&&(sE[w.eu]=sS[w.es]=1)).slice(0,6)}
function jgPare(cfg,mode){
  JG.stop();const timed=mode==='t',key='p-'+cfg.id+'-'+mode;let t=90,pairs=0,boards=0,sc=0,moves=0,open=[],lock=false,cards=[],found=0,t0=Date.now();
  const upd=()=>{const c=$('#jchip');if(c)c.textContent=timed?'⭐ '+sc:moves+' mov.'};
  function board(){const six=jgBoard(cfg.words);cards=[];six.forEach((w,i)=>cards.push({id:i,eu:1,a:w.em||'',b:w.eu},{id:i,eu:0,a:'',b:stripA(w.es)}));cards=shuffle(cards);open=[];found=0;lock=false;
   $('#jg').innerHTML=cards.map((c,i)=>`<button class="jg-mc" data-i="${i}"><div><span class="f">❔</span><span class="b">${c.eu?`<span>${c.a}</span>${esc(c.b)}`:esc(c.b)}</span></div></button>`).join('');
   $('#jg').querySelectorAll('.jg-mc').forEach(el=>el.onclick=()=>flip(el))}
  function flip(el){const i=+el.dataset.i;if(lock||el.classList.contains('up'))return;el.classList.add('up');open.push(i);
   if(open.length===2){moves++;const a=cards[open[0]],b=cards[open[1]],els=open.map(k=>$('#jg').children[k]);
    if(a.id===b.id&&a.eu!==b.eu){els.forEach(x=>x.classList.add('done'));open=[];found++;pairs++;sc+=10;upd();
     if(found===6){if(timed){boards++;sc+=20;t=Math.min(120,t+5);upd();lock=true;setTimeout(()=>{if(JG.live)board()},650)}
      else{const s=Math.max(0,Math.round(1000-moves*40-(Date.now()-t0)/1000*6));setTimeout(()=>{if(JG.live)jgResult(cfg.eu+' · Parekatu',s,`${moves} ${jx('movimientos','mugimendu')} · ${Math.round((Date.now()-t0)/1000)} s`,key,15,'again-p',`<input type="hidden">`)},700)}}}
    else{lock=true;setTimeout(()=>{els.forEach(x=>x.classList.remove('up'));open=[];lock=false},timed?550:800)}if(!timed)upd()}}
  $('#view').innerHTML=jgHead(esc(cfg.eu),timed?'⭐ 0':'0 mov.','pmode')+(timed?`<div class="bar"><i id="jtb" style="width:100%"></i></div><p class="sub" style="text-align:center">⏱ <b id="jtt">90</b> s · ${jx('tablero completo: +20 y +5 s','taula osoa: +20 eta +5 s')}</p>`:`<p class="sub" style="text-align:center">${jx('Une cada palabra vasca con su significado.','Lotu euskal hitz bakoitza bere esanahiarekin.')}</p>`)+`<div class="jg-g3" id="jg"></div>`;
  JG.live=true;board();
  if(timed)JG.t=setInterval(()=>{t--;const e=$('#jtt');if(!e){JG.stop();return}e.textContent=Math.max(t,0);$('#jtb').style.width=Math.max(0,t/90*100)+'%';
   if(t<=0)jgResult(cfg.eu+' · Parekatu',sc,`${pairs} ${jx('parejas','bikote')} · ${boards} ${jx('tableros completos','taula osoak')}`,key,Math.min(40,Math.round(sc/8)),'again-p')},1000);
}
/* 3 · Aditz-ehiza */
const AGEN=[['ident','egon','bizi','joan_hab','origin','ari'],['nork','nahi','behar'],['gus'],['eman']];
function aItem(type,full){
  let names=AGEN[type];
  if(!full){const n=[];
   if(type===0){n.push('ident');if(dn('l4'))n.push('egon','bizi','joan_hab','origin');if(dn('l8'))n.push('ari')}
   else if(type===1){n.push('nork');if(dn('l9'))n.push('nahi','behar')}
   else n.push(names[0]);names=n}
  const r=G.T[one(names)]();const s=r.t.join(' ');return{txt:s.charAt(0).toUpperCase()+s.slice(1)+'.',ty:type};
}
function jgEhiza(sel){
  JG.stop();const full=S.level==='a2'||S.a1test===1||AK();
  let lives=3,sc=0,tgt=one(sel),items=[],last=0,spawn=0,sp=44,ok=0,pauseT=0;
  $('#view').innerHTML=jgHead('Aditz-ehiza','','amenu')+`<div class="jg-target">${jx('Toca solo las frases','Ukitu esaldi hauek bakarrik')} <b id="jtg"></b></div><div class="jg-arena" id="jar"></div><p class="sub" style="text-align:center;margin-top:10px">${jx('Tipos en juego','Jokoan dauden motak')}: ${sel.map(i=>TYN[i]).join(' · ')}<br>${jx('Cada 20 aciertos recuperas una vida ❤️','20 asmatzeko bizi bat berreskuratzen duzu ❤️')}</p>`;
  const setT=()=>{$('#jtg').textContent=TYN[tgt]};setT();
  const hud=()=>{const c=$('#jchip');if(c)c.textContent='❤️'.repeat(lives)+'🖤'.repeat(3-lives)+' · '+sc};
  const note=(html,cls,top)=>{const ar=$('#jar');if(!ar)return null;const n=document.createElement('div');n.className='jg-notice '+(cls||'');if(top)n.style.top=top;n.innerHTML=html;ar.appendChild(n);return n};
  const lose=()=>{lives--;hud();if(lives<=0){JG.live=false;jgResult('Aditz-ehiza',sc,`${ok} ${jx('aciertos','asmatu')}`,'ae',Math.min(40,ok*2),'astart',`<p style="color:var(--muted)">${sel.map(i=>TYN[i]).join(' · ')}</p>`)}};
  const announce=()=>{pauseT=1.6;items.forEach(o=>{o.dead=1;o.el.remove()});items=[];spawn=1.2;const lvl=Math.floor(ok/6)+1;
   const n=note('<span>¡Aldaketa! · Maila '+lvl+'</span><b>Orain: '+TYN[tgt]+'</b>');const tg=document.querySelector('.jg-target');if(tg)tg.classList.add('chg');try{navigator.vibrate&&navigator.vibrate(120)}catch(e){}
   setTimeout(()=>{if(n)n.remove();if(tg)tg.classList.remove('chg')},1600)};
  const add=()=>{const good=Math.random()<.45,cand=good?[tgt]:sel.filter(x=>x!==tgt),ty=one(cand),it=aItem(ty,full),ar=$('#jar');if(!ar)return;
   const el=document.createElement('div');el.className='jg-fall';el.textContent=it.txt;ar.appendChild(el);
   const w=ar.clientWidth-el.offsetWidth-6,o={el,y:-50,ty};el.style.left=Math.max(2,rnd(Math.max(w,2)))+'px';items.push(o);
   el.onclick=()=>{if(o.dead)return;o.dead=1;
    if(o.ty===tgt){sc+=10;ok++;el.classList.add('good');sp=Math.min(100,44+Math.floor(ok/6)*2.5);
     if(ok%20===0&&lives<3){lives++;const n=note('<span>20 '+jx('aciertos','asmatu')+'</span><b>+1 ❤️</b>','heal','25%');setTimeout(()=>n&&n.remove(),1100)}
     hud();if(ok%6===0){tgt=one(sel.filter(x=>x!==tgt));setT();announce()}}
    else{el.classList.add('bad');lose()}
    setTimeout(()=>el.remove(),250);items=items.filter(x=>x!==o)}};
  const loop=ts=>{if(!JG.live||!$('#jar'))return;if(!last)last=ts;const dt=(ts-last)/1000;last=ts;
   if(pauseT>0){pauseT-=dt;JG.r=requestAnimationFrame(loop);return}
   spawn-=dt;if(spawn<=0){add();spawn=Math.max(.9,1.6-Math.floor(ok/6)*.03)}
   const H=$('#jar').clientHeight;items.slice().forEach(o=>{o.y+=sp*dt;o.el.style.transform='translateY('+o.y+'px)';if(o.y>H-34){o.dead=1;o.el.remove();items=items.filter(x=>x!==o);if(o.ty===tgt)lose()}});
   JG.r=requestAnimationFrame(loop)};
  JG.live=true;hud();JG.r=requestAnimationFrame(loop);
}
/* acciones */
document.addEventListener('click',e=>{
  if(typeof SES!=='undefined'&&SES)return;if(typeof LES!=='undefined'&&LES)return;
  const b=e.target.closest('[data-jg]');if(!b)return;const a=b.dataset.jg,j=UI.jg||(UI.jg={v:'menu'});
  if(a==='locked'){toast('🔒 '+(b.dataset.need||''));return}
  if(a==='menu'){JG.stop();UI.jg={v:'menu'};render()}
  else if(a==='go-k')jgKontra();
  else if(a==='go-c')jgKasuak();
  else if(a==='go-p'){JG.stop();UI.jg={v:'pcat'};render()}
  else if(a==='go-a'){JG.stop();UI.jg={v:'amenu'};render()}
  else if(a==='pcat'){JG.stop();UI.jg={v:'pcat'};render()}
  else if(a==='pset'){const v=VOCAB.find(x=>x.id===b.dataset.id);UI.jg={v:'pmode',cfg:{id:v.id,eu:v.eu,words:setWords(v)}};render()}
  else if(a==='pall'){const w=setsOf().filter(pOpen).flatMap(setWords);UI.jg={v:'pmode',cfg:{id:'__all',eu:'Orokorra',words:w}};render()}
  else if(a==='pmode'){JG.stop();render()}
  else if(a==='ptimed'){j.mode='t';jgPare(j.cfg,'t')}
  else if(a==='prelax'){j.mode='r';jgPare(j.cfg,'r')}
  else if(a==='again-p'){jgPare(j.cfg,j.mode)}
  else if(a==='amenu'){JG.stop();UI.jg={v:'amenu',sel:j.sel};render()}
  else if(a==='atype'){const i=+b.dataset.i;j.sel=j.sel.includes(i)?j.sel.filter(x=>x!==i):j.sel.concat(i).sort();render()}
  else if(a==='agen'){j.sel=[0,1,2,3];jgEhiza(j.sel)}
  else if(a==='astart'){if((j.sel||[]).length>=2)jgEhiza(j.sel)}
  else if(a==='ahome'){}
  window.scrollTo(0,0);
});
BADGES.push(['jokalaria','🎮','Jokalaria','Juega 5 partidas',()=>(S.gplays||0)>=5]);
