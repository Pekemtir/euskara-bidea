/* ===== ESTADO ===== */
const KEY='euskara-bidea-v1';
const $=(s,r)=>(r||document).querySelector(s);
const $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const rnd=n=>Math.floor(Math.random()*n);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(a,n)=>shuffle(a).slice(0,n);
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[¿?¡!.,]/g,'').replace(/\s+/g,' ').trim();
const dayStr=d=>d.toLocaleDateString('sv-SE');

let S={lessons:{},xp:0,today:0,day:'',streak:0,last:'',m:{},badges:[],typeMode:false,sess:0,conj:0,built:0,bestCombo:0,goal:50,level:'a1'};
try{Object.assign(S,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){}
if(S.level!=='a1'&&S.level!=='a2')S.level='a1';
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
(function rollDay(){
  const t=dayStr(new Date());
  if(S.day!==t){S.day=t;S.today=0}
  const y=new Date();y.setDate(y.getDate()-1);
  if(S.last&&S.last!==t&&S.last!==dayStr(y))S.streak=0;
})();
function touch(){
  const t=dayStr(new Date());
  if(S.last!==t){const y=new Date();y.setDate(y.getDate()-1);S.streak=(S.last===dayStr(y))?S.streak+1:1;S.last=t}
}
const LV=[['Hasiberri','Principiante'],['Ikasle','Estudiante'],['Hiztun','Hablante'],['Mintzo','Conversador/a'],['Euskaldun berri','Nuevo hablante'],['Aditz-maisu','Maestro/a de verbos']];
const lvl=()=>Math.min(LV.length-1,Math.floor(S.xp/150));
const lvlPct=()=>lvl()===LV.length-1?100:(S.xp%150)/150*100;
function refreshHeader(){
  $('#chStreak').textContent='🔥 '+S.streak;
  $('#chXp').textContent='⭐ '+S.xp+' XP';
}

/* ===== LOGROS ===== */
const BADGES=[
['lehen','🌱','Lehen urratsa','Termina tu primera sesión',()=>S.sess>=1],
['konboa','⚡','Konbo 8','8 aciertos seguidos',()=>S.bestCombo>=8],
['helburua','🎯','Helburua','Cumple la meta diaria',()=>S.today>=S.goal],
['hitzak','📚','Hitz-biltzailea','Domina 25 palabras',()=>Object.values(S.m).filter(v=>v>=3).length>=25],
['aditza','🧩','Aditz-gaztea','3 sesiones de conjugación',()=>S.conj>=3],
['esaldiak','🧱','Esaldigilea','Construye 8 frases bien',()=>S.built>=8],
['seria','🔥','3 egun','3 días seguidos',()=>S.streak>=3],
['ikasgaiak','🎓','Ikasle saiatua','Completa 3 lecciones',()=>Object.keys(S.lessons||{}).length>=3],
['a2','🔓','Bigarren maila','Desbloquea el A2 (completa el A1)',()=>a1Complete()]
];
function checkBadges(){
  BADGES.forEach(b=>{if(!S.badges.includes(b[0])&&b[4]()){S.badges.push(b[0]);toast(b[1]+' '+b[2]+'!');burst()}});
  save();
}
let tt;
function toast(m){const e=$('#toast');e.textContent=m;e.hidden=false;clearTimeout(tt);tt=setTimeout(()=>{e.hidden=true},2800)}
function burst(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const c=$('#fx'),x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;
  const cols=['#CF2E2E','#1B7A4B','#E8B130','#2557A7'];
  const P=Array.from({length:70},()=>({x:innerWidth/2,y:innerHeight*.35,vx:(Math.random()-.5)*12,vy:-Math.random()*11-3,r:Math.random()*6+3,c:cols[rnd(4)],a:1}));
  let f=0;
  (function tick(){
    x.clearRect(0,0,c.width,c.height);
    P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.35;p.a-=.012;x.globalAlpha=Math.max(p.a,0);x.fillStyle=p.c;x.fillRect(p.x,p.y,p.r,p.r*1.6)});
    if(++f<110)requestAnimationFrame(tick);else x.clearRect(0,0,c.width,c.height);
  })();
}
/* Pronunciación: sin voz de euskera (iPhone) el texto se reescribe con ortografía de castellano, solo para la voz */
const PH_EXC={'kaixo':'káicho','euskara':'euskára','euskal':'euskal'};
const PH_V='aeiou';
function phStress(w){
  if(/[áéíóú]/.test(w))return w;
  const nu=[...w.matchAll(/[aeo][iu]|[iu][aeo]|[aeiou]/g)];
  if(nu.length<2)return w;
  if(/[aeiouns]$/.test(w))return w;
  const m=nu[nu.length-2],i=m.index,t=m[0];
  const k=/^[iu][aeo]$/.test(t)?1:0;
  return w.slice(0,i+k)+'áéíóú'[PH_V.indexOf(t[k])]+w.slice(i+k+1);
}
function phon(t){
  return String(t).toLowerCase().replace(/[a-zñ]+/g,w=>{
    if(PH_EXC[w])return PH_EXC[w];
    w=w.replace(/h/g,'').replace(/tx/g,'ch').replace(/tz/g,'ts').replace(/x/g,'ch')
       .replace(/z/g,'s').replace(/g([ei])/g,'gu$1')
       .replace(/(^|[^aeiou])in(?=[aeou])/g,'$1iñ')   /* n palatal tras i: mina→miña, pero baina sin cambio */;
    return phStress(w);
  });
}
/* v43: texto normalizado (cifras, símbolos) y voz elegible */
function speakable(t){let x=String(t).replace(/<[^>]+>/g,' ');
  x=x.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}\uFE0F]/gu,' ');
  x=x.replace(/\(=\s*([^)]*)\)/g,', $1');
  x=x.replace(/\b(\d+),(\d+)\b/g,(m,a,b)=>(+a?euNum(+a):'zero')+' koma '+(+b?euNum(+b):'zero'));
  x=x.replace(/\b\d+\b/g,m=>m.length>4?m.split('').map(d=>+d?euNum(+d):'zero').join(' '):(+m?euNum(+m):'zero'));
  x=x.replace(/%/g,' ehuneko').replace(/€/g,' euro');
  x=x.replace(/[«»"“”]/g,'').replace(/\s*[—–→]\s*/g,', ').replace(/…/g,', ').replace(/[+=]/g,' ').replace(/\s*\/\s*/g,', ');
  return x.replace(/\s+/g,' ').trim()}
const isEu=v=>/^eu([-_]|$)/i.test(v.lang)||/basque|euskara|euskal/i.test(v.name);
function voicesList(){try{return speechSynthesis.getVoices()||[]}catch(e){return[]}}
function pickVoice(){const vs=voicesList();let v=S.voiceName?vs.find(x=>x.name===S.voiceName):null;if(v)return v;
  const eu=vs.filter(isEu);v=eu.find(x=>/premium|enhanced|natural|neural/i.test(x.name))||eu.find(x=>!/compact/i.test(x.name))||eu[0];
  return v||vs.find(x=>/^es[-_]ES/i.test(x.lang))||vs.find(x=>/^es/i.test(x.lang))||null}
function say(t,slow){
  if(S.mute)return;
  try{
    const s=window.speechSynthesis;if(!s)return;
    const v=pickVoice(),tx=speakable(t),u=new SpeechSynthesisUtterance(v&&isEu(v)?tx:phon(tx));
    if(v){u.voice=v;u.lang=v.lang}else u.lang='es-ES';
    const r=S.rate||.85;u.rate=slow?Math.min(.55,r*.65):r;s.cancel();s.speak(u);
  }catch(e){}
}

/* ===== VOCABULARIO ===== */
const wid=(s,w)=>s.id+':'+w[0];
const allWords=all=>VOCAB.filter(s=>all||lvOf(s)===S.level).flatMap(s=>s.w.map(w=>({id:wid(s,w),eu:w[0],es:w[1],em:w[2],set:s.id})));
const setWords=s=>s.w.map(w=>({id:wid(s,w),eu:w[0],es:w[1],em:w[2],set:s.id}));
const mast=id=>S.m[id]||0;
const bump=(id,ok)=>{S.m[id]=Math.max(0,Math.min(4,mast(id)+(ok?1:-1)));try{srsMark(id,ok)}catch(e){}};
const setPct=s=>Math.round(s.w.reduce((a,w)=>a+mast(wid(s,w)),0)/(s.w.length*4)*100);
function pickWords(pool,n){
  const out=[],p=pool.slice();
  while(out.length<n&&p.length){
    const wts=p.map(w=>5-mast(w.id));
    let r=Math.random()*wts.reduce((a,b)=>a+b,0),i=0;
    for(;i<p.length-1;i++){r-=wts[i];if(r<=0)break}
    out.push(p.splice(i,1)[0]);
  }
  return out;
}
function vocabQ(w,pool){
  const all=allWords();
  let others=pool.filter(x=>x.id!==w.id&&x.es!==w.es);
  if(others.length<3)others=all.filter(x=>x.id!==w.id&&x.es!==w.es);
  others=shuffle(others);
  const rev=`<b>${esc(w.eu)}</b> = ${esc(w.es)}`;
  const wset=VOCAB.find(s=>s.id===w.set);
  const why=`<b>${esc(w.eu)}</b> significa «${esc(w.es)}».${wset?`<br><small>Está en el tema <b>${esc(wset.eu)}</b> (${esc(wset.es)}).</small>`:''}`;
  const m=mast(w.id),r=Math.random();
  if(m>=2&&r<.5)return{k:'type',kind:'Idatzi euskaraz',p:w.es,em:w.em,hint:'Escríbelo en euskera',ans:w.eu,expl:rev,rev,why,wid:w.id};
  if(r<.75)return{k:'choice',kind:'Zer esan nahi du?',p:w.eu,em:w.em,say:w.eu,hint:'¿Qué significa?',opts:shuffle([w.es].concat(others.slice(0,3).map(x=>x.es))),ans:w.es,expl:rev,rev,why,wid:w.id};
  return{k:'choice',kind:'Nola esaten da euskaraz?',p:w.es,em:w.em,hint:'¿Cómo se dice en euskera?',opts:shuffle([w.eu].concat(others.slice(0,3).map(x=>x.eu))),ans:w.eu,expl:rev,rev,why,wid:w.id};
}
const vocabQs=(pool,n)=>pickWords(pool,n).map(w=>vocabQ(w,pool));
function flashQs(pool,n){
  return pickWords(pool,n).map(w=>({k:'flash',wid:w.id,eu:w.eu,es:w.es,em:w.em,rev:`<b>${esc(w.eu)}</b> = ${esc(w.es)}`}));
}

/* ===== CONJUGACIÓN ===== */
const segHTML=a=>a.map(([s,r])=>`<span class="m-${r}">${esc(s)}</span>`).join('');
const pastOk=()=>!!(window.FORCEPAST||S.level==='a2'||S.a1test===1||(S.lessons&&S.lessons.l10!=null)||(typeof SES!=='undefined'&&SES&&SES.cfg&&SES.cfg.test));
function genConj(vk){
  const c=CONJ[vk];let tks=Object.keys(c.T);if(!pastOk()&&!c.lv){const pr=tks.filter(k=>!/^iragana/.test(k));if(pr.length)tks=pr}
  const tk=tks[rnd(tks.length)],i=rnd(6),t=c.T[tk],ans=t.f[i];
  const pr=pronOf(c)[i];
  const forms=Object.values(c.T).flatMap(x=>x.f);
  const same=t.f.filter(f=>f!==ans);
  const rest=shuffle(forms.filter(f=>f!==ans&&!same.includes(f)));
  const opts=shuffle([ans].concat(shuffle(same).concat(rest).slice(0,3)));
  const seg=t.seg?segHTML(t.seg[i]):esc(ans);
  const rev=`${esc(pr)} <b>${esc(ans)}</b> · ${vk}, ${esc(t.e)}`;
  const series=t.f.map((f,k)=>k===i?`<b>${esc(f)}</b>`:esc(f)).join(' · ');
  const note=(typeof VNOTE!=='undefined'&&VNOTE[vk])?`<br><small>${VNOTE[vk]}</small>`:'';
  const why=`Se pedía <b>${vk}</b>, ${esc(t.e)}, persona <b>${esc(pr)}</b> (${pronEs(c)[i]}): <b>${seg}</b>.<br><small>Serie completa: ${series}</small>${note}`;
  return{k:S.typeMode?'type':'choice',kind:'Aditza · konjugatu',p:pr+' ___',hint:`${vk} · ${t.e} · ${pronEs(c)[i]}`,opts,ans,expl:`${esc(pr)} <b>${seg}</b>`,why,rev,key:vk+tk+i,vk,meta:{vk,tk,i}};
}
function conjQs(vks,n){
  const out=[],seen=new Set();let tries=0;
  while(out.length<n&&tries++<80){const q=genConj(vks[rnd(vks.length)]);if(!seen.has(q.key)){seen.add(q.key);out.push(q)}}
  return out;
}

/* ===== FRASES ===== */
function genTip(v,tk){
  const a=v.ty==='nor'
    ?'Sin objeto directo → auxiliar <b>izan</b> (naiz, zara, da…) y el sujeto no lleva -k.'
    :'Con objeto directo → auxiliar <b>ukan</b> (dut, duzu, du…) y el sujeto lleva -k (ni → nik).';
  const t={
    oraina:`<b>${v.hab}</b> = forma habitual del participio (${v.p}).`,
    ari:'«ari» + auxiliar de <b>izan</b> = estar haciéndolo ahora. Aquí el sujeto va sin -k.',
    iragana:`participio <b>${v.p}</b> sin cambios + auxiliar en pasado.`,
    perfektua:`participio <b>${v.p}</b> + auxiliar en presente = acción ya hecha («he …»).`,
    geroa:`<b>${v.fut}</b> = participio + <b>${v.fut.endsWith('go')?'-go':'-ko'}</b> (-go tras -n, -ko en el resto).`
  }[tk];
  return a+'<br>'+t;
}
function buildQs(n){
  if(S.level==='a2')return pick(SENT2,n).map(s=>sq({es:s.es,t:s.t,x:s.x,tip:s.tip}));
  const nCur=Math.ceil(n*0.6);
  const cur=pick(SENT,nCur).map(s=>({k:'build',kind:'Eraiki esaldia',es:s.es,tokens:s.t,extra:s.x||[],expl:`${esc(s.es)}<br><small>${esc(s.tip)}</small><br><small>Hay otros órdenes posibles; este es el neutro.</small>`,rev:`<b>${esc(cap(s.t.join(' ')))}.</b> ${esc(s.es)}`}));
  const gen=[],seen=new Set();let tries=0;
  while(gen.length<n-cur.length&&tries++<60){
    const v=PART[rnd(PART.length)],tk=Object.keys(TEN)[rnd(5)];
    if(v.only&&!v.only.includes(tk))continue;
    const i=rnd(6),g=genSentence(v,tk,i),key=g.tokens.join(' ');
    if(seen.has(key))continue;seen.add(key);
    const es=g.esTxt||`${PRON_ES[i]} · ${v.es} «${v.eso}» · ${TEN[tk].es}`;
    gen.push({k:'build',kind:'Eraiki esaldia',es,tokens:g.tokens,extra:[],expl:`${esc(es)}<br><small>${genTip(v,tk)}</small>`,rev:`<b>${esc(cap(key))}.</b> ${esc(es)}`});
  }
  return shuffle(cur.concat(gen));
}
function nnQs(n){
  return pick(NN,n).map(([vb,es,ty])=>({
    k:'choice',kind:'Nor ala nork?',help:'Pregúntate: ¿hay un «qué» (objeto directo) después del verbo? Si no lo hay, el auxiliar es izan. Si lo hay, es ukan.',p:vb,hint:`${es} · ¿qué auxiliar necesita?`,
    opts:['izan (naiz, zara, da…)','ukan (dut, duzu, du…)'],ans:ty==='nor'?'izan (naiz, zara, da…)':'ukan (dut, duzu, du…)',
    expl:ty==='nor'?`<b>${vb}</b> no lleva objeto directo → <b>izan</b>, sujeto sin -k.`:`<b>${vb}</b> lleva objeto directo (¿qué?) → <b>ukan</b>, sujeto con -k.`,
    rev:`<b>${vb}</b> (${es}) → ${ty==='nor'?'izan':'ukan'}`
  }));
}

/* ===== Tipos de verbo: NOR · NOR-NORK · NOR-NORI · NOR-NORI-NORK ===== */
const VT=['NOR · izan (naiz, zara, da…)','NOR-NORK · ukan (dut, duzu, du…)','NOR-NORI · zait, zaizu, zaio…','NOR-NORI-NORK · diot, dit, dio…'];
const VT_CL=[
['joan','ir',0,'Ni Iruñera joaten naiz.','Voy a Pamplona.'],['etorri','venir',0,'Zu etxera zatoz.','Vienes a casa.'],['bizi','vivir',0,'Ni Elizondon bizi naiz.','Vivo en Elizondo.'],['egon','estar',0,'Etxean nago.','Estoy en casa.'],['jaio','nacer',0,'Bilbon jaio naiz.','He nacido en Bilbao.'],['erori','caer',0,'Haurra erori da.','El niño se ha caído.'],
['jan','comer',1,'Nik ogia jaten dut.','Como pan.'],['edan','beber',1,'Zuk ura edaten duzu.','Bebes agua.'],['ikusi','ver',1,'Nik mendia ikusten dut.','Veo el monte.'],['irakurri','leer',1,'Amak liburua irakurtzen du.','Mamá lee el libro.'],['idatzi','escribir',1,'Nik gutuna idazten dut.','Escribo la carta.'],['ikasi','aprender',1,'Guk euskara ikasten dugu.','Aprendemos euskera.'],['ulertu','entender',1,'Nik ez dut ulertzen.','No entiendo.'],['ireki','abrir',1,'Nik atea irekitzen dut.','Abro la puerta.'],
['gustatu','gustar',2,'Niri kafea gustatzen zait.','Me gusta el café.'],['iruditu','parecer',2,'Niri polita iruditzen zait.','Me parece bonito.'],['ahaztu','olvidarse',2,'Niri izena ahaztu zait.','Se me ha olvidado el nombre.'],['interesatu','interesar',2,'Niri euskara interesatzen zait.','Me interesa el euskera.'],['gertatu','pasar, ocurrir',2,'Zer gertatu zaizu?','¿Qué te ha pasado?'],
['eman','dar',3,'Nik amari liburua ematen diot.','Le doy el libro a mamá.'],['esan','decir',3,'Amak niri esaten dit.','Mamá me lo dice.'],['bidali','enviar',3,'Nik lagunari mezua bidaltzen diot.','Le envío el mensaje a un amigo.'],['erakutsi','mostrar',3,'Irakasleak guri mapa erakusten digu.','El profesor nos muestra el mapa.'],['irakatsi','enseñar',3,'Irakasleak guri euskara irakasten digu.','El profesor nos enseña euskera.'],['azaldu','explicar',3,'Nik zuri azaltzen dizut.','Te lo explico.'],['galdetu','preguntar',3,'Nik amari galdetzen diot.','Le pregunto a mamá.']
];
const VT_AUX=[
['Nik ogia jaten ___.','Como pan.','dut',['naiz','zait','diot']],
['Ni Iruñean bizi ___.','Vivo en Pamplona.','naiz',['dut','zait','diot']],
['Amari kafea gustatzen ___.','A mamá le gusta el café.','zaio',['du','dio','da']],
['Niri euskara gustatzen ___.','Me gusta el euskera.','zait',['dut','naiz','dit']],
['Nik amari liburua ematen ___.','Le doy el libro a mamá.','diot',['dut','zaio','dio']],
['Amak niri liburua ematen ___.','Mamá me da el libro.','dit',['dut','zait','diot']],
['Gu amari ogia ematen ___.','Le damos el pan a mamá.','diogu',['dugu','zaigu','digu']],
['Haiek ogia jaten ___.','Ellos comen pan.','dute',['dira','zaie','diote']],
['Gu Baztanera joaten ___.','Vamos a Baztan.','gara',['dugu','zaigu','diogu']],
['Haurrei txokolatea gustatzen ___.','A los niños les gusta el chocolate.','zaie',['dute','diote','dira']],
['Zuri zer iruditzen ___?','¿Qué te parece?','zaizu',['duzu','dizu','zara']],
['Zuk liburu bat ikusten ___.','Ves un libro.','duzu',['zara','zaizu','diozu']],
['Mikelek niri mezu bat bidaltzen ___.','Mikel me envía un mensaje.','dit',['dut','zait','diot']],
['Irakasleak guri euskara irakasten ___.','El profesor nos enseña euskera.','digu',['dugu','zaigu','diogu']]
];
function typeQs(n){
  const nc=Math.ceil(n/2),na=n-nc;
  const cl=pick(VT_CL,nc).map(([vb,es,t,eu,ex])=>({
    k:'choice',kind:'Zein aditz mota?',p:vb,hint:es+' · ¿de qué tipo es?',opts:shuffle(VT.slice()),ans:VT[t],
    help:'Mira quién participa: solo sujeto (NOR) · sujeto + objeto «qué» (NOR-NORK) · algo que le pasa o le gusta a alguien (NOR-NORI) · alguien da/dice algo a alguien (NOR-NORI-NORK).',
    expl:`<b>${vb}</b> → <b>${VT[t].split(' · ')[0]}</b>.<br><small>${esc(eu)} · ${esc(ex)}</small>`,rev:`<b>${vb}</b> (${es}) → ${VT[t].split(' · ')[0]}`}));
  const ax=pick(VT_AUX,na).map(([s,es,ans,wr])=>({
    k:'choice',kind:'Auxiliarra',p:s,hint:es,opts:shuffle([ans].concat(wr)),ans,
    help:'Decide el tipo de verbo y elige el auxiliar: naiz (NOR) · dut (NOR-NORK) · zait/zaio (NOR-NORI) · diot/dit (NOR-NORI-NORK).',
    expl:`Auxiliar correcto: <b>${ans}</b>.<br><small>${esc(es)}</small>`,rev:`${esc(s.replace('___','<b>'+ans+'</b>'))}`}));
  return shuffle(cl.concat(ax));
}

/* ===== MOTOR DE SESIONES ===== */
let SES=null;
let PUSHED=false;
function pushState(){try{if(!PUSHED){history.pushState({euskara:1},'');PUSHED=true}}catch(e){}}
function popOwn(){try{if(PUSHED){PUSHED=false;history.back()}}catch(e){PUSHED=false}}
function showExitConfirm(){
  if($('#xc'))return;
  const d=document.createElement('div');d.className='sheet ask';d.id='xc';
  d.innerHTML=`<div class="in"><h3>Irten nahi duzu? <small style="font:500 15px var(--f-body)">¿Salir ahora?</small></h3><p>Llevas ${Math.min(SES.i,SES.total)} de ${SES.total} preguntas. El XP ganado se conserva, pero la sesión no cuenta como completada.</p><div class="fbtns"><button class="btn sec" id="xno" type="button">Jarraitu</button><button class="btn" id="xyes" type="button">Irten</button></div></div>`;
  document.body.appendChild(d);
  $('#xno').onclick=()=>{d.remove();pushState()};
  $('#xyes').onclick=()=>{d.remove();endSession()};
}
function askExit(){
  if(typeof LES!=='undefined'&&LES){closeLesson();return}
  if(!SES)return;
  if(SES.i>0&&SES.i<SES.qs.length)showExitConfirm();else endSession();
}
/* ===== MODO SILENCIO: sin sonido y sin ejercicios que lo necesiten ===== */
function silenceQs(qs){qs=(qs||[]).filter(Boolean);if(!S.mute)return qs;
  return qs.map(q=>{
    if(q.hide&&q.k==='choice'&&/Entzun/.test(q.kind||'')&&q.say)return Object.assign({},q,{hide:0,auto:0,say:'',kind:'Zer esan nahi du?',p:q.say,hint:'¿Qué significa?'});
    if(q.hide)return null;
    return q}).filter(Boolean)}
function applyMute(){document.body.classList.toggle('muted',!!S.mute);
  document.querySelectorAll('[data-act="mute"],#chMute').forEach(b=>{if(b.classList.contains('pill')){b.textContent=S.mute?'🔇 Silenciado · sin sonido':'🔊 Activado'}else b.textContent=S.mute?'🔇':'🔊'})}
function toggleMute(){S.mute=!S.mute;if(S.mute){try{speechSynthesis.cancel()}catch(e){}}save();
  toast(S.mute?'🔇 Silencio: sin sonido ni ejercicios de escucha':'🔊 Sonido activado');
  applyMute();render()}
function runSession(cfg){
  const qs0=silenceQs(cfg.make());
  if(!qs0.length){toast('🔇 Este ejercicio necesita sonido: pulsa 🔇 para activarlo');return}
  pushState();
  SES={cfg,qs:qs0,i:0,first:0,xp:0,combo:0,best:0,miss:[],locked:false};
  SES.total=SES.qs.length;
  document.body.classList.add('in-session');
  renderQ();
}
function endSession(keep){
  const d=$('#sh');if(d)d.remove();
  const xc=$('#xc');if(xc)xc.remove();
  document.body.classList.remove('in-session');SES=null;if(keep!==true)popOwn();
  if(typeof render==='function')render();
}
function award(g){S.xp+=g;S.today+=g;SES.xp+=g;touch();S.bestCombo=Math.max(S.bestCombo,SES.combo);save();refreshHeader()}
function renderQ(){
  const q=SES.qs[SES.i];
  if(!q)return SES.cfg.test?testFinish():finish();
  SES.locked=false;
  const pct=SES.i/SES.qs.length*100;
  let h=`<div class="qtop"><div class="prog"><i style="width:${pct}%"></i></div><button class="chip" data-act="mute" aria-label="Sonido" style="cursor:pointer">${S.mute?'🔇':'🔊'}</button><div class="combo">${SES.combo>1?'⚡ ×'+SES.combo:''}</div></div>`;
  h+=q.k==='flash'?flashHTML(q):q.k==='build'?buildHTML(q):q.k==='type'?typeHTML(q):choiceHTML(q);
  $('#view').innerHTML=h+'<div class="spacer"></div>';
  window.scrollTo(0,0);
  bindQ(q);
}
function lev(a,b){const d=[];for(let i=0;i<=a.length;i++){d[i]=[i];}for(let j=1;j<=b.length;j++)d[0][j]=j;
  for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[a.length][b.length]}
function allForms(){const o=[];Object.entries(CONJ).forEach(([vk,c])=>Object.entries(c.T).forEach(([tk,t])=>t.f.forEach((f,i)=>o.push({vk,tk,i,f,t,c}))));return o}
function yoursText(q,given){
  if(given==null||!String(given).trim())return '';
  const g=esc(given);
  if(q.meta){
    const m=q.meta,hits=allForms().filter(x=>x.f===String(given).trim().toLowerCase());
    if(!hits.length)return `Tu respuesta <b>${g}</b> no es una forma de ningún verbo del curso. Revisa la ortografía.`;
    const h=hits.find(x=>x.vk===m.vk&&x.tk===m.tk)||hits.find(x=>x.vk===m.vk)||hits[0];
    const pr=pronOf(h.c)[h.i],want=pronOf(CONJ[m.vk])[m.i];
    let r;
    if(h.vk!==m.vk)r=`es de otro verbo, no de <b>${m.vk}</b>`;
    else if(h.tk===m.tk)r=`es de otra persona (aquí se pedía <b>${esc(want)}</b>)`;
    else if(h.i===m.i)r=`es de otro tiempo (aquí se pedía ${esc(CONJ[m.vk].T[m.tk].e)})`;
    else r='cambian la persona y el tiempo';
    return `Tu respuesta <b>${g}</b> es de <b>${h.vk}</b> · ${esc(h.t.e)} · ${esc(pr)}: ${r}.`;
  }
  if(q.wid){
    const typed=norm(given),hit=allWords(true).find(w=>w.id!==q.wid&&(w.eu===given||w.es===given||norm(w.eu)===typed));
    if(hit){return (hit.eu===given||norm(hit.eu)===typed)?`Tu respuesta <b>${g}</b> significa «${esc(hit.es)}», otra palabra.`:`«${g}» se dice <b>${esc(hit.eu)}</b> en euskera, no esta.`}
    if(q.k==='type'){const d=lev(typed,norm(q.ans));if(d<=2)return `Estabas cerca (${d===1?'1 letra':'2 letras'} de diferencia). Revisa la ortografía.`}
    return '';
  }
  if(q.k==='build'){
    const a=String(given).split(' '),b=q.tokens;
    const extra=a.find(x=>!b.includes(x));
    if(extra)return `«${esc(extra)}» no forma parte de esta frase.`;
    let k=0;while(k<a.length&&k<b.length&&a[k]===b[k])k++;
    if(k===a.length&&a.length<b.length)return `Tu frase iba bien, pero faltan ${b.length-a.length} palabra(s).`;
    return `Tu orden: <b>${g}</b>.<br>La primera diferencia está en la palabra ${k+1}: pusiste «${esc(a[k]||'')}» y tocaba «${esc(b[k]||'')}».`;
  }
  return '';
}
function helpText(q){
  if(q.help)return q.help;
  if(q.k==='build')return `La frase tiene <b>${q.tokens.length}</b> palabras y empieza por <b>${esc(q.tokens[0])}</b>. Recuerda: el verbo va al final.`;
  const a=q.ans?String(q.ans):'',n=a.replace(/[^a-zñ]/gi,'').length;
  if(q.wid&&a){const sid=q.wid.split(':')[0],set=VOCAB.find(s=>s.id===sid),al=a.toLowerCase(),topicLeaks=set&&al.length>2&&(set.eu+' '+set.es).toLowerCase().includes(al);
    return `${set&&!topicLeaks?'Tema: <b>'+esc(set.eu)+'</b>. ':''}La respuesta empieza por <b>«${esc(a.charAt(0))}»</b> y tiene ${n} letras.`}
  if(q.vk&&a)return `Es una forma de <b>${esc(q.vk)}</b>. Empieza por <b>«${esc(a.charAt(0))}»</b>. Mira su tabla en la pestaña Aditzak.`;
  return '';
}
function helpBlock(q){
  if(q.hide||(SES&&SES.cfg&&SES.cfg.nohelp))return '';
  const t=q.k==='flash'?'':helpText(q);
  return t?`<div class="helpbox"><button class="btn sec small" id="hb" type="button" aria-expanded="false">💡 Laguntza · ayuda</button><div class="explain" id="hp" hidden><p>${t}</p></div></div>`:'';
}
const qHead=q=>`<p class="qkind">${esc(q.kind)}</p>${q.em?`<div class="big-emoji">${q.em}</div>`:''}<h2 class="prompt">${esc(q.p)}${q.say?'<button class="speak" id="sp" aria-label="Entzun">🔊</button><button class="speak" id="sl" aria-label="Poliki entzun">🐢</button>':''}</h2><p class="hint">${esc(q.hint||'')}</p>${helpBlock(q)}`;
const choiceHTML=q=>qHead(q)+`<div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join('')}</div>`;
const typeHTML=q=>qHead(q)+`<input class="typebox" id="ti" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Erantzuna"><div style="margin-top:14px"><button class="btn block" id="ck" disabled>Egiaztatu</button></div>`;
const buildHTML=q=>`<p class="qkind">${esc(q.kind)}</p><h2 class="prompt">${esc(q.es)}</h2><p class="hint">Toca las palabras en el orden correcto. Toca una colocada para quitarla.</p>${helpBlock(q)}<div class="line" id="bl"></div><div class="bank" id="bk"></div><button class="btn block" id="ck" disabled>Egiaztatu</button>`;
const flashHTML=q=>`<p class="qkind">Txartelak · toca para girar</p><div class="row" style="justify-content:center;margin-bottom:12px"><button class="speak" id="sp" aria-label="Entzun">🔊</button></div><button class="flash" id="fc"></button><div class="fbtns" id="fb" hidden><button class="btn sec" id="fno">Ez dakit</button><button class="btn ok" id="fyes">Banekien</button></div><p class="note">El botón 🔊 usa la voz en euskera del dispositivo, si tiene una instalada.</p>`;
function bindQ(q){
  const sp=$('#sp');if(sp)sp.onclick=()=>say(q.say||q.eu);const sl=$('#sl');if(sl)sl.onclick=()=>say(q.say||q.eu,true);if(q.auto&&q.say)setTimeout(()=>say(q.say),300);
  const hb=$('#hb');if(hb)hb.onclick=()=>{const p=$('#hp'),mx=helpMax(q);q.hl=Math.min((q.hl||0)+1,mx);p.hidden=false;hb.setAttribute('aria-expanded','true');p.innerHTML=helpMore(q,mx)};
  if(q.k==='choice'){
    $$('.opt').forEach(b=>b.onclick=()=>{
      if(SES.locked)return;
      const ok=q.opts[+b.dataset.i]===q.ans;
      b.classList.add(ok?'good':'bad');
      if(!ok)$$('.opt').forEach(o=>{if(q.opts[+o.dataset.i]===q.ans)o.classList.add('good')});
      grade(ok,q,q.opts[+b.dataset.i]);
    });
  }else if(q.k==='type'){
    const ti=$('#ti'),ck=$('#ck');
    const go=()=>{
      if(SES.locked||!ti.value.trim())return;
      const ok=[q.ans].concat(q.alts||[]).some(a=>norm(a)===norm(ti.value));
      ti.classList.add(ok?'good':'bad');ti.disabled=true;ck.hidden=true;grade(ok,q,ti.value);
    };
    ck.onclick=go;ti.onkeydown=e=>{if(e.key==='Enter')go()};ti.oninput=()=>{ck.disabled=!ti.value.trim()};
    setTimeout(()=>ti.focus(),60);
  }else if(q.k==='build'){
    bindBuild(q);
  }else{
    let flipped=false;const fc=$('#fc');
    const face=()=>{fc.innerHTML=flipped?`<span class="back">${esc(q.es)}</span><small>${esc(q.eu)}</small>`:`${q.em?`<div class="big-emoji">${q.em}</div>`:''}<span class="eu">${esc(q.eu)}</span>`;$('#fb').hidden=!flipped};
    face();fc.onclick=()=>{flipped=!flipped;face()};
    $('#fno').onclick=()=>flashGrade(false,q);
    $('#fyes').onclick=()=>flashGrade(true,q);
  }
}
function bindBuild(q){
  SES.bank=shuffle(q.tokens.concat(q.extra||[]).map((t,j)=>({t,j,used:false})));
  SES.placed=[];
  const draw=()=>{
    $('#bl').innerHTML=SES.placed.map((b,k)=>`<button class="wt" data-k="${k}">${esc(b.t)}</button>`).join('');
    $('#bk').innerHTML=SES.bank.map((b,j)=>`<button class="wt${b.used?' gone':''}" data-j="${j}"${b.used?' tabindex="-1" aria-hidden="true"':''}>${esc(b.t)}</button>`).join('');
    $('#ck').disabled=!SES.placed.length;
    $$('#bl .wt').forEach(e=>e.onclick=()=>{if(SES.locked)return;const b=SES.placed.splice(+e.dataset.k,1)[0];b.used=false;draw()});
    $$('#bk .wt').forEach(e=>e.onclick=()=>{if(SES.locked)return;const b=SES.bank[+e.dataset.j];if(b.used)return;b.used=true;SES.placed.push(b);draw()});
  };
  draw();
  $('#ck').onclick=()=>{
    if(SES.locked||!SES.placed.length)return;
    const ok=SES.placed.map(b=>b.t).join(' ')===q.tokens.join(' ');
    $('#bl').classList.add(ok?'good':'bad');$('#ck').hidden=true;grade(ok,q,SES.placed.map(b=>b.t).join(' '));
  };
}
function flashGrade(ok,q){
  if(ok){
    SES.combo++;SES.best=Math.max(SES.best,SES.combo);
    if(!q.retry){SES.first++;bump(q.wid,true)}
    award(3);
  }else{
    SES.combo=0;SES.miss.push(q);bump(q.wid,false);
    if(!q.retry)SES.qs.push(Object.assign({},q,{retry:true}));
  }
  save();SES.i++;renderQ();
}
function grade(ok,q,given){
  if(SES.cfg&&SES.cfg.test)return testGrade(ok,q,given);
  SES.locked=true;let g=0;
  if(ok){
    SES.combo++;SES.best=Math.max(SES.best,SES.combo);
    if(!q.retry)SES.first++;
    g=(q.retry?5:10)+Math.min(Math.max(SES.combo-2,0),4)*2;
    award(g);
    if(q.wid&&!q.retry)bump(q.wid,true);
    if(q.k==='build'&&!q.retry)S.built++;
  }else{
    SES.combo=0;SES.miss.push(q);
    if(q.wid)bump(q.wid,false);
    if(!q.retry)SES.qs.push(Object.assign({},q,{retry:true}));
  }
  save();sheet(ok,q,g,given);
}
function sheet(ok,q,g,given){
  const good=[['Bikain!','¡Genial!'],['Ederki!','¡Muy bien!'],['Zuzen!','¡Correcto!'],['Primeran!','¡De primera!']];
  const bad=[['Ia-ia!','¡Casi!'],['Ez da hori…','No era esa…'],['Berriro saiatuko gara!','¡Lo repetimos!']];
  const m=ok?good[rnd(4)]:bad[rnd(3)];
  const corr=q.k==='build'?cap(q.tokens.join(' '))+'.':q.ans;
  const d=document.createElement('div');d.className='sheet '+(ok?'good':'bad');d.id='sh';
  const yours=ok?'':yoursText(q,given);
  d.innerHTML=`<div class="in"><h3>${m[0]} <small style="font:500 15px var(--f-body)">${m[1]}${ok&&g?' · +'+g+' XP':''}</small></h3>${ok?`<p>${q.expl||''}</p>`:`<p>Zuzena / correcto: <b>${esc(corr)}</b></p><div class="why"><p><b>Zergatik? · ¿Por qué?</b></p><p>${q.why||q.expl||''}</p>${yours?`<p class="yours">${yours}</p>`:''}${q.retry?'':'<p class="again">Esta pregunta volverá a salir al final de la sesión.</p>'}</div>`}<div class="sheetbtn"><button class="btn ${ok?'ok':''} block" id="nx">Jarraitu</button></div></div>`;
  document.body.appendChild(d);
  const nx=$('#nx');nx.onclick=nextQ;nx.focus();
}
function nextQ(){const d=$('#sh');if(d)d.remove();SES.i++;renderQ()}
function finish(){
  const acc=Math.round(SES.first/SES.total*100);
  S.sess++;if(SES.cfg.tag==='conj')S.conj++;
  if(SES.cfg.lesson){try{lessonLog(SES)}catch(e){}}
  let lessonMsg='';
  if(SES.cfg.lesson){
    const id=SES.cfg.lesson,prev=S.lessons[id];
    if(acc>=80){
      if(prev==null){S.xp+=20;S.today+=20;SES.xp+=20;lessonMsg='🎓 Ikasgaia osatu duzu · lección completada · +20 XP'}
      else lessonMsg='🎓 Lección superada de nuevo';
      S.lessons[id]=Math.max(prev||0,acc);
      if(a1Complete()&&!S.a2unl){S.a2unl=1;lessonMsg+=' · 🔓 ¡A2 desbloqueado! Cámbialo en el selector de nivel'}
    }else lessonMsg='Con un 80 % la lección queda hecha. Repasa los errores y vuelve a intentarlo.';
  }
  if(SES.cfg.daily&&!dailyDone()){S.dailyDay=todayKey();S.dailyN=(S.dailyN||0)+1;S.xp+=30;S.today+=30;SES.xp+=30;lessonMsg='📅 Eguneko erronka osatu duzu · reto diario · +30 XP'}
  const t=acc>=90?['Bikain!','¡Sesión perfecta!']:acc>=80?['Oso ondo!','¡Muy bien!']:['Aurrera!','¡Sigue, vas bien!'];
  const cl=SES.cfg.lesson?LESSONS.find(l=>l.id===SES.cfg.lesson):null;
  const lst=cl?LESSONS.filter(l=>lvOf(l)===lvOf(cl)).sort((a,b)=>a.n-b.n):[];
  const nxt=(cl&&acc>=80)?lst[lst.indexOf(cl)+1]:null;
  const missQs=[],seenM=new Set();SES.miss.forEach(q=>{const k=qKey(q);if(!seenM.has(k)){seenM.add(k);missQs.push(q)}});
  const isL=!!SES.cfg.lesson;
  const missRow=q=>{const pr=q.k==='build'?q.es:(q.p||q.say||''),co=q.k==='build'?cap(q.tokens.join(' '))+'.':(q.ans||'');return `<div class="ex"><b>${esc(pr)}</b> → <b>${esc(co)}</b>${q.k!=='build'&&q.rev?`<small>${q.rev}</small>`:''}</div>`};
  const missCard=missQs.length?`<div class="card" style="text-align:left;margin-top:14px"><b>${isL?'🔁 Errepasatu hutsak · repasa tus fallos':'Berrikusi · repasa'}</b><div class="stack" style="margin-top:8px">${missQs.slice(0,isL?10:6).map(missRow).join('')}</div></div>`:(isL?`<div class="card" style="margin-top:14px"><b>🎉 Hutsik gabe · sin fallos</b></div>`:'');
  $('#view').innerHTML=`<div class="result"><div style="font-size:54px">${acc>=90?'🏆':acc>=80?'🎉':'💪'}</div><h1 class="big">${t[0]}</h1><p class="sub">${t[1]}</p><div class="num">+${SES.xp} XP</div>
  <div class="stats3"><div><b>${acc}%</b><span>a la primera</span></div><div><b>⚡ ${SES.best}</b><span>mejor racha</span></div><div><b>🔥 ${S.streak}</b><span>días seguidos</span></div></div>
  ${lessonMsg?`<div class="explain"><p><b>${lessonMsg}</b></p></div>`:''}
  ${SES.cfg.lesson&&typeof lessonRecap==='function'?lessonRecap(SES.cfg.lesson):''}
  ${missCard}
  <div class="stack" style="margin-top:20px">${nxt?`<button class="btn block" id="nextl">Hurrengo ikasgaia · ${nxt.n}. ${esc(nxt.eu)}</button>`:''}<button class="btn${nxt?' sec':''} block" id="again">${SES.cfg.lesson?'Berriro praktikatu':'Beste saio bat'}</button>${SES.cfg.lesson?'<button class="btn sec block" id="rev">Ikasgaia berrikusi · releer la lección</button>':''}<button class="btn sec block" id="home">Itzuli</button></div></div>`;
  window.scrollTo(0,0);
  const cfg=SES.cfg;
  $('#again').onclick=()=>runSession(cfg);
  $('#home').onclick=()=>endSession();
  if(nxt)$('#nextl').onclick=()=>{endSession(true);openLesson(nxt.id)};
  if(cfg.lesson)$('#rev').onclick=()=>{endSession(true);openLesson(cfg.lesson)};
  save();checkBadges();refreshHeader();
  if(acc>=80)burst();
}
