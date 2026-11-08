/* ===== v22: lecciones de repaso de los tipos de verbo ===== */
const VT_AUXT=(a)=>/^(naiz|zara|da|gara|zarete|dira|nago|zaude|dago|gaude|zaudete|daude|nintzen|zen)$/.test(a)?0:/^(dut|duzu|du|dugu|duzue|dute|nuen|zuen)$/.test(a)?1:/^(zait|zaizu|zaio|zaigu|zaizue|zaie|zaizkit|zaizkizu|zaizkio)$/.test(a)?2:3;
function typeQsT(n,types){
  const cl=VT_CL.filter(x=>types.indexOf(x[2])>=0),ax=VT_AUX.filter(x=>types.indexOf(VT_AUXT(x[2]))>=0);
  const opts=types.map(t=>VT[t]),nc=Math.ceil(n/2),na=n-nc;
  const q1=pick(cl,Math.min(nc,cl.length)).map(([vb,es,t,eu,ex])=>({
    k:'choice',kind:'Zein aditz mota?',p:vb,hint:es+' · ¿de qué tipo es?',opts:shuffle(opts.slice()),ans:VT[t],
    help:'Mira quién participa: solo sujeto (NOR) · sujeto + «qué» (NOR-NORK) · algo que le pasa o le gusta a alguien (NOR-NORI) · alguien da/dice algo a alguien (NOR-NORI-NORK).',
    expl:'<b>'+vb+'</b> → <b>'+VT[t].split(' · ')[0]+'</b>.<br><small>'+esc(eu)+' · '+esc(ex)+'</small>',rev:'<b>'+vb+'</b> ('+es+') → '+VT[t].split(' · ')[0]}));
  const q2=pick(ax,Math.min(na,ax.length)).map(([s,es,ans,wr0])=>{const wr=wr0.filter(w=>types.indexOf(VT_AUXT(w))>=0);return{
    k:'choice',kind:'Auxiliarra',p:s,hint:es,opts:shuffle([ans].concat(wr)),ans,
    help:'Decide el tipo de verbo y elige el auxiliar: naiz (NOR) · dut (NOR-NORK) · zait/zaio (NOR-NORI) · diot/dit (NOR-NORI-NORK).',
    expl:'Auxiliar correcto: <b>'+ans+'</b>.<br><small>'+esc(es)+'</small>',rev:esc(s.replace('___','<b>'+ans+'</b>'))}});
  return shuffle(q1.concat(q2));
}
function lessonAfter(id,L){
  const base=LESSONS.find(x=>x.id===id);
  L.lv=base.lv||'a1';L.n=base.n+0.1;LESSONS.push(L);
}
lessonAfter('l9',{id:'r1',eu:'Errepasoa · NOR eta NORK',es:'Repaso: ¿izan o ukan?',ic:'🔁',min:8,
 goals:['Decidir entre izan (NOR) y ukan (NOR-NORK)','Repasar en presente naiz/zara/da y dut/duzu/du','Aplicar la regla: ¿hay un «qué»?'],
 steps:[
 {t:'La pregunta clave',h:'<p>Antes de elegir auxiliar, pregúntate: <b>¿hay un «qué» (objeto directo)?</b></p><p><b>No</b> → <b>NOR</b> (izan): <i>Ni etxean nago</i>, <i>Ni Iruñera joaten naiz</i>.<br><b>Sí</b> → <b>NOR-NORK</b> (ukan): <i>Nik kafea edaten dut</i>.</p>',
  tb:mt(['','NOR (izan)','NOR-NORK (ukan)'],[['yo','naiz','dut'],['tú','zara','duzu'],['él/ella','da','du'],['nosotros','gara','dugu'],['vosotros','zarete','duzue'],['ellos','dira','dute']]),
  tip:'Con NOR el sujeto no lleva -k (ni, zu, bera). Con NORK sí (nik, zuk, berak).'},
 {t:'Verbos típicos',h:'<p><b>NOR</b> (algo que «eres» o «haces» sin objeto): joan, etorri, bizi, egon, jaio, erori.<br><b>NORK</b> (haces algo a algo): jan, edan, ikusi, irakurri, idatzi, ikasi, nahi izan, behar izan.</p>',
  ex:[['Ni Elizondon bizi naiz.','Vivo en Elizondo.'],['Nik euskara ikasten dut.','Aprendo euskera.'],['Etxean nago.','Estoy en casa.'],['Zuk ogia jaten duzu.','Comes pan.']]}
 ],
 make:()=>[].concat(conjQs(['izan','ukan','egon','eduki'],4),typeQsT(5,[0,1]),SQ0(['nik','esnea','edaten','dut'],'Yo bebo leche.','esnea = «qué» → ukan: dut.'),SQ0(['ni','Iruñera','joaten','naiz'],'Voy a Pamplona.','Sin «qué» → izan: naiz.'))});
lessonAfter('b2',{id:'r2',eu:'Errepasoa · NOR, NORK, NORI',es:'Repaso: los cuatro tipos de verbo',ic:'🧭',min:9,
 goals:['Distinguir los 4 tipos: NOR, NOR-NORK, NOR-NORI, NOR-NORI-NORK','Elegir el auxiliar: naiz · dut · zait · diot','Reconocer quién es -k y quién es -ri'],
 steps:[
 {t:'Mapa de los cuatro tipos',h:'<p>Cuenta quién participa:</p>',
  tb:mt(['Tipo','Participan','Auxiliar','Ejemplo'],[['NOR','solo el sujeto','naiz, zara, da','Etxean nago.'],['NOR-NORK','sujeto + «qué»','dut, duzu, du','Kafea dut.'],['NOR-NORI','algo + a quién (-ri)','zait, zaizu, zaio','Niri gustatzen zait.'],['NOR-NORI-NORK','quién + qué + a quién','diot, dit, dio','Amari ematen diot.']]),
  tip:'Truco: ¿Hay «a quién» (-ri)? Entonces zait/zaio (algo me pasa) o diot/dit (alguien da algo).'},
 {t:'Marcas en el nombre',h:'<p><b>-k</b> = quien hace (nik, amak) · <b>-ri</b> = a quién (niri, amari) · sin marca = el «qué» o el sujeto de NOR.</p>',
  ex:[['Amak niri liburua ematen dit.','Mamá me da el libro.'],['Niri liburua gustatzen zait.','Me gusta el libro.'],['Nik amari liburua ematen diot.','Le doy el libro a mamá.']]},
 {t:'Singular y plural',h:'<p>Cuando lo que gusta o se da es plural, el auxiliar cambia: <b>zait → zaizkit</b>, <b>diot → dizkiot</b>.</p>',
  ex:[['Niri sagarrak gustatzen zaizkit.','Me gustan las manzanas.'],['Amari liburuak ematen dizkiot.','Le doy los libros a mamá.']]}
 ],
 make:()=>[].concat(typeQsT(8,[0,1,2,3]),conjQs(['izan','ukan','eman'],2),SQ0(['niri','kafea','gustatzen','zait'],'Me gusta el café.','Lo que gusta (singular) → zait.'),SQ0(['nik','amari','liburua','ematen','diot'],'Le doy el libro a mamá.','amari = a mamá; diot.'))});
lessonAfter('e1',{id:'r3',lv:'a2',eu:'Errepasoa · aditz motak',es:'Repaso A2: tipos de verbo en presente y pasado',ic:'🔄',min:10,
 goals:['Consolidar NOR, NORK, NORI y NORI-NORK','Pasar cada tipo a pasado','Elegir bien entre dut / zait / diot / dit'],
 steps:[
 {t:'Presente y pasado',h:'<p>Mismo tipo, distinto tiempo:</p>',
  tb:mt(['Tipo','Presente','Pasado'],[['NOR','naiz','nintzen'],['NOR-NORK','dut','nuen'],['NOR-NORI','zait','zitzaidan'],['NOR-NORI-NORK','diot / dit','nion / zidan']]),
  tip:'En pasado, «me dio» = zidan; «le di» = nion.'},
 {t:'¿Quién hace qué a quién?',h:'<p>Con NOR-NORI-NORK hay <b>dos</b> personas en el verbo: quien da (-k) y quien recibe (-ri). <b>dit</b> = (él) me lo da · <b>diot</b> = (yo) se lo doy.</p>',
  ex:[['Amak liburu bat eman zidan.','Mamá me dio un libro.'],['Nik amari liburua eman nion.','Le di el libro a mamá.'],['Niri musika gustatzen zitzaidan.','Me gustaba la música.']]}
 ],
 make:()=>[].concat(typeQsT(6,[0,1,2,3]),conjQs(['izan','ukan','gustatu','eman','eman (berak… niri, zuri…)'],5),SQ0(['amak','niri','liburu','bat','eman','zidan'],'Mamá me dio un libro.','zidan = me lo dio.'))});

const pastQs=(keys,n)=>{const o=[],seen=new Set();let t=0;window.FORCEPAST=true;try{while(o.length<n&&t++<200){const q=genConj(keys[rnd(keys.length)]);if(q.meta&&/^iragana/.test(q.meta.tk)&&!seen.has(q.key)){seen.add(q.key);o.push(q)}}}finally{window.FORCEPAST=false}return o};
const withPast=f=>()=>{window.FORCEPAST=true;try{return f()}finally{window.FORCEPAST=false}};
const PRO=[['ni','nintzen','nengoen','nuen'],['zu','zinen','zeunden','zenuen'],['bera','zen','zegoen','zuen'],['gu','ginen','geunden','genuen'],['zuek','zineten','zeundeten','zenuten'],['haiek','ziren','zeuden','zuten']];
lessonAfter('b12',{id:'l10',eu:'Atzo · izan eta egon',es:'El pasado de «ser» y «estar»',ic:'⏪',min:8,
 goals:['Formar el pasado de izan: nintzen, zinen, zen…','Formar el pasado de egon: nengoen, zeunden, zegoen…','Seguir distinguiendo ni / zu / bera / gu / zuek / haiek'],
 steps:[
 {t:'Hasta ahora, solo presente',h:'<p>Todo lo que has visto está en <b>presente</b>. El pasado usa <b>las mismas personas</b> (ni, zu, bera, gu, zuek, haiek); solo cambia la forma del auxiliar. Marcador típico: <b>atzo</b> (ayer).</p>',
  tb:mt(['','Presente','Pasado'],[['ni','naiz','nintzen'],['zu','zara','zinen'],['bera','da','zen'],['gu','gara','ginen'],['zuek','zarete','zineten'],['haiek','dira','ziren']]),
  tip:'Primero decide la persona (¿ni, zu, bera…?). Después elige la forma. Las personas no cambian.'},
 {t:'Izan en pasado',h:'<p>Para ser/estar con identidad, origen, profesión… en un momento ya cerrado.</p>',
  ex:[['Atzo ni etxean nintzen.','Ayer yo estaba (me quedé) en casa.'],['Zu atzo Iruñean zinen.','Ayer estuviste en Pamplona.'],['Bera atzo nekatuta zen.','Ayer estaba cansado.'],['Gu atzo mendian ginen.','Ayer estuvimos en el monte.']]},
 {t:'Egon en pasado',h:'<p><b>egon</b> (estar en un lugar) también tiene su pasado, con forma propia.</p>',
  tb:mt(['','Presente','Pasado'],[['ni','nago','nengoen'],['zu','zaude','zeunden'],['bera','dago','zegoen'],['gu','gaude','geunden'],['zuek','zaudete','zeundeten'],['haiek','daude','zeuden']]),
  ex:[['Atzo etxean nengoen.','Ayer estaba en casa.'],['Non zeunden atzo?','¿Dónde estabas ayer?']]}
 ],
 make:withPast(()=>[].concat(pastQs(['izan','egon'],6),SQ0(['atzo','ni','etxean','nengoen'],'Ayer estaba en casa.','egon, persona «ni» → nengoen.'),SQ0(['atzo','gu','mendian','ginen'],'Ayer estuvimos en el monte.','izan, persona «gu» → ginen.'),[
  mc('Iragana','«Ayer ella estaba cansada»','¿Cuál es?','Atzo nekatuta zen',['Atzo nekatuta da','Atzo nekatuta nintzen','Atzo nekatuta zinen'],'Persona «bera» en pasado de izan → <b>zen</b>.'),
  mc('Iragana','«¿Dónde estabas ayer?»','¿Cuál es?','Non zeunden atzo?',['Non zaude atzo?','Non nengoen atzo?','Non zegoen atzo?'],'«zu» con egon en pasado → <b>zeunden</b>.')
 ]))});
lessonAfter('l10',{id:'t2',eu:'Atzo egin nuen',es:'El pasado con objeto (ukan) y «he hecho»',ic:'📖',min:9,
 goals:['Formar nuen, zenuen, zuen, genuen, zenuten, zuten','Mantener el participio y cambiar solo el auxiliar','Distinguir pasado (atzo) de perfecto (gaur)'],
 steps:[
 {t:'Ukan en pasado',h:'<p>Con verbos que llevan «qué» (jan, edan, ikusi, irakurri…), el auxiliar pasa de <b>dut</b> a <b>nuen</b>. El participio <b>no cambia</b>.</p>',
  tb:mt(['','Presente','Pasado'],[['nik','dut','nuen'],['zuk','duzu','zenuen'],['berak','du','zuen'],['guk','dugu','genuen'],['zuek','duzue','zenuten'],['haiek','dute','zuten']]),
  ex:[['Atzo nik ogia jan nuen.','Ayer comí pan.'],['Atzo zuk liburu bat irakurri zenuen.','Ayer leíste un libro.'],['Amak atzo kafea edan zuen.','Mamá bebió café ayer.']],
  tip:'El sujeto sigue llevando -k: nik, zuk, berak…'},
 {t:'Pasado o «he hecho»',h:'<p>Usa el <b>pasado</b> para algo terminado en un tiempo cerrado (<b>atzo</b>, joan den astean). Usa el <b>perfecto</b> (auxiliar en presente) si conecta con hoy (<b>gaur</b>).</p>',
  ex:[['Atzo ogia jan nuen.','Ayer comí pan. (pasado)'],['Gaur ogia jan dut.','Hoy he comido pan. (perfecto)'],['Atzo Iruñera joan nintzen.','Ayer fui a Pamplona.'],['Gaur Iruñera joan naiz.','Hoy he ido a Pamplona.']]},
 {t:'Cómo se construye',h:'<p>Molde fijo: <b>tiempo + sujeto + participio + auxiliar</b>. Cambias el auxiliar según la persona y el tipo de verbo (izan o ukan).</p>',
  pc:[['Atzo','p-part','cuándo'],['nik','p-sub','quién'],['ogia','p-obj','qué'],['jan','p-part','participio'],['nuen','p-aux','auxiliar']]}
 ],
 make:withPast(()=>[].concat(pastQs(['ukan'],5),SQ0(['atzo','nik','ogia','jan','nuen'],'Ayer comí pan.','participio sin cambios + nuen.'),SQ0(['gaur','nik','ogia','jan','dut'],'Hoy he comido pan.','Perfecto: auxiliar en presente.'),[
  mc('Iragana','«Ayer leí un libro»','¿Cuál es?','Atzo liburu bat irakurri nuen',['Atzo liburu bat irakurri dut','Atzo liburu bat irakurri nintzen','Atzo liburu bat irakurtzen nuen'],'Con «qué» → ukan; ayer → <b>nuen</b>.'),
  mc('Iragana','«Ayer fui a Pamplona»','¿Cuál es?','Atzo Iruñera joan nintzen',['Atzo Iruñera joan nuen','Atzo Iruñera joan naiz','Atzo Iruñera joaten naiz'],'joan no lleva «qué» → izan: <b>nintzen</b>.'),
  mc('Pasado/perfecto','«Hoy he bebido agua»','¿Cuál es?','Gaur ura edan dut',['Gaur ura edan nuen','Gaur ura edaten dut','Gaur ura edan du'],'Hoy → perfecto, auxiliar en presente: <b>dut</b>.')
 ]))});
lessonAfter('t2',{id:'t3',eu:'Bihar egingo dut',es:'El futuro: -ko / -go',ic:'⏩',min:8,
 goals:['Formar el futuro con -ko / -go','Mantener el auxiliar en presente','Usar bihar, etzi, datorren astean'],
 steps:[
 {t:'Futuro = participio + -ko / -go',h:'<p>Al participio se le añade <b>-ko</b>, o <b>-go</b> si acaba en <b>-n</b>. El auxiliar queda en <b>presente</b>: ya conoces nintzen/nuen, aquí vuelve naiz/dut.</p>',
  tb:mt(['Participio','Futuro'],[['jan','<b>jango</b>'],['edan','<b>edango</b>'],['joan','<b>joango</b>'],['egin','<b>egingo</b>'],['ikusi','ikusi<b>ko</b>'],['etorri','etorri<b>ko</b>']])},
 {t:'La línea del tiempo',h:'<p>Mismo verbo, tres momentos. Las personas siguen igual.</p>',
  tb:mt(['Cuándo','con objeto (jan)','sin objeto (joan)'],[['atzo','jan nuen','joan nintzen'],['gaur (hecho)','jan dut','joan naiz'],['orain','jaten dut','joaten naiz'],['bihar','jan<b>go</b> dut','joan<b>go</b> naiz']]),
  ex:[['Bihar Iruñera joango naiz.','Mañana iré a Pamplona.'],['Bihar nik euskara ikasiko dut.','Mañana estudiaré euskera.'],['Etzi guk mendira joango gara.','Pasado mañana iremos al monte.']]},
 {t:'Marcadores de futuro',h:'<p><b>bihar</b> (mañana), <b>etzi</b> (pasado mañana), <b>datorren astean</b> (la semana que viene), <b>laster</b> (pronto).</p>',
  ex:[['Datorren astean lanera joango naiz.','La semana que viene iré al trabajo.'],['Laster etorriko naiz.','Vendré pronto.']]}
 ],
 make:withPast(()=>[].concat(SQ0(['bihar','ni','Iruñera','joango','naiz'],'Mañana iré a Pamplona.','joan + go; naiz en presente.'),SQ0(['bihar','nik','euskara','ikasiko','dut'],'Mañana estudiaré euskera.','ikasi + ko; dut.'),SQ0(['etzi','gu','mendira','joango','gara'],'Pasado mañana iremos al monte.','joan + go; gara.'),[
  mc('Geroa','jan → futuro','¿Cuál es?','jango',['janko','jaten','janen du'],'Acaba en -n → <b>-go</b>.'),
  mc('Geroa','ikusi → futuro','¿Cuál es?','ikusiko',['ikusigo','ikusten','ikusi du'],'No acaba en -n → <b>-ko</b>.'),
  mc('Geroa','«Mañana comeré pan»','¿Cuál es?','Bihar ogia jango dut',['Bihar ogia jan nuen','Bihar ogia jaten dut','Bihar ogia jango nuen'],'-go + auxiliar en presente.'),
  mc('Geroa','«Mañana iré a casa»','¿Cuál es?','Bihar etxera joango naiz',['Bihar etxera joango dut','Bihar etxera joan nintzen','Bihar etxera joan naiz'],'joan = sin objeto → izan: <b>naiz</b>.')
 ],pastQs(['izan','ukan'],2)))});
/* A2: el futuro (e2) se adelanta junto al pasado, y se añade un repaso conjunto */
LESSONS.find(x=>x.id==='e2').n=LESSONS.find(x=>x.id==='b10').n+0.1;
lessonAfter('e9',{id:'r4',eu:'Errepasoa · atzo eta bihar',es:'Repaso: contar el pasado y el futuro',ic:'🗓️',min:10,
 goals:['Contar qué hiciste el fin de semana pasado','Contar qué harás el próximo','Cambiar bien el auxiliar: nintzen / nuen / naiz / dut'],
 steps:[
 {t:'Un mismo molde, tres tiempos',h:'<p>Participio + auxiliar. Lo que cambia: pasado → <b>nintzen / nuen</b>; presente o «he hecho» → <b>naiz / dut</b>; futuro → <b>-ko/-go</b> + naiz / dut.</p>',
  tb:mt(['','Pasado (joan den asteburuan)','Futuro (datorren asteburuan)'],[['izan','Mendira joan nintzen.','Mendira joango naiz.'],['ukan','Liburu bat irakurri nuen.','Liburu bat irakurriko dut.']])},
 {t:'Un fin de semana',h:'<p>Practica contando dos fines de semana seguidos, con conectores: <b>lehenengo</b> (primero), <b>gero</b> (luego), <b>azkenik</b> (por fin).</p>',
  ex:[['Joan den asteburuan lehenengo mendira joan nintzen, gero etxean jan nuen.','El fin de semana pasado primero fui al monte y luego comí en casa.'],['Datorren asteburuan lagunekin kafea edango dut.','El fin de semana que viene tomaré café con amigos.']]}
 ],
 make:withPast(()=>[].concat(pastQs(['izan','ukan','joan (iragana)','etorri (iragana)'],4),SQ0(['joan','den','asteburuan','mendira','joan','nintzen'],'El fin de semana pasado fui al monte.','joan nintzen = fui.'),SQ0(['datorren','asteburuan','liburu','bat','irakurriko','dut'],'El próximo fin de semana leeré un libro.','-ko + dut.'),typeQsT(3,[0,1]),[
  mc('Tiempos','«Ayer comí pan»','¿Cuál es?','Atzo ogia jan nuen',['Bihar ogia jango dut','Gaur ogia jan dut','Atzo ogia jango nuen'],'Pasado: <b>nuen</b>.'),
  mc('Tiempos','«El año que viene iré a Bilbao»','¿Cuál es?','Datorren urtean Bilbora joango naiz',['Datorren urtean Bilbora joan nintzen','Datorren urtean Bilbora joan naiz','Datorren urtean Bilbora joango nuen'],'Futuro de joan: joango + <b>naiz</b>.')
 ]))});
/* normalizar numeración 1..N por nivel (el progreso va por id) */
['a1','a2'].forEach(lv=>LESSONS.filter(x=>(x.lv||'a1')===lv).sort((a,b)=>a.n-b.n).forEach((x,i)=>{x.n=i+1}));
Object.assign(LSUM,{
r1:{sum:['Pregunta clave: ¿hay «qué»? No → <b>izan</b> (naiz, zara, da…). Sí → <b>ukan</b> (dut, duzu, du…).','Con NOR el sujeto no lleva -k; con NORK sí.'],kw:[['naiz','soy/estoy (NOR)'],['zara','eres'],['dut','lo tengo/hago (NORK)'],['duzu','lo tienes/haces']]},
r2:{sum:['Cuatro tipos: <b>NOR</b> naiz · <b>NOR-NORK</b> dut · <b>NOR-NORI</b> zait · <b>NOR-NORI-NORK</b> diot/dit.','-k = quien hace · -ri = a quién.'],kw:[['zait','me (gusta)'],['diot','se lo doy'],['dit','me lo da'],['zaizkit','me (gustan)']]},
l10:{sum:['Pasado de <b>izan</b>: nintzen, zinen, zen, ginen, zineten, ziren.','Pasado de <b>egon</b>: nengoen, zeunden, zegoen, geunden, zeundeten, zeuden.','Marcador: <b>atzo</b>.'],kw:[['atzo','ayer'],['nintzen','yo era/fui'],['nengoen','yo estaba'],['zen','él era/fue'],['ginen','éramos/fuimos']]},
t2:{sum:['Pasado de <b>ukan</b>: nuen, zenuen, zuen, genuen, zenuten, zuten.','Participio sin cambios; sujeto con -k.','Pasado (atzo) ≠ perfecto (gaur … dut).'],kw:[['nuen','yo lo … (pasado)'],['zenuen','tú lo…'],['zuen','él lo…'],['atzo','ayer'],['gaur','hoy']]},
t3:{sum:['Futuro: participio + <b>-ko</b> (o <b>-go</b> tras -n) + auxiliar en presente.','bihar, etzi, datorren astean, laster.'],kw:[['bihar','mañana'],['etzi','pasado mañana'],['datorren astean','la semana que viene'],['laster','pronto'],['jango','comerá'],['joango','irá']]},
r4:{sum:['Pasado: nintzen / nuen · presente/perfecto: naiz / dut · futuro: -ko/-go + naiz / dut.','Conectores: lehenengo, gero, azkenik.'],kw:[['lehenengo','primero'],['gero','luego'],['azkenik','por fin'],['joan den asteburuan','el fin de semana pasado'],['datorren asteburuan','el fin de semana que viene']]},
r3:{sum:['Presente → pasado: naiz→nintzen · dut→nuen · zait→zitzaidan · diot→nion · dit→zidan.'],kw:[['zidan','me lo dio'],['nion','le di'],['zitzaidan','me (gustaba)']]}
});
/* ===== VARIEDAD: lecciones con preguntas fijas -> orden aleatorio + repaso de lecciones ya hechas ===== */
(function(){
 const FIX=['l1','b10','b11','b15','b16','c4','d1','d2','e3','e5','e6','e8','e11'];
 LESSONS.forEach(l=>{ if(!FIX.includes(l.id))return; const mk=l.make;
  l.make=function(){
   const own=shuffle((mk.call(l)||[]).filter(Boolean));
   const done=LESSONS.filter(x=>x.id!==l.id&&!FIX.includes(x.id)&&S.lessons&&S.lessons[x.id]!=null);
   let extra=[];
   for(const x of shuffle(done).slice(0,3)){try{extra=extra.concat(shuffle((x.make()||[]).filter(Boolean)).slice(0,2))}catch(e){}}
   const seen=new Set(),out=[];
   own.concat(extra).forEach(q=>{const k=(q.p||'')+'|'+q.ans;if(!seen.has(k)){seen.add(k);out.push(q)}});
   return shuffle(out).slice(0,Math.max(own.length,12));
  }});
})();
