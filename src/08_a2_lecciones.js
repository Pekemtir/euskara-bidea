/* ===== A2: lecciones y resúmenes ===== */
LESSONS.push(
{id:'b1',lv:'a1',n:13,eu:'Non dago?',es:'Dónde está: sobre, bajo, dentro…',ic:'📍',min:7,
 goals:['Decir dónde está algo con gainean, azpian, barruan, ondoan…','Unir el nombre con -ren / -en antes de la posición','Preguntar y contestar «Non dago…?»'],
 steps:[
 {t:'Las posiciones',h:'<p>En euskera la posición va <b>detrás</b> del nombre, y el nombre lleva el genitivo <b>-ren</b> («de»): <b>mahaiaren gainean</b> = sobre (de) la mesa.</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>gainean</b></td><td>sobre, encima de</td></tr><tr><td><b>azpian</b></td><td>debajo de</td></tr><tr><td><b>barruan</b></td><td>dentro de</td></tr><tr><td><b>kanpoan</b></td><td>fuera de</td></tr><tr><td><b>ondoan</b></td><td>al lado de</td></tr><tr><td><b>aurrean</b></td><td>delante de</td></tr><tr><td><b>atzean</b></td><td>detrás de</td></tr><tr><td><b>artean</b></td><td>entre</td></tr></table>',
  tip:'Si el nombre acaba en -a, se añade <b>-ren</b> (mahaia → mahaiaren). Si acaba en consonante, <b>-en</b> (Dabid → Dabiden).'},
 {t:'Con personas y cosas',h:'<p>Con los posesivos no hace falta genitivo: <b>nire ondoan</b> (a mi lado), <b>zure atzean</b> (detrás de ti).</p>',
  ex:[['Liburua mahaiaren gainean dago.','El libro está sobre la mesa.'],['Katua aulkiaren azpian dago.','El gato está debajo de la silla.'],['Txakurra etxearen kanpoan dago.','El perro está fuera de la casa.'],['Nire ondoan dago.','Está a mi lado.']]},
 {t:'Preguntar dónde está',h:'<p>La pregunta es <b>Non dago…?</b> (singular) o <b>Non daude…?</b> (plural). Contestas con la posición y <b>dago / daude</b> al final.</p>',
  ex:[['Non dago telefonoa?','¿Dónde está el teléfono?'],['Mahaiaren gainean dago.','Está sobre la mesa.'],['Non daude gakoak?','¿Dónde están las llaves?']],
  tip:'Siempre <b>egon</b> (dago / daude) para decir dónde está algo.'}
 ],
 make:()=>[].concat(SQ0(['mahaiaren','gainean','liburu','bat','dago'],'Hay un libro sobre la mesa.','mahaia + ren + gainean.'),SQ0(['katua','aulkiaren','azpian','dago'],'El gato está debajo de la silla.','aulkia + ren + azpian.'),vq('kokapena',4),[
  mc('Kokapena','«Sobre la mesa»','¿Cuál es?','mahaiaren gainean',['mahaia gainean','mahaiak gainean','mahaian gainean'],'nombre + <b>-ren</b> + posición.'),
  mc('Kokapena','«Dentro de la casa»','¿Cuál es?','etxearen barruan',['etxeren barruan','etxea barruan','etxearen azpian'],'etxea + <b>ren</b> = etxearen.'),
  mc('Galdera','«¿Dónde está el teléfono?»','¿Cuál es?','Non dago telefonoa?',['Nor dago telefonoa?','Non da telefonoa?','Zer dago telefonoa?'],'<b>Non dago…?</b> con <b>egon</b>.'),
  mc('Kokapena','Plural: «¿Dónde están las llaves?»','¿Cuál es?','Non daude gakoak?',['Non dago gakoak?','Non dira gakoak?','Non daude gakoa?'],'Plural: <b>daude</b>.')
 ])},

{id:'b2',lv:'a1',n:22,eu:'Nori eman diozu?',es:'«A quién» (-ri) y «para quién» (-rentzat)',ic:'🎁',min:8,
 goals:['Decir a quién se hace algo con -ri','Decir para quién con -(r)entzat','Usar diot, diozu, dio… (eman)'],
 steps:[
 {t:'-ri: «a quién»',h:'<p>Para decir <b>a quién</b> (el destinatario) se añade <b>-ri</b> al nombre: <b>ama → amari</b>. Con pronombres cambia:</p>',
  tb:'<table class="mini"><tr><th>Pronombre</th><th>A…</th></tr><tr><td>ni</td><td><b>niri</b> a mí</td></tr><tr><td>zu</td><td><b>zuri</b> a ti</td></tr><tr><td>bera</td><td><b>berari</b> a él / ella</td></tr><tr><td>gu</td><td><b>guri</b> a nosotros</td></tr><tr><td>zuek</td><td><b>zuei</b> a vosotros</td></tr><tr><td>haiek</td><td><b>haiei</b> a ellos</td></tr></table>',
  tip:'Con nombres propios: Dabid → <b>Dabiri</b>. En plural: amak → <b>amei</b>.'},
 {t:'-rentzat: «para quién»',h:'<p><b>-(r)entzat</b> = <b>para</b>. Si el nombre acaba en -a: <b>-rentzat</b> (amarentzat); si no, <b>-entzat</b>. Con pronombres: <b>niretzat</b>, <b>zuretzat</b>, <b>berarentzat</b>…</p>',
  ex:[['Hau zuretzat da.','Esto es para ti.'],['Kafea amarentzat da.','El café es para mamá.'],['Opari bat niretzat?','¿Un regalo para mí?']]},
 {t:'eman: dar',h:'<p><b>eman</b> (dar) lleva tres cosas: quien da (nik), lo que se da (liburua) y a quién (amari). En el verbo aparece todo junto: <b>diot</b> = yo se lo doy (a él/ella).</p>',
  tb:'<table class="mini"><tr><th></th><th>(a él/ella)</th></tr><tr><td>nik</td><td><b>diot</b></td></tr><tr><td>zuk</td><td><b>diozu</b></td></tr><tr><td>berak</td><td><b>dio</b></td></tr><tr><td>guk</td><td><b>diogu</b></td></tr><tr><td>zuek</td><td><b>diozue</b></td></tr><tr><td>haiek</td><td><b>diote</b></td></tr></table>',
  ex:[['Nik amari liburua ematen diot.','Yo le doy el libro a mamá.'],['Nori eman diozu kafea?','¿A quién le has dado el café?'],['Zuk Dabiri ura ematen diozu.','Tú le das agua a David.']],
  tip:'Con varias cosas: <b>dizkiot, dizkiozu, dio→dizkio…</b> (liburuak ematen dizkiot).'}
 ],
 make:()=>[].concat(SQ0(['nik','amari','liburua','ematen','diot'],'Yo le doy el libro a mamá.','amari = a mamá; diot = yo se lo doy.'),SQ0(['kafea','amarentzat','da'],'El café es para mamá.','ama + rentzat = para mamá.'),conjQs(['eman'],3),vq('aditzak',3),[
  mc('-ri','«A mamá»','¿Cuál es?','amari',['amak','amarentzat','amaren'],'Destinatario: <b>-ri</b>.'),
  mc('-ri','«A mí»','¿Cuál es?','niri',['nik','nire','niretzat'],'<b>niri</b> = a mí.'),
  mc('-rentzat','«Para ti»','¿Cuál es?','zuretzat',['zuri','zuk','zure'],'<b>zuretzat</b> = para ti.'),
  mc('eman','«Yo se lo doy»','¿Cuál es?','diot',['dut','dio','diozu'],'<b>diot</b> = nik (yo) + a él/ella.'),
  mc('eman','«Tú se lo das»','¿Cuál es?','diozu',['diot','dio','duzu'],'<b>diozu</b> = zuk (tú).')
 ])},

{id:'b3',lv:'a2',n:1,eu:'Gustatzen zait / zaio',es:'Gustar con todas las personas',ic:'💚',min:8,
 goals:['Decir a quién le gusta algo: niri, zuri, berari, guri…','Distinguir zait / zaio… (una cosa) de zaizkit / zaizkio… (varias)','Hacer y contestar «¿Zer gustatzen zaizu?»'],
 steps:[
 {t:'A quién le gusta',h:'<p>En <b>gustatu</b> lo que gusta es el «sujeto» y a quién le gusta va en <b>-ri</b>. El verbo concuerda con <b>a quién</b>:</p>',
  tb:'<table class="mini"><tr><th>A quién</th><th>1 cosa</th><th>Varias</th></tr><tr><td>niri (a mí)</td><td><b>zait</b></td><td><b>zaizkit</b></td></tr><tr><td>zuri (a ti)</td><td><b>zaizu</b></td><td><b>zaizkizu</b></td></tr><tr><td>berari (a él/ella)</td><td><b>zaio</b></td><td><b>zaizkio</b></td></tr><tr><td>guri (a nosotros)</td><td><b>zaigu</b></td><td><b>zaizkigu</b></td></tr><tr><td>zuei (a vosotros)</td><td><b>zaizue</b></td><td><b>zaizkizue</b></td></tr><tr><td>haiei (a ellos)</td><td><b>zaie</b></td><td><b>zaizkie</b></td></tr></table>',
  tip:'Si gustan <b>varias</b> cosas aparece <b>-zki-</b>: zait → zaizkit.'},
 {t:'Frases',h:'<p>Orden: <b>a quién + lo que gusta + gustatzen + verbo</b>.</p>',
  ex:[['Amari kafea gustatzen zaio.','A mamá le gusta el café.'],['Guri mendia gustatzen zaigu.','A nosotros nos gusta el monte.'],['Niri sagarrak gustatzen zaizkit.','A mí me gustan las manzanas.'],['Zer gustatzen zaizu?','¿Qué te gusta?']]},
 {t:'No me gusta',h:'<p>Para negar, <b>ez</b> justo antes del auxiliar: <b>Niri ez zait kafea gustatzen</b>. Para preguntar: <b>Gustatzen al zaizu…?</b></p>',
  ex:[['Niri ez zait gustatzen.','A mí no me gusta.'],['Gustatzen al zaizu euskara?','¿Te gusta el euskera?'],['Bai, asko gustatzen zait.','Sí, me gusta mucho.']]}
 ],
 make:()=>[].concat(SQ0(['amari','kafea','gustatzen','zaio'],'A mamá le gusta el café.','zaio = le gusta (una cosa).'),SQ0(['guri','mendia','gustatzen','zaigu'],'A nosotros nos gusta el monte.','zaigu = nos gusta.'),conjQs(['gustatu'],4),[
  mc('Gustatu','«A ti te gusta el café»','¿Cuál es?','Zuri kafea gustatzen zaizu',['Zuri kafea gustatzen zait','Zuk kafea gustatzen duzu','Zuri kafea gustatzen zaio'],'<b>zuri</b> → <b>zaizu</b>.'),
  mc('Gustatu','«A mí me gustan las manzanas»','¿Cuál es?','Niri sagarrak gustatzen zaizkit',['Niri sagarrak gustatzen zait','Niri sagarrak gustatzen zaizkio','Nik sagarrak gustatzen dut'],'Varias cosas: <b>zaizkit</b>.'),
  mc('Gustatu','«A mamá le gusta…»','Elige la forma del verbo','zaio',['zait','zaie','zaigu'],'<b>Amari</b> (a él/ella) → <b>zaio</b>.'),
  mc('Gustatu','«A ellos les gusta»','Elige la forma del verbo','zaie',['zaio','zaigu','zaizu'],'<b>haiei</b> → <b>zaie</b>.'),
  mc('Gustatu','«¿Te gusta el euskera?»','¿Cuál es?','Gustatzen al zaizu euskara?',['Gustatzen al duzu euskara?','Gustatzen zaizu al euskara?','Al gustatzen zaizu euskara?'],'<b>al</b> justo antes del auxiliar.')
 ])},

{id:'b4',lv:'a1',n:17,eu:'Nahi, behar, ezin',es:'Querer, tener que y no poder',ic:'🚧',min:7,
 goals:['Usar nahi dut, behar dut y ezin dut con otro verbo','Colocar el auxiliar correctamente','Dar una excusa o decir lo que puedes hacer'],
 steps:[
 {t:'Tres verbos útiles',h:'<p>Los tres se usan con <b>otro verbo en infinitivo</b> (el participio) y el auxiliar <b>ukan</b>.</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>nahi dut</b></td><td>quiero</td></tr><tr><td><b>behar dut</b></td><td>tengo que / necesito</td></tr><tr><td><b>ezin dut</b></td><td>no puedo</td></tr></table>',
  ex:[['Euskara ikasi nahi dut.','Quiero aprender euskera.'],['Etxera joan behar dut.','Tengo que ir a casa.'],['Gaur ezin dut ikasi.','Hoy no puedo estudiar.']],
  tip:'<b>nahi / behar</b> van detrás del verbo; <b>ezin</b> va <b>delante</b> (ezin dut ikasi).'},
 {t:'Otras personas',h:'<p>Cambia el auxiliar como ya sabes: <b>duzu</b> (tú), <b>du</b> (él/ella), <b>dugu</b> (nosotros)…</p>',
  ex:[['Zuk kafea nahi duzu.','Tú quieres café.'],['Amak lan egin behar du.','Mamá tiene que trabajar.'],['Guk ezin dugu etorri.','Nosotros no podemos venir.']]},
 {t:'Preguntas y excusas',h:'<p>Con <b>al</b> preguntas y con <b>ezin</b> te excusas: <b>Etorri nahi al duzu?</b> — <b>Ezin dut, lan egin behar dut.</b></p>',
  ex:[['Kafe bat nahi al duzu?','¿Quieres un café?'],['Bai, mesedez.','Sí, por favor.'],['Ezin dut, barkatu.','No puedo, perdona.']]}
 ],
 make:()=>[].concat(SQ0(['gaur','ezin','dut','etorri'],'Hoy no puedo venir.','ezin dut + verbo.'),SQ0(['euskara','ikasi','nahi','dut'],'Quiero aprender euskera.','verbo + nahi dut.'),[
  mc('Nahi','«Quiero un café»','¿Cuál es?','Kafe bat nahi dut',['Kafe bat naiz nahi','Nahi kafe bat zait','Kafe bat behar zait'],'<b>nahi dut</b>.'),
  mc('Behar','«Tengo que trabajar»','¿Cuál es?','Lan egin behar dut',['Lan egin ezin dut','Lan egin nahi zait','Behar lan egin naiz'],'<b>behar dut</b> = tengo que.'),
  mc('Ezin','«No puedo estudiar»','¿Cuál es?','Ezin dut ikasi',['Ikasi ezin naiz','Ez dut ikasi behar','Ikasi nahi ez dut'],'<b>ezin</b> va delante: ezin dut ikasi.'),
  mc('Behar','«Mamá tiene que trabajar»','Elige el auxiliar','du',['dut','duzu','dute'],'Berak (ella) → <b>du</b>.'),
  mc('Nahi','«¿Quieres un café?»','¿Cuál es?','Kafe bat nahi al duzu?',['Kafe bat al nahi duzu?','Nahi al kafe bat duzu?','Kafe bat nahi duzu al?'],'<b>al</b> justo antes del auxiliar.')
 ],vq('aditzak',3))},

{id:'b5',lv:'a1',n:19,eu:'Konparazioak',es:'Comparar: más que, el más…',ic:'⚖️',min:7,
 goals:['Formar -ago (más) con los adjetivos del A1','Comparar con baino','Decir «el más…» con -ena'],
 steps:[
 {t:'-ago: «más»',h:'<p>Quita la <b>-a</b> final del adjetivo y añade <b>-ago</b> (y el artículo <b>-a</b>): <b>handia → handiagoa</b> (más grande).</p>',
  tb:'<table class="mini"><tr><th>Base</th><th>Más…</th></tr><tr><td>handia</td><td><b>handiagoa</b></td></tr><tr><td>txikia</td><td><b>txikiagoa</b></td></tr><tr><td>zaharra</td><td><b>zaharragoa</b></td></tr><tr><td>berria</td><td><b>berriagoa</b></td></tr><tr><td>garestia</td><td><b>garestiagoa</b></td></tr><tr><td>merkea</td><td><b>merkeagoa</b></td></tr><tr><td>ona</td><td><b>hobea</b> (irregular)</td></tr></table>',
  tip:'<b>gehiago</b> = más, <b>gutxiago</b> = menos. <b>ona → hobea</b> es irregular.'},
 {t:'baino: «que»',h:'<p><b>A baino B-ago da</b> = B es más… que A. Se usa con el segundo término delante de <b>baino</b>.</p>',
  ex:[['Nire etxea zurea baino handiagoa da.','Mi casa es más grande que la tuya.'],['Kafea ura baino beroagoa da.','El café está más caliente que el agua.'],['Hau hori baino merkeagoa da.','Esto es más barato que eso.']],
  tip:'<b>zurea</b> = la tuya, <b>nirea</b> = la mía.'},
 {t:'-ena: «el más»',h:'<p>Añade <b>-ena</b> a la base: <b>handi → handiena</b> (el más grande), <b>txikiena</b>, <b>onena</b>…</p>',
  ex:[['Hau da handiena.','Este es el más grande.'],['Zein da onena?','¿Cuál es el mejor?'],['Mendia da altuena.','El monte es el más alto.']]}
 ],
 make:()=>[].concat(SQ0(['nire','etxea','zurea','baino','handiagoa','da'],'Mi casa es más grande que la tuya.','baino = que; handi + ago + a.'),vq('adjetiboak',4),[
  mc('-ago','«Más pequeño»','¿Cuál es?','txikiagoa',['txikiena','txikia','gehiago txikia'],'<b>txikia</b> → <b>txikiagoa</b>.'),
  mc('-ago','«Más caro»','¿Cuál es?','garestiagoa',['merkeagoa','garestiena','garestia'],'<b>garestia</b> + ago.'),
  mc('-ena','«El más grande»','¿Cuál es?','handiena',['handiagoa','handia','handiak'],'<b>-ena</b> = el más.'),
  mc('Konparazioa','«Mejor»','¿Cuál es?','hobea',['onagoa','onena','ongoa'],'<b>ona → hobea</b> (irregular).'),
  mc('Konparazioa','«Más que»','¿Qué palabra?','baino',['eta','edo','eta gero'],'<b>baino</b> = que (comparación).')
 ])},

{id:'b6',lv:'a2',n:2,eu:'Zergatik? -lako',es:'Explicar por qué',ic:'🧩',min:8,
 goals:['Preguntar «Zergatik…?»','Contestar con -lako (porque)','Unir ideas con eta, baina, edo'],
 steps:[
 {t:'Zergatik? / -lako',h:'<p><b>Zergatik?</b> = ¿por qué? Para contestar, al auxiliar se le añade <b>-lako</b> (porque).</p>',
  tb:'<table class="mini"><tr><th>Auxiliar</th><th>Porque…</th></tr><tr><td>naiz (soy)</td><td><b>naizelako</b></td></tr><tr><td>nago (estoy)</td><td><b>nagoelako</b></td></tr><tr><td>da (es)</td><td><b>delako</b></td></tr><tr><td>dago (está)</td><td><b>dagoelako</b></td></tr><tr><td>dut (tengo)</td><td><b>dudalako</b></td></tr><tr><td>du (tiene)</td><td><b>duelako</b></td></tr></table>',
  tip:'La causa lleva el auxiliar con <b>-lako</b> al final de la frase de la causa.'},
 {t:'Ejemplos',h:'<p>Primero la pregunta y luego la causa:</p>',
  ex:[['Zergatik zaude etxean?','¿Por qué estás en casa?'],['Gaixorik nagoelako.','Porque estoy enfermo.'],['Zergatik ez zara etortzen?','¿Por qué no vienes?'],['Lan egin behar dudalako.','Porque tengo que trabajar.']]},
 {t:'Eta, baina, edo',h:'<p>Tres conectores básicos:</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>eta</b></td><td>y</td></tr><tr><td><b>baina</b></td><td>pero</td></tr><tr><td><b>edo</b></td><td>o</td></tr></table>',
  ex:[['Kafea nahi dut, baina ez dut gosaltzen.','Quiero café, pero no desayuno.'],['Ura edo kafea?','¿Agua o café?']]}
 ],
 make:()=>[].concat(SQ0(['gaixorik','nagoelako','etxean','nago'],'Estoy en casa porque estoy enfermo.','nago + elako = nagoelako.'),vq('sentitu',4),[
  mc('Zergatik','«Porque estoy cansado» (egon)','¿Cuál es?','nekatuta nagoelako',['nekatuta nagoen','nekatuta nago bai','nekatuta nagolako'],'nago + <b>-elako</b> = nagoelako.'),
  mc('-lako','«Porque soy» (izan)','¿Cuál es?','naizelako',['naizlako','nagoelako','izateko'],'naiz + <b>-elako</b>.'),
  mc('-lako','«Porque tengo» (ukan)','¿Cuál es?','dudalako',['duelako','dutelako','dudaz'],'dut → <b>dudalako</b>.'),
  mc('Zergatik','«¿Por qué?»','¿Cuál es?','Zergatik?',['Noiz?','Nola?','Zenbat?'],'<b>zergatik</b> = por qué.'),
  mc('Lokailuak','«Pero»','¿Cuál es?','baina',['eta','edo','ez'],'<b>baina</b> = pero.')
 ])},

{id:'b7',lv:'a1',n:18,eu:'Ba al…?',es:'Preguntas de sí/no y peticiones',ic:'🙋',min:7,
 goals:['Hacer preguntas de sí/no con al','Contestar con bai / ez','Pedir cosas y ofrecer'],
 steps:[
 {t:'La partícula «al»',h:'<p>Para preguntas de sí o no, se pone <b>al</b> <b>justo antes del auxiliar</b>: <b>Euskaraz hitz egiten al duzu?</b></p>',
  ex:[['Euskaraz hitz egiten al duzu?','¿Hablas euskera?'],['Etxean al zaude?','¿Estás en casa?'],['Kafea nahi al duzu?','¿Quieres café?']],
  tip:'En el habla también se entiende solo con entonación, pero <b>al</b> es lo correcto en clase.'},
 {t:'Contestar',h:'<p>Se contesta con <b>bai</b> (sí) o <b>ez</b> (no), repitiendo el auxiliar.</p>',
  ex:[['Bai, hitz egiten dut.','Sí, hablo.'],['Ez, ez dut hitz egiten.','No, no hablo.'],['Bai, etxean nago.','Sí, estoy en casa.']]},
 {t:'Pedir y ofrecer',h:'<p>Frases hechas que ya puedes usar:</p>',
  ex:[['Ura nahi al duzu?','¿Quieres agua?'],['Bai, mesedez.','Sí, por favor.'],['Ez, eskerrik asko.','No, muchas gracias.'],['Lagun al zaitzaket?','¿Puedo ayudarte? (se oye mucho)']]}
 ],
 make:()=>[].concat(SQ0(['euskaraz','hitz','egiten','al','duzu'],'¿Hablas euskera?','al justo antes del auxiliar.'),[
  mc('Al','«¿Estás en casa?»','¿Cuál es?','Etxean al zaude?',['Etxean zaude al?','Al etxean zaude?','Etxean zaude?'],'<b>al</b> antes del auxiliar.'),
  mc('Al','«¿Quieres café?»','¿Cuál es?','Kafea nahi al duzu?',['Kafea al nahi duzu?','Kafea nahi duzu al?','Al kafea nahi duzu?'],'<b>al duzu</b> juntos.'),
  mc('Bai/ez','Contestas que sí hablas euskera','¿Cuál es?','Bai, hitz egiten dut',['Ez, hitz egiten dut','Bai, hitz egiten naiz','Bai, ez dut hitz egiten'],'<b>bai</b> + auxiliar.'),
  mc('Bai/ez','«No, gracias»','¿Cuál es?','Ez, eskerrik asko',['Bai, eskerrik asko','Ez, mesedez','Bai, mesedez'],'<b>ez</b> = no.'),
  mc('Al','«¿Vives en Elizondo?»','¿Cuál es?','Elizondon bizi al zara?',['Elizondon bizi zara al?','Al Elizondon bizi zara?','Elizondon al bizi zara?'],'<b>al</b> antes del auxiliar: al zara.')
 ],vq('lekuak',3))},

{id:'b8',lv:'a1',n:15,eu:'Ordua eta egunerokoa',es:'La hora y tu rutina diaria',ic:'⏰',min:9,
 goals:['Preguntar y decir la hora','Decir a qué hora haces algo (-etan)','Contar tu rutina con verbos habituales'],
 steps:[
 {t:'Zer ordu da?',h:'<p>Pregunta: <b>Zer ordu da?</b> Respuesta: el número en plural + <b>dira</b>; la una es singular: <b>bata da</b>.</p>',
  tb:'<table class="mini"><tr><th>Hora</th><th>Euskera</th></tr><tr><td>1:00</td><td><b>Bata da</b></td></tr><tr><td>2:00</td><td><b>Biak dira</b></td></tr><tr><td>3:00</td><td><b>Hirurak dira</b></td></tr><tr><td>4:00</td><td><b>Laurak dira</b></td></tr><tr><td>5:00</td><td><b>Bostak dira</b></td></tr><tr><td>6:00</td><td><b>Seiak dira</b></td></tr><tr><td>7:00</td><td><b>Zazpiak dira</b></td></tr><tr><td>8:00</td><td><b>Zortziak dira</b></td></tr><tr><td>9:00</td><td><b>Bederatziak dira</b></td></tr><tr><td>10:00</td><td><b>Hamarrak dira</b></td></tr><tr><td>11:00</td><td><b>Hamaikak dira</b></td></tr><tr><td>12:00</td><td><b>Hamabiak dira</b></td></tr></table>',
  tip:'«Y media» = <b>t\'erdiak</b>: <b>Hiru t\'erdiak dira</b> (las tres y media).'},
 {t:'¿A qué hora? -etan',h:'<p>Para <b>a las…</b> el número lleva <b>-etan</b>: zortziak → <b>zortzietan</b>. La una: <b>ordu batean</b>.</p>',
  ex:[['Zortzietan jaikitzen naiz.','Me levanto a las ocho.'],['Hirurak t\'erdietan bazkaltzen dut.','Como a las tres y media.'],['Bederatzietan ohera joaten naiz.','Me voy a la cama a las nueve.']]},
 {t:'Mi día',h:'<p>La rutina se cuenta con la <b>forma habitual (-ten / -tzen)</b> que ya conoces, más momentos del día: <b>goizean</b> (por la mañana), <b>arratsaldean</b> (por la tarde), <b>gauean</b> (por la noche).</p>',
  ex:[['Goizean jaikitzen naiz eta gosaltzen dut.','Por la mañana me levanto y desayuno.'],['Arratsaldean lan egiten dut.','Por la tarde trabajo.'],['Gauean afaltzen dut eta ohera joaten naiz.','Por la noche ceno y me voy a la cama.']]}
 ],
 make:()=>[].concat(SQ0(['zortziak','dira'],'Son las ocho.','Hora: número en plural + dira.'),SQ0(['goizean','zortzietan','jaikitzen','naiz'],'Por la mañana me levanto a las ocho.','zortziak → zortzietan.'),vq('errutina',4),[
  mc('Ordua','«¿Qué hora es?»','¿Cuál es?','Zer ordu da?',['Noiz da?','Zer egun da?','Zenbat ordu?'],'<b>Zer ordu da?</b>'),
  mc('Ordua','«Son las cinco»','¿Cuál es?','Bostak dira',['Bost da','Bostetan da','Bostak da'],'Plural: número + ak + <b>dira</b>.'),
  mc('Ordua','«Es la una»','¿Cuál es?','Bata da',['Batak dira','Bat dira','Ordu bat dira'],'La una es singular: <b>bata da</b>.'),
  mc('Ordua','«A las ocho» (me levanto…)','¿Cuál es?','zortzietan',['zortziak','zortziko','zortzien'],'<b>-etan</b> = a las…'),
  mc('Ohiturak','«Por la tarde»','¿Cuál es?','arratsaldean',['goizean','gauean','arratsaldea'],'<b>-ean</b> = en/por la.')
 ])}
);
function SQ0(t,es,tip){return [sq({t,es,tip})]}

Object.assign(LSUM,{
b1:{sum:['La posición va detrás del nombre, que lleva el genitivo <b>-ren / -en</b>: mahaiaren gainean.','Posiciones: gainean, azpian, barruan, kanpoan, ondoan, aurrean, atzean, artean.','Preguntas: <b>Non dago…?</b> / <b>Non daude…?</b> (siempre egon).'],
 kw:[['gainean','sobre'],['azpian','debajo de'],['barruan','dentro de'],['kanpoan','fuera de'],['ondoan','al lado de'],['aurrean','delante de'],['atzean','detrás de'],['artean','entre'],['non dago?','¿dónde está?']]},
b2:{sum:['<b>-ri</b> = a quién: amari, niri, zuri, berari, guri, zuei, haiei.','<b>-(r)entzat</b> = para quién: amarentzat, niretzat, zuretzat.','<b>eman</b>: diot, diozu, dio, diogu, diozue, diote (a él/ella); varias cosas: dizkiot…'],
 kw:[['eman','dar'],['amari','a mamá'],['niri','a mí'],['zuri','a ti'],['berari','a él / ella'],['niretzat','para mí'],['zuretzat','para ti'],['diot','yo se lo doy'],['nori?','¿a quién?'],['opari','regalo']]},
b3:{sum:['A quién le gusta va en <b>-ri</b>: niri, zuri, berari, guri, zuei, haiei.','1 cosa: zait, zaizu, zaio, zaigu, zaizue, zaie; varias: zaizkit, zaizkizu, zaizkio…','Negar: <b>ez zait gustatzen</b>. Preguntar: <b>Gustatzen al zaizu?</b>'],
 kw:[['gustatu','gustar'],['zait','me gusta'],['zaizu','te gusta'],['zaio','le gusta'],['zaigu','nos gusta'],['zaizkit','me gustan'],['asko','mucho'],['gutxi','poco']]},
b4:{sum:['<b>nahi dut</b> = quiero, <b>behar dut</b> = tengo que, <b>ezin dut</b> = no puedo.','Los tres van con otro verbo en participio y el auxiliar ukan.','<b>ezin</b> va delante del auxiliar; <b>nahi / behar</b> detrás del verbo.'],
 kw:[['nahi','querer'],['behar','necesitar / tener que'],['ezin','no poder'],['gaur ezin dut','hoy no puedo'],['barkatu','perdón'],['laguntza','ayuda']]},
b5:{sum:['<b>-ago</b> = más: handi → handiagoa, txiki → txikiagoa.','<b>baino</b> = que: Nire etxea zurea baino handiagoa da.','<b>-ena</b> = el más: handiena. Irregular: ona → <b>hobea</b>.'],
 kw:[['handiagoa','más grande'],['txikiagoa','más pequeño'],['gehiago','más'],['gutxiago','menos'],['baino','que'],['hobea','mejor'],['handiena','el más grande'],['nirea','el mío'],['zurea','el tuyo']]},
b6:{sum:['<b>Zergatik?</b> = ¿por qué? Se contesta con el auxiliar + <b>-lako</b>: nagoelako, naizelako, dudalako, delako.','Conectores: <b>eta</b> (y), <b>baina</b> (pero), <b>edo</b> (o).'],
 kw:[['zergatik','por qué'],['-lako','porque'],['eta','y'],['baina','pero'],['edo','o'],['gaixorik','enfermo'],['nekatuta','cansado'],['pozik','contento'],['triste','triste']]},
b7:{sum:['Preguntas de sí/no: <b>al</b> justo antes del auxiliar: Euskaraz hitz egiten al duzu?','Contestar: <b>bai</b> / <b>ez</b> + el auxiliar.','Pedir y ofrecer: nahi al duzu…? / Bai, mesedez / Ez, eskerrik asko.'],
 kw:[['al','(partícula de pregunta)'],['bai','sí'],['ez','no'],['mesedez','por favor'],['eskerrik asko','muchas gracias'],['denda','tienda'],['banku','banco'],['kafetegia','cafetería']]},
b8:{sum:['<b>Zer ordu da?</b> → <b>Hirurak dira</b> (la una: <b>bata da</b>). Y media: <b>t\'erdiak</b>.','A las…: <b>-etan</b> (zortzietan). Momentos: goizean, arratsaldean, gauean.','Rutina: forma habitual (-ten / -tzen) + auxiliar.'],
 kw:[['ordua','la hora'],['jaiki','levantarse'],['gosaldu','desayunar'],['bazkaldu','comer'],['afaldu','cenar'],['ohera joan','irse a la cama'],['goizean','por la mañana'],['arratsaldean','por la tarde'],['gauean','por la noche']]}
});
