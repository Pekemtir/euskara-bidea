/* ===== A2 (2ª parte): según HEOC/HABE y UNED ===== */
LESSONS.push(
{id:'b9',lv:'a2',n:3,eu:'Iragana: joan, etorri, egon',es:'El pasado de ir, venir, estar y andar',ic:'⏪',min:8,
 goals:['Conjugar el pasado de joan, etorri, egon e ibili','Decir dónde estabas y adónde ibas','Reconocer estas formas sin auxiliar'],
 steps:[
 {t:'Pasado sin auxiliar',h:'<p>Estos cuatro verbos forman el pasado <b>por sí solos</b>, sin auxiliar, igual que en presente. Son muy frecuentes.</p>',
  tb:'<table class="mini"><tr><th></th><th>joan</th><th>etorri</th><th>egon</th><th>ibili</th></tr><tr><td>ni</td><td><b>nindoan</b></td><td><b>nentorren</b></td><td><b>nengoen</b></td><td><b>nenbilen</b></td></tr><tr><td>zu</td><td><b>zindoazen</b></td><td><b>zentozen</b></td><td><b>zeunden</b></td><td><b>zenbiltzan</b></td></tr><tr><td>bera</td><td><b>zihoan</b></td><td><b>zetorren</b></td><td><b>zegoen</b></td><td><b>zebilen</b></td></tr><tr><td>gu</td><td><b>gindoazen</b></td><td><b>gentozen</b></td><td><b>geunden</b></td><td><b>genbiltzan</b></td></tr><tr><td>zuek</td><td><b>zindoazten</b></td><td><b>zentozten</b></td><td><b>zeundeten</b></td><td><b>zenbiltzaten</b></td></tr><tr><td>haiek</td><td><b>zihoazen</b></td><td><b>zetozen</b></td><td><b>zeuden</b></td><td><b>zebiltzan</b></td></tr></table>',
  tip:'Significado: <b>nindoan</b> = iba, <b>nentorren</b> = venía, <b>nengoen</b> = estaba, <b>nenbilen</b> = andaba.'},
 {t:'En frases',h:'<p>Describen una situación del pasado: dónde estabas, adónde ibas, de dónde venías.</p>',
  ex:[['Atzo etxean nengoen.','Ayer estaba en casa.'],['Iruñera nindoan.','Iba a Pamplona.'],['Nire anaia gu ikustera zetorren.','Mi hermano venía a vernos.'],['Non zeunden atzo?','¿Dónde estabas ayer?']]},
 {t:'Cuidado con las personas',h:'<p>Fíjate en que en <b>zu</b> (tú) algunos verbos usan la terminación del plural: <b>zindoazen</b>, <b>zentozen</b>, <b>zenbiltzan</b>. Es normal: también pasaba en presente (zoaz, zatoz, zabiltza).</p>'}
 ],
 make:()=>[].concat(conjQs(['joan (iragana)','etorri (iragana)','egon','ibili (iragana)'],6),SQ0(['atzo','etxean','nengoen'],'Ayer estaba en casa.','egon en pasado: nengoen.'),[
  mc('Iragana','«Yo iba» (joan)','¿Cuál es?','nindoan',['noa','nentorren','nengoen'],'<b>nindoan</b> = joan, pasado, ni.'),
  mc('Iragana','«Ella venía» (etorri)','¿Cuál es?','zetorren',['dator','zihoan','zegoen'],'<b>zetorren</b> = etorri, pasado, bera.'),
  mc('Iragana','«Estábamos» (egon)','¿Cuál es?','geunden',['gaude','gindoazen','gentozen'],'<b>geunden</b> = egon, pasado, gu.'),
  mc('Iragana','«¿Dónde estabas ayer?»','¿Cuál es?','Non zeunden atzo?',['Non zaude atzo?','Non nengoen atzo?','Non zen atzo?'],'<b>zeunden</b> = tú estabas.')
 ])},

{id:'b10',lv:'a2',n:4,eu:'Ohiko iragana',es:'Lo que hacía de pequeño y «estaba haciendo»',ic:'🕰️',min:8,
 goals:['Formar el pasado habitual: joaten nintzen, jaten nuen','Decir qué estabas haciendo con ari nintzen','Usar txikitan, gaztetan, atzo'],
 steps:[
 {t:'El pasado habitual',h:'<p>Para lo que hacías <b>habitualmente</b> en el pasado, forma habitual del verbo (-ten / -tzen) + auxiliar en pasado: <b>nintzen</b> (con izan) o <b>nuen</b> (con ukan).</p>',
  tb:'<table class="mini"><tr><th></th><th>izan (nor)</th><th>ukan (nork)</th></tr><tr><td>ni</td><td><b>nintzen</b></td><td><b>nuen</b></td></tr><tr><td>zu</td><td><b>zinen</b></td><td><b>zenuen</b></td></tr><tr><td>bera</td><td><b>zen</b></td><td><b>zuen</b></td></tr><tr><td>gu</td><td><b>ginen</b></td><td><b>genuen</b></td></tr><tr><td>zuek</td><td><b>zineten</b></td><td><b>zenuten</b></td></tr><tr><td>haiek</td><td><b>ziren</b></td><td><b>zuten</b></td></tr></table>',
  ex:[['Txikitan mendira joaten nintzen.','De pequeño iba al monte.'],['Amak ogia egiten zuen.','Mamá hacía pan (solía).'],['Gaztetan futbolean jolasten nuen.','De joven jugaba al fútbol.']]},
 {t:'«Estaba haciendo»: ari nintzen',h:'<p>Para una acción <b>en curso</b> en el pasado: verbo habitual + <b>ari</b> + auxiliar en pasado.</p>',
  ex:[['Ikasten ari nintzen.','Estaba estudiando.'],['Ama sukaldean lanean ari zen.','Mamá estaba trabajando en la cocina.'],['Telebista ikusten ari ginen.','Estábamos viendo la tele.']],
  tip:'<b>ari</b> + auxiliar con <b>izan</b> siempre (nintzen, zen…), como en presente.'},
 {t:'Palabras de tiempo',h:'<p>Marcadores del pasado:</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>txikitan</b></td><td>de pequeño</td></tr><tr><td><b>gaztetan</b></td><td>de joven</td></tr><tr><td><b>atzo</b></td><td>ayer</td></tr><tr><td><b>iaz</b></td><td>el año pasado</td></tr><tr><td><b>orduan</b></td><td>entonces</td></tr></table>'}
 ],
 make:()=>[].concat(SQ0(['txikitan','mendira','joaten','nintzen'],'De pequeño iba al monte.','habitual + nintzen.'),SQ0(['ikasten','ari','nintzen'],'Estaba estudiando.','ari + nintzen.'),[
  mc('Iragana','«De pequeño comía pan»','¿Cuál es?','Txikitan ogia jaten nuen',['Txikitan ogia jaten dut','Txikitan ogia jan dut','Txikitan ogia jaten nintzen'],'habitual + <b>nuen</b>.'),
  mc('Ari','«Estaba leyendo»','¿Cuál es?','Irakurtzen ari nintzen',['Irakurri nuen','Irakurtzen ari naiz','Irakurtzen nuen ari'],'<b>ari nintzen</b>.'),
  mc('Iragana','«Nosotros íbamos» (hábito)','¿Cuál es?','joaten ginen',['joaten gara','joan genuen','joango ginen'],'<b>ginen</b> = gu en pasado (izan).'),
  mc('Denbora','«De pequeño»','¿Cuál es?','txikitan',['gaztetan','atzo','iaz'],'<b>txikitan</b>.'),
  mc('Denbora','«De joven»','¿Cuál es?','gaztetan',['txikitan','atzo','orain'],'<b>gaztetan</b>.')
 ])},

{id:'b11',lv:'a2',n:5,eu:'Maite zaitut',es:'«Te quiero», «me ve»: objeto de 1.ª y 2.ª persona',ic:'💛',min:9,
 goals:['Decir «te» y «me» con el auxiliar: zaitut, nauzu','Usar maite zaitut, ikusten zaitut','Reconocer gaitu / gaituzu (nos)'],
 steps:[
 {t:'Cuando el objeto soy yo, tú o nosotros',h:'<p>Hasta ahora el objeto era una cosa (dut, ditut). Cuando el objeto es una <b>persona</b> (me, te, nos) el auxiliar cambia entero. Estas son las formas más útiles:</p>',
  tb:'<table class="mini"><tr><th>Quién → a quién</th><th>Auxiliar</th></tr><tr><td>nik → zu</td><td><b>zaitut</b> (te)</td></tr><tr><td>berak → zu</td><td><b>zaitu</b></td></tr><tr><td>guk → zu</td><td><b>zaitugu</b></td></tr><tr><td>zuk → ni</td><td><b>nauzu</b> (me)</td></tr><tr><td>berak → ni</td><td><b>nau</b></td></tr><tr><td>haiek → ni</td><td><b>naute</b></td></tr><tr><td>berak → gu</td><td><b>gaitu</b> (nos)</td></tr><tr><td>zuk → gu</td><td><b>gaituzu</b></td></tr><tr><td>haiek → gu</td><td><b>gaituzte</b></td></tr></table>',
  tip:'No hace falta memorizar la tabla entera: empieza por <b>zaitut</b> (te … yo), <b>nauzu</b> (me … tú) y <b>nau</b> (me … él/ella).'},
 {t:'En frases',h:'<p>Se usan con verbos como <b>ikusi, maite izan, entzun, ezagutu</b>.</p>',
  ex:[['Maite zaitut.','Te quiero.'],['Ikusten zaitut.','Te veo.'],['Zuk ni ikusten nauzu.','Tú me ves.'],['Amak maite gaitu.','Mamá nos quiere.'],['Entzuten nauzu?','¿Me oyes?']]},
 {t:'Ojo con el orden',h:'<p>El auxiliar sigue al final y concuerda con <b>quién hace</b> y <b>a quién</b>: no se puede adivinar solo por el sujeto. Si dudas, fíjate en el objeto: <b>zu → zait-</b>, <b>ni → nau-</b>, <b>gu → gai-</b>.</p>'}
 ],
 make:()=>[].concat(SQ0(['maite','zaitut'],'Te quiero.','zaitut = yo a ti.'),SQ0(['zuk','ni','ikusten','nauzu'],'Tú me ves.','nauzu = tú a mí.'),[
  mc('Zaitut','«Te quiero»','¿Cuál es?','Maite zaitut',['Maite nauzu','Maite dut','Maite zait'],'Yo → ti: <b>zaitut</b>.'),
  mc('Nauzu','«Tú me ves»','¿Cuál es?','Ikusten nauzu',['Ikusten zaitut','Ikusten du','Ikusten gaitu'],'Tú → mí: <b>nauzu</b>.'),
  mc('Gaitu','«Mamá nos quiere»','Elige el auxiliar','gaitu',['gaitut','zaitu','nau'],'Berak → gu: <b>gaitu</b>.'),
  mc('Nau','«Él/ella me ve»','Elige el auxiliar','nau',['nauzu','zaitu','naute'],'Berak → ni: <b>nau</b>.'),
  mc('Zaitu','«Él/ella te ve»','Elige el auxiliar','zaitu',['zaitut','nauzu','gaitu'],'Berak → zu: <b>zaitu</b>.')
 ])},

{id:'b12',lv:'a1',n:24,eu:'Aginduak',es:'Órdenes, peticiones y prohibiciones',ic:'📣',min:7,
 goals:['Dar órdenes sencillas con el verbo suelto (Itxi atea!)','Usar zatoz, zoaz, zaude','Pedir con cortesía (ezazu) y prohibir (ez)'],
 steps:[
 {t:'El verbo suelto',h:'<p>La orden más sencilla es el <b>participio solo</b>: sin auxiliar ni pronombre.</p>',
  ex:[['Itxi atea!','¡Cierra la puerta!'],['Ireki leihoa!','¡Abre la ventana!'],['Etorri hona!','¡Ven aquí!'],['Entzun!','¡Escucha!']]},
 {t:'Zatoz, zoaz, zaude',h:'<p>Tres imperativos propios que usarás mucho:</p>',
  tb:'<table class="mini"><tr><th>A uno (zu)</th><th>A varios (zuek)</th><th></th></tr><tr><td><b>zatoz</b></td><td>zatozte</td><td>ven</td></tr><tr><td><b>zoaz</b></td><td>zoazte</td><td>ve</td></tr><tr><td><b>zaude</b></td><td>zaudete</td><td>quédate / espera</td></tr></table>',
  ex:[['Zatoz hona!','¡Ven aquí!'],['Zoaz etxera!','¡Vete a casa!'],['Zaude isilik!','¡Cállate! (estate quieto)']]},
 {t:'Cortesía y prohibición',h:'<p>Para pedir con educación: verbo + <b>ezazu</b> (a ti) / <b>ezazue</b> (a vosotros). Para prohibir: <b>ez</b> + verbo (o <b>ez ezazu</b> + verbo).</p>',
  ex:[['Ireki ezazu atea, mesedez.','Abre la puerta, por favor.'],['Itxi ezazue leihoa.','Cerrad la ventana.'],['Ez ireki atea!','¡No abras la puerta!'],['Ez ezazu ireki.','No la abras (educado).']]}
 ],
 make:()=>[].concat(SQ0(['zatoz','hona'],'Ven aquí.','zatoz = ven (etorri).'),SQ0(['ireki','ezazu','atea'],'Abre la puerta.','verbo + ezazu = petición educada.'),[
  mc('Agindua','«¡Cierra la puerta!»','¿Cuál es?','Itxi atea!',['Itxi dut atea','Ixten atea','Atea itxi naiz'],'Orden simple: <b>participio solo</b>.'),
  mc('Agindua','«Ven aquí»','¿Cuál es?','Zatoz hona',['Zatoz horra','Etorri naiz hona','Dator hona'],'<b>zatoz</b> = ven.'),
  mc('Agindua','«Vete a casa»','¿Cuál es?','Zoaz etxera',['Zatoz etxera','Zaude etxera','Noa etxera'],'<b>zoaz</b> = ve.'),
  mc('Agindua','«Espera aquí»','¿Cuál es?','Zaude hemen',['Zoaz hemen','Zatoz hemen','Zaudete hemen'],'<b>zaude</b> = quédate, espera.'),
  mc('Agindua','«No abras»','¿Cuál es?','Ez ireki!',['Ireki ez!','Ez irekia!','Ireki ezin!'],'<b>ez</b> + verbo.')
 ])},

{id:'b13',lv:'a2',n:6,eu:'Dezaket eta naiteke',es:'Poder: puedo hacer, puedo ir',ic:'💪',min:8,
 goals:['Formar el potencial: dezaket (con objeto), naiteke (sin objeto)','Pedir permiso: Sar naiteke?','Distinguir ezin dut de dezaket'],
 steps:[
 {t:'Dos tablas de «poder»',h:'<p>Para <b>poder</b> hay formas propias. Se usa el participio y la forma que corresponde al tipo de verbo:</p>',
  tb:'<table class="mini"><tr><th></th><th>con objeto<br>(ukan)</th><th>sin objeto<br>(izan)</th></tr><tr><td>ni</td><td><b>dezaket</b></td><td><b>naiteke</b></td></tr><tr><td>zu</td><td><b>dezakezu</b></td><td><b>zaitezke</b></td></tr><tr><td>bera</td><td><b>dezake</b></td><td><b>daiteke</b></td></tr><tr><td>gu</td><td><b>dezakegu</b></td><td><b>gaitezke</b></td></tr><tr><td>zuek</td><td><b>dezakezue</b></td><td><b>zaitezkete</b></td></tr><tr><td>haiek</td><td><b>dezakete</b></td><td><b>daitezke</b></td></tr></table>',
  tip:'<b>Euskaraz hitz egin dezaket</b> (hablar lleva objeto) · <b>Etor naiteke</b> (venir no lo lleva).'},
 {t:'Preguntar si puedes',h:'<p>Mismas formas en pregunta, con <b>al</b> si quieres: <b>Sar naiteke?</b> (¿puedo pasar?), <b>Hitz egin dezaket?</b></p>',
  ex:[['Sar naiteke?','¿Puedo pasar?'],['Euskaraz hitz egin dezaket.','Puedo hablar en euskera.'],['Bihar etor naiteke.','Mañana puedo venir.'],['Telefonoa erabil dezaket?','¿Puedo usar el teléfono?']]},
 {t:'Dezaket o ezin dut',h:'<p>La negación es <b>ezin</b> + el auxiliar normal: <b>Ezin dut etorri</b> (no puedo venir). El potencial se usa sobre todo en afirmativo y para pedir permiso.</p>'}
 ],
 make:()=>[].concat(conjQs(['ahal (dezaket)','ahal (naiteke)'],5),SQ0(['euskaraz','hitz','egin','dezaket'],'Puedo hablar en euskera.','objeto → dezaket.'),[
  mc('Potentziala','«Puedo venir» (etorri)','¿Cuál es?','Etor naiteke',['Etor dezaket','Etorri dut','Etor nahi dut'],'etorri no lleva objeto → <b>naiteke</b>.'),
  mc('Potentziala','«Puedo leer el libro»','¿Cuál es?','Liburua irakur dezaket',['Liburua irakur naiteke','Liburua irakurri dut','Liburua irakurtzen naiz'],'irakurri lleva objeto → <b>dezaket</b>.'),
  mc('Baimena','«¿Puedo pasar?»','¿Cuál es?','Sar naiteke?',['Sar dezaket?','Sartu al dut?','Sar naiz?'],'<b>naiteke</b>.')
 ])},

{id:'b14',lv:'a1',n:23,eu:'Norekin? Zertaz?',es:'Con quién, en qué (transporte), hasta, hacia',ic:'🚆',min:8,
 goals:['Decir «con» con -rekin: amarekin, nirekin','Decir el medio con -z: autobusez, oinez','Usar -raino (hasta) y -rantz (hacia)'],
 steps:[
 {t:'-rekin: «con»',h:'<p>Para <b>con alguien</b> se añade <b>-rekin</b> (o <b>-ekin</b> si acaba en consonante). Con pronombres:</p>',
  tb:'<table class="mini"><tr><th>Pronombre</th><th>Con…</th></tr><tr><td>ni</td><td><b>nirekin</b></td></tr><tr><td>zu</td><td><b>zurekin</b></td></tr><tr><td>bera</td><td><b>berarekin</b></td></tr><tr><td>gu</td><td><b>gurekin</b></td></tr><tr><td>zuek</td><td><b>zuekin</b></td></tr><tr><td>haiek</td><td><b>haiekin</b></td></tr></table>',
  ex:[['Amarekin mendira joaten naiz.','Voy al monte con mamá.'],['Norekin bizi zara?','¿Con quién vives?'],['Nirekin zatoz?','¿Vienes conmigo?']]},
 {t:'-z: el medio',h:'<p><b>-z</b> dice <b>cómo</b> o <b>en qué</b>: autobusez (en autobús), trenez, autoz, oinez (a pie), euskaraz (en euskera).</p>',
  ex:[['Autobusez etorri naiz.','He venido en autobús.'],['Oinez joaten naiz lanera.','Voy al trabajo a pie.'],['Trenez joaten naiz.','Voy en tren.']]},
 {t:'-raino y -rantz',h:'<p><b>-raino</b> = hasta (el punto final): <b>Iruñeraino</b>. <b>-rantz</b> = en dirección a: <b>mendirantz</b>.</p>',
  ex:[['Iruñeraino autobusez noa.','Voy hasta Pamplona en autobús.'],['Etxerantz noa.','Voy hacia casa.']]}
 ],
 make:()=>[].concat(SQ0(['amarekin','mendira','joaten','naiz'],'Voy al monte con mamá.','-rekin = con.'),SQ0(['autobusez','etorri','naiz'],'He venido en autobús.','-z = en (medio).'),vq('garraioak',3),[
  mc('-rekin','«Conmigo»','¿Cuál es?','nirekin',['niretzat','niri','nirea'],'<b>nirekin</b> = conmigo.'),
  mc('-rekin','«Con mamá»','¿Cuál es?','amarekin',['amari','amarentzat','amaz'],'<b>-rekin</b> = con.'),
  mc('-z','«A pie»','¿Cuál es?','oinez',['oinean','oinetan','oinera'],'<b>oinez</b> = a pie.'),
  mc('-z','«En tren»','¿Cuál es?','trenez',['trenean','trenera','trenarekin'],'<b>-z</b> para el medio de transporte.'),
  mc('-raino','«Hasta Pamplona»','¿Cuál es?','Iruñeraino',['Iruñean','Iruñetik','Iruñarekin'],'<b>-raino</b> = hasta.')
 ])},

{id:'b15',lv:'a2',n:7,eu:'Esan du…',es:'Contar lo que otros dicen y preguntas indirectas',ic:'💬',min:9,
 goals:['Contar lo que alguien dice con -ela (que)','Hacer preguntas indirectas con -n','Responder baietz / ezetz'],
 steps:[
 {t:'-ela: «que»',h:'<p>Para decir <b>que</b> + algo, al auxiliar se le añade <b>-(e)la</b>: <b>dela, duela, dudala, naizela, dagoela</b>. Se usa tras <b>esan</b> (decir), <b>pentsatu</b> (pensar), <b>uste izan</b> (creer).</p>',
  tb:'<table class="mini"><tr><th>Auxiliar</th><th>Que…</th></tr><tr><td>da</td><td><b>dela</b></td></tr><tr><td>dago</td><td><b>dagoela</b></td></tr><tr><td>naiz</td><td><b>naizela</b></td></tr><tr><td>du</td><td><b>duela</b></td></tr><tr><td>dut</td><td><b>dudala</b></td></tr></table>',
  ex:[['Amak esan du etorriko dela.','Mamá ha dicho que vendrá.'],['Esan dut ondo nagoela.','He dicho que estoy bien.'],['Uste dut euskara polita dela.','Creo que el euskera es bonito.']]},
 {t:'Preguntas indirectas',h:'<p>Dentro de otra frase, la pregunta lleva <b>-n</b> en el auxiliar: <b>non dagoen</b> (dónde está), <b>zer den</b> (qué es), <b>zer duzun</b> (qué tienes).</p>',
  ex:[['Badakizu non dagoen udaletxea?','¿Sabes dónde está el ayuntamiento?'],['Ez dakit zer den.','No sé qué es.'],['Galdetu dut noiz etorriko den.','He preguntado cuándo vendrá.']]},
 {t:'Baietz eta ezetz',h:'<p>Para contar un «sí» o un «no» ajeno: <b>baietz esan du</b> (dijo que sí), <b>ezetz esan du</b> (dijo que no).</p>',
  ex:[['Baietz esan du.','Ha dicho que sí.'],['Ezetz esan dut.','He dicho que no.']]}
 ],
 make:()=>[].concat(SQ0(['esan','du','etorriko','dela'],'Ha dicho que vendrá.','da + ela = dela.'),[
  mc('-ela','«Dice que está en casa» (dago)','¿Cuál es?','Etxean dagoela esaten du',['Etxean dagoen esaten du','Etxean dago esaten du','Etxean dagoela da'],'dago + <b>ela</b>.'),
  mc('-ela','«Creo que es bonito» (da)','¿Cuál es?','Polita dela uste dut',['Polita dena uste dut','Polita da uste dut','Polita delako uste dut'],'da + <b>ela</b> = dela.'),
  mc('-ela','«He dicho que tengo» (dut)','Elige la forma','dudala',['duela','dutela','dudan'],'dut + <b>ala</b> = dudala.'),
  mc('Galdera','«¿Sabes dónde está?»','¿Cuál es?','Badakizu non dagoen?',['Badakizu non dago?','Badakizu non dagoela?','Badakizu non da?'],'Pregunta indirecta: <b>-n</b>: dagoen.'),
  mc('Baietz','«Ha dicho que sí»','¿Cuál es?','Baietz esan du',['Bai esan du','Ezetz esan du','Baina esan du'],'<b>baietz</b> = que sí.')
 ])},

{id:'b16',lv:'a1',n:26,eu:'Baldin eta…',es:'«Si», «cuando», «antes de» y «después de»',ic:'🔀',min:9,
 goals:['Formar el condicional real con ba- (si…)','Decir «cuando» con -(e)nean','Usar baino lehen y eta gero'],
 steps:[
 {t:'Ba-: «si»',h:'<p>Para <b>si</b> + algo real, se pone <b>ba-</b> delante del auxiliar: <b>badut, baduzu, badu, bazara, badago</b>.</p>',
  tb:'<table class="mini"><tr><th>Auxiliar</th><th>Si…</th></tr><tr><td>dut</td><td><b>badut</b></td></tr><tr><td>duzu</td><td><b>baduzu</b></td></tr><tr><td>da</td><td><b>bada</b></td></tr><tr><td>zara</td><td><b>bazara</b></td></tr><tr><td>dago</td><td><b>badago</b></td></tr></table>',
  ex:[['Nahi baduzu, etorri.','Si quieres, ven.'],['Euria egiten badu, etxean geratuko naiz.','Si llueve, me quedaré en casa.'],['Etortzen bazara, esan.','Si vienes, dímelo.']]},
 {t:'-(e)nean: «cuando»',h:'<p>Para <b>cuando</b>, al auxiliar se le añade <b>-(e)nean</b>: <b>naizenean, zarenean, denean, dudanean, duzunean</b>.</p>',
  ex:[['Etxera heltzen naizenean, afaltzen dut.','Cuando llego a casa, ceno.'],['Gaixorik zarenean, medikuarenera joan.','Cuando estés enfermo, ve al médico.']]},
 {t:'Antes y después',h:'<p><b>baino lehen</b> = antes de · <b>eta gero</b> = y después. Sirven para ordenar acciones.</p>',
  ex:[['Afaldu baino lehen dutxatzen naiz.','Me ducho antes de cenar.'],['Jan eta gero, kafea hartzen dut.','Después de comer, tomo café.']]}
 ],
 make:()=>[].concat(SQ0(['nahi','baduzu','etorri'],'Si quieres, ven.','ba- + duzu = baduzu.'),[
  mc('Ba-','«Si tienes» (duzu)','¿Cuál es?','baduzu',['duzula','duzunean','duzu ba'],'<b>ba-</b> + duzu.'),
  mc('Ba-','«Si vienes» (zara, etortzen)','¿Cuál es?','etortzen bazara',['etortzen zarenean','etortzen zarela','etortzen baino lehen'],'<b>ba-</b> = si.'),
  mc('-nean','«Cuando llego» (naiz)','¿Cuál es?','heltzen naizenean',['heltzen bazara','heltzen naizela','heltzen eta gero'],'naiz + <b>enean</b> = naizenean.'),
  mc('Denbora','«Antes de cenar»','¿Cuál es?','Afaldu baino lehen',['Afaldu eta gero','Afaldu orduan','Afaltzean baino'],'<b>baino lehen</b> = antes de.'),
  mc('Denbora','«Después de comer»','¿Cuál es?','Jan eta gero',['Jan baino lehen','Jan bada','Jan duela'],'<b>eta gero</b> = después de.')
 ])},

{id:'b17',lv:'a1',n:16,eu:'Eguraldia',es:'El tiempo atmosférico',ic:'🌦️',min:6,
 goals:['Decir qué tiempo hace','Usar ari du (llueve, nieva)','Comparar el tiempo en cada estación'],
 steps:[
 {t:'Qué tiempo hace',h:'<p>Pregunta: <b>Zer eguraldi dago?</b> (¿qué tiempo hace?). Hay dos estructuras muy útiles:</p>',
  tb:'<table class="mini"><tr><th>Estructura</th><th>Ejemplo</th></tr><tr><td><b>… ari du</b></td><td>Euria ari du (llueve)</td></tr><tr><td><b>… egiten du</b></td><td>Hotz egiten du (hace frío)</td></tr><tr><td><b>… dago</b></td><td>Eguzkia dago (hace sol)</td></tr></table>',
  ex:[['Euria ari du.','Está lloviendo.'],['Elurra ari du.','Está nevando.'],['Gaur hotz egiten du.','Hoy hace frío.'],['Udan bero egiten du.','En verano hace calor.'],['Hodei asko daude.','Hay muchas nubes.']]},
 {t:'Eguraldia Baztanen',h:'<p>En Baztan llueve mucho: <b>Baztanen euria egiten du askotan</b> (en Baztan llueve a menudo). Puedes combinar con las estaciones que ya sabes: <b>Neguan elurra egiten du</b>.</p>'}
 ],
 make:()=>[].concat(SQ0(['euria','ari','du'],'Está lloviendo.','ari du = está (haciendo).'),SQ0(['gaur','hotz','egiten','du'],'Hoy hace frío.','hotz egiten du = hace frío.'),vq('eguraldia',5),[
  mc('Eguraldia','«Está nevando»','¿Cuál es?','Elurra ari du',['Euria ari du','Elurra da','Elurra dago ari'],'<b>ari du</b>.'),
  mc('Eguraldia','«¿Qué tiempo hace?»','¿Cuál es?','Zer eguraldi dago?',['Zer eguraldi naiz?','Nolako eguraldi du?','Zer ari du?'],'<b>Zer eguraldi dago?</b>'),
  mc('Eguraldia','«En verano hace calor»','¿Cuál es?','Udan bero egiten du',['Uda bero egiten da','Udan beroa naiz','Udan egin bero du'],'<b>bero egiten du</b>.')
 ])},

{id:'b18',lv:'a1',n:27,eu:'Erosketak',es:'Comprar y preguntar precios',ic:'🛍️',min:7,
 goals:['Preguntar precios con Zenbat balio du?','Pedir, elegir y pagar','Usar ordaindu dezaket y -arekin'],
 steps:[
 {t:'En la tienda',h:'<p>Frases que necesitas:</p>',
  ex:[['Barkatu, zenbat balio du honek?','Perdona, ¿cuánto cuesta esto?'],['Zenbat balio dute sagarrek?','¿Cuánto cuestan las manzanas?'],['Hau nahi dut.','Quiero esto.'],['Besterik nahi duzu?','¿Quiere algo más?'],['Ez, besterik ez.','No, nada más.']],
  tip:'<b>balio du</b> (singular) / <b>balio dute</b> (plural) = cuesta / cuestan.'},
 {t:'Pagar',h:'<p>Con <b>-arekin</b> dices con qué: <b>txartelarekin</b>, <b>diruarekin</b>. Y <b>dezaket</b> para preguntar si se puede.</p>',
  ex:[['Txartelarekin ordaindu dezaket?','¿Puedo pagar con tarjeta?'],['Bai, jakina.','Sí, claro.'],['Poltsa bat nahi dut.','Quiero una bolsa.'],['Zenbat da guztira?','¿Cuánto es en total?']]},
 {t:'Cantidades',h:'<p>Palabras para pedir: <b>kilo bat</b> (un kilo), <b>erdi bat</b> (medio), <b>pixka bat</b> (un poco), <b>gehiago</b> (más), <b>gutxiago</b> (menos).</p>'}
 ],
 make:()=>[].concat(SQ0(['zenbat','balio','du'],'¿Cuánto cuesta?','balio du = cuesta.'),vq('erosketak',5),[
  mc('Erosketak','«¿Cuánto cuesta esto?»','¿Cuál es?','Zenbat balio du honek?',['Zenbat da honek?','Zer balio du honek?','Non balio du honek?'],'<b>Zenbat balio du?</b>'),
  mc('Erosketak','«¿Puedo pagar con tarjeta?»','¿Cuál es?','Txartelarekin ordaindu dezaket?',['Txartelaz ordaindu dezaket?','Txartelari ordaindu dezaket?','Txartelarekin ordaindu naiteke?'],'<b>-arekin</b> + dezaket (ordaindu lleva objeto).'),
  mc('Erosketak','«Nada más»','¿Cuál es?','Besterik ez',['Gehiago bai','Ezer ez bai','Beste da'],'<b>besterik ez</b> = nada más.')
 ])},

{id:'b19',lv:'a1',n:28,eu:'Osasuna',es:'Salud: me duele, estoy enfermo',ic:'🩺',min:7,
 goals:['Decir dónde te duele (mina dut)','Hablar con el médico y la farmacia','Dar y entender consejos con behar'],
 steps:[
 {t:'Me duele…',h:'<p>Para <b>me duele</b> se dice <b>…ko mina dut</b> (tengo dolor de…):</p>',
  ex:[['Buruko mina dut.','Me duele la cabeza.'],['Eztarriko mina dut.','Me duele la garganta.'],['Sabeleko mina dut.','Me duele el estómago.'],['Sukarra dut.','Tengo fiebre.'],['Gripea dut.','Tengo gripe.']],
  tip:'<b>buru</b> + <b>-ko</b> = «de la cabeza»: buruko mina. Si el nombre acaba en -a, se pierde: sabela → sabeleko.'},
 {t:'En el médico',h:'<p>Preguntas y consejos típicos:</p>',
  ex:[['Zer duzu?','¿Qué tienes?'],['Gaixorik nago.','Estoy enfermo.'],['Medikuarenera joan behar dut.','Tengo que ir al médico.'],['Botika hartu behar duzu.','Tienes que tomar la medicina.'],['Atseden hartu behar duzu.','Tienes que descansar.']],
  tip:'<b>-(r)enera</b> = a casa/consulta de alguien: medikuarenera.'},
 {t:'Estados útiles',h:'<p>Ya conoces <b>gaixorik, nekatuta, gose, egarri, hotz, bero</b> con <b>naiz / nago</b>. Añade <b>ondo / gaizki</b> (bien / mal): <b>Gaizki sentitzen naiz</b> (me siento mal).</p>'}
 ],
 make:()=>[].concat(SQ0(['buruko','mina','dut'],'Me duele la cabeza.','buru + ko mina dut.'),vq('osasuna',5),[
  mc('Osasuna','«Me duele la garganta»','¿Cuál es?','Eztarriko mina dut',['Eztarria mina naiz','Mina eztarrian zait','Eztarri mina duzu'],'<b>…ko mina dut</b>.'),
  mc('Osasuna','«Tengo fiebre»','¿Cuál es?','Sukarra dut',['Sukarra naiz','Sukarra nago','Sukarrak zait'],'<b>sukarra dut</b>.'),
  mc('Osasuna','«Tengo que ir al médico»','¿Cuál es?','Medikuarenera joan behar dut',['Medikuari joan behar dut','Medikuarekin joan behar naiz','Medikua joan behar dut'],'<b>-(r)enera</b> = a casa de.')
 ])}
);

Object.assign(LSUM,{
b9:{sum:['joan, etorri, egon e ibili forman el pasado sin auxiliar: nindoan, nentorren, nengoen, nenbilen…','Describen dónde estabas o adónde ibas en el pasado.','Con <b>zu</b> a veces toman la terminación plural: zindoazen, zentozen.'],
 kw:[['nindoan','iba'],['nentorren','venía'],['nengoen','estaba'],['nenbilen','andaba'],['zegoen','estaba (él/ella)'],['atzo','ayer'],['iaz','el año pasado'],['orduan','entonces']]},
b10:{sum:['Pasado habitual: verbo habitual (-ten/-tzen) + <b>nintzen</b> (izan) o <b>nuen</b> (ukan).','«Estaba haciendo»: verbo habitual + <b>ari</b> + nintzen/zen…','Marcadores: txikitan (de pequeño), gaztetan (de joven).'],
 kw:[['txikitan','de pequeño'],['gaztetan','de joven'],['ari nintzen','estaba (haciendo)'],['joaten nintzen','solía ir'],['jaten nuen','solía comer'],['jolastu','jugar']]},
b11:{sum:['Cuando el objeto es <b>tú</b>: zaitut, zaitu, zaitugu. Cuando es <b>yo</b>: nauzu, nau, naute. Cuando es <b>nosotros</b>: gaitu, gaituzu, gaituzte.','Verbos típicos: maite izan, ikusi, entzun, ezagutu.'],
 kw:[['maite zaitut','te quiero'],['ikusten zaitut','te veo'],['nauzu','me (tú)'],['nau','me (él/ella)'],['gaitu','nos (él/ella)'],['entzun','oír, escuchar'],['ezagutu','conocer']]},
b12:{sum:['Orden simple: el participio solo (Itxi atea!).','<b>zatoz / zoaz / zaude</b> = ven / ve / quédate (a varios: zatozte, zoazte, zaudete).','Cortesía: verbo + <b>ezazu</b>. Prohibir: <b>ez</b> + verbo.'],
 kw:[['itxi','cerrar'],['ireki','abrir'],['zatoz','ven'],['zoaz','ve'],['zaude','espera, quédate'],['ezazu','(petición educada)'],['hona','aquí (hacia)']]},
b13:{sum:['Potencial: <b>dezaket…</b> (verbos con objeto) y <b>naiteke…</b> (sin objeto).','Pedir permiso: <b>Sar naiteke?</b>','Negar: <b>ezin dut</b> + verbo.'],
 kw:[['dezaket','puedo (hacer algo)'],['naiteke','puedo (ir, venir…)'],['sar','entrar'],['ahal','poder'],['ezin','no poder'],['erabili','usar']]},
b14:{sum:['<b>-rekin</b> = con: amarekin, nirekin, zurekin, berarekin, gurekin, zuekin, haiekin.','<b>-z</b> = medio: autobusez, trenez, oinez, euskaraz.','<b>-raino</b> = hasta; <b>-rantz</b> = hacia.'],
 kw:[['nirekin','conmigo'],['zurekin','contigo'],['berarekin','con él/ella'],['autobusez','en autobús'],['trenez','en tren'],['oinez','a pie'],['Iruñeraino','hasta Pamplona'],['etxerantz','hacia casa']]},
b15:{sum:['<b>-(e)la</b> = que: dela, duela, dudala, naizela, dagoela (tras esan, pentsatu, uste izan).','Preguntas indirectas con <b>-n</b>: non dagoen, zer den.','<b>baietz</b> / <b>ezetz</b> = que sí / que no.'],
 kw:[['esan','decir'],['uste dut','creo'],['pentsatu','pensar'],['galdetu','preguntar'],['baietz','que sí'],['ezetz','que no'],['badakizu…?','¿sabes…?'],['ez dakit','no sé']]},
b16:{sum:['<b>ba-</b> + auxiliar = si: baduzu, bazara, badago.','<b>-(e)nean</b> = cuando: naizenean, zarenean, denean.','<b>baino lehen</b> = antes de; <b>eta gero</b> = después de.'],
 kw:[['baduzu','si tienes'],['bazara','si eres/vienes'],['naizenean','cuando soy'],['baino lehen','antes de'],['eta gero','y después'],['orduan','entonces'],['heldu','llegar'],['hartu','tomar']]},
b17:{sum:['<b>Zer eguraldi dago?</b> = ¿qué tiempo hace?','<b>euria ari du</b> (llueve), <b>elurra ari du</b> (nieva), <b>hotz / bero egiten du</b> (hace frío / calor), <b>eguzkia dago</b> (hace sol).'],
 kw:[['eguraldia','el tiempo'],['euria','la lluvia'],['elurra','la nieve'],['haizea','el viento'],['eguzkia','el sol'],['hodeia','la nube'],['lainoa','la niebla'],['ekaitza','la tormenta']]},
b18:{sum:['<b>Zenbat balio du / dute?</b> = ¿cuánto cuesta / cuestan?','Pagar: <b>-arekin ordaindu</b>. Pedir: <b>hau nahi dut</b>, <b>besterik ez</b>.','Cantidades: kilo bat, erdi bat, pixka bat, gehiago, gutxiago.'],
 kw:[['prezioa','el precio'],['dirua','el dinero'],['poltsa','la bolsa'],['kutxa','la caja'],['saltzailea','el vendedor'],['bezeroa','el cliente'],['erosketak','las compras'],['merkatua','el mercado'],['ordaindu','pagar']]},
b19:{sum:['<b>…ko mina dut</b> = me duele…: buruko mina dut, sabeleko mina dut.','Médico: <b>medikuarenera joan behar dut</b>. Consejos con <b>behar duzu</b>.','Sensaciones: sukarra dut, gaixorik nago, gaizki sentitzen naiz.'],
 kw:[['mina','el dolor'],['sukarra','la fiebre'],['gripea','la gripe'],['eztarria','la garganta'],['sabela','el estómago'],['bizkarra','la espalda'],['medikua','el médico'],['botika','la medicina'],['atseden','descanso']]}
});
