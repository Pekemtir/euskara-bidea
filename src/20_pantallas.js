/* ===== PANTALLAS ===== */
const TABS=[['home','🏠','Hasiera'],['ikasgela','🎓','Ikasgela'],['praktika','🎯','Praktika'],['hiztegia','🔍','Hiztegia'],['ni','👤','Ni']];
const PAR={hitzak:'praktika',aditzak:'praktika',esaldiak:'praktika',jolak:'praktika',gida:'praktika',test:'praktika',ezarpenak:'ni',legala:'ni'};
const verbKeys=()=>Object.keys(CONJ).filter(k=>lvOf(CONJ[k])===S.level);
const UI={verb:'izan',lab:{v:0,tk:'oraina',i:0}};
const validRoute=h=>TABS.some(t=>t[0]===h)||!!PAR[h];
let CUR=(function(){let h='';try{h=location.hash.slice(1)}catch(e){}if(h==='ezarpenak')h='ni';return validRoute(h)?h:'home'})();
const route=()=>CUR;
function goTo(name){
  if(name==='ezarpenak')name='ni';
  CUR=validRoute(name)?name:'home';
  try{if(location.hash.slice(1)!==CUR)location.hash=CUR}catch(e){}
  render();window.scrollTo(0,0);
}

function levelBar(){
  const open=a2Open();
  return `<div class="lvbar"><span class="qkind" style="margin:0">Maila${S.level==='a2'?'':' · nivel'}</span><div class="sel"><button class="pill${S.level==='a1'?' on':''}" data-act="lvl" data-l="a1">A1</button><button class="pill${S.level==='a2'?' on':''}" data-act="lvl" data-l="a2">A2${open?'':' 🔒'}</button></div></div>${open?'':`<p class="note" style="margin:0 0 12px">El A2 se abre al completar las ${a1Total()} lecciones del A1 (llevas ${a1Done()}/${a1Total()}) o al superar el <b>Test</b> de salto de nivel. ¿Profesor o demo? Código en Ni.</p>`}`;
}
function wotdCard(){
  const a=allWords(),w=a[Math.floor(Date.now()/864e5)%a.length];
  return `<div class="card wotd"><div class="grow"><span class="qkind">Gaurko hitza${S.level==='a2'?'':' · palabra del día'}</span><div class="big2">${esc(w.em?w.em+' ':'')}${esc(w.eu)}</div><span class="es">${esc(w.es)}</span></div><button class="spk" data-act="say" data-t="${esc(w.eu)}" aria-label="Escuchar">🔊</button></div>`;
}
function settingsCard(){
  return `  <div class="card"><b>Soinua · sonido</b><p class="es" style="margin:6px 0 10px">Para la calle o el metro: sin sonido ni ejercicios de escucha.</p><div class="sel"><button class="pill${S.mute?'':' on'}" data-act="mute">${S.mute?'🔇 Silenciado · sin sonido':'🔊 Activado'}</button></div></div>
  ${voiceCard()}
  <div class="card"><b>Itxura · tema</b><div class="sel" style="margin-top:8px">${[['dark','🌙 Pizarra'],['light','☀️ Argia'],['auto','🌓 Automatikoa']].map(t=>`<button class="pill${(S.theme||'dark')===t[0]?' on':''}" data-act="theme" data-t="${t[0]}">${t[1]}</button>`).join('')}</div></div>
  <div class="card"><b>Eguneko helburua · meta diaria</b><div class="sel" style="margin-top:8px">${[30,50,100,150].map(g=>`<button class="pill${S.goal===g?' on':''}" data-act="goal" data-g="${g}">${g} XP</button>`).join('')}</div></div>
  <div class="card" style="margin-top:12px"><b>Nire datuak · mis datos</b><p class="es" style="margin:6px 0 10px">Nombre, pueblo y cumpleaños para las preguntas personales.</p><button class="btn sec small" data-act="medit">Editatu · editar</button></div>
  <div class="card" style="margin-top:12px"><b>Ahoskera proba · prueba de pronunciación</b>
  <p class="es" style="margin:6px 0 10px">${(speechSynthesis.getVoices&&speechSynthesis.getVoices().some(v=>/^eu/i.test(v.lang)))?'Tu móvil tiene voz de euskera: se usa tal cual.':'Tu móvil no tiene voz de euskera: el audio usa una voz de castellano con el texto reescrito (el alumno no lo ve). Toca cada palabra y dime las que suenan mal.'}</p>
  <div class="sel">${['kaixo','eskerrik asko','zer moduz','etxea','txakurra','gizona','jatetxea','ikaslea','egin','zortzi','bihar','hamar','ehun','herria','gazteak','baserria','eguzkia','ikusi','nire izena','mina','baina','janaria'].map(w=>`<button class="pill" data-act="say" data-t="${w}">🔊 ${w}<small style="opacity:.6"> · ${esc(phon(w))}</small></button>`).join('')}</div></div>
  <div class="card" style="margin-top:12px"><b>Sarbide-kodea · código de acceso</b>
  <p class="es" style="margin:6px 0 10px">Para profesores o para probar la app: desbloquea el A2 sin completar el A1.</p>
  ${S.a2key===1?'<p class="okmsg" style="margin:0 0 10px">Acceso especial activo: A2 desbloqueado.</p><button class="btn sec small" data-act="codeoff">Desaktibatu · desactivar</button>':'<div class="row"><input class="fld grow" id="acc" type="text" placeholder="Código" autocomplete="off" autocapitalize="off" spellcheck="false" style="min-width:0"><button class="btn sec small" data-act="code">Sartu</button></div><div id="accm"></div>'}</div>
  <div class="card" style="margin-top:12px"><b>Babeskopia · copia de seguridad</b>
  <p class="es" style="margin:6px 0 10px">Tu progreso vive en este navegador. Copia el código para llevarlo a otro móvil u otro navegador (o para no perderlo si borras los datos).</p>
  <div class="row"><button class="btn sec small" data-act="exp">Código sortu · generar</button><button class="btn sec small" data-act="imp">Inportatu · importar</button></div>
  <textarea class="fld" id="bk" hidden spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="Pega aquí tu código y pulsa Importar de nuevo"></textarea>
  <div id="bkm"></div>
  <button class="btn sec small" style="margin-top:14px" data-act="reset">Progresua ezabatu · borrar progreso</button></div>`;
}
function wordsFind(q){
  q=norm(q);if(q.length<2)return [];
  return allWords(true).filter(w=>norm(w.eu).includes(q)||norm(w.es).includes(q)).slice(0,25);
}
function weakQs(){
  const a=KW().map(w=>({w,k:mast(w.id)+Math.random()*1.5})).sort((x,y)=>x.k-y.k).slice(0,12).map(x=>x.w);
  return vocabQs(a,10);
}
function exportCode(){return btoa(unescape(encodeURIComponent(JSON.stringify(S))))}
function importCode(c){
  const o=JSON.parse(decodeURIComponent(escape(atob(c.replace(/\s+/g,'')))));
  if(!o||typeof o!=='object'||typeof o.xp!=='number'||typeof o.m!=='object')throw new Error('bad');
  return o;
}
function bkMsg(t,ok){const m=$('#bkm');if(m)m.innerHTML=`<p class="${ok?'okmsg':'errmsg'}">${esc(t)}</p>`}
function lvDone(lv){const L=LESSONS.filter(l=>lvOf(l)===lv);return[L.filter(l=>lessonDone(l.id)).length,L.length]}
function homeView(){
  const g=Math.min(1,S.today/S.goal),circ=2*Math.PI*30;
  const A2=S.level==='a2',X=(sp,eu)=>A2?eu:sp;
  const nm=S.me&&S.me.n?esc(S.me.n):'',nx=nextLesson();
  const [d1,t1]=lvDone('a1'),[d2,t2]=lvDone('a2');
  const wk=KW().filter(w=>mast(w.id)<2).length;
  const tile=(act,ic,t,s,extra)=>`<button class="tile" data-act="${act}"${extra||''}><span class="ic">${ic}</span><span class="t">${t}</span><span class="s">${s}</span></button>`;
  return `<h1 class="big">Kaixo${nm?', '+nm:''}!</h1>
  <p class="sub">${meBirthdayToday()?'🎂 <b>Zorionak!</b> '+X('Hoy es tu urtebetetzea.','Gaur zure urtebetetzea da!'):X('Curso de euskera A1 + A2','Euskara ikastaroa A1 + A2')}</p>
  <div class="stack">
  <div class="card goal">
    <svg class="ring" viewBox="0 0 76 76" role="img" aria-label="Meta diaria"><circle class="bg" cx="38" cy="38" r="30"/><circle class="fg" cx="38" cy="38" r="30" stroke-dasharray="${circ}" stroke-dashoffset="${circ*(1-g)}" transform="rotate(-90 38 38)"/><text x="38" y="44" text-anchor="middle" class="rt">${Math.round(g*100)}%</text></svg>
    <div class="grow"><b>Gaurko helburua</b><span class="es">${Math.min(S.today,S.goal)} / ${S.goal} XP · ${X('racha','bolada')} ${S.streak} ${X('días','egun')}</span></div>
  </div>
  ${nx?`<button class="card cont" data-act="lesson" data-id="${nx.id}"><span class="ic">${nx.ic}</span><span class="grow"><small>${X('Continúa','Jarraitu')} · ${S.level.toUpperCase()} ${nx.n}. ${X('lección','ikasgaia')}</small><b>${esc(nx.eu)}</b>${A2&&nx.n>=16?'':`<small>${esc(nx.es)}</small>`}</span><span class="play">▶</span></button>`:`<div class="card"><b>${X('¡Has completado todas las lecciones! Repásalas cuando quieras.','Ikasgai guztiak osatu dituzu! Errepasatu nahi duzunean.')}</b></div>`}
  ${wotdCard()}
  ${srsCard()}
  <div class="tiles2">
    ${tile('quick','⚡','Saio azkarra',X('10 preguntas · +XP','10 galdera'))}
    ${tile('weak','🎯','Errepasoa',X(wk+' palabras por repasar',wk+' hitz errepasatzeko'))}
  </div>
  <h2 class="sec">${X('Tu progreso','Zure aurrerapena')}</h2>
  <div class="card prog">
    <div class="row" style="justify-content:space-between"><b>A1</b><span class="es">${d1} / ${t1}</span></div><div class="bar"><i style="width:${d1/t1*100}%"></i></div>
    <div class="row" style="justify-content:space-between;margin-top:12px"><b>A2</b><span class="es">${d2} / ${t2}</span></div><div class="bar"><i style="width:${d2/t2*100}%"></i></div>
  </div>
  <p class="es" style="margin:0">${X('Logros','Lorpenak')}: ${S.badges.length} / ${BADGES.length}</p>
  ${meCard()}
  </div>`;
}
function praktikaView(){
  const A2=S.level==='a2',X=(sp,eu)=>A2?eu:sp;
  const avg=Math.round(allWords().reduce((a,w)=>a+mast(w.id),0)/(allWords().length*4)*100);
  const wk=KW().filter(w=>mast(w.id)<2).length;
  const tl=[
    ['quick','','⚡','Saio azkarra',X('Mezcla de todo','Dena nahastuta')],
    ['weak','','🎯','Errepasoa',X(wk+' por repasar',wk+' errepasatzeko')],
    ['go','hitzak','📚','Hitzak',X('Vocabulario por temas · '+avg+'%','Gaikako hiztegia · %'+avg)],
    ['go','aditzak','🧩','Aditzak',X('Tablas y conjugación','Taulak eta konjugazioa')],
    ['go','esaldiak','🧱','Esaldiak',X('Construir frases','Esaldiak eraiki')],
    ['daily','','📅','Eguneko erronka',dailyDone()?X('Hecho hoy ✔','Gaur eginda ✔'):X('Reto diario · +30 XP','Eguneko erronka · +30 XP')],
    ['listen','','🎧','Entzun',X('Escucha y elige','Entzun eta aukeratu')],
    ['dict','','✍️','Diktatua',X('Escribe lo que oyes','Idatzi entzuten duzuna')],
    ['numq','','🔢','Zenbakiak',X('Números dictados','Zenbakiak entzunda')],
    ['abcq','','🔠','Alfabetoa',X('Deletreo con audio','Letrak entzunda')],
    ['srs','','🧠','Errepaso adimentsua',X(srsDue().length+' palabras para hoy',srsDue().length+' hitz gaurko')],
    ['go','jolak','🎮','Jolasak',X('4 juegos','4 jolas')],
    ['nn','','⚖️','Aditz motak','NOR, NORK, NORI…'],
    ['go','gida','💡','Gida',X('Gramática en claro','Gramatika argian')],
    ['go','test','📝','Test',X('Saltar nivel o autoevaluarte','Maila saltatu edo autoebaluazioa')]
  ];
  const html=tl.map(t=>`<button class="tile" data-act="${t[0]}"${t[1]?` data-to="${t[1]}"`:''}><span class="ic">${t[2]}</span><span class="t">${t[3]}</span><span class="s">${t[4]}</span></button>`).join('');
  return `<h1 class="big">Praktika</h1><p class="sub">${X('Elige cómo quieres entrenar.','Aukeratu nola entrenatu.')}</p><div class="tiles">${html}</div>`;
}
function niView(){
  const A2=S.level==='a2',X=(sp,eu)=>A2?eu:sp;
  return `<h1 class="big">Ni</h1>
  ${UI.meEdit?meForm():''}
  <div class="stats3"><div><span>XP</span><b>⭐ ${S.xp}</b></div><div><span>${X('Racha','Bolada')}</span><b>🔥 ${S.streak}</b></div><div><span>${X('Nivel','Maila')}</span><b>${lvl()+1}/${LV.length}</b></div></div>
  <p class="es" style="margin:-8px 0 14px"><b>${LV[lvl()][0]}</b>${A2?'':' · '+LV[lvl()][1]}</p>
  <h2 class="sec">${X('Logros','Lorpenak')}</h2>
  <div class="badges">${BADGES.map(b=>`<div class="badge${S.badges.includes(b[0])?'':' off'}" title="${esc(b[3])}"><span>${b[1]}</span><div><b>${b[2]}</b><br><small>${b[3]}</small></div></div>`).join('')}</div>
  <div class="tiles2" style="margin:18px 0 0"><button class="tile" data-act="me"><span class="ic">👤</span><span class="t">Niri buruz</span><span class="s">${S.me?X('Frases con tus datos','Zure datuekin esaldiak'):X('Cuéntanos de ti','Kontatu zerbait zuri buruz')}</span></button><button class="tile" data-act="go" data-to="test"><span class="ic">📝</span><span class="t">Test</span><span class="s">${X('Saltar nivel o autoevaluarte','Maila saltatu edo autoebaluazioa')}</span></button><button class="tile" data-act="go" data-to="legala"><span class="ic">⚖️</span><span class="t">Kredituak eta legala</span><span class="s">${X('Licencias, créditos y privacidad','Lizentziak, kredituak eta pribatutasuna')}</span></button></div>
  <h2 class="sec">${X('Ajustes','Ezarpenak')}</h2>
  <div class="stack">${settingsCard()}</div>`;
}
function legalView(){
  return `<h1 class="big">Kredituak eta legala</h1><p class="sub">Créditos, licencias y privacidad.</p>
  <div class="stack">
  <div class="card"><b>Eduki originala · contenido original</b><p style="margin:8px 0 0">Todas las lecciones, explicaciones, ejemplos, ejercicios, frases, listas de vocabulario y entradas del diccionario de esta aplicación son <b>texto original</b> escrito para este curso. No se ha copiado ni traducido ningún manual, libro de texto, examen ni diccionario. Las palabras y las reglas gramaticales de la lengua son de dominio común; aquí solo hay expresión propia.</p></div>
  <div class="card"><b>Lizentziak · licencias</b><ul style="margin:8px 0 0;padding-left:20px"><li><b>Código</b>: licencia MIT.</li><li><b>Contenidos del curso</b> (textos, ejercicios, vocabulario): Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0). Puedes compartirlos y adaptarlos citando la autoría y sin uso comercial.</li><li><b>Tipografías</b> Patrick Hand, Nunito y JetBrains Mono, incrustadas, bajo la SIL Open Font License 1.1.</li></ul></div>
  <div class="card"><b>Erreferentziak · fuentes de referencia</b><p style="margin:8px 0 0">El temario se ha contrastado con descripciones públicas de los niveles A1 y A2 de enseñanza del euskera para adultos (UNED, Gobierno Vasco, HEOC/HABE y EHU, junto con el Marco común europeo de referencia) y con el programa de un curso real de A1. Solo se han consultado como referencia de contenidos y de orden; no se ha reutilizado ningún texto.</p></div>
  <div class="card"><b>Afiliaziorik gabe · sin afiliación</b><p style="margin:8px 0 0">Este es un proyecto independiente y <b>no está afiliado ni avalado</b> por ninguna de esas entidades. No es un curso oficial ni emite certificados. Para obtener un certificado oficial, consulta la convocatoria vigente del organismo correspondiente. Los nombres de entidades se citan solo para identificarlas.</p></div>
  <div class="card"><b>Pribatutasuna · privacidad</b><p style="margin:8px 0 0">La app funciona en tu dispositivo. No tiene cuentas, ni anuncios, ni rastreadores, ni cookies. El progreso se guarda en tu navegador (localStorage) y no se envía a ningún sitio. El audio usa la síntesis de voz de tu dispositivo.</p></div>
  <div class="card"><b>Oharra · aviso</b><p style="margin:8px 0 0">Material educativo «tal cual», sin garantías. Puede contener errores; si encuentras alguno, ayudarás a mejorarlo. El contenido no ha sido revisado por un profesor de euskera.</p></div>
  </div>`;
}
function hiztegiaView(){UI.dict=true;return dictView()}
function hitzakView(){
  if(UI.dict)return dictView();
  return `${levelBar()}<h1 class="big">Hitzak</h1><p class="sub">Vocabulario por temas. Cuanto menos domines una palabra, más veces aparece.</p>
  <div class="stack"><input class="fld" id="srch" type="search" placeholder="🔍 Bilatu · busca en euskera o español" autocomplete="off" autocapitalize="off" spellcheck="false"><div class="card" id="srr" hidden></div><button class="btn sec block" data-act="dict">📖 Hiztegia · diccionario de consulta (1700+ palabras)</button><button class="btn block" data-act="mixv">Dena nahastu · 10 galdera</button>
  ${VOCAB.filter(s=>lvOf(s)===S.level).map(s=>`<div class="card"><div class="setrow"><span class="ic">${s.ic}</span><div class="grow"><b>${s.eu}</b><div class="es">${s.es} · ${s.w.length} hitz</div></div><span class="chip">${setPct(s)}%</span></div>
  <div class="bar"><i style="width:${setPct(s)}%"></i></div>
  <div class="words">${s.w.slice(0,6).map(w=>`<span class="w">${esc(w[0])}</span>`).join('')}${s.w.length>6?'<span class="w">…</span>':''}</div>
  <div class="row" style="margin-top:12px"><button class="btn small" data-act="quiz" data-set="${s.id}">Galderak</button><button class="btn sec small" data-act="flash" data-set="${s.id}">Txartelak</button></div></div>`).join('')}</div>`;
}

function conjTable(vk){
  const c=CONJ[vk],tks=Object.keys(c.T),pr=pronOf(c),pe=pronEs(c);
  return `<div class="tscroll"><table class="conj"><thead><tr><th></th>${tks.map(k=>`<th>${esc(c.T[k].n)}</th>`).join('')}</tr></thead><tbody>${PRON.map((p,i)=>`<tr><th scope="row">${pr[i]}<br><small>${pe[i]}</small></th>${tks.map(k=>{const t=c.T[k];return `<td>${t.seg?segHTML(t.seg[i]):esc(t.f[i])}</td>`}).join('')}</tr>`).join('')}</tbody></table></div>`;
}
const VNOTE={
  izan:'<b>izan</b> dice quién o qué eres: <i>Ni Dabid naiz</i>. También es el auxiliar de los verbos sin objeto (joan, etorri, bizi…).',
  'joan (iragana)':'<b>nindoan</b> = iba / fui, forma sintética de <b>joan</b> en pasado. Con zu: <b>zindoazen</b>.',
  'etorri (iragana)':'<b>nentorren</b> = venía, forma sintética de <b>etorri</b> en pasado: zetorren, gentozen…',
  ibili:'<b>ibili</b> = andar, moverse: <i>nabil</i> (ando), <i>dabil</i> (anda). Es una forma sintética (sin auxiliar).',
  'ibili (iragana)':'<b>nenbilen</b> = andaba, pasado de <b>ibili</b>: zebilen, genbiltzan…',
  jakin:'<b>jakin</b> = saber (algo): <i>Euskaraz badakit</i>. <b>dakit, dakizu, daki…</b> Con -t(z)en: <i>Euskaraz hitz egiten badakit</i> (sé hablar euskera).',
  'eman (berak… niri, zuri…)':'<b>zidan</b> = me (lo) dio; <b>dit</b> = me (lo) da. La persona de la tabla es el «a quién» (niri, zuri, berari…). Varias cosas: zizkidan, dizkit.',
  ekarri:'<b>ekarri</b> = traer (hacia aquí): <i>dakart</i>, <i>dakarzu</i>… Varias cosas: <i>dakartzat</i>.',
  eraman:'<b>eraman</b> = llevar (hacia allá): <i>daramat</i>, <i>daramazu</i>… Varias cosas: <i>daramatzat</i>.',
  'ahal (dezaket)':'<b>dezaket</b> = puedo (con verbos que llevan objeto): <i>Euskaraz hitz egin dezaket</i>.',
  'ahal (naiteke)':'<b>naiteke</b> = puedo (con verbos sin objeto): <i>Etor naiteke. Sar naiteke?</i>',
  gustatu:'<b>gustatu</b> (NOR-NORI): lo que gusta es el «sujeto» y a quién le gusta va en -ri. <i>Amari kafea gustatzen zaio</i> = a mamá le gusta el café. <b>zait / zaio…</b> si gusta una cosa; <b>zaizkit / zaizkio…</b> si gustan varias.',
  eman:'<b>eman</b> (NOR-NORI-NORK): <i>Amari liburua ematen diot</i> = le doy el libro a mamá. Aquí la tabla es para «le» (a él/ella): <b>diot, diozu, dio…</b>; con varias cosas: <b>dizkiot…</b>',
  egon:'<b>egon</b> dice dónde o cómo estás: <i>Etxean nago. Ondo nago.</i>',
  ukan:'<b>ukan</b> es el auxiliar de los verbos con objeto: <i>ogia jaten dut</i>. Su forma cambia según cuántas cosas haya: <b>dut</b> (una), <b>ditut</b> (varias).',
  eduki:'<b>eduki</b> = tener: <i>Liburu bat daukat</i> (tengo un libro), <i>Bi liburu dauzkat</i> (tengo dos libros).',
  joan:'<b>joan</b> también se puede decir <i>joaten naiz</i>. Las formas sin auxiliar (noa, zoaz…) son muy frecuentes en el habla.',
  etorri:'<b>etorri</b> también se dice <i>etortzen naiz</i>. Las formas sin auxiliar (nator, zatoz…) son muy frecuentes.'
};
function labHTML(){
  const L=UI.lab,v=PART[L.v];
  if(v.only&&!v.only.includes(L.tk))L.tk='oraina';
  const g=genSentence(v,L.tk,L.i);
  const roles=['sub','obj','part'].concat(L.tk==='ari'?['ari']:[]).concat(['aux']);
  const auxv=(v.ty==='nor'||L.tk==='ari')?'izan':'ukan';
  const lab={
    sub:'quién'+((v.ty==='nork'&&L.tk!=='ari')?' · lleva -k':' · sin -k'),
    obj:v.ty==='nork'?'qué':(v.p==='bizi'?'dónde':'adónde'),
    part:{oraina:'verbo · forma habitual',iragana:'verbo · participio',perfektua:'verbo · participio',geroa:'verbo + -ko / -go',ari:'verbo · forma habitual'}[L.tk],
    ari:'«ari» = ahora mismo',
    aux:'auxiliar '+auxv
  };
  const cls={sub:'p-sub',obj:'p-obj',part:'p-part',ari:'p-part',aux:'p-aux'};
  const es=g.esTxt||`${PRON_ES[L.i]} · ${v.es} «${v.eso}» · ${TEN[L.tk].es}`;
  return `<div class="card"><div class="stack">
  <div><p class="qkind">Aditza</p><div class="sel">${PART.map((p,k)=>`<button class="pill${k===L.v?' on':''}" data-act="labv" data-i="${k}">${p.p}</button>`).join('')}</div></div>
  <div><p class="qkind">Denbora</p><div class="sel">${Object.keys(TEN).filter(k=>!v.only||v.only.includes(k)).map(k=>`<button class="pill${k===L.tk?' on':''}" data-act="labt" data-t="${k}">${TEN[k].eu}</button>`).join('')}</div></div>
  <div><p class="qkind">Nor edo nork</p><div class="sel">${PRON.map((p,i)=>`<button class="pill${i===L.i?' on':''}" data-act="labp" data-i="${i}">${p}</button>`).join('')}</div></div>
  </div>
  <div class="pieces" style="margin-top:18px">${g.tokens.map((t,k)=>`<div class="piece ${cls[roles[k]]}"><span class="f">${esc(t)}</span><span class="l">${lab[roles[k]]}</span></div>`).join('')}</div>
  <div class="explain"><p><b>${esc(cap(g.tokens.join(' ')))}.</b></p><p class="es">${esc(es)}</p><p>${genTip(v,L.tk)}</p></div></div>`;
}
const vtype=k=>/^eman/.test(k)?'NOR-NORI-NORK':({nor:'NOR',nork:'NOR-NORK',nori:'NOR-NORI'})[CONJ[k].ty]||'';
function aditzakView(){
  if(!verbKeys().includes(UI.verb))UI.verb=verbKeys()[0];
  const vk=UI.verb;
  return `${levelBar()}<h1 class="big">Aditzak</h1><p class="sub">Elige un verbo, mira cómo se forma y practica. Los colores te enseñan qué hace cada pieza.</p>
  <div class="sel" style="margin-bottom:14px">${verbKeys().map(k=>`<button class="pill${k===vk?' on':''}" data-act="verb" data-v="${k}">${k}</button>`).join('')}</div>
  <p style="margin:0 0 6px"><span class="chip">${vtype(vk)}</span></p><p style="margin:0 0 12px">${VNOTE[vk]}</p>
  ${conjTable(vk)}
  ${(CONJ[vk].T.oraina1&&CONJ[vk].T.oraina1.seg)?`<div class="legend"><span><b class="m-obj">d-</b> el objeto («lo»)</span><span><b class="m-root">u / itu</b> raíz (u = una cosa, itu = varias)</span><span><b class="m-person">-t -zu -gu…</b> quién lo hace</span></div>`:''}
  <div class="stack" style="margin-top:16px">
    <button class="btn block" data-act="practice">Praktikatu: ${vk}</button>
    <button class="btn sec block" data-act="practiceall">Aditz guztiak · 10 galdera</button>
    <label class="row" style="gap:10px;cursor:pointer"><input type="checkbox" id="tm" data-act="typemode"${S.typeMode?' checked':''} style="width:20px;height:20px"> <span>Idatzi nahi dut <span class="es">· escribir la forma en vez de elegirla (más difícil)</span></span></label>
  </div>
  <h2 class="sec">Aditz-laborategia <span class="es" style="font:500 14px var(--f-body)">· laboratorio</span></h2>
  <p class="sub">Verbo + tiempo + persona. Mira cómo se arma la frase pieza a pieza.</p>
  ${labHTML()}`;
}

function esaldiakView(){
  const ex=['nik','ogia','jaten','dut'];
  const lbs=[['p-sub','quién (con -k)'],['p-obj','qué'],['p-part','verbo'],['p-aux','auxiliar']];
  return `<h1 class="big">Esaldiak</h1><p class="sub">Ordena las palabras y entenderás cómo funciona una frase vasca.</p>
  <div class="stack">
  <button class="btn block" data-act="build">Eraiki esaldiak · 6 galdera</button>
  <button class="btn sec block" data-act="nn">Nor ala nork? · 8 galdera</button>
  <div class="card"><b style="font:700 18px var(--f-display)">Hitz-ordena · el orden</b>
  <p style="margin:8px 0 0">En euskera el verbo va al final. El esquema de casi toda frase simple es:</p>
  <div class="pieces" style="margin-top:12px">${ex.map((t,k)=>`<div class="piece ${lbs[k][0]}"><span class="f">${t}</span><span class="l">${lbs[k][1]}</span></div>`).join('')}</div>
  <div class="explain"><p><b>Nik ogia jaten dut.</b></p><p class="es">Literal: «Yo pan como». En español: «Yo como pan».</p></div></div>
  </div>`;
}

function ezarpenakView(){
  return `<h1 class="big">Ezarpenak</h1><p class="sub">Ajustes, tus datos, código de acceso y copia de seguridad.</p><div class="stack">${UI.meEdit?meForm():''}${settingsCard()}</div>`;
}
function gidaView(){
  const ex=(eu,es)=>`<div class="ex">${eu}<small>${es}</small></div>`;
  const t6=[['Oraina (hábito)','habitual + auxiliar','jaten dut','joaten naiz'],['Ari izan (ahora)','habitual + ari + izan','jaten ari naiz','joaten ari naiz'],['Iragana','participio + aux. pasado','jan nuen','joan nintzen'],['Perfektua','participio + aux. presente','jan dut','joan naiz'],['Geroa','participio + ko / go + aux.','jango dut','joango naiz']];
  return `<h1 class="big">Gida</h1><p class="sub">La gramática del A1 en claro. Abre una sección y practica después.</p>
  <button class="btn block" data-act="nn" style="margin-bottom:14px">Probatu: zein aditz mota? · NOR, NORK, NORI</button>
  <details class="g" open><summary>1 · El orden de la frase</summary><div class="body">
  <p>Sujeto → objeto → verbo + auxiliar. El verbo cierra la frase.</p>
  ${ex('<b>Nik</b> ogia jaten dut.','Yo pan como = Yo como pan.')}${ex('<b>Ni</b> Iruñera joaten naiz.','Yo a Pamplona voy = Voy a Pamplona.')}</div></details>
  <details class="g"><summary>2 · Izan o egon</summary><div class="body">
  <p><b>izan</b> = ser: quién eres, de dónde, profesión. <b>egon</b> = estar: dónde y cómo estás.</p>
  ${ex('Ni Dabid <b>naiz</b>. Ni Nafarroakoa <b>naiz</b>.','Soy David. Soy de Navarra.')}${ex('Etxean <b>nago</b>. Ondo <b>nago</b>.','Estoy en casa. Estoy bien.')}
  <table class="mini"><tr><th></th><th>izan</th><th>egon</th></tr>${PRON.map((p,i)=>`<tr><td>${p}</td><td>${CONJ.izan.T.oraina.f[i]}</td><td>${CONJ.egon.T.oraina.f[i]}</td></tr>`).join('')}</table></div></details>
  <details class="g"><summary>3 · Nor o nork: qué auxiliar uso</summary><div class="body">
  <p>Pregúntate si el verbo lleva objeto directo («¿qué?»).</p>
  <table class="mini"><tr><th>Sin objeto</th><th>Con objeto</th></tr><tr><td>auxiliar <b>izan</b>: naiz, zara, da…<br>sujeto sin -k: <i>ni</i>, <i>zu</i></td><td>auxiliar <b>ukan</b>: dut, duzu, du…<br>sujeto con -k: <i>nik</i>, <i>zuk</i></td></tr><tr><td>joan, etorri, bizi, egon</td><td>jan, edan, ikusi, irakurri, ikasi</td></tr></table>
  ${ex('Ni etxera <b>joan naiz</b>.','He ido a casa (sin objeto → izan).')}${ex('<b>Nik</b> ogia <b>jan dut</b>.','He comido pan (con objeto → ukan).')}</div></details>
  <details class="g"><summary>4 · Los tiempos, pieza a pieza</summary><div class="body">
  <p>Casi todos los verbos usan <b>participio + auxiliar</b>. Lo que cambia es la forma del participio y el auxiliar.</p>
  <div class="tscroll"><table class="mini"><tr><th>Tiempo</th><th>Fórmula</th><th>jan</th><th>joan</th></tr>${t6.map(r=>`<tr>${r.map((c,k)=>`<td>${k>=2?'<b>'+c+'</b>':c}</td>`).join('')}</tr>`).join('')}</table></div>
  <p style="margin-top:10px">Forma habitual: <b>jan → jaten</b>, <b>edan → edaten</b>, <b>ikasi → ikasten</b>, <b>irakurri → irakurtzen</b>. Se aprende con cada verbo.</p>
  <p>Futuro: <b>-go</b> detrás de -n (jan → jango, joan → joango) y <b>-ko</b> en el resto (ikusi → ikusiko).</p></div></details>
  <details class="g"><summary>5 · Terminaciones: a dónde, en dónde, con quién</summary><div class="body">
  <table class="mini"><tr><th>Final</th><th>Significa</th><th>Ejemplo</th></tr>
  <tr><td>-a / -ak</td><td>el, la / los, las</td><td>etxea / etxeak</td></tr>
  <tr><td>-k</td><td>sujeto con objeto</td><td>aitak ogia jaten du</td></tr>
  <tr><td>-n</td><td>en</td><td>etxean, Elizondon</td></tr>
  <tr><td>-ra</td><td>a, hacia</td><td>etxera, Iruñera</td></tr>
  <tr><td>-tik</td><td>desde</td><td>etxetik, Iruñetik</td></tr>
  <tr><td>-rekin</td><td>con</td><td>lagunarekin</td></tr>
  <tr><td>-ren</td><td>de (posesión)</td><td>aitaren etxea</td></tr>
  <tr><td>-z</td><td>en / mediante</td><td>euskaraz</td></tr>
  <tr><td>-ko / -go</td><td>de (lugar o tiempo)</td><td>Baztango, gaurko</td></tr></table></div></details>
  <details class="g"><summary>6 · Preguntar</summary><div class="body">
  <table class="mini"><tr><th>Palabra</th><th>Ejemplo</th></tr>
  <tr><td><b>zer</b> qué</td><td>Zer edaten duzu?</td></tr><tr><td><b>nor</b> quién</td><td>Nor zara zu?</td></tr>
  <tr><td><b>non</b> dónde</td><td>Non bizi zara?</td></tr><tr><td><b>nora</b> adónde</td><td>Nora zoaz?</td></tr>
  <tr><td><b>noiz</b> cuándo</td><td>Noiz etorriko zara?</td></tr><tr><td><b>nola</b> cómo</td><td>Nola zaude?</td></tr>
  <tr><td><b>zergatik</b> por qué</td><td>Zergatik ikasten duzu euskara?</td></tr><tr><td><b>zenbat</b> cuánto</td><td>Zenbat da?</td></tr></table></div></details>
  <details class="g"><summary>7 · Decir que no</summary><div class="body">
  <p>«<b>ez</b>» va justo antes del auxiliar. El verbo queda detrás.</p>
  ${ex('<b>Ez</b> nago etxean.','No estoy en casa.')}${ex('<b>Ez</b> dut kaferik edaten.','No bebo café. Con ez, el objeto lleva -rik.')}</div></details>
  <details class="g"><summary>8 · Los 4 tipos de verbo: NOR, NOR-NORK, NOR-NORI, NOR-NORI-NORK</summary><div class="body">
  <p>El auxiliar depende de <b>quién participa</b> en la acción. <b>NOR</b> = quién/qué (sin marca), <b>NORK</b> = quién lo hace (lleva <b>-k</b>), <b>NORI</b> = a quién (lleva <b>-ri</b>).</p>
  <div class="tscroll"><table class="mini"><tr><th>Tipo</th><th>Participan</th><th>Auxiliar</th><th>Ejemplo</th></tr>
  <tr><td style="white-space:nowrap"><b>NOR</b></td><td>solo el sujeto</td><td>naiz, zara, da, gara…</td><td>Ni Iruñean bizi <b>naiz</b>.</td></tr>
  <tr><td style="white-space:nowrap"><b>NOR-NORK</b></td><td>sujeto + objeto («qué»)</td><td>dut, duzu, du, dugu…</td><td>Nik ogia jaten <b>dut</b>.</td></tr>
  <tr><td style="white-space:nowrap"><b>NOR-NORI</b></td><td>una cosa + «a quién»</td><td>zait, zaizu, zaio, zaigu…</td><td>Niri euskara gustatzen <b>zait</b>.</td></tr>
  <tr><td style="white-space:nowrap"><b>NOR-NORI-NORK</b></td><td>quien lo hace + «qué» + «a quién»</td><td>diot, diozu, dio… / dit, dizu, dio…</td><td>Nik amari liburua ematen <b>diot</b>.</td></tr></table></div>
  <p style="margin-top:12px"><b>Cómo reconocer el tipo</b></p>
  <ol style="margin:0 0 10px;padding-left:20px"><li>¿Hay «a quién» (-ri) además del «qué»? → <b>NOR-NORI-NORK</b> (dar, decir, enviar, enseñar, explicar, preguntar).</li><li>¿Algo «le gusta, le parece, se le olvida» a alguien? → <b>NOR-NORI</b> (gustatu, iruditu, ahaztu, interesatu).</li><li>¿Hay un objeto directo («qué»)? → <b>NOR-NORK</b>.</li><li>¿Solo sujeto? → <b>NOR</b> (izan, egon, joan, etorri, bizi, jaio).</li></ol>
  <p><b>Ojo con la dirección:</b> <i>Nik amari ematen <b>diot</b></i> (yo le doy a mamá) frente a <i>Amak niri ematen <b>dit</b></i> (mamá me da a mí). El auxiliar cambia según quién da y quién recibe.</p>
  ${ex('Amak niri liburu bat eman <b>dit</b>.','Mamá me ha dado un libro.')}${ex('Irakasleak guri euskara irakasten <b>digu</b>.','El profesor nos enseña euskera.')}
  <p class="es">Practica: lección 22 «Nori eman diozu?» (A1), lecciones 1 y 10 del A2, la pestaña Aditzak y el botón «Probatu» de arriba.</p></div></details>`;
}

/* ===== RUTAS Y EVENTOS ===== */
function render(){
  if(SES)return;
  if(LES){lessonRender();return}
  const r=route();
  if(r!=='jolak')JG.stop();
  if(r!=='hiztegia')UI.dict=false;
  $('#view').innerHTML=({home:homeView,ikasgela:ikasgelaView,hitzak:hitzakView,aditzak:aditzakView,esaldiak:esaldiakView,jolak:jolakView,gida:gidaView,ezarpenak:niView,test:testView,praktika:praktikaView,hiztegia:hiztegiaView,ni:niView,legala:legalView})[r]();
  if(PAR[r]==='praktika'&&!(r==='jolak'&&UI.jg&&UI.jg.v!=='menu')&&!(r==='hitzak'&&UI.dict))$('#view').insertAdjacentHTML('afterbegin','<button class="btn sec small" data-act="go" data-to="praktika" style="margin-bottom:10px">← Praktika</button>');
  if(r==='legala')$('#view').insertAdjacentHTML('afterbegin','<button class="btn sec small" data-act="go" data-to="ni" style="margin-bottom:10px">← Ni</button>');
  const rp=PAR[r]||r;
  $('#tabs').innerHTML=TABS.map(t=>`<button class="tab${t[0]===rp?' on':''}" data-go="${t[0]}"><span>${t[1]}</span>${t[2]}</button>`).join('');
    refreshHeader();
}
$('#tabs').addEventListener('click',e=>{
  const b=e.target.closest('[data-go]');if(!b)return;
  if(b.dataset.go==='hiztegia')UI.dfrom=null;
  goTo(b.dataset.go);
});
window.addEventListener('hashchange',()=>{let h='';try{h=location.hash.slice(1)}catch(e){}if(validRoute(h)&&h!==CUR){CUR=h;render();window.scrollTo(0,0)}});
$('#view').addEventListener('click',e=>{
  if(SES)return;
  const b=e.target.closest('[data-act]');if(!b)return;
  const a=b.dataset.act,d=b.dataset,all=allWords();
  const setPool=()=>setWords(VOCAB.find(s=>s.id===d.set));
  if(a==='go'){goTo(d.to)}
  else if(a==='lesson'){openLesson(d.id)}
  else if(a==='code'){
    const v=norm($('#acc').value).replace(/\s+/g,'');
    if(h32(v)===TKEY){S.a2key=1;save();render();toast('🔓 Acceso especial activo: A2 desbloqueado')}
    else{$('#accm').innerHTML='<p class="errmsg">Código incorrecto.</p>'}
  }
  else if(a==='codeoff'){S.a2key=0;if(S.level==='a2'&&!a1Complete())S.level='a1';save();render()}
  else if(a==='lvl'){
    if(d.l==='a2'&&!a2Open()){toast('🔒 Completa las '+a1Total()+' lecciones del A1 para abrir el A2 ('+a1Done()+'/'+a1Total()+')');return}
    S.level=d.l;save();render();window.scrollTo(0,0);
  }
  else if(a==='me'){if(S.me)runSession({tag:'mix',make:meQs});else{UI.meEdit=true;render();scrollTo(0,0)}}
  else if(a==='medit'){UI.meEdit=true;render();scrollTo(0,0)}
  else if(a==='mesave'){if(meSave()){toast('Gordeta! · guardado');render();scrollTo(0,0)}}
  else if(a==='meskip'){UI.meEdit=false;if(!S.me)S.meSkip=1;save();render()}
  else if(a==='tplace')startPlacement();
  else if(a==='tself')startSelf(d.l||'a1');
  else if(a==='tlv'){if(d.l==='a2'&&!a2Open()){toast('El A2 sigue bloqueado');return}UI.tlv=d.l;render()}
  else if(a==='quick')runSession({tag:'mix',make:()=>S.level==='a2'?shuffle(vocabQs(KW(),5).concat(conjQs(pick(knownVerbs(),3),3),buildQs(2))):shuffle(vocabQs(KW(),4).concat(conjQs(pick(knownVerbs(),3),3),buildQs(3)))});
  else if(a==='daily')runSession({tag:'mix',daily:1,make:dailyQs});
  else if(a==='mute')toggleMute();
  else if(a==='listen')runSession({tag:'vocab',make:()=>listenQs(7)});
  else if(a==='dict')runSession({tag:'vocab',make:()=>dictQs(6)});
  else if(a==='numq')runSession({tag:'mix',make:()=>numQs(6).concat(numRevQs(3))});
  else if(a==='abcq')runSession({tag:'mix',make:()=>abcQs(8)});
  else if(a==='theme'){S.theme=d.t;save();applyTheme();render()}
  else if(a==='weak')runSession({tag:'vocab',make:weakQs});
  else if(a==='say')say(d.t);
  else if(a==='rate'){S.rate=+d.r;save();render();say('Kaixo, zer moduz?')}
  else if(a==='srs'){if(!srsDue().length){toast('🧠 Gaur ez dago ezer · nada pendiente hoy');return}runSession({tag:'vocab',make:()=>srsQs(10)})}
  else if(a==='goal'){S.goal=+d.g;save();render()}
  else if(a==='exp'){
    const t=$('#bk');t.hidden=false;t.value=exportCode();t.dataset.mode='exp';t.select();
    let ok=false;try{ok=document.execCommand&&document.execCommand('copy')}catch(e){}
    try{if(navigator.clipboard)navigator.clipboard.writeText(t.value).catch(()=>{})}catch(e){}
    bkMsg(ok?'Código copiado. Guárdalo en tus notas o envíatelo.':'Código generado: cópialo del recuadro y guárdalo.',true);
  }
  else if(a==='imp'){
    const t=$('#bk');
    if(t.hidden||t.dataset.mode==='exp'){t.hidden=false;t.value='';t.dataset.mode='imp';t.focus();bkMsg('Pega tu código y pulsa «Inportatu» otra vez.',true);return}
    try{const o=importCode(t.value);S=Object.assign({lessons:{},xp:0,today:0,day:'',streak:0,last:'',m:{},badges:[],typeMode:false,sess:0,conj:0,built:0,bestCombo:0,goal:50,level:'a1'},o);S.a2key=0;if(S.level!=='a2'||!a2Open())S.level='a1';save();render();bkMsg('¡Progreso importado!',true)}
    catch(e){bkMsg('Código no válido. Cópialo entero, sin cortar.',false)}
  }
  else if(a==='reset'){
    if(b.dataset.arm!=='1'){b.dataset.arm='1';b.textContent='¿Seguro? Pulsa otra vez para borrar todo';return}
    S={lessons:{},xp:0,today:0,day:S.day,streak:0,last:'',m:{},badges:[],typeMode:false,sess:0,conj:0,built:0,bestCombo:0,goal:S.goal,level:'a1'};save();render();window.scrollTo(0,0);
  }
  else if(a==='mixv')runSession({tag:'vocab',make:()=>vocabQs(all,10)});
  else if(a==='quiz'){const p=setPool();runSession({tag:'vocab',make:()=>vocabQs(p,Math.min(8,p.length))})}
  else if(a==='flash'){const p=setPool();runSession({tag:'flash',make:()=>flashQs(p,Math.min(10,p.length))})}
  else if(a==='verb'){UI.verb=d.v;render()}
  else if(a==='practice'){const vk=UI.verb;runSession({tag:'conj',make:()=>conjQs([vk],8)})}
  else if(a==='practiceall')runSession({tag:'conj',make:()=>conjQs(knownVerbs(),10)});
  else if(a==='build')runSession({tag:'build',make:()=>buildQs(6)});
  else if(a==='nn')runSession({tag:'nn',make:()=>typeQs(10)});
  else if(a==='typemode'){S.typeMode=b.checked;save()}
  else if(a==='dict'){UI.dc=null;UI.dfrom=route();goTo('hiztegia')}
  else if(a==='dictx'){UI.dict=false;UI.dc=null;if(route()==='hiztegia'){const f=UI.dfrom||'home';UI.dfrom=null;goTo(f)}else render()}
  else if(a==='dcat'){UI.dc=d.i===''||d.i==null?null:+d.i;render();scrollTo(0,0)}
  else if(a==='labv'){UI.lab.v=+d.i;render()}
  else if(a==='labt'){UI.lab.tk=d.t;render()}
  else if(a==='labp'){UI.lab.i=+d.i;render()}
});
$('#view').addEventListener('input',e=>{
  if(e.target.id==='dsrch'){const v=e.target.value,box=$('#dres'),bd=$('#dbody');if(v.trim().length<2){box.hidden=true;bd.hidden=false;return}const r=dictFind(v);box.hidden=false;bd.hidden=true;box.innerHTML=r.length?r.slice(0,80).map(w=>`<div class="hit"><button class="spk" data-act="say" data-t="${esc(w[0])}" aria-label="Escuchar">🔊</button><b>${esc(w[0])}</b><span class="es">${esc(w[1])}</span></div>`).join('')+(r.length>80?`<p class="es">+${r.length-80} gehiago · afina la búsqueda</p>`:''):'<p class="es">Sin resultados.</p>';return}
  if(e.target.id!=='srch')return;
  const r=wordsFind(e.target.value),box=$('#srr');
  if(e.target.value.trim().length<2){box.hidden=true;return}
  box.hidden=false;
  box.innerHTML=r.length?r.map(w=>`<div class="hit"><button class="spk" data-act="say" data-t="${esc(w.eu)}" aria-label="Escuchar">🔊</button><b>${esc(w.em?w.em+' ':'')}${esc(w.eu)}</b><span class="es">${esc(w.es)}</span></div>`).join(''):'<p class="es">Sin resultados.</p>';
});
if(S.level==='a2'&&!a2Open())S.level='a1';
refreshHeader();
/* ===== v43 · ayuda progresiva, práctica variada, repetición espaciada, voz ===== */
const hintMask=(a,full)=>a.split(' ').map(w=>{const L=[...w];if(L.length<=1)return w;const k=full?Math.max(1,Math.ceil(L.length/2)):1;return L.map((c,i)=>i<k||!/[\p{L}\d]/u.test(c)?c:'_').join('')}).join(' ');
const helpMax=q=>q.k==='build'?3:q.k==='type'?4:q.k==='choice'?2:1;
function helpMore(q,mx){const L=q.hl;let t=helpText(q);
  if(q.k==='build'){const tk=q.tokens||[];if(L>=2)t+='<br>🔤 Empieza por: <b>'+esc(tk.slice(0,2).join(' '))+'</b>';if(L>=3)t+='<br>🔤 Más: <b>'+esc(tk.slice(0,Math.ceil(tk.length/2)).join(' '))+' …</b>'}
  else{const a=String((q.alts&&q.alts[0])||q.ans||'');if(a){const nw=a.split(' ').length,nl=[...a.replace(/[^\p{L}\d]/gu,'')].length;
    if(L>=2&&!/empieza por/.test(t))t+='<br>🔤 Empieza por «'+esc([...a][0])+'» · '+(nw>1?nw+' palabras, ':'')+nl+' letras.';
    if(L>=3)t+='<br>✏️ <b style="letter-spacing:2px">'+esc(hintMask(a,false))+'</b>';
    if(L>=4)t+='<br>✏️ <b style="letter-spacing:2px">'+esc(hintMask(a,true))+'</b>'}}
  return '<p>'+t+'</p>'+(L<mx?'<p><small>Toca 💡 otra vez para ver más.</small></p>':'')}
/* repetición espaciada: 1, 3, 7, 21 y 45 días */
const INTV=[1,3,7,21,45];
const dnum=()=>{const d=new Date();return Math.floor((d.getTime()-d.getTimezoneOffset()*6e4)/864e5)};
function srsMark(id,ok){if(!id||String(id).indexOf('kw:')===0)return;const T=dnum();S.srs=S.srs||{};const r=S.srs[id];
  if(ok){if(r&&r.d>T)return;const i=(r?r.i:0)+1;S.srs[id]={i,d:T+INTV[Math.min(i-1,INTV.length-1)]}}
  else S.srs[id]={i:0,d:T+1}}
function srsDue(){const T=dnum(),s=S.srs||{},m={};allWords(true).forEach(w=>{m[w.id]=w});
  return Object.keys(s).filter(k=>s[k].d<=T&&m[k]).sort((a,b)=>s[a].d-s[b].d).map(k=>m[k])}
function srsQs(n){const p=srsDue().slice(0,n||10);return vocabQs(p,p.length)}
function srsCard(){const n=srsDue().length,A2=S.level==='a2';
  return n?`<button class="card cont" data-act="srs"><span class="ic">🧠</span><span class="grow"><small>${A2?'Errepaso adimentsua':'Repaso espaciado'}</small><b>${n} ${A2?'hitz gaur':'palabras para hoy'}</b><small>${A2?'':'Vuelven a los 1, 3, 7 y 21 días'}</small></span><span class="play">▶</span></button>`:''}
/* práctica de lección variada */
const LMIX_FIX=7,LMIX_ALL=17;
function lhOf(id){S.lh=S.lh||{};return S.lh[id]||(S.lh[id]={f:{},g:[],last:[]})}
const qKey=q=>String((q.k||'')+'|'+(q.p||q.es||q.say||'')+'|'+(q.ans||(q.tokens||[]).join(' '))).slice(0,70);
function lessonPool(L){
  const ord=LESSONS.slice().sort((a,b)=>(lvOf(a)==='a2'?1:0)-(lvOf(b)==='a2'?1:0)||a.n-b.n);
  const upto=ord.slice(0,ord.indexOf(L)+1),ws=[],seen=new Set();
  upto.forEach(l=>{(LSETS[l.id]||[]).forEach(sid=>{const v=VOCAB.find(x=>x.id===sid);if(v)setWords(v).forEach(w=>{if(!seen.has(w.id)){seen.add(w.id);ws.push(w)}})});
    const SM=LSUM[l.id];if(SM&&SM.kw)SM.kw.forEach(k=>{const id='kw:'+l.id+':'+k[0];if(!seen.has(id)&&!ws.some(w=>w.eu===k[0])){seen.add(id);ws.push({id,eu:k[0],es:k[1],em:'',set:''})}})});
  return ws}
function buildLessonQsEU(L){
  const lh=lhOf(L.id),SM=LSUM[L.id];
  const strs=q=>[q.p,q.ans,q.say,q.es].filter(x=>typeof x==='string'&&x).map(x=>x.toLowerCase());
  const base=L.make().filter(Boolean),bk=new Set(base.map(qKey));
  const sc=q=>{const k=qKey(q),f=lh.f[k]||{n:0,m:0};return -f.m*3+f.n*2+((lh.last||[]).includes(k)?4:0)+Math.random()*3};
  const used=new Set(),out=[];
  const take=(q,gen)=>{const k=qKey(q),t=strs(q);if(t.length&&t.some(x=>used.has(x)))return false;if(gen&&(lh.g||[]).includes(k))return false;t.forEach(x=>used.add(x));q._lk=k;if(gen)q._gen=1;out.push(q);return true};
  base.slice().sort((a,b)=>sc(a)-sc(b)).slice(0,LMIX_FIX).forEach(q=>take(q,false));
  try{for(let t=0;t<6&&out.length<LMIX_FIX+5;t++){shuffle(L.make().filter(Boolean)).forEach(q=>{if(out.length<LMIX_FIX+5&&!bk.has(qKey(q)))take(q,true)})}}catch(e){}
  const pool=lessonPool(L);
  for(let t=0;t<80&&out.length<LMIX_ALL&&pool.length;t++){take(vocabQ(one(pool),pool),true)}
  if(out.length<LMIX_ALL)base.forEach(q=>{if(out.length<LMIX_ALL&&!out.includes(q))take(q,false)});
  for(let t=0;t<80&&out.length<12&&pool.length;t++){take(vocabQ(one(pool),pool),false)}
  const res=[];const rest=shuffle(out);
  while(rest.length){let i=rest.findIndex(q=>!res.length||q.kind!==res[res.length-1].kind);if(i<0)i=0;res.push(rest.splice(i,1)[0])}
  return res.map(q=>{if(q.k==='choice'&&!q.help&&!q.wid&&!q.vk&&SM&&SM.sum)q.help='Repasa la idea de la lección: '+SM.sum[0];return q})}
function lessonLog(ses){const id=ses.cfg.lesson,lh=lhOf(id),seen=new Set(),miss={};
  ses.miss.forEach(q=>{if(q._lk)miss[q._lk]=1});
  const keys=[];ses.qs.forEach(q=>{if(q.retry||!q._lk||seen.has(q._lk))return;seen.add(q._lk);keys.push(q._lk);const f=lh.f[q._lk]||(lh.f[q._lk]={n:0,m:0});f.n++;if(miss[q._lk])f.m++});
  lh.last=keys;lh.g=(lh.g||[]).concat(ses.qs.filter(q=>q._gen&&!q.retry&&q._lk).map(q=>q._lk)).slice(-40);
  const ks=Object.keys(lh.f);if(ks.length>60)ks.slice(0,ks.length-60).forEach(k=>{delete lh.f[k]})}
/* selector de voz */
function voiceCard(){const vs=voicesList(),eu=vs.filter(isEu),es=vs.filter(v=>!isEu(v)&&/^es/i.test(v.lang));
  const opt=v=>`<option value="${esc(v.name)}"${S.voiceName===v.name?' selected':''}>${esc(v.name)} (${esc(v.lang)})</option>`;
  const rate=[['.65','🐢 Lenta'],['.85','Normal'],['1','Rápida']];
  return `<div class="card" style="margin-top:12px"><b>Ahotsa · voz y velocidad</b><p class="es" style="margin:6px 0 10px">${eu.length?'Tu dispositivo tiene voz de euskera.':'Sin voz de euskera: elige una de castellano (el texto se reescribe para que suene lo mejor posible).'}</p><select class="fld" id="vsel" aria-label="Voz"><option value="">Automática</option>${eu.length?'<optgroup label="Euskera">'+eu.map(opt).join('')+'</optgroup>':''}${es.length?'<optgroup label="Castellano">'+es.map(opt).join('')+'</optgroup>':''}</select><div class="sel" style="margin-top:10px">${rate.map(r=>`<button class="pill${Math.abs((S.rate||.85)-+r[0])<.01?' on':''}" data-act="rate" data-r="${r[0]}">${r[1]}</button>`).join('')}</div><button class="btn sec small" style="margin-top:10px" data-act="say" data-t="Kaixo! Euskara ikasten ari naiz.">🔊 Probar voz</button></div>`}
document.addEventListener('change',e=>{if(e.target&&e.target.id==='vsel'){S.voiceName=e.target.value;save();say('Kaixo! Hogeita bost.')}});
try{speechSynthesis.onvoiceschanged=()=>{if(!SES&&!LES&&route()==='ni')render()}}catch(e){}

applyMute();render();
checkBadges();
