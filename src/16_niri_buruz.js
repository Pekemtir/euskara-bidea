/* ===== Niri buruz: cuestionario personal y preguntas con tus datos ===== */
const MON_GEN=['urtarrilaren','otsailaren','martxoaren','apirilaren','maiatzaren','ekainaren','uztailaren','abuztuaren','irailaren','urriaren','azaroaren','abenduaren'];
const MON_NOM=['Urtarrila','Otsaila','Martxoa','Apirila','Maiatza','Ekaina','Uztaila','Abuztua','Iraila','Urria','Azaroa','Abendua'];
const MON_ES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const NW=['','bat','bi','hiru','lau','bost','sei','zazpi','zortzi','bederatzi','hamar','hamaika','hamabi','hamahiru','hamalau','hamabost','hamasei','hamazazpi','hemezortzi','hemeretzi'];
const NB=['','','hogei','','berrogei','','hirurogei','','laurogei'];
function numEu(n){
  if(n<20)return NW[n];
  const q=Math.floor(n/20),r=n%20,b=NB[q*2];
  return r?b+'ta '+NW[r]:b;
}
const dayEu=d=>String(d)+([1,5,10,15,21,25,30].includes(d)?'ean':[11,31].includes(d)?'n':'an');
const inePl=p=>{const c=p.slice(-1).toLowerCase();return p+('aeiou'.includes(c)?'n':'en')};
const fromPl=p=>{const l=p.toLowerCase();if(l.endsWith('ea'))return p.slice(0,-1)+'koa';const c=l.slice(-1);return p+('aeiou'.includes(c)?'koa':'ekoa')};
function meAge(m){
  if(!m||!m.y||!m.m||!m.d)return null;
  const t=new Date();let a=t.getFullYear()-m.y;
  if(t.getMonth()+1<m.m||(t.getMonth()+1===m.m&&t.getDate()<m.d))a--;
  return a;
}
const meBirthdayToday=()=>{const m=S.me,t=new Date();return !!(m&&m.d&&m.m&&t.getDate()===m.d&&t.getMonth()+1===m.m)};
function meQs(){
  const m=S.me;if(!m)return [];
  const q=[],nm=m.n,hm=m.h,or=m.o;
  if(nm){
    q.push(sq({t:['ni',nm,'naiz'],es:'Yo soy '+nm+'.',tip:'Ni + tu nombre + naiz.'}));
    q.push(sq({t:['nire','izena',nm,'da'],es:'Mi nombre es '+nm+'.',tip:'nire izena … da = mi nombre es…'}));
    q.push(mc('Zu zara','«¿Cómo te llamas?»','¿Cuál es la pregunta?','Zer da zure izena?',['Nongoa zara?','Non bizi zara?','Zenbat urte dituzu?'],'<b>Zer da zure izena?</b> = ¿cómo te llamas?'));
  }
  if(hm){
    q.push(sq({t:[inePl(hm),'bizi','naiz'],es:'Vivo en '+hm+'.',tip:'lugar + -n/-en + bizi naiz.'}));
    q.push(mc('Zu zara','«Vivo en '+hm+'»','¿Cuál es?',inePl(hm)+' bizi naiz',[hm+'ra bizi naiz',hm+'tik bizi naiz',inePl(hm)+' bizi dut'],'<b>-n / -en</b> = en (dónde). bizi + naiz.'));
    q.push(mc('Zu zara','«¿Dónde vives?»','¿Cuál es la pregunta?','Non bizi zara?',['Nora zoaz?','Nongoa zara?','Noiz jaio zinen?'],'<b>Non bizi zara?</b> = ¿dónde vives?'));
  }
  if(or){
    q.push(sq({t:[fromPl(or),'naiz'],es:'Soy de '+or+'.',tip:'lugar + -ko + a → «de ese lugar».'}));
    q.push(mc('Zu zara','«Soy de '+or+'»','¿Cuál es?',fromPl(or)+' naiz',[or+'ra naiz',or+'tik naiz',inePl(or)+' naiz'],'<b>-koa</b> = de (origen).'));
    q.push(mc('Zu zara','«¿De dónde eres?»','¿Cuál es la pregunta?','Nongoa zara?',['Non bizi zara?','Zer da zure izena?','Nora zoaz?'],'<b>Nongoa zara?</b> = ¿de dónde eres?'));
  }
  if(m.d&&m.m){
    q.push(sq({t:[MON_GEN[m.m-1],dayEu(m.d),'jaio','nintzen'],es:'Nací el '+m.d+' de '+MON_ES[m.m-1]+'.',tip:'mes + -ren + día + -an + jaio nintzen.'}));
    q.push(mc('Zu zara','«¿Cuándo naciste?»','¿Cuál es la pregunta?','Noiz jaio zinen?',['Non jaio zinen?','Zenbat urte dituzu?','Noiz bizi zara?'],'<b>Noiz jaio zinen?</b> = ¿cuándo naciste?'));
  }
  const ag=meAge(m);
  if(ag!=null&&ag>=2&&ag<100){
    q.push(sq({t:numEu(ag).split(' ').concat(['urte','ditut']),es:'Tengo '+ag+' años.',tip:'número + urte ditut.'}));
    q.push(mc('Zu zara','«¿Cuántos años tienes?»','¿Cuál es la pregunta?','Zenbat urte dituzu?',['Zenbat urte zara?','Noiz jaio zinen?','Zer da zure izena?'],'<b>Zenbat urte dituzu?</b>'));
  }
  return shuffle(q).slice(0,9);
}
function meForm(){
  const m=S.me||{},ms=MON_NOM.map((x,i)=>`<option value="${i+1}"${m.m===i+1?' selected':''}>${x}</option>`).join('');
  return `<div class="card" id="meform"><b style="font:400 24px var(--f-display)">Aurkeztu zaitez${S.level==='a2'?'':' · cuéntanos de ti'}</b>
  <p class="es" style="margin:6px 0 12px">${S.level==='a2'?'Datu hauekin galderak sortzen dira zure izenarekin, herriarekin eta urtebetetzearekin. Nabigatzaile honetan bakarrik gordetzen dira. Dena aukerakoa da.':'Con estos datos la app crea preguntas con tu nombre, tu pueblo y tu cumpleaños. Se guardan solo en este navegador. Todo es opcional.'}</p>
  <div class="stack" style="gap:8px">
  <input class="fld" id="me-n" placeholder="Zure izena · tu nombre" value="${esc(m.n||'')}" autocomplete="off" maxlength="30">
  <input class="fld" id="me-h" placeholder="Non bizi zara? · dónde vives (ej. Elizondo)" value="${esc(m.h||'')}" autocomplete="off" maxlength="30">
  <input class="fld" id="me-o" placeholder="Nongoa zara? · de dónde eres (ej. Bilbo)" value="${esc(m.o||'')}" autocomplete="off" maxlength="30">
  <div class="row" style="gap:8px;flex-wrap:nowrap"><input class="fld" id="me-d" type="number" inputmode="numeric" min="1" max="31" placeholder="Egun · día" value="${m.d||''}" style="flex:1;min-width:0"><select class="fld" id="me-m" style="flex:2;min-width:0"><option value="">Hilabetea · mes</option>${ms}</select><input class="fld" id="me-y" type="number" inputmode="numeric" min="1900" max="2100" placeholder="Urtea · año" value="${m.y||''}" style="flex:1.3;min-width:0"></div>
  <div class="row"><button class="btn" data-act="mesave">Gorde · guardar</button><button class="btn sec" data-act="meskip">${S.me?'Utzi · cancelar':'Orain ez · ahora no'}</button></div></div></div>`;
}
function meCard(){
  if(UI.meEdit||(!S.me&&!S.meSkip))return meForm();
  return '';
}
function meSave(){
  const v=id=>($('#'+id)||{value:''}).value.trim().replace(/[<>]/g,'');
  const m={n:v('me-n'),h:v('me-h'),o:v('me-o'),d:+v('me-d')||0,m:+v('me-m')||0,y:+v('me-y')||0};
  if(m.d&&(m.d<1||m.d>31))m.d=0;
  const yr=new Date().getFullYear();if(m.y&&(m.y<1900||m.y>yr))m.y=0;
  if(m.d&&!m.m)m.d=0;
  if(!m.n&&!m.h&&!m.o&&!(m.d&&m.m)){toast('Escribe al menos un dato');return false}
  S.me=m;S.meSkip=0;UI.meEdit=false;save();return true;
}
