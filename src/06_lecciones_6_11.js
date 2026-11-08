/* ===== LECCIONES (6-11) ===== */
LESSONS.push(
{id:'l6',n:6,eu:'Familia',es:'De quién es, cómo es, qué tengo',ic:'👨‍👩‍👧',min:8,
 goals:['Decir de quién es algo con -ren / -en','Usar nire, zure, beraren…','Describir con «nolakoa» y tener con «eduki»'],
 steps:[
 {t:'De quién: -ren',h:'<p>«La casa del padre» se dice al revés: <b>del padre la casa</b>. Al dueño se le añade <b>-ren</b> (tras vocal) o <b>-en</b> (tras consonante).</p>',
  ex:[['aitaren etxea','la casa del padre'],['amaren liburua','el libro de la madre'],['Dabiden txakurra','el perro de David'],['Baztanen bizi gara','vivimos en Baztan (aquí -en = en)']],
  tip:'Ojo: en <b>Dabiden</b> el «-en» es genitivo (de David). En <b>Baztanen</b> es «en Baztan». Mismas letras, distinto papel.'},
 {t:'Mi, tu, su…',h:'<p>Los posesivos van <b>antes</b> del nombre.</p>',
  tb:'<table class="mini"><tr><th></th><th>de</th><th>ejemplo</th></tr><tr><td>ni</td><td><b>nire</b></td><td>nire ama = mi madre</td></tr><tr><td>zu</td><td><b>zure</b></td><td>zure etxea = tu casa</td></tr><tr><td>bera</td><td><b>beraren</b></td><td>beraren anaia = su hermano</td></tr><tr><td>gu</td><td><b>gure</b></td><td>gure familia</td></tr><tr><td>zuek</td><td><b>zuen</b></td><td>zuen lagunak</td></tr><tr><td>haiek</td><td><b>haien</b></td><td>haien seme</td></tr></table>'},
 {t:'¿Cómo es? Nolakoa',h:'<p>Para describir: <b>Nolakoa da...?</b> y respondes con nombre + adjetivo (con artículo) + <b>da</b>.</p>',
  pc:[['Ama','p-sub','quién'],['polita','p-part','adjetivo'],['da','p-aux','es']],
  ex:[['Nolakoa da zure aita?','¿Cómo es tu padre?'],['Nire aita altua da.','Mi padre es alto.'],['Amona zaharra da.','La abuela es mayor.']]},
 {t:'Tener: eduki',h:'<p><b>eduki</b> = tener. Va con sujeto en <b>-k</b> (nik, zuk…). Una cosa: <b>daukat</b>. Varias: <b>dauzkat</b>.</p>',
  tb:'<table class="mini"><tr><th></th><th>1 cosa</th><th>varias</th></tr><tr><td>nik</td><td>daukat</td><td>dauzkat</td></tr><tr><td>zuk</td><td>daukazu</td><td>dauzkazu</td></tr><tr><td>berak</td><td>dauka</td><td>dauzka</td></tr><tr><td>guk</td><td>daukagu</td><td>dauzkagu</td></tr></table>',
  ex:[['Nik arreba bat daukat.','Tengo una hermana.'],['Nik bi anai dauzkat.','Tengo dos hermanos.']]}
 ],
 make:()=>[].concat(vq('familia',3),conjQs(['eduki'],3),lsq('fam','gen'),[
  mc('-ren','«la casa del padre»','¿Cómo se dice?','aitaren etxea',['etxea aitaren','aita etxea','aitak etxea'],'El dueño va primero con <b>-ren</b>: aita<b>ren</b> etxea.','Piensa en el orden: primero va el dueño con su terminación de «de», después la cosa.'),
  mc('-en','«el perro de David»','¿Cómo se dice?','Dabiden txakurra',['Dabidaren txakurra','Dabid txakurra','Txakurra Dabiden'],'Tras consonante: <b>-en</b>. Dabid + en.'),
  mc('Posesivos','«mi madre»','¿Cómo se dice?','nire ama',['ama nire','zure ama','nik ama'],'El posesivo va delante: <b>nire</b> ama.'),
  mc('Eduki','«Tengo dos hermanos»','¿Auxiliar correcto?','Bi anai dauzkat',['Bi anai daukat','Bi anai naiz','Bi anai nago'],'Varias cosas → <b>dauzkat</b>.')
 ])},

{id:'l7',n:7,eu:'Ukan',es:'El verbo auxiliar con objeto (nork)',ic:'🔧',min:10,
 goals:['Entender cuándo se usa ukan (dut, du…) y cuándo izan','Poner el sujeto en -k (nik, aitak…)','Pasar de singular (dut) a plural (ditut)'],
 steps:[
 {t:'La idea clave: ¿hay un «qué»?',h:'<p>La mayoría de verbos necesitan un <b>auxiliar</b>. Para elegirlo, hazte una pregunta: <b>¿lo que hago, lo hago «a algo»?</b></p>',
  tb:'<table class="mini"><tr><th>Sin objeto → <b>izan</b></th><th>Con objeto → <b>ukan</b></th></tr><tr><td>joan (ir), etorri (venir), bizi (vivir), egon</td><td>jan (comer), edan (beber), ikusi, irakurri, ikasi</td></tr><tr><td>Ni etxera joaten <b>naiz</b>.</td><td>Nik ogia jaten <b>dut</b>.</td></tr></table>',
  tip:'Truco: si puedes preguntar «¿qué?» después del verbo («como… ¿qué? pan»), es <b>ukan</b>.'},
 {t:'El sujeto lleva -k',h:'<p>Cuando el verbo lleva objeto, quien lo hace se marca con <b>-k</b>. Es el rasgo más raro del euskera para un hispanohablante, y el más importante.</p>',
  tb:'<table class="mini"><tr><th>sin objeto</th><th>con objeto (-k)</th></tr><tr><td>ni</td><td><b>nik</b></td></tr><tr><td>zu</td><td><b>zuk</b></td></tr><tr><td>bera</td><td><b>berak</b></td></tr><tr><td>gu</td><td><b>guk</b></td></tr><tr><td>zuek</td><td>zuek</td></tr><tr><td>haiek</td><td>haiek</td></tr></table>',
  ex:[['Aita etxera doa.','El padre va a casa. (sin objeto)'],['Aitak ogia jaten du.','El padre come pan. (con objeto: aitak)'],['Amak liburua irakurtzen du.','La madre lee el libro.']]},
 {t:'Las formas: dut, duzu, du…',h:'<p>Cada forma se arma con piezas: <b>d-</b> (lo) + <b>u</b> (raíz) + el final que dice quién lo hace. Si hay <b>varios</b> objetos, la raíz cambia a <b>itu</b>.</p>',
  tb:'<table class="mini"><tr><th></th><th>1 objeto</th><th>varios</th></tr><tr><td>nik</td><td>dut</td><td>ditut</td></tr><tr><td>zuk</td><td>duzu</td><td>dituzu</td></tr><tr><td>berak</td><td>du</td><td>ditu</td></tr><tr><td>guk</td><td>dugu</td><td>ditugu</td></tr><tr><td>zuek</td><td>duzue</td><td>dituzue</td></tr><tr><td>haiek</td><td>dute</td><td>dituzte</td></tr></table>',
  ex:[['Nik liburua irakurtzen dut.','Leo el libro.'],['Nik liburuak irakurtzen ditut.','Leo los libros.']],
  tip:'El auxiliar concuerda con el <b>objeto</b>, no con el sujeto: un libro → dut; varios → ditut.'},
 {t:'Aplícalo: de la frase al auxiliar',h:'<p>Paso a paso con una frase real:</p><p>1. ¿Hay un «qué»? Sí (ogia) → <b>ukan</b>.<br>2. Sujeto con <b>-k</b>: ni → <b>nik</b>.<br>3. Un solo objeto → <b>dut</b>.</p>',
  pc:[['Nik','p-sub','quién (-k)'],['ogia','p-obj','qué'],['jaten','p-part','verbo'],['dut','p-aux','auxiliar (ukan)']]}
 ],
 make:()=>[].concat(conjQs(['ukan'],4),nnQs(4),SQ(2,3,9,10)).slice(0,12)},

{id:'l8',n:8,eu:'Ohiturak',es:'Hábitos y lo que haces ahora',ic:'⏰',min:8,
 goals:['Formar el verbo habitual con -ten / -tzen','Decir que algo está pasando ahora con «ari»','Colocar ez y las palabras de frecuencia'],
 steps:[
 {t:'El verbo habitual',h:'<p>Para hablar de lo que haces <b>normalmente</b>, el verbo toma la forma habitual (<b>-ten / -tzen</b>) y añades el auxiliar.</p>',
  tb:'<table class="mini"><tr><th>Participio</th><th>Habitual</th></tr><tr><td>jan</td><td><b>jaten</b></td></tr><tr><td>edan</td><td><b>edaten</b></td></tr><tr><td>ikasi</td><td><b>ikasten</b></td></tr><tr><td>ikusi</td><td><b>ikusten</b></td></tr><tr><td>irakurri</td><td><b>irakurtzen</b></td></tr><tr><td>joan</td><td><b>joaten</b></td></tr><tr><td>etorri</td><td><b>etortzen</b></td></tr></table>',
  pc:[['Nik','p-sub','quién (-k)'],['kafea','p-obj','qué'],['edaten','p-part','habitual'],['dut','p-aux','auxiliar']],
  tip:'Estas formas hay que aprenderlas con cada verbo. No hay regla que las cubra todas.'},
 {t:'Ahora mismo: ari izan',h:'<p>Para decir que <b>estás haciendo algo ahora</b>: forma habitual + <b>ari</b> + <b>izan</b>. Aquí el auxiliar es siempre <b>izan</b>, aunque el verbo lleve objeto, y el sujeto vuelve a ir sin -k.</p>',
  pc:[['Ni','p-sub','quién (sin -k)'],['kafea','p-obj','qué'],['edaten','p-part','habitual'],['ari','p-part','ahora'],['naiz','p-aux','izan']],
  ex:[['Ni euskara ikasten ari naiz.','Estoy aprendiendo euskera.'],['Ama ogia jaten ari da.','Mamá está comiendo pan.']]},
 {t:'Con qué frecuencia',h:'<p>Estas palabras sitúan el hábito y se colocan en la frase antes del verbo.</p>',
  ex:[['egunero','cada día'],['beti','siempre'],['sarri','a menudo'],['batzuetan','a veces'],['inoiz ez','nunca'],['Egunero kafea edaten dut.','Cada día bebo café.'],['Beti euskaraz hitz egiten dugu.','Siempre hablamos en euskera.']]},
 {t:'Decir que no',h:'<p><b>ez</b> va justo antes del auxiliar. Después queda el verbo.</p>',
  pc:[['Nik','p-sub','quién'],['ez','p-part','no'],['dut','p-aux','auxiliar'],['kafea','p-obj','qué'],['edaten','p-part','verbo']],
  ex:[['Nik ez dut kafea edaten.','No bebo café.'],['Ni ez naiz Iruñera joaten.','No voy a Pamplona.']]}
 ],
 make:()=>[].concat(gb(['oraina','ari'],5),lsq('ez1'),vq('aditzak',2),[
  mc('Habitual','jan → «comer, habitual»','¿Cuál es?','jaten',['jateten','jan','jan du'],'<b>jan</b> → <b>jaten</b> (irregular, hay que aprenderlo).','Es la forma habitual, con terminación -ten o -tzen. Este verbo es irregular.'),
  mc('Habitual','irakurri → «leer, habitual»','¿Cuál es?','irakurtzen',['irakurten','irakurri','irakurri du'],'<b>irakurri</b> → <b>irakurtzen</b>.'),
  mc('Ari izan','«Estoy bebiendo agua»','¿Cómo se dice?','Ni ura edaten ari naiz',['Nik ura edaten ari dut','Ni ura edan naiz','Ni ura edaten dut ari'],'Con <b>ari</b> el auxiliar es <b>izan</b> y el sujeto va sin -k: Ni… ari naiz.')
 ])},

{id:'l9',n:9,eu:'Gustuak eta beharrak',es:'Gustar, querer y tener que',ic:'❤️',min:9,
 goals:['Decir qué te gusta con «gustatzen zait»','Distinguir zait (una cosa) de zaizkit (varias)','Usar nahi dut y behar dut + verbo'],
 steps:[
 {t:'Gustar funciona «al revés»',h:'<p>En euskera no «gustas» algo: <b>algo te gusta a ti</b>. Lo que gusta es el sujeto; a quien le gusta lleva <b>-ri</b>.</p>',
  tb:'<table class="mini"><tr><th>A quién</th><th>le gusta</th></tr><tr><td>niri <small>(a mí)</small></td><td>gustatzen <b>zait</b></td></tr><tr><td>zuri</td><td>gustatzen <b>zaizu</b></td></tr><tr><td>berari</td><td>gustatzen <b>zaio</b></td></tr><tr><td>guri</td><td>gustatzen <b>zaigu</b></td></tr><tr><td>zuei</td><td>gustatzen <b>zaizue</b></td></tr><tr><td>haiei</td><td>gustatzen <b>zaie</b></td></tr></table>',
  pc:[['Niri','p-sub','a quién (-ri)'],['kafea','p-obj','qué gusta'],['gustatzen','p-part','verbo'],['zait','p-aux','me']],
  ex:[['Niri kafea gustatzen zait.','Me gusta el café.'],['Zuri zer gustatzen zaizu?','¿Qué te gusta a ti?']]},
 {t:'Una cosa o varias',h:'<p>El auxiliar concuerda con <b>lo que gusta</b>. Si es plural, pasa de <b>zait</b> a <b>zaizkit</b> (y así con todas las personas: zaizu → zaizkizu).</p>',
  ex:[['Niri sagarra gustatzen zait.','Me gusta la manzana.'],['Niri sagarrak gustatzen zaizkit.','Me gustan las manzanas.'],['Guri mendia gustatzen zaigu.','Nos gusta el monte.']],
  tip:'No importa quién siente el gusto: importa si <b>lo que gusta</b> es uno (zait) o varios (zaizkit).'},
 {t:'Querer y tener que',h:'<p>Dos verbos muy útiles, los dos con <b>ukan</b> (sujeto en -k). Van detrás del verbo en <b>participio</b>.</p>',
  pc:[['Nik','p-sub','quién (-k)'],['euskara','p-obj','qué'],['ikasi','p-part','verbo'],['nahi','p-part','querer'],['dut','p-aux','auxiliar']],
  ex:[['Kafe bat nahi dut.','Quiero un café.'],['Nik euskara ikasi nahi dut.','Quiero aprender euskera.'],['Nik etxera joan behar dut.','Tengo que ir a casa.']]},
 {t:'En negativo',h:'<p>Para decir que <b>no te gusta</b>, <b>ez</b> va antes del auxiliar.</p>',
  ex:[['Niri ez zait kafea gustatzen.','No me gusta el café.'],['Nik ez dut ura nahi.','No quiero agua.']]}
 ],
 make:()=>[].concat(lsq('gus1','gus2','nahi','behar','dial1'),vq('janaria',3),[
  mc('Gustatu','«Me gusta el café»','¿Auxiliar?','Niri kafea gustatzen zait',['Niri kafea gustatzen dut','Nik kafea gustatzen zait','Niri kafea gustatzen zaizkit'],'Lo que gusta es singular → <b>zait</b>. «A mí» = niri.','Dos cosas: ¿a quién le gusta (lleva -ri)? ¿Lo que gusta es uno o varios?'),
  mc('Gustatu','«Me gustan las manzanas»','¿Auxiliar?','Niri sagarrak gustatzen zaizkit',['Niri sagarrak gustatzen zait','Nik sagarrak gustatzen ditut','Niri sagarrak gustatzen nago'],'Lo que gusta es plural → <b>zaizkit</b>.'),
  mc('Gustatu','«A ti te gusta la sidra»','¿Cuál es?','Zuri sagardoa gustatzen zaizu',['Zuri sagardoa gustatzen zait','Zuk sagardoa gustatzen duzu','Zuri sagardoa gustatzen du'],'Para «a ti»: <b>zuri</b> + <b>zaizu</b>.')
 ])},

{id:'l11',n:11,eu:'Egoera errealak',es:'Situaciones reales',ic:'💬',min:8,
 goals:['Pedir en un bar y preguntar el precio','Presentarte y hablar de ti en 5 frases','Ver cómo se combinan las lecciones anteriores en conversación'],
 steps:[
 {t:'En el bar',h:'<p>Con lo que ya sabes puedes pedir y pagar.</p>',
  ex:[['Kaixo! Kafe bat nahi dut, mesedez.','¡Hola! Quiero un café, por favor.'],['Bai, berehala. Zer gehiago?','Sí, enseguida. ¿Qué más?'],['Ogi tosta bat, mesedez.','Una tostada, por favor.'],['Zenbat da?','¿Cuánto es?'],['Lau euro dira.','Son cuatro euros.'],['Eskerrik asko! Agur!','¡Muchas gracias! ¡Adiós!']]},
 {t:'Presentarte',h:'<p>Cinco frases que ya puedes formar. Cada una usa una lección.</p>',
  ex:[['Kaixo, Dabid naiz.','Hola, soy David. (izan)'],['Baztangoa naiz, baina Elizondon bizi naiz.','Soy de Baztan, pero vivo en Elizondo. (lugar)'],['Euskara ikasten ari naiz.','Estoy aprendiendo euskera. (ari)'],['Niri mendia gustatzen zait.','Me gusta el monte. (gustatu)'],['Gaur lanera joan behar dut.','Hoy tengo que ir al trabajo. (behar)']]},
 {t:'Preguntar por el camino',h:'<p>Las palabras de pregunta + <b>egon</b> o <b>joan</b> te sacan de apuros.</p>',
  ex:[['Barkatu, non dago komuna?','Perdona, ¿dónde está el baño?'],['Non dago kafetegia?','¿Dónde está la cafetería?'],['Nora zoaz?','¿Adónde vas?'],['Elizondora noa.','Voy a Elizondo.'],['Zer moduz? Ondo nago, eta zu?','¿Qué tal? Estoy bien, ¿y tú?']]}
 ],
 make:()=>[].concat(lsq('dial1'),SQ(1,13,18),[
  mc('Mesedez','Pides un café','¿Cuál es?','Kafe bat nahi dut, mesedez',['Kafea naiz, mesedez','Kafe bat zait, mesedez','Kafe dut bat'],'<b>nahi dut</b> = quiero.'),
  mc('Prezioa','Preguntas el precio','¿Cuál es?','Zenbat da?',['Non dago?','Nor da?','Zer da?'],'<b>Zenbat da?</b> = ¿cuánto es?','Es una pregunta por la cantidad, con el verbo «ser» en singular.'),
  mc('Bidea','«¿Dónde está el baño?»','¿Cuál es?','Non dago komuna?',['Nora doa komuna?','Non da komuna?','Nor dago komuna?'],'<b>Non dago…?</b> con <b>egon</b>.'),
  mc('Gustatu','«Me gusta el monte»','¿Cuál es?','Niri mendia gustatzen zait',['Nik mendia gustatzen dut','Ni mendia naiz','Niri mendiak gustatzen zait'],'<b>niri</b> + <b>zait</b>.')
 ])},

{id:'l12',n:12,eu:'Data eta denbora',es:'Días, meses, estaciones, fecha y adjetivos',ic:'🗓️',min:9,
 goals:['Decir los días, los meses y las estaciones','Preguntar y decir la fecha (Zein egun da gaur?)','Usar adjetivos: etxe handia, etxea handia da'],
 steps:[
 {t:'Egunak eta hilabeteak',h:'<p>Los días de la semana y los meses se escriben <b>con minúscula</b>. Todos los meses acaban en <b>-a</b>.</p>',
  tb:'<table class="mini"><tr><th>Egunak</th><th></th><th>Hilabeteak</th><th></th></tr><tr><td><b>astelehena</b></td><td>lunes</td><td><b>urtarrila</b></td><td>enero</td></tr><tr><td><b>asteartea</b></td><td>martes</td><td><b>otsaila</b></td><td>febrero</td></tr><tr><td><b>asteazkena</b></td><td>miércoles</td><td><b>martxoa</b></td><td>marzo</td></tr><tr><td><b>osteguna</b></td><td>jueves</td><td><b>apirila</b></td><td>abril</td></tr><tr><td><b>ostirala</b></td><td>viernes</td><td><b>maiatza</b></td><td>mayo</td></tr><tr><td><b>larunbata</b></td><td>sábado</td><td><b>ekaina</b></td><td>junio</td></tr><tr><td><b>igandea</b></td><td>domingo</td><td><b>uztaila</b></td><td>julio</td></tr><tr><td></td><td></td><td><b>abuztua</b></td><td>agosto</td></tr><tr><td></td><td></td><td><b>iraila</b></td><td>septiembre</td></tr><tr><td></td><td></td><td><b>urria</b></td><td>octubre</td></tr><tr><td></td><td></td><td><b>azaroa</b></td><td>noviembre</td></tr><tr><td></td><td></td><td><b>abendua</b></td><td>diciembre</td></tr></table>',
  tip:'<b>astea</b> = semana y <b>eguna</b> = día. Los nombres ya llevan el artículo: asteartea = «el martes».'},
 {t:'Urtaroak',h:'<p>Las cuatro estaciones. Con <b>-n</b> dices «en» (como en los lugares: etxean).</p>',
  tb:'<table class="mini"><tr><th>Urtaroa</th><th></th><th>En…</th></tr><tr><td><b>udaberria</b></td><td>primavera</td><td>udaberrian</td></tr><tr><td><b>uda</b></td><td>verano</td><td>udan</td></tr><tr><td><b>udazkena</b></td><td>otoño</td><td>udazkenean</td></tr><tr><td><b>negua</b></td><td>invierno</td><td>neguan</td></tr></table>',
  ex:[['Udan Baztanera joaten naiz.','En verano voy a Baztan.'],['Neguan elurra egiten du.','En invierno nieva.'],['Zein urtaro da?','¿Qué estación es?']],
  tip:'Fíjate: <b>uda → udan</b>, <b>negua → neguan</b>, <b>udazkena → udazkenean</b>. Es el mismo «en» de <b>etxean</b> (en la casa).'},
 {t:'La fecha',h:'<p>Para preguntar el día: <b>Zein egun da gaur?</b> Para la fecha: <b>Zein da gaurko data?</b></p><p>La fecha se forma así: <b>mes + -(r)en + número + a</b>. Si añades el año, va primero con <b>-ko</b>.</p>',
  pc:[['azaroa','p-obj','mes'],['+ren','p-aux','de'],['6a','p-sub','día']],
  ex:[['Zein egun da gaur?','¿Qué día es hoy?'],['Gaur ostirala da.','Hoy es viernes.'],['Zein da gaurko data?','¿Cuál es la fecha de hoy?'],['Gaurko data azaroaren 6a da.','La fecha de hoy es el 6 de noviembre.'],['2026ko azaroaren 6a','6 de noviembre de 2026'],['Noiz da zure urtebetetzea?','¿Cuándo es tu cumpleaños?'],['Nire urtebetetzea maiatzaren 3a da.','Mi cumpleaños es el 3 de mayo.']],
  tip:'<b>noiz</b> = cuándo. Los números se escriben con cifras y se leen con el artículo: 6a = seia.'},
 {t:'Adjektiboak',h:'<p>El adjetivo va <b>detrás del nombre</b> y lleva el artículo: <b>etxe handia</b> (la casa grande). Si lo usas con el verbo <b>izan</b>: <b>Etxea handia da</b>. Con <b>bat</b> pierde el artículo: <b>etxe handi bat</b>.</p>',
  tb:'<table class="mini"><tr><th></th><th></th><th></th><th></th></tr><tr><td><b>handia</b></td><td>grande</td><td><b>txikia</b></td><td>pequeño</td></tr><tr><td><b>zaharra</b></td><td>viejo</td><td><b>berria</b></td><td>nuevo</td></tr><tr><td><b>ona</b></td><td>bueno</td><td><b>txarra</b></td><td>malo</td></tr><tr><td><b>luzea</b></td><td>largo</td><td><b>laburra</b></td><td>corto</td></tr><tr><td><b>garestia</b></td><td>caro</td><td><b>merkea</b></td><td>barato</td></tr><tr><td><b>beroa</b></td><td>caliente</td><td><b>hotza</b></td><td>frío</td></tr><tr><td><b>azkarra</b></td><td>rápido</td><td><b>motela</b></td><td>lento</td></tr><tr><td><b>gaztea</b></td><td>joven</td><td><b>polita</b></td><td>bonito</td></tr></table>',
  ex:[['Etxe handia','La casa grande'],['Etxea handia da.','La casa es grande.'],['Liburu berri bat daukat.','Tengo un libro nuevo.']],
  tip:'Plural: <b>etxe handiak</b> (las casas grandes). Cuanto más lo uses con colores y objetos que ya conoces (etxe zuria, liburu berdea), antes lo automatizas.'}
 ],
 make:()=>(Object.assign(LS,{
   dat1:{t:['gaur','ostirala','da'],es:'Hoy es viernes.',tip:'Zein egun da gaur? → Gaur + día + da.'},
   dat2:{t:['gaurko','data','azaroaren','6a','da'],es:'La fecha de hoy es el 6 de noviembre.',tip:'mes + -(r)en + número + a: azaroa → azaroaren 6a.'},
   dat3:{t:['nire','urtebetetzea','maiatzaren','3a','da'],es:'Mi cumpleaños es el 3 de mayo.',tip:'Noiz da zure urtebetetzea? → Nire urtebetetzea + fecha + da.'},
   adj1:{t:['etxea','handia','da'],es:'La casa es grande.',tip:'El adjetivo va detrás del nombre y con artículo: handia.'},
   adj2:{t:['liburu','berri','bat','daukat'],es:'Tengo un libro nuevo.',tip:'Con bat el adjetivo pierde el artículo: berri bat (no berria bat).'},
   urt1:{t:['udan','Baztanera','joaten','naiz'],es:'En verano voy a Baztan.',tip:'-n = en: uda → udan.'}
 }),[].concat(lsq('dat2','dat3','adj2','urt1'),vq('hilabeteak',3),vq('urtaroak',3),vq('adjetiboak',3),[
  mc('Data','«¿Qué día es hoy?»','¿Cuál es?','Zein egun da gaur?',['Noiz da gaur?','Non da gaur?','Zein egun dago gaur?'],'<b>Zein egun da gaur?</b> con izan.'),
  mc('Data','«El 6 de noviembre»','¿Cuál es?','azaroaren 6a',['azaroa 6a','azaroak 6a','azaroan 6a'],'mes + <b>-(r)en</b> + número + <b>a</b>.'),
  mc('Data','Noiz da zure urtebetetzea?','¿Qué pregunta?','¿Cuándo es tu cumpleaños?',['¿Cuántos años tienes?','¿Dónde vives?','¿Qué día es hoy?'],'<b>noiz</b> = cuándo.'),
  mc('Urtaroak','«En invierno»','¿Cuál es?','neguan',['negua','neguaren','negutik'],'-n = en: negua → <b>neguan</b>.'),
  mc('Adjektiboak','«Una casa grande»','¿Cuál es?','etxe handi bat',['etxe handia bat','handi etxe bat','etxea handi bat'],'Con <b>bat</b> el adjetivo va sin artículo.'),
  mc('Adjektiboak','handia ↔ ?','Su contrario','txikia',['berria','zaharra','garestia'],'<b>handia</b> = grande, <b>txikia</b> = pequeño.')
 ]))}
);
