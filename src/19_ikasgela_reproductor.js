/* ===== IKASGELA: reproductor de lecciones ===== */
let LES=null;
const lessonById=id=>LESSONS.find(l=>l.id===id);
const lessonDone=id=>S.lessons&&S.lessons[id]!=null;
const LL=()=>LESSONS.filter(l=>lvOf(l)===S.level).sort((a,b)=>a.n-b.n);
const a1Total=()=>LESSONS.filter(l=>lvOf(l)==='a1').length;
const a1Done=()=>LESSONS.filter(l=>lvOf(l)==='a1'&&lessonDone(l.id)).length;
const a1Complete=()=>a1Done()>=a1Total();
/* v42: aprobado al 80 % -> lecciones aprobadas con menos de 80 % vuelven a pendientes (una sola vez); si A1 ya no está completo y no hay test aprobado, A2 se vuelve a bloquear */
if(!S.mig85){S.mig85=1;Object.keys(S.lessons||{}).forEach(k=>{if(typeof S.lessons[k]==='number'&&S.lessons[k]<80)delete S.lessons[k]});if(!S.a1test&&!a1Complete())S.a2unl=0;save()}
const a2Open=()=>S.a2key===1||S.a1test===1||a1Complete();
const nextLesson=()=>LL().find(l=>!lessonDone(l.id))||null;
/* A2: el castellano se reduce poco a poco: desde la lección 8 las traducciones se ocultan (tocar para verlas) */
const hideTr=L=>lvOf(L)==='a2'&&L.n>=8;
$('#view').addEventListener('click',e=>{const x=e.target.closest('.ex.tr');if(x)x.classList.toggle('on')});
function lessonRecap(id){
  const L=lessonById(id),SM=LSUM[id];if(!L)return'';
  const first=h=>{const m=/<p>([\s\S]*?)<\/p>/.exec(h||'');return m?m[1]:''};
  let o='<div class="card recap" style="text-align:left;margin-top:16px"><b style="font:700 19px var(--f-display)">📘 Laburpena · resumen de la lección</b>';
  if(SM&&SM.sum)o+='<p class="rc-h">Lo esencial</p><ul class="goals">'+SM.sum.map(x=>'<li>'+x+'</li>').join('')+'</ul>';
  L.steps.forEach((s,i)=>{
    o+='<div class="rc-step"><p class="rc-h">'+(i+1)+'. '+esc(s.t)+'</p>';
    const f=first(s.h);if(f)o+='<p>'+f+'</p>';
    if(s.tb)o+='<div class="tscroll">'+s.tb+'</div>';
    if(s.ex)o+=s.ex.slice(0,2).map(e=>'<div class="ex'+(hideTr(L)?' tr':'')+'">'+esc(e[0])+'<small>'+esc(e[1])+'</small></div>').join('');
    if(s.tip)o+='<div class="explain"><p>💡 '+s.tip+'</p></div>';
    o+='</div>';
  });
  if(SM&&SM.kw)o+='<p class="rc-h">Hitz gakoak · palabras clave</p><div class="tscroll"><table class="mini"><tr><th>Euskera</th><th>Español</th></tr>'+SM.kw.map(k=>'<tr><td><b>'+esc(k[0])+'</b></td><td>'+esc(k[1])+'</td></tr>').join('')+'</table></div>';
  return o+'</div>';
}
function openLesson(id){pushState();LES={id,step:-1};document.body.classList.add('in-session');lessonRender()}
function closeLesson(){LES=null;document.body.classList.remove('in-session');popOwn();render()}
function lessonRender(){
  const L=lessonById(LES.id),SM=LSUM[L.id],steps=L.steps.concat(SM?[{sum:1}]:[]),n=steps.length,st=LES.step;
  let h=`<div class="qtop"><div class="prog"><i style="width:${(st+1)/(n+1)*100}%"></i></div><div class="combo">${Math.max(st+1,0)}/${n}</div></div>`;
  if(st<0){
    const sc=S.lessons[L.id];
    h+=`<p class="qkind">${L.n}. ikasgaia · ~${L.min} min</p><h1 class="big">${L.ic} ${esc(L.eu)}</h1><p class="sub">${lvOf(L)==='a2'&&L.n>=16?'':esc(L.es)}</p>
    <div class="card"><b style="font:700 18px var(--f-display)">Zer ikasiko dugu · qué vas a aprender</b><ul class="goals">${L.goals.map(g=>`<li>${esc(g)}</li>`).join('')}</ul></div>
    <p class="note">Primero ${n} pasos cortos de explicación con ejemplos y luego una práctica. Con un 80 % la lección queda hecha.${sc!=null?` Tu mejor resultado hasta ahora: ${sc} %.`:''}</p>
    <div class="stack" style="margin-top:18px"><button class="btn block" data-lact="next">Hasi · empezar</button></div>`;
  }else{
    const s=steps[st].sum?{t:'Laburpena · resumen',h:'<p>Lo esencial de la lección:</p><ul class="goals">'+SM.sum.map(x=>'<li>'+x+'</li>').join('')+'</ul><p style="margin-top:16px"><b>Hitz gakoak · palabras clave</b></p>',tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr>'+SM.kw.map(k=>'<tr><td><b>'+esc(k[0])+'</b></td><td>'+esc(k[1])+'</td></tr>').join('')+'</table>',cards:1}:steps[st],last=st===n-1;
    h+=`<p class="qkind">${L.n}. ikasgaia · ${st+1}/${n}</p><h1 class="big" style="font-size:clamp(24px,6vw,32px)">${esc(s.t)}</h1><div class="lbody">${s.h||''}`;
    if(s.pc)h+=`<div class="pieces">${s.pc.map(p=>`<div class="piece ${p[1]}"><span class="f">${esc(p[0])}</span><span class="l">${esc(p[2])}</span></div>`).join('')}</div>`;
    if(s.tb)h+=`<div class="tscroll">${s.tb}</div>`;
    if(s.ex)h+=s.ex.map(e=>`<div class="ex${hideTr(L)?' tr':''}">${s.sa?`<button class="speak" data-act="say" data-t="${esc(e[2]||e[0])}" aria-label="Entzun">🔊</button> `:''}${esc(e[0])}<small>${esc(e[1])}</small></div>`).join('');
    if(s.tip)h+=`<div class="explain"><p>💡 ${s.tip}</p></div>`;
    if(s.cards)h+=`<button class="btn sec block" style="margin-top:14px" data-lact="cards">🃏 Txartelekin errepasatu · repasar con tarjetas</button>`;
    h+=`</div><div class="fbtns" style="margin-top:22px"><button class="btn sec" data-lact="prev">Atzera</button><button class="btn${last?' ok':''}" data-lact="${last?'practice':'next'}">${last?'Praktikatu':'Hurrengoa'}</button></div>`;
  }
  $('#view').innerHTML=h+'<div style="height:30px"></div>';
  window.scrollTo(0,0);
}
$('#view').addEventListener('click',e=>{
  if(!LES)return;
  const b=e.target.closest('[data-lact]');if(!b)return;
  const a=b.dataset.lact,L=lessonById(LES.id);
  if(a==='exit')closeLesson();
  else if(a==='next'){LES.step++;lessonRender()}
  else if(a==='prev'){if(LES.step>=0)LES.step--;lessonRender()}
  else if(a==='cards'){
    const id=L.id,ws=LSUM[id].kw.map(k=>({id:'kw:'+id+':'+k[0],eu:k[0],es:k[1],em:''}));LES=null;
    runSession({tag:'flash',make:()=>flashQs(ws,ws.length)});
  }
  else if(a==='practice'){
    const id=L.id;LES=null;
    runSession({tag:'lesson',lesson:id,make:()=>buildLessonQsEU(L)});
  }
});
function ikasgelaView(){
  const nx=nextLesson(),done=LL().filter(l=>lessonDone(l.id)).length;
  return `${levelBar()}<h1 class="big">Ikasgela</h1>
  <p class="sub">El curso ${S.level.toUpperCase()} en ${LL().length} lecciones cortas. Cada una explica una idea, la muestra aplicada y termina con una práctica. Sigue el orden o salta a lo que necesites.</p>
  <div class="card row" style="justify-content:space-between"><b style="font:700 18px var(--f-display)">${done}/${LL().length} ikasgai osatuta</b><div class="bar grow" style="margin:0;min-width:120px"><i style="width:${done/LL().length*100}%"></i></div></div>
  ${nx?`<button class="btn block" style="margin-top:12px" data-act="lesson" data-id="${nx.id}">Jarraitu: ${nx.n}. ${esc(nx.eu)}</button>`:'<p class="sub" style="margin-top:12px">¡Has completado todas las lecciones! Repásalas cuando quieras.</p>'}
  <div class="stack" style="margin-top:16px">${LL().map(l=>{
    const sc=S.lessons[l.id],d=sc!=null;
    return `<div class="card"><div class="setrow"><span class="ic">${l.ic}</span><div class="grow"><b>${l.n}. ${esc(l.eu)}</b><div class="es">${esc(l.es)} · ${l.min} min</div></div>${d?`<span class="chip">✓ ${sc}%</span>`:''}</div>
    <ul class="goals small">${l.goals.map(g=>`<li>${esc(g)}</li>`).join('')}</ul>
    <button class="btn${d?' sec':''} small" data-act="lesson" data-id="${l.id}">${d?'Berrikusi':'Ikasi'}</button></div>`}).join('')}</div>
  <p class="note">Temario adaptado del orden de contenidos de la <a href="https://contenido.uned.es/cuid/oferta_idiomas/guias_2018/euskera_elemental_a1_online_2018.pdf" target="_blank" rel="noopener">guía de euskera A1 de la UNED</a>, el <a href="https://www.ehu.eus/documents/d/nazioarteko-harremanak/ehu-programa-euskera-2c-es" target="_blank" rel="noopener">programa de nivel inicial de la EHU</a> y el <a href="https://www.euskadi.eus/curriculo-basico-de-ensenanza-de-euskera-a-personas-adultas-heoc/web01-ejeduki/es/" target="_blank" rel="noopener">currículo HEOC</a>. Los textos y ejemplos son propios: contrástalos con tu profesor.</p>`;
}
$('#back').addEventListener('click',askExit);
$('#chMute').addEventListener('click',toggleMute);
$('#logo').addEventListener('click',()=>{if(!SES&&!LES)goTo('home')});
window.addEventListener('popstate',()=>{
  if(!PUSHED)return;
  PUSHED=false;
  if(SES){if(SES.i>0&&SES.i<SES.qs.length)showExitConfirm();else endSession()}
  else if(LES)closeLesson();
});
