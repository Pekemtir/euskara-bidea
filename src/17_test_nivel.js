/* ===== Test: saltar de nivel (A1 → A2) y autoevaluación ===== */
const TEST_BLK=[['vocab','Hiztegia','Vocabulario'],['verbs','Aditzak','Verbos y auxiliares'],['build','Esaldiak','Construir frases'],['gram','Gramatika','Gramática de las lecciones']];
const PLACE_SIZES=[12,10,10,8],SELF_SIZES=[6,5,5,4],PLACE_COOL=864e5;
function withLevel(lv,fn){const o=S.level;S.level=lv;try{return fn()}finally{S.level=o}}
const lvVerbKeys=lv=>Object.keys(CONJ).filter(k=>lvOf(CONJ[k])===lv);
function gramQs(lv,n){
  const out=[],seen=new Set(),ls=shuffle(LESSONS.filter(l=>lvOf(l)===lv));
  for(let pass=0;pass<3&&out.length<n;pass++){
    for(let i=0;i<ls.length&&out.length<n;i++){
      const l=ls[i];let qs=[];
      try{qs=withLevel(lv,()=>l.make())}catch(e){}
      qs=qs.filter(q=>q.k==='choice'&&!q.wid&&!q.vk&&!q.meta&&!q.key&&!seen.has(q.p+'|'+q.hint));
      if(!qs.length)continue;
      const q=qs[rnd(qs.length)];seen.add(q.p+'|'+q.hint);q.src=l.id;out.push(q);
    }
  }
  return out.slice(0,n);
}
function testSet(lv,sz){
  window.FORCEPAST=true;try{return testSet0(lv,sz)}finally{window.FORCEPAST=false}
}
function testSet0(lv,sz){
  const a=[],tag=(arr,b)=>arr.forEach(q=>{q.blk=b;a.push(q)});
  tag(withLevel(lv,()=>vocabQs(allWords(),sz[0])),'vocab');
  tag(conjQs(lvVerbKeys(lv),sz[1]),'verbs');
  tag(withLevel(lv,()=>buildQs(sz[2])),'build');
  tag(gramQs(lv,sz[3]),'gram');
  return shuffle(a);
}
const ptLeft=()=>S.ptLast?Math.max(0,S.ptLast+PLACE_COOL-Date.now()):0;
const fmtLeft=ms=>{const h=Math.floor(ms/36e5),m=Math.ceil((ms%36e5)/6e4);return h>0?h+' h '+m+' min':m+' min'};
function testView(){
  const left=ptLeft(),done=S.a1test===1,a1c=a1Complete(),tl=UI.tlv||(a2Open()&&S.level==='a2'?'a2':'a1');
  const total=PLACE_SIZES.reduce((a,b)=>a+b,0);
  let pl;
  if(done)pl=`<p class="okmsg" style="margin:8px 0 0">✅ A1 acreditado por test. El A2 está abierto.</p>`;
  else if(a1c)pl=`<p class="es" style="margin:8px 0 0">Ya completaste las ${a1Total()} lecciones del A1: el A2 está abierto, no necesitas el test.</p>`;
  else pl=`<ul class="goals small"><li>${total} preguntas: vocabulario 12 · verbos 10 · frases 10 · gramática 8.</li><li>Para pasar: <b>90 %</b> en total (${Math.ceil(total*.9)} aciertos) y <b>75 %</b> como mínimo en cada bloque.</li><li>Sin ayudas ni explicaciones hasta el final.</li><li>Si suspendes, puedes reintentar a las 24 h (con preguntas distintas).</li></ul>${S.ptTry?`<p class="es" style="margin:0 0 10px">Intentos: ${S.ptTry} · mejor resultado: ${S.ptBest||0}/${total}</p>`:''}${left?`<button class="btn block" disabled>Reintento disponible en ${fmtLeft(left)}</button>`:`<button class="btn block" data-act="tplace">Hasi proba · empezar el test</button>`}`;
  const sl=S.selfLast?`<p class="es" style="margin:0 0 10px">Última: ${S.selfLast.lv.toUpperCase()} · ${S.selfLast.ok}/${S.selfLast.n} (${S.selfLast.pct} %)</p>`:'';
  return `<h1 class="big">Test</h1><p class="sub">Salta el A1 o mide cómo vas, sin tocar tu progreso de lecciones.</p>
  <div class="stack">
  <div class="card"><div class="setrow"><span class="ic">🚀</span><div class="grow"><b>Maila saltatu</b><div class="es">Saltar el A1 y pasar al A2</div></div></div>${pl}</div>
  <div class="card"><div class="setrow"><span class="ic">🧭</span><div class="grow"><b>Autoebaluazioa</b><div class="es">Autoevaluación · ${SELF_SIZES.reduce((a,b)=>a+b,0)} preguntas, con explicación y sin nota mínima</div></div></div>
  <div class="sel" style="margin:12px 0"><button class="pill${tl==='a1'?' on':''}" data-act="tlv" data-l="a1">A1</button><button class="pill${tl==='a2'?' on':''}" data-act="tlv" data-l="a2">A2${a2Open()?'':' 🔒'}</button></div>${sl}
  <button class="btn sec block" data-act="tself" data-l="${tl}">Hasi · empezar autoevaluación</button></div>
  </div>`;
}
function startPlacement(){
  if(ptLeft()||S.a1test===1)return;
  runSession({tag:'test',test:'place',nohelp:true,lv:'a1',make:()=>testSet('a1',PLACE_SIZES)});
}
function startSelf(lv){
  if(lv==='a2'&&!a2Open()){toast('El A2 sigue bloqueado');return}
  runSession({tag:'test',test:'self',nohelp:true,lv,make:()=>testSet(lv,SELF_SIZES)});
}
function testGrade(ok,q,given){
  SES.locked=true;(SES.res=SES.res||[]).push({q,ok});
  if(SES.cfg.test==='self'){sheet(ok,Object.assign({},q,{retry:true}),0,given);return}
  $$('.opt,.wt,.typebox,.line').forEach(e=>e.classList.remove('good','bad'));
  const last=SES.i+1>=SES.qs.length,d=document.createElement('div');d.className='sheet ask';d.id='sh';
  d.innerHTML=`<div class="in"><p><b>Erantzuna gordeta</b> · respuesta guardada (${SES.i+1}/${SES.qs.length})</p><div class="sheetbtn"><button class="btn block" id="nx">${last?'Amaitu · ver resultado':'Hurrengoa · siguiente'}</button></div></div>`;
  document.body.appendChild(d);const nx=$('#nx');nx.onclick=nextQ;nx.focus();
}
function missLabel(q){
  if(q.blk==='vocab'){const s=VOCAB.find(x=>x.id===String(q.wid||'').split(':')[0]);return s?'Hitzak · '+s.eu:'Hitzak'}
  if(q.blk==='verbs'){const v=q.vk||(q.meta&&q.meta.vk);return 'Aditzak'+(v?' · '+v:'')}
  if(q.blk==='build')return 'Esaldiak · construir frases';
  const l=LESSONS.find(x=>x.id===q.src);return l?'Ikasgaia '+l.n+' · '+l.eu:'Gramatika'
}
function testFinish(){
  const R=SES.res||[],cfg=SES.cfg;SES.i=SES.qs.length;
  const by={};TEST_BLK.forEach(b=>by[b[0]]={n:0,ok:0,miss:[]});
  R.forEach(r=>{const b=by[r.q.blk];if(!b)return;b.n++;if(r.ok)b.ok++;else b.miss.push(r.q)});
  const tot=R.length,okN=R.filter(r=>r.ok).length,pct=tot?Math.round(okN/tot*100):0,need=Math.ceil(tot*.9);
  const blkMin=b=>Math.ceil(b.n*.75),blkOk=TEST_BLK.every(b=>!by[b[0]].n||by[b[0]].ok>=blkMin(by[b[0]]));
  const place=cfg.test==='place',pass=place&&okN>=need&&blkOk;
  if(place){S.ptLast=Date.now();S.ptTry=(S.ptTry||0)+1;S.ptBest=Math.max(S.ptBest||0,okN);if(pass){S.a1test=1;S.a2unl=1}}
  else S.selfLast={lv:cfg.lv,ok:okN,n:tot,pct,ts:Date.now()};
  S.sess++;save();
  const labels=Array.from(new Set([].concat(...TEST_BLK.map(b=>by[b[0]].miss.map(missLabel))))).slice(0,8);
  const rows=TEST_BLK.map(b=>{const x=by[b[0]],mn=blkMin(x),p=x.n?Math.round(x.ok/x.n*100):0,good=!x.n||x.ok>=mn;
    return `<div class="card"><div class="row" style="justify-content:space-between"><b>${b[1]} <span class="es" style="font-weight:400">· ${b[2]}</span></b><span class="chip">${x.ok}/${x.n}</span></div><div class="bar"><i style="width:${p}%;background:${good||!place?'var(--berde)':'var(--gorri)'}"></i></div>${place?`<div class="es" style="font-size:13px;margin-top:4px">mínimo ${mn} · ${good?'✔ superado':'✘ por debajo'}</div>`:''}</div>`}).join('');
  let head,msg;
  if(place&&pass){head=['🏆','Zorionak!','¡Has superado el test!'];msg=`<p><b>A1 acreditado.</b> Has acertado ${okN} de ${tot} (${pct} %). El A2 está desbloqueado.</p>`}
  else if(place){head=['💪','Ia-ia!','Todavía no'];const why=[];if(okN<need)why.push(`necesitas ${need} aciertos y tienes ${okN}`);if(!blkOk)why.push('algún bloque está por debajo del 75 %');msg=`<p><b>No has llegado al mínimo:</b> ${why.join(' y ')}. Puedes reintentarlo a las 24 h con preguntas distintas; mientras, repasa lo de abajo.</p>`}
  else{head=[pct>=90?'🏆':pct>=60?'🎉':'💪','Autoebaluazioa','Resultado: '+okN+' de '+tot+' ('+pct+' %)'];msg=`<p>${pct>=90?'Nivel muy sólido: este nivel lo dominas.':pct>=70?'Vas bien; repasa los puntos débiles.':'Conviene repasar este nivel con las lecciones.'}</p>`}
  $('#view').innerHTML=`<div class="result"><div style="font-size:54px">${head[0]}</div><h1 class="big">${head[1]}</h1><p class="sub">${head[2]}</p><div class="num">${pct}%</div></div>
  <div class="explain">${msg}</div><div class="stack" style="margin-top:14px">${rows}</div>
  ${labels.length?`<div class="card" style="margin-top:14px"><b>Berrikusi · repasa</b><div class="stack" style="margin-top:8px">${labels.map(m=>`<div class="ex">${esc(m)}</div>`).join('')}</div></div>`:''}
  <div class="stack" style="margin-top:20px">${pass?'<button class="btn block" id="toa2">A2 ikasgelara · ir al A2</button>':''}<button class="btn${pass?' sec':''} block" id="tback">Test-era itzuli · volver</button></div>`;
  window.scrollTo(0,0);
  $('#tback').onclick=()=>endSession();
  if(pass)$('#toa2').onclick=()=>{S.level='a2';save();endSession(true);goTo('ikasgela')};
  checkBadges();refreshHeader();if(pass||pct>=90)burst();
}
