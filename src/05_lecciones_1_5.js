/* ===== LECCIONES (1-5) ===== */
const mc=(kind,p,hint,ans,wr,expl,help)=>({k:'choice',kind,p,hint,opts:shuffle([ans].concat(wr)),ans,expl,rev:expl,help});
const sq=s=>({k:'build',kind:'Eraiki esaldia',es:s.es,tokens:s.t,extra:s.x||[],expl:`${esc(s.es)}<br><small>${esc(s.tip)}</small>`,rev:`<b>${esc(cap(s.t.join(' ')))}.</b> ${esc(s.es)}`});
const SQ=(...i)=>i.map(k=>sq(SENT[k]));
const vq=(id,n)=>vocabQs(setWords(VOCAB.find(s=>s.id===id)),n);
function gb(tks,n){
  const out=[],seen=new Set();let t=0;
  while(out.length<n&&t++<80){
    const v=PART[rnd(PART.length)],tk=tks[rnd(tks.length)];
    if(v.only&&!v.only.includes(tk))continue;
    const i=rnd(6),g=genSentence(v,tk,i),key=g.tokens.join(' ');
    if(seen.has(key))continue;seen.add(key);
    const es=g.esTxt||`${PRON_ES[i]} · ${v.es} «${v.eso}» · ${TEN[tk].es}`;
    out.push({k:'build',kind:'Eraiki esaldia',es,tokens:g.tokens,extra:[],expl:`${esc(es)}<br><small>${genTip(v,tk)}</small>`,rev:`<b>${esc(cap(key))}.</b> ${esc(es)}`});
  }
  return out;
}
const LS={
 gus1:{t:['niri','kafea','gustatzen','zait'],es:'A mí me gusta el café.',tip:'niri = «a mí». El verbo gustatu concuerda con lo que gusta (kafea → zait).'},
 gus2:{t:['zuri','sagarrak','gustatzen','zaizkizu'],es:'A ti te gustan las manzanas.',tip:'Lo que gusta es plural (sagarrak) → zaizkizu, no zaizu.'},
 nahi:{t:['nik','euskara','ikasi','nahi','dut'],es:'Yo quiero aprender euskera.',tip:'nahi dut + verbo en participio (ikasi). Nahi izan usa el auxiliar ukan.'},
 behar:{t:['nik','etxera','joan','behar','dut'],es:'Tengo que ir a casa.',tip:'behar dut = tengo que. Va con ukan aunque joan sea un verbo de movimiento.'},
 ez1:{t:['nik','ez','dut','kafea','edaten'],es:'Yo no bebo café.',tip:'En negativo: ez + auxiliar, y el verbo principal queda detrás.'},
 fam:{t:['nik','arreba','bat','daukat'],es:'Yo tengo una hermana.',tip:'eduki = tener. daukat = tengo (un solo objeto).'},
 gen:{t:['aitaren','etxea','handia','da'],es:'La casa del padre es grande.',tip:'-ren: de quién es. El adjetivo (handia) va después del nombre.'},
 nongoa:{t:['ni','Baztangoa','naiz'],es:'Soy de Baztan.',tip:'-koa/-goa = «de (lugar)». Baztan + goa → Baztangoa.'},
 noa:{t:['ni','Iruñera','noa'],es:'Yo voy a Pamplona.',tip:'-ra = hacia. noa es la forma de «voy» (joan) sin auxiliar.'},
 dial1:{t:['kafe','bat','nahi','dut'],es:'Quiero un café.',tip:'Para pedir: «X bat nahi dut» o «X bat, mesedez».'}
};
const lsq=(...k)=>k.map(x=>sq(LS[x]));
/* v18 · +5 preguntas por práctica de lección: 2 nuevas de la propia lección (sin repetir las de base) + vocabulario que enseña esa lección */
const LESSON_EXTRA=5;
function lessonExtraQs(L,base,n){
  const SM=LSUM[L.id];if(!SM||!SM.kw)return[];
  const strs=q=>[q.p,q.ans,q.say,q.es].filter(x=>typeof x==='string'&&x).map(x=>x.toLowerCase());
  const used=new Set(),out=[];base.filter(Boolean).forEach(q=>strs(q).forEach(x=>used.add(x)));
  const take=q=>{const t=strs(q);if(!t.length||t.some(x=>used.has(x)))return false;t.forEach(x=>used.add(x));out.push(q);return true};
  try{for(let t=0;t<6&&out.length<2;t++){for(const q of shuffle(L.make().filter(Boolean))){if(take(q)&&out.length>=2)break}}}catch(e){}
  const pool=SM.kw.map(k=>({id:'kw:'+L.id+':'+k[0],eu:k[0],es:k[1],em:''}));
  let fresh=pool.filter(w=>!used.has(w.eu.toLowerCase())&&!used.has(w.es.toLowerCase()));
  pickWords(fresh,n-out.length).forEach(w=>out.push(vocabQ(w,pool)));
  if(out.length<n){const kk=q=>(q.p||q.es||'')+'|'+(q.ans||''),seen=new Set(base.concat(out).filter(Boolean).map(kk));
    const rest=pool.filter(w=>!out.some(q=>q.wid===w.id));
    pickWords(rest,rest.length).forEach(w=>{if(out.length>=n)return;for(let t=0;t<12;t++){const q=vocabQ(w,pool);if(!seen.has(kk(q))){seen.add(kk(q));out.push(q);break}}})}
  return out.slice(0,n);
}

const LESSONS=[
{id:'l1',n:1,eu:'Soinuak',es:'Cómo suena el euskera',ic:'🔤',min:6,
 goals:['Leer cualquier palabra en voz alta sin dudar','Saber qué hacen h, x, tx, ts/tz, z y j','Reconocer que cada letra suena siempre igual'],
 steps:[
 {t:'Se lee como se escribe',h:'<p>La buena noticia: el euskera <b>no tiene excepciones de lectura</b>. Cada letra suena siempre igual, y las vocales (a e i o u) suenan casi como en español.</p><p>Solo hay que aprender unas pocas letras que no son iguales que en español:</p>',
  tb:'<table class="mini"><tr><th>Letra</th><th>Suena como</th><th>Ejemplo</th></tr><tr><td><b>h</b></td><td>no suena (muda)</td><td>hamar → a-mar</td></tr><tr><td><b>x</b></td><td>«sh»</td><td>xake → shake</td></tr><tr><td><b>tx</b></td><td>«ch» de chico</td><td>etxea → e-che-a</td></tr><tr><td><b>ts, tz</b></td><td>«ts» de pizza</td><td>hitz → hits</td></tr><tr><td><b>z</b></td><td>una «s» fuerte</td><td>zuri → suri</td></tr><tr><td><b>j</b></td><td>«y» o «j», según la zona</td><td>jan → yan</td></tr></table>'},
 {t:'El alfabeto y cómo se llaman las letras',sa:1,h:'<p>El alfabeto básico tiene 22 letras. Pulsa 🔊 para oír el <b>nombre</b> de cada una (así se deletrea). C, Ç, Q, V, W e Y solo aparecen en palabras de fuera (c = ze, q = ku, v = uve, w = uve bikoitza, y = i grekoa).</p>',
  ex:[['A','A a → a','a'],['B','B b → be','be'],['D','D d → de','de'],['E','E e → e','e'],['F','F f → efe','efe'],['G','G g → ge','ge'],['H','H h → hatxe','hatxe'],['I','I i → i','i'],['J','J j → jota','jota'],['K','K k → ka','ka'],['L','L l → ele','ele'],['M','M m → eme','eme'],['N','N n → ene','ene'],['Ñ','Ñ ñ → eñe','eñe'],['O','O o → o','o'],['P','P p → pe','pe'],['R','R r → erre','erre'],['S','S s → ese','ese'],['T','T t → te','te'],['U','U u → u','u'],['X','X x → ixa','ixa'],['Z','Z z → zeta','zeta']]},
 {t:'La g y la u',h:'<p>La <b>g</b> es siempre dura (como en «gato»), también delante de e e i. Y la <b>u</b> de gu/gi/ge <b>sí suena</b>: no es muda como en español.</p>',
  ex:[['gizon','gui-zon (hombre)'],['gutxi','gu-chi (poco)'],['gero','gue-ro (después)'],['ongi etorri','on-gui e-to-rri (bienvenido)']]},
 {t:'Sonidos de una pieza',h:'<p>Algunas combinaciones suenan como <b>un solo sonido</b>: <b>tx, ts, tz, dz, ll, rr</b>. No las separes al leer.</p><p>Consejo: lee despacio, sílaba a sílaba. Si la sabes deletrear, la sabes leer.</p>',
  ex:[['txakurra','cha-ku-rra (el perro)'],['arratsalde','a-rrat-sal-de (tarde)'],['eskerrik asko','es-ke-rrik as-ko (muchas gracias)']]},
 {t:'Diptongos',h:'<p>Dos vocales juntas forman <b>una sola sílaba</b> (diptongo): <b>ai, ei, oi, au, eu</b>. Se pronuncian seguidas y rápido.</p>',
  ex:[['aita','ai-ta (padre)'],['euskara','eus-ka-ra (euskera)'],['oina','oi-na (pie)'],['autobusa','au-to-bu-sa (autobús)'],['beita','bei-ta (gato)']],
  tip:'Si dos vocales NO forman diptongo se separan en dos sílabas (hiato): <b>ea</b> → e-a (etxea = e-txe-a).'}
 ],
 make:()=>[
  mc('Soinuak','tx','¿Cómo suena?','«ch» de chico',['«ts» de pizza','«sh» de shhh','«k» de casa'],'<b>tx</b> = «ch». Etxea → e-che-a.'),
  mc('Soinuak','h','¿Qué hace en euskera estándar?','No suena',['Suena como j','Suena como g','Suena como ch'],'La <b>h</b> es muda: hamar → a-mar.'),
  mc('Soinuak','x','¿Cómo suena?','«sh»',['«ch»','«j»','«ks»'],'<b>x</b> = «sh»: xake → shake.'),
  mc('Soinuak','gutxi','¿Cómo se lee?','gu-chi (la u suena)',['gui-chi','gu-ti-xi','gu-tsi'],'En <b>gu</b> la u se pronuncia: gu-txi → «gu-chi».'),
  mc('Soinuak','etxea','¿Cómo se lee?','e-che-a',['e-ke-sa','e-tsa','e-ja'],'<b>etxea</b> = e-che-a (la casa).'),
  mc('Soinuak','hitz','¿La terminación -tz suena como…?','«ts» de pizza',['«ch» de chico','«z» española','«x» de taxi'],'<b>tz</b> y <b>ts</b> = «ts». Hitz = «hits» (palabra).')
 ]},

{id:'l2',n:2,eu:'Ni Dabid naiz',es:'Presentarse con «izan»',ic:'👋',min:8,
 goals:['Decir quién eres, de dónde eres y dónde vives','Conjugar izan (ser) en presente','Hacer preguntas con nor, non y nongoa'],
 steps:[
 {t:'Los pronombres y «izan»',h:'<p><b>izan</b> significa <b>ser</b>. Cada persona tiene su forma. El pronombre se puede omitir, porque el verbo ya indica quién es.</p>',
  tb:'<table class="mini"><tr><th></th><th>izan</th><th></th></tr><tr><td>ni</td><td><b>naiz</b></td><td>yo soy</td></tr><tr><td>zu</td><td><b>zara</b></td><td>tú eres</td></tr><tr><td>bera</td><td><b>da</b></td><td>él / ella es</td></tr><tr><td>gu</td><td><b>gara</b></td><td>somos</td></tr><tr><td>zuek</td><td><b>zarete</b></td><td>sois</td></tr><tr><td>haiek</td><td><b>dira</b></td><td>son</td></tr></table>',
  tip:'<b>bera</b> no distingue género: vale para «él» y «ella». En Baztan y buena parte de Navarra se dice <b>bera</b>; el euskera batua (el de los libros y el euskaltegi) usa <b>hura</b> con las mismas formas (hura da, hark du, hari…). Las dos son válidas. <b>zu</b> es tú (uno solo) y <b>zuek</b> es vosotros.'},
 {t:'El orden: el verbo va al final',h:'<p>La frase vasca termina con el verbo. Primero dices quién, luego el dato, y cierras con <b>izan</b>.</p>',
  pc:[['Ni','p-sub','quién'],['Dabid','p-obj','el dato'],['naiz','p-aux','soy']],
  ex:[['Ni Dabid naiz.','Yo soy David.'],['Zu euskalduna zara.','Tú eres euskaldun (hablante de euskera).'],['Gu lagunak gara.','Nosotros somos amigos.']]},
 {t:'Preguntar y decir de dónde eres',h:'<p>Para preguntar de dónde eres: <b>nongoa</b>. La respuesta usa <b>-koa / -goa</b>: lugar + «-ko» (tras vocal) o «-go» (tras consonante) + a.</p>',
  ex:[['Nor zara zu?','¿Quién eres tú?'],['Nongoa zara?','¿De dónde eres?'],['Baztangoa naiz.','Soy de Baztan.'],['Iruñekoa naiz.','Soy de Pamplona.'],['Non bizi zara?','¿Dónde vives?'],['Elizondon bizi naiz.','Vivo en Elizondo.']],
  tip:'«bizi izan» (vivir) usa <b>izan</b> como auxiliar: bizi <b>naiz</b>, bizi <b>zara</b>.'},
 {t:'Decir que no',h:'<p>Pones <b>ez</b> delante del verbo: <b>ez naiz</b>, <b>ez zara</b>. Para preguntas de sí o no se añade <b>-al</b> o se sube la entonación.</p>',
  ex:[['Ez naiz Dabid.','No soy David.'],['Euskalduna al zara?','¿Eres euskaldun?'],['Bai, naiz. / Ez, ez naiz.','Sí, lo soy. / No, no lo soy.']]}
 ],
 make:()=>[].concat(conjQs(['izan'],4),lsq('nongoa'),SQ(0,1,15),[
  mc('Nongoa zara?','Baztan → «de Baztan»','Completa','Baztangoa',['Baztanekoa','Baztanera','Baztanen'],'Tras consonante (-n) se usa <b>-go</b>: Baztan + go + a = Baztangoa.'),
  mc('Ez naiz…','«No soy David»','¿Cómo se dice?','Ez naiz Dabid',['Naiz ez Dabid','Dabid ez dut','Ez da Dabid'],'<b>ez</b> + auxiliar: ez naiz.')
 ])},

{id:'l3',n:3,eu:'Gauzak',es:'El artículo, el plural y «hau / hori»',ic:'📦',min:7,
 goals:['Poner el artículo (-a) y el plural (-ak)','Usar «bat» y los números con el nombre','Señalar con hau, hori y hura'],
 steps:[
 {t:'El artículo va pegado al final',h:'<p>No hay «el / la» como palabra suelta. Se añade <b>-a</b> al final del nombre. El plural añade <b>-ak</b>.</p>',
  tb:'<table class="mini"><tr><th>Sin artículo</th><th>El / la</th><th>Los / las</th></tr><tr><td>etxe</td><td><b>etxea</b></td><td><b>etxeak</b></td></tr><tr><td>liburu</td><td><b>liburua</b></td><td><b>liburuak</b></td></tr><tr><td>behi</td><td><b>behia</b></td><td><b>behiak</b></td></tr><tr><td>gizon</td><td><b>gizona</b></td><td><b>gizonak</b></td></tr></table>',
  tip:'Si el nombre ya acaba en <b>-a</b>, no cambia en singular: <b>ama</b> (la madre). El plural sí: <b>amak</b>.'},
 {t:'«bat» y los números',h:'<p><b>bat</b> = un / una, y va <b>detrás</b> del nombre. Con otros números, el nombre va <b>sin artículo y sin plural</b>.</p>',
  ex:[['liburu bat','un libro'],['bi liburu','dos libros (no «bi liburuak»)'],['hiru etxe','tres casas'],['etxe handi bat','una casa grande']]},
 {t:'Hau, hori, hura',h:'<p>Tres formas de señalar, según la distancia.</p>',
  tb:'<table class="mini"><tr><th>Singular</th><th>Plural</th><th>Significa</th></tr><tr><td><b>hau</b></td><td>hauek</td><td>este (cerca de mí)</td></tr><tr><td><b>hori</b></td><td>horiek</td><td>ese (cerca de ti)</td></tr><tr><td><b>hura</b></td><td>haiek</td><td>aquel (lejos)</td></tr></table>',
  ex:[['Hau liburua da.','Esto es el libro.'],['Hori ez da nire etxea.','Esa no es mi casa.'],['Haiek behiak dira.','Aquellas son vacas.']]},
 {t:'El adjetivo va detrás',h:'<p>El adjetivo se coloca <b>después</b> del nombre, y es el adjetivo quien lleva el artículo.</p>',
  pc:[['etxe','p-obj','nombre'],['handia','p-part','adjetivo + a']],
  ex:[['etxe handia','la casa grande'],['mendi garaia','el monte alto'],['txakur txikiak','los perros pequeños']]}
 ],
 make:()=>[].concat(vq('etxea',3),[
  mc('El artículo','«la casa»','¿Cómo se dice?','etxea',['etxe a','etxeak','etxe bat'],'<b>etxe</b> + a = etxea.','El artículo no es una palabra aparte: se pega al final del nombre.'),
  mc('El plural','«los libros»','¿Cómo se dice?','liburuak',['liburua','liburu bat','liburuk'],'Plural: <b>liburu + ak</b> = liburuak.'),
  mc('Números','«dos libros»','¿Cómo se dice?','bi liburu',['bi liburuak','bi liburua','liburu bi'],'Tras un número el nombre queda sin artículo ni plural: <b>bi liburu</b>.'),
  mc('Bat','«una casa»','¿Cómo se dice?','etxe bat',['bat etxe','etxea bat','etxeak bat'],'<b>bat</b> va detrás del nombre: etxe bat.'),
  mc('Señalar','«Esto es el libro»','¿Cómo se dice?','Hau liburua da',['Hori liburua da','Hau liburu bat','Hura liburuak dira'],'<b>hau</b> = esto (cerca de mí). El verbo va al final: da.'),
  mc('Adjetivos','«la casa grande»','¿Cómo se dice?','etxe handia',['handia etxe','etxea handi','etxe handi bat'],'Nombre + adjetivo con artículo: <b>etxe handia</b>.')
 ])},

{id:'l4',n:4,eu:'Non? Nora? Nondik?',es:'Casos de lugar y «egon»',ic:'📍',min:8,
 goals:['Decir en, a y desde un lugar con -n, -ra y -tik','Usar -ko / -go para «de» un sitio','Distinguir egon (estar) de izan (ser)'],
 steps:[
 {t:'Las terminaciones de lugar',h:'<p>Donde el español usa «en, a, desde, de», el euskera añade una terminación al final del lugar.</p>',
  tb:'<table class="mini"><tr><th>Pregunta</th><th>Final</th><th>etxea</th><th>Elizondo</th></tr><tr><td>Non? <small>(dónde)</small></td><td>-n</td><td>etxe<b>an</b></td><td>Elizondo<b>n</b></td></tr><tr><td>Nora? <small>(adónde)</small></td><td>-ra</td><td>etxe<b>ra</b></td><td>Elizondo<b>ra</b></td></tr><tr><td>Nondik? <small>(desde)</small></td><td>-tik</td><td>etxe<b>tik</b></td><td>Elizondo<b>tik</b></td></tr><tr><td>Nongo? <small>(de)</small></td><td>-ko</td><td>etxe<b>ko</b></td><td>Elizondo<b>ko</b></td></tr></table>',
  tip:'Si el lugar acaba en <b>consonante</b>, cambia un poco: Baztan → <b>Baztanen</b> (en), <b>Baztanera</b> (a), <b>Baztanetik</b> (desde), <b>Baztango</b> (de).'},
 {t:'Egon: estar en un sitio',h:'<p>Para decir <b>dónde está</b> algo o alguien se usa <b>egon</b>, no izan.</p>',
  tb:'<table class="mini"><tr><th></th><th>egon</th></tr><tr><td>ni</td><td><b>nago</b></td></tr><tr><td>zu</td><td><b>zaude</b></td></tr><tr><td>bera</td><td><b>dago</b></td></tr><tr><td>gu</td><td><b>gaude</b></td></tr><tr><td>zuek</td><td><b>zaudete</b></td></tr><tr><td>haiek</td><td><b>daude</b></td></tr></table>',
  ex:[['Ni etxean nago.','Estoy en casa.'],['Behiak mendian daude.','Las vacas están en el monte.'],['Ama sukaldean dago.','Mamá está en la cocina.']]},
 {t:'Ir y venir',h:'<p><b>joan</b> (ir) y <b>etorri</b> (venir) tienen formas propias, sin auxiliar. Se usan con <b>-ra</b> y <b>-tik</b>.</p>',
  tb:'<table class="mini"><tr><th></th><th>joan (ir)</th><th>etorri (venir)</th></tr><tr><td>ni</td><td><b>noa</b></td><td><b>nator</b></td></tr><tr><td>zu</td><td><b>zoaz</b></td><td><b>zatoz</b></td></tr><tr><td>bera</td><td><b>doa</b></td><td><b>dator</b></td></tr><tr><td>gu</td><td><b>goaz</b></td><td><b>gatoz</b></td></tr><tr><td>zuek</td><td><b>zoazte</b></td><td><b>zatozte</b></td></tr><tr><td>haiek</td><td><b>doaz</b></td><td><b>datoz</b></td></tr></table>',
  pc:[['Ni','p-sub','quién'],['Iruñera','p-obj','adónde (-ra)'],['noa','p-aux','voy']],
  ex:[['Gu Baztanera goaz.','Vamos a Baztan.'],['Zu Elizondotik zatoz.','Vienes de Elizondo.'],['Ni etxera noa.','Voy a casa.']],
  tip:'Ser o estar: <b>Baztangoa naiz</b> (soy de allí, izan). <b>Baztanen nago</b> (ahora estoy allí, egon).'}
 ],
 make:()=>[].concat(conjQs(['egon','joan','etorri'],5),lsq('noa'),SQ(4,5,8,16),[
  mc('Non?','etxea → «en casa»','Añade la terminación','etxean',['etxera','etxetik','etxeko'],'<b>-n</b> responde a «non»: etxean.'),
  mc('Nora?','etxea → «a casa»','Añade la terminación','etxera',['etxean','etxetik','etxeko'],'<b>-ra</b> = «a, hacia»: etxera.'),
  mc('Nondik?','Elizondo → «desde Elizondo»','Añade la terminación','Elizondotik',['Elizondon','Elizondora','Elizondoko'],'<b>-tik</b> = «desde».'),
  mc('Ser o estar','«Estoy en Elizondo»','¿Cuál es?','Elizondon nago',['Elizondon naiz','Elizondora nago','Elizondotik nago'],'Dónde estás → <b>egon</b> (nago) + <b>-n</b>.'),
  mc('Baztan','«Voy a Baztan»','¿Cómo se dice?','Baztanera noa',['Baztanra noa','Baztango noa','Baztanen noa'],'Baztan acaba en consonante: + <b>era</b> = Baztanera.')
 ])},

{id:'l5',n:5,eu:'Zenbakiak',es:'Números, precios y edad',ic:'🔢',min:8,
 goals:['Contar hasta 100','Preguntar y decir precios','Decir tu edad (con «ukan», ¡sorpresa!)'],
 steps:[
 {t:'Del 1 al 20',h:'<p>Memoriza estos: son la base de todo lo demás.</p>',
  tb:'<table class="mini"><tr><td>1 <b>bat</b></td><td>6 <b>sei</b></td><td>11 <b>hamaika</b></td><td>16 <b>hamasei</b></td></tr><tr><td>2 <b>bi</b></td><td>7 <b>zazpi</b></td><td>12 <b>hamabi</b></td><td>17 <b>hamazazpi</b></td></tr><tr><td>3 <b>hiru</b></td><td>8 <b>zortzi</b></td><td>13 <b>hamahiru</b></td><td>18 <b>hamazortzi</b></td></tr><tr><td>4<b>lau</b></td><td>9 <b>bederatzi</b></td><td>14 <b>hamalau</b></td><td>19 <b>hemeretzi</b></td></tr><tr><td>5 <b>bost</b></td><td>10 <b>hamar</b></td><td>15 <b>hamabost</b></td><td>20 <b>hogei</b></td></tr></table>',
  tip:'Del 11 al 17 es <b>hama-</b> + número (hama + bi = hamabi). Es la regla del 10 + n.'},
 {t:'De veinte en veinte',h:'<p>El euskera cuenta de <b>veinte en veinte</b>, como el francés «quatre-vingts». Los decenas son:</p>',
  tb:'<table class="mini"><tr><td>20 <b>hogei</b></td><td>60 <b>hirurogei</b></td></tr><tr><td>30 <b>hogeita hamar</b> <small>(20+10)</small></td><td>70 <b>hirurogeita hamar</b></td></tr><tr><td>40 <b>berrogei</b></td><td>80 <b>laurogei</b></td></tr><tr><td>50 <b>berrogeita hamar</b></td><td>90 <b>laurogeita hamar</b></td></tr><tr><td colspan="2">100 <b>ehun</b></td></tr></table>',
  ex:[['hogeita bat','21 (veinte y uno)'],['hogeita bost','25'],['berrogeita zazpi','47'],['laurogeita bi','82']],
  tip:'Entre la decena y la unidad va <b>eta</b> («y»), pegado: hogei<b>ta</b> bost.'},
 {t:'Precios y horas',h:'<p><b>Zenbat da?</b> = ¿cuánto es? Con un euro, el verbo va en singular (<b>da</b>). Con más, en plural (<b>dira</b>).</p>',
  ex:[['Zenbat da?','¿Cuánto es?'],['Euro bat da.','Es un euro.'],['Bost euro dira.','Son cinco euros.'],['Zer ordu da?','¿Qué hora es?'],['Ordu bata da. / Biak dira. / Hirurak dira.','Es la una. / Son las dos. / Son las tres.']],
  tip:'Para las horas, tu profesor te dirá la fórmula exacta. Aquí practicamos precios y edad.'},
 {t:'La edad usa «ukan»',h:'<p>En euskera no «eres» años: los <b>tienes</b>. Como son varios años (plural), el auxiliar es <b>ditut</b>, el plural de <b>dut</b>.</p>',
  pc:[['Zenbat','p-sub','cuántos'],['urte','p-obj','años'],['dituzu','p-aux','tienes']],
  ex:[['Zenbat urte dituzu?','¿Cuántos años tienes?'],['Berrogei urte ditut.','Tengo cuarenta años.'],['Hogeita bost urte ditu.','Tiene veinticinco años.']]}
 ],
 make:()=>[].concat(vq('zenbakiak',4),[
  mc('Zenbakiak','hogei','¿Qué número es?','20',['12','2','200'],'<b>hogei</b> = 20. Base del sistema de veintes.'),
  mc('Zenbakiak','berrogei','¿Qué número es?','40',['14','4','60'],'<b>berrogei</b> = 40 (dos veintes).'),
  mc('Zenbakiak','laurogei','¿Qué número es?','80',['40','60','90'],'<b>laurogei</b> = 80 (cuatro veintes).'),
  mc('Zenbakiak','25','¿Cómo se dice?','hogeita bost',['hogei bost','bost hogei','hamabost'],'20 + 5 = <b>hogei-ta bost</b>.'),
  mc('Prezioak','«Son cinco euros»','¿Cómo se dice?','Bost euro dira',['Bost euro da','Bost euroak dira','Euro bost dira'],'Más de uno → <b>dira</b>, y el nombre sin plural: bost euro.'),
  mc('Adina','«Tengo 30 años»','¿Cómo se dice?','Hogeita hamar urte ditut',['Hogeita hamar urte naiz','Hogeita hamar urte dut','Ni hogeita hamar naiz'],'Los años se <b>tienen</b>: urte <b>ditut</b> (plural).')
 ])}
];
