/* ===== Completar A1 según HEOC/HABE, Gobierno Vasco y UNED + 2 lecciones A2 ===== */
LESSONS.push(
{id:'c1',lv:'a1',n:20,eu:'Kopuruak eta ordinalak',es:'Hasta 1000, primero/segundo y «mucho, poco, bastante»',ic:'🔢',min:8,
 goals:['Contar de 100 a 1000','Decir primero, segundo, tercero…','Usar asko, gutxi, nahiko, pixka bat, guztiak y oso'],
 steps:[
 {t:'De 100 a 1000',h:'<p>Las centenas se forman con <b>-ehun</b>: bi + ehun, pero ojo, el 200 es irregular.</p>',
  tb:'<table class="mini"><tr><th>Cifra</th><th>Euskera</th></tr><tr><td>100</td><td><b>ehun</b></td></tr><tr><td>200</td><td><b>berrehun</b></td></tr><tr><td>300</td><td><b>hirurehun</b></td></tr><tr><td>400</td><td><b>laurehun</b></td></tr><tr><td>500</td><td><b>bostehun</b></td></tr><tr><td>600</td><td><b>seiehun</b></td></tr><tr><td>700</td><td><b>zazpiehun</b></td></tr><tr><td>800</td><td><b>zortziehun</b></td></tr><tr><td>900</td><td><b>bederatziehun</b></td></tr><tr><td>1000</td><td><b>mila</b></td></tr></table>',
  ex:[['ehun eta hogeita bost','125'],['berrehun eta berrogeita hamar','250'],['bi mila eta hogeita sei','2026']],
  tip:'Se une con <b>eta</b>: ehun <b>eta</b> hogeita bost.'},
 {t:'Ordinales',h:'<p>El ordinal se forma con <b>-garren</b>; el primero es especial: <b>lehenengo</b> (o <b>lehen</b>). Va <b>delante</b> del nombre.</p>',
  tb:'<table class="mini"><tr><th>Nº</th><th>Euskera</th></tr><tr><td>1.º</td><td><b>lehenengo / lehen</b></td></tr><tr><td>2.º</td><td><b>bigarren</b></td></tr><tr><td>3.º</td><td><b>hirugarren</b></td></tr><tr><td>4.º</td><td><b>laugarren</b></td></tr><tr><td>5.º</td><td><b>bosgarren</b></td></tr><tr><td>6.º</td><td><b>seigarren</b></td></tr><tr><td>10.º</td><td><b>hamargarren</b></td></tr></table>',
  ex:[['Lehenengo ikasgaia','La primera lección'],['Bigarren solairua','El segundo piso'],['Hirugarren kalea ezkerrean dago.','La tercera calle está a la izquierda.']]},
 {t:'Mucho, poco, bastante',h:'<p>Los cuantificadores son muy útiles y van <b>detrás</b> del nombre (como bat).</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>asko</b></td><td>mucho</td></tr><tr><td><b>gutxi</b></td><td>poco</td></tr><tr><td><b>nahiko</b></td><td>bastante</td></tr><tr><td><b>pixka bat / apur bat</b></td><td>un poco</td></tr><tr><td><b>batzuk</b></td><td>algunos</td></tr><tr><td><b>guztiak / denak</b></td><td>todos</td></tr></table>',
  ex:[['Jende asko dago.','Hay mucha gente.'],['Diru gutxi daukat.','Tengo poco dinero.'],['Kafe pixka bat nahi dut.','Quiero un poco de café.'],['Denak etxean daude.','Todos están en casa.']]},
 {t:'Intensificar',h:'<p><b>oso</b> = muy, <b>nahiko</b> = bastante. También se intensifica <b>repitiendo</b> el adjetivo: <b>txiki-txikia</b> (pequeñísimo), <b>handi-handia</b> (enorme).</p>',
  ex:[['Etxea oso handia da.','La casa es muy grande.'],['Kafea nahiko beroa da.','El café está bastante caliente.'],['Katua txiki-txikia da.','El gato es pequeñito.']]}
 ],
 make:()=>[].concat([
  mc('Zenbakiak','200','¿Cómo se dice?','berrehun',['bihun','biehun','berrehun bat'],'El 200 es irregular: <b>berrehun</b>.'),
  mc('Zenbakiak','500','¿Cómo se dice?','bostehun',['bostgarren','bosthun','hamabost'],'bost + ehun = <b>bostehun</b>.'),
  mc('Zenbakiak','1000','¿Cómo se dice?','mila',['ehun','milla','hamar ehun'],'<b>mila</b> = mil.'),
  mc('Ordinala','«La segunda lección»','¿Cuál es?','Bigarren ikasgaia',['Bi ikasgaia','Ikasgaia bigarren','Biga ikasgaia'],'El ordinal va <b>delante</b>: bigarren.'),
  mc('Ordinala','«El tercer piso»','¿Cuál es?','Hirugarren solairua',['Hiru solairua','Hirugarrena solairu','Solairua hirugarren'],'hiru + garren = <b>hirugarren</b>.'),
  mc('Kopurua','«Mucha gente»','¿Cuál es?','jende asko',['asko jende','jende gutxi','jende oso'],'<b>asko</b> va detrás del nombre.'),
  mc('Kopurua','«Tengo poco dinero»','¿Cuál es?','Diru gutxi daukat',['Diru asko daukat','Dirua gutxi dut asko','Gutxi diru naiz'],'<b>gutxi</b> = poco.'),
  mc('Kopurua','«Todos están en casa»','¿Cuál es?','Denak etxean daude',['Denak etxean dago','Batzuk etxean daude','Gutxi etxean daude'],'<b>denak</b> = todos (plural: daude).'),
  mc('Gradua','«pequeñísimo»','¿Cuál es?','txiki-txikia',['txikiagoa','oso txiki-a','txiki txikiago'],'Repetición: <b>txiki-txikia</b>.')
 ],vq('zenbakiak',3))},

{id:'c2',lv:'a1',n:21,eu:'Zerbait, ezer, inor',es:'Algo, nada, alguien, nadie, sin',ic:'❔',min:8,
 goals:['Decir algo, alguien y no… nada, nadie','Usar la negación con ezer, inor, inon','Decir «sin» (-rik gabe) y «ni un» (-rik)'],
 steps:[
 {t:'Algo y alguien',h:'<p>Para <b>algo</b> y <b>alguien</b> en frases afirmativas y preguntas:</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>zerbait</b></td><td>algo</td></tr><tr><td><b>norbait</b></td><td>alguien</td></tr><tr><td><b>nonbait</b></td><td>en algún sitio</td></tr></table>',
  ex:[['Zerbait nahi duzu?','¿Quieres algo?'],['Norbait dago atean.','Hay alguien en la puerta.'],['Zerbait edan nahi dut.','Quiero beber algo.']]},
 {t:'Nada, nadie: ez … ezer / inor',h:'<p>En negativo se usan <b>ezer</b> (nada), <b>inor</b> (nadie) e <b>inon</b> (en ningún sitio) con <b>ez</b> delante del auxiliar.</p>',
  tb:'<table class="mini"><tr><th>Negativo</th><th>Ejemplo</th></tr><tr><td><b>ez … ezer</b></td><td>Ez dut ezer ikusten.</td></tr><tr><td><b>ez … inor</b></td><td>Ez dago inor.</td></tr><tr><td><b>ez … inon</b></td><td>Ez dago inon.</td></tr><tr><td><b>ezer ez</b></td><td>— Zer duzu? — Ezer ez.</td></tr><tr><td><b>inor ez</b></td><td>— Nor dago? — Inor ez.</td></tr></table>',
  ex:[['Ez dut ezer ikusten.','No veo nada.'],['Ez dago inor etxean.','No hay nadie en casa.'],['Ezer ez, eskerrik asko.','Nada, gracias.']]},
 {t:'-rik y -rik gabe',h:'<p>Con la negación, el nombre lleva <b>-rik</b> («ni un…»): <b>Ez dut dirurik</b> (no tengo dinero). Y <b>-rik gabe</b> = sin: <b>esnerik gabe</b> (sin leche).</p>',
  ex:[['Ez dut dirurik.','No tengo dinero (nada de).'],['Ez dago esnerik.','No hay leche.'],['Kafea esnerik gabe nahi dut.','Quiero el café sin leche.']]}
 ],
 make:()=>[].concat(SQ0(['ez','dut','ezer','ikusten'],'No veo nada.','ez + auxiliar + ezer + verbo.'),SQ0(['ez','dago','inor','etxean'],'No hay nadie en casa.','ez dago inor.'),[
  mc('Zerbait','«¿Quieres algo?»','¿Cuál es?','Zerbait nahi duzu?',['Ezer nahi duzu?','Inor nahi duzu?','Norbait nahi duzu?'],'<b>zerbait</b> = algo.'),
  mc('Norbait','«Hay alguien»','¿Cuál es?','Norbait dago',['Inor dago','Ezer dago','Inon dago'],'<b>norbait</b> = alguien.'),
  mc('Ezer','«No tengo nada»','¿Cuál es?','Ez daukat ezer',['Daukat ezer','Ez daukat norbait','Ez ezer daukat inor'],'<b>ez … ezer</b>.'),
  mc('Inor','«No hay nadie»','¿Cuál es?','Ez dago inor',['Dago inor','Ez dago ezer','Ez dago zerbait'],'<b>ez … inor</b>.'),
  mc('-rik','«No tengo dinero»','¿Cuál es?','Ez dut dirurik',['Ez dut dirua','Dut dirurik','Ez dut diru bat'],'Negación + <b>-rik</b>: dirurik.'),
  mc('Gabe','«Sin leche»','¿Cuál es?','esnerik gabe',['esne gabe da','esnea gabe','gabe esnerik'],'<b>-rik gabe</b> = sin.')
 ])},

{id:'c3',lv:'a1',n:14,eu:'Bidea galdetu',es:'Preguntar y dar direcciones',ic:'🧭',min:8,
 goals:['Decir izquierda, derecha, recto, cerca, lejos','Dar una indicación con verbos en imperativo','Preguntar por un sitio y entender la respuesta'],
 steps:[
 {t:'Palabras de dirección',h:'<p>Estas palabras te sacan de apuros cuando preguntas por un sitio:</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>eskuinera</b></td><td>a la derecha</td></tr><tr><td><b>ezkerrera</b></td><td>a la izquierda</td></tr><tr><td><b>zuzen</b></td><td>recto</td></tr><tr><td><b>hurbil</b></td><td>cerca</td></tr><tr><td><b>urrun</b></td><td>lejos</td></tr><tr><td><b>hemen / hor / han</b></td><td>aquí / ahí / allí</td></tr><tr><td><b>goian / behean</b></td><td>arriba / abajo</td></tr></table>'},
 {t:'Indicar el camino',h:'<p>Las indicaciones usan el verbo suelto (imperativo): <b>joan</b> (ir), <b>jarraitu</b> (seguir), <b>biratu</b> (girar), <b>zeharkatu</b> (cruzar).</p>',
  ex:[['Zuzen joan.','Ve recto.'],['Eskuinera biratu.','Gira a la derecha.'],['Kalea zeharkatu.','Cruza la calle.'],['Plazaraino jarraitu.','Sigue hasta la plaza.']]},
 {t:'Preguntar y contestar',h:'<p>Pregunta con <b>Non dago…?</b> y contesta con la dirección o la distancia.</p>',
  ex:[['Barkatu, non dago geltokia?','Perdona, ¿dónde está la estación?'],['Zuzen joan eta ezkerrera biratu.','Ve recto y gira a la izquierda.'],['Hurbil dago?','¿Está cerca?'],['Ez, urrun dago.','No, está lejos.'],['Eskerrik asko!','¡Muchas gracias!']]}
 ],
 make:()=>[].concat(SQ0(['zuzen','joan','eta','eskuinera','biratu'],'Ve recto y gira a la derecha.','Instrucciones con el verbo suelto.'),vq('norabidea',6),[
  mc('Norabidea','«A la izquierda»','¿Cuál es?','ezkerrera',['eskuinera','zuzen','urrun'],'<b>ezkerrera</b> = a la izquierda.'),
  mc('Norabidea','«Cruza la calle»','¿Cuál es?','Kalea zeharkatu',['Kalea biratu','Kalea ezkerrera','Kalean hurbil'],'<b>zeharkatu</b> = cruzar.'),
  mc('Galdera','«¿Dónde está la estación?»','¿Cuál es?','Non dago geltokia?',['Nora dago geltokia?','Zer dago geltokia?','Non da geltokia?'],'<b>Non dago…?</b>'),
  mc('Norabidea','«Está lejos»','¿Cuál es?','Urrun dago',['Hurbil dago','Zuzen dago','Hemen dago'],'<b>urrun</b> = lejos.')
 ])},

{id:'c4',lv:'a1',n:25,eu:'Ikastea gustatzen zait',es:'Verbos como nombre: -tzea, -tzeko, -tzera',ic:'📚',min:8,
 goals:['Convertir un verbo en nombre: ikasi → ikastea','Decir para qué sirve algo con -tzeko','Decir adónde vas a hacer algo con -tzera'],
 steps:[
 {t:'-tzea: «el hecho de…»',h:'<p>Al participio se le añade <b>-tzea / -tea</b> y se convierte en un nombre: <b>ikasi → ikastea</b> (estudiar, el estudiar). Sirve para opinar o para <b>gustatu</b>.</p>',
  tb:'<table class="mini"><tr><th>Verbo</th><th>Nombre</th></tr><tr><td>ikasi</td><td><b>ikastea</b></td></tr><tr><td>irakurri</td><td><b>irakurtzea</b></td></tr><tr><td>jan</td><td><b>jatea</b></td></tr><tr><td>edan</td><td><b>edatea</b></td></tr><tr><td>joan</td><td><b>joatea</b></td></tr><tr><td>egin</td><td><b>egitea</b></td></tr></table>',
  ex:[['Euskara ikastea gustatzen zait.','Me gusta aprender euskera.'],['Mendira joatea gustatzen zait.','Me gusta ir al monte.'],['Irakurtzea polita da.','Leer es bonito.']]},
 {t:'-tzeko: «para»',h:'<p><b>-tzeko</b> dice <b>para qué</b> sirve algo o la finalidad: <b>ikasteko liburua</b> = libro para estudiar.</p>',
  ex:[['Euskara ikasteko liburua erosi dut.','He comprado un libro para estudiar euskera.'],['Kafea egiteko ura behar dut.','Necesito agua para hacer café.'],['Jateko zerbait nahi dut.','Quiero algo para comer.']]},
 {t:'-tzera: «a hacer algo»',h:'<p><b>-tzera</b> va con verbos de movimiento: ir <b>a hacer</b> algo.</p>',
  ex:[['Liburua erostera noa.','Voy a comprar un libro.'],['Lagunak ikustera joango naiz.','Iré a ver a los amigos.'],['Zer egitera zatoz?','¿A qué vienes?']]}
 ],
 make:()=>[].concat(SQ0(['euskara','ikastea','gustatzen','zait'],'Me gusta aprender euskera.','ikasi + tzea = ikastea.'),SQ0(['liburua','erostera','noa'],'Voy a comprar un libro.','-tzera con joan.'),[
  mc('-tzea','ikasi → ?','Como nombre','ikastea',['ikasia','ikasten','ikasteko'],'<b>-tzea</b>: ikastea.'),
  mc('-tzea','jan → ?','Como nombre','jatea',['jantzea','janea','jaten'],'jan + <b>tea</b> = jatea.'),
  mc('-tzeko','«Un libro para estudiar»','¿Cuál es?','ikasteko liburua',['ikastea liburua','ikastera liburua','ikasten liburua'],'<b>-tzeko</b> = para.'),
  mc('-tzera','«Voy a ver a los amigos»','¿Cuál es?','Lagunak ikustera noa',['Lagunak ikusteko noa','Lagunak ikustea noa','Lagunak ikusi noa'],'<b>-tzera</b> con verbo de movimiento.'),
  mc('Gustatu','«Me gusta leer»','¿Cuál es?','Irakurtzea gustatzen zait',['Irakurtzen gustatzen zait','Irakurri gustatzen zait','Irakurtzea gustatzen dut'],'nombre en <b>-tzea</b> + gustatzen zait.')
 ])},

{id:'d1',lv:'a2',n:8,eu:'Erlatiboak',es:'«El que…», «donde…»: frases de relativo',ic:'🔗',min:8,
 goals:['Formar oraciones de relativo con -(e)n','Decir «el hombre que tiene…», «el pueblo donde vivo»','Reconocer la forma del auxiliar con -(e)n'],
 steps:[
 {t:'Auxiliar + -(e)n',h:'<p>Para <b>«que / donde / el que»</b> se añade <b>-(e)n</b> al auxiliar, y la frase va <b>antes</b> del nombre:</p>',
  tb:'<table class="mini"><tr><th>Auxiliar</th><th>+ -(e)n</th></tr><tr><td>da</td><td><b>den</b></td></tr><tr><td>dago</td><td><b>dagoen</b></td></tr><tr><td>naiz</td><td><b>naizen</b></td></tr><tr><td>du</td><td><b>duen</b></td></tr><tr><td>dut</td><td><b>dudan</b></td></tr><tr><td>zait</td><td><b>zaidan</b></td></tr></table>',
  ex:[['Bizarra duen gizona','El hombre que tiene barba'],['Ni bizi naizen herria','El pueblo donde vivo'],['Gustatzen zaidan liburua','El libro que me gusta']]},
 {t:'En una frase',h:'<p>La frase de relativo sustituye a un adjetivo largo: <b>euskaraz hitz egiten duen irakaslea</b> (el profesor que habla euskera).</p>',
  ex:[['Euskaraz hitz egiten duen irakaslea Elizondon bizi da.','El profesor que habla euskera vive en Elizondo.'],['Dudan liburua mahaiaren gainean dago.','El libro que tengo está sobre la mesa.']]}
 ],
 make:()=>[].concat([
  mc('-(e)n','«El pueblo donde vivo»','¿Cuál es?','Bizi naizen herria',['Bizi naizela herria','Bizi naiz herria','Herria bizi naizen'],'naiz + <b>en</b> = naizen.'),
  mc('-(e)n','«El hombre que tiene barba»','¿Cuál es?','Bizarra duen gizona',['Bizarra dudan gizona','Bizarra duela gizona','Gizona bizarra du'],'du + <b>en</b> = duen.'),
  mc('-(e)n','«El libro que tengo»','¿Cuál es?','dudan liburua',['duen liburua','dut liburua','duela liburua'],'dut + <b>an</b> = dudan.'),
  mc('-(e)n','«La casa que está…» (dago)','Elige la forma','dagoen',['dagoela','dagoenean','dago ba'],'dago + <b>en</b>.'),
  mc('-(e)n','«El libro que me gusta»','Elige la forma','zaidan',['zait','zaizkidan','zaitzen'],'zait + <b>en</b> = zaidan.')
 ])},

{id:'d2',lv:'a2',n:9,eu:'Lokailuak eta kontaketa',es:'Conectores para contar una historia',ic:'🧵',min:7,
 goals:['Ordenar una narración con lehenik, gero, azkenik','Dar causa y consecuencia con horregatik, beraz','Dar ejemplos y añadir ideas'],
 steps:[
 {t:'Orden de los hechos',h:'<p>Para contar algo en orden:</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>lehenik / lehenengo</b></td><td>primero</td></tr><tr><td><b>gero</b></td><td>luego, después</td></tr><tr><td><b>orduan</b></td><td>entonces</td></tr><tr><td><b>azkenik / azkenean</b></td><td>por último, al final</td></tr></table>',
  ex:[['Lehenik, jaikitzen naiz. Gero, gosaltzen dut.','Primero me levanto. Luego desayuno.'],['Azkenean, lanera joaten naiz.','Al final, voy al trabajo.']]},
 {t:'Causa, consecuencia y ejemplos',h:'<p>Conectores para razonar:</p>',
  tb:'<table class="mini"><tr><th>Euskera</th><th>Español</th></tr><tr><td><b>horregatik</b></td><td>por eso</td></tr><tr><td><b>beraz</b></td><td>por lo tanto</td></tr><tr><td><b>baina</b></td><td>pero</td></tr><tr><td><b>hala ere</b></td><td>aun así</td></tr><tr><td><b>gainera</b></td><td>además</td></tr><tr><td><b>adibidez / esaterako</b></td><td>por ejemplo</td></tr></table>',
  ex:[['Nekatuta nago, horregatik etxean geratuko naiz.','Estoy cansado, por eso me quedaré en casa.'],['Euskara polita da. Gainera, erraza da.','El euskera es bonito. Además, es fácil.'],['Mendiko janariak, adibidez, gazta, gustatzen zaizkit.','Me gustan las comidas de monte, por ejemplo el queso.']]}
 ],
 make:()=>[].concat([
  mc('Lokailua','«Primero»','¿Cuál es?','lehenik',['azkenik','gero','horregatik'],'<b>lehenik</b> = primero.'),
  mc('Lokailua','«Por último»','¿Cuál es?','azkenik',['lehenik','gero','beraz'],'<b>azkenik</b> = por último.'),
  mc('Lokailua','«Por eso»','¿Cuál es?','horregatik',['baina','gainera','adibidez'],'<b>horregatik</b> = por eso.'),
  mc('Lokailua','«Además»','¿Cuál es?','gainera',['hala ere','beraz','orduan'],'<b>gainera</b> = además.'),
  mc('Lokailua','«Por ejemplo»','¿Cuál es?','adibidez',['gainera','beraz','baina'],'<b>adibidez</b> o <b>esaterako</b>.')
 ])}
);

Object.assign(LSUM,{
c1:{sum:['100–1000: ehun, berrehun, hirurehun… bederatziehun, mila (el 200 es irregular). Se unen con <b>eta</b>.','Ordinales con <b>-garren</b> y delante del nombre: bigarren, hirugarren. El primero: lehenengo.','Cuantificadores detrás del nombre: asko, gutxi, nahiko, pixka bat, denak.','Intensidad: oso, nahiko, y la repetición (txiki-txikia).'],
 kw:[['berrehun','200'],['mila','1000'],['lehenengo','primero'],['bigarren','segundo'],['asko','mucho'],['gutxi','poco'],['nahiko','bastante'],['pixka bat','un poco'],['denak','todos'],['oso','muy']]},
c2:{sum:['<b>zerbait</b> = algo, <b>norbait</b> = alguien.','En negativo: <b>ez … ezer</b> (nada), <b>ez … inor</b> (nadie), <b>ez … inon</b> (en ningún sitio).','Con la negación el nombre lleva <b>-rik</b> (ez dut dirurik) y <b>-rik gabe</b> = sin (esnerik gabe).'],
 kw:[['zerbait','algo'],['norbait','alguien'],['ezer','nada'],['inor','nadie'],['inon','en ningún sitio'],['gabe','sin'],['dirurik','dinero (neg.)']]},
c3:{sum:['Dirección: <b>eskuinera</b>, <b>ezkerrera</b>, <b>zuzen</b>; distancia: <b>hurbil</b>, <b>urrun</b>.','Indicaciones con el verbo suelto: zuzen joan, eskuinera biratu, kalea zeharkatu.','Preguntar: <b>Non dago…?</b>'],
 kw:[['eskuinera','a la derecha'],['ezkerrera','a la izquierda'],['zuzen','recto'],['hurbil','cerca'],['urrun','lejos'],['biratu','girar'],['zeharkatu','cruzar'],['jarraitu','seguir']]},
c4:{sum:['<b>-tzea</b> convierte el verbo en nombre: ikastea, irakurtzea, jatea.','<b>-tzeko</b> = para (finalidad): ikasteko liburua.','<b>-tzera</b> = a hacer algo, con verbos de movimiento: erostera noa.'],
 kw:[['ikastea','aprender (nombre)'],['jatea','comer (nombre)'],['joatea','ir (nombre)'],['ikasteko','para estudiar'],['erostera','a comprar'],['ikustera','a ver']]},
d1:{sum:['Relativo: auxiliar + <b>-(e)n</b> antes del nombre: den, dagoen, naizen, duen, dudan, zaidan.','«El pueblo donde vivo» = bizi naizen herria.'],
 kw:[['duen','que tiene'],['naizen','que soy / donde soy'],['dagoen','que está'],['dudan','que tengo'],['gizona','el hombre'],['herria','el pueblo']]},
d2:{sum:['Orden: <b>lehenik</b> (primero), <b>gero</b> (luego), <b>azkenik</b> (por último).','Razonar: <b>horregatik</b> (por eso), <b>beraz</b>, <b>gainera</b> (además), <b>hala ere</b> (aun así).','Ejemplos: <b>adibidez / esaterako</b>.'],
 kw:[['lehenik','primero'],['gero','luego'],['azkenik','por último'],['horregatik','por eso'],['beraz','por lo tanto'],['gainera','además'],['hala ere','aun así'],['adibidez','por ejemplo']]}
});
