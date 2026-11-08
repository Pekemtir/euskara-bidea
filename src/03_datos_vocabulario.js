/* ===== DATOS ===== */
const VOCAB=[
{id:'agurrak',eu:'Agurrak',es:'Saludos',ic:'👋',w:[
['zorionak','¡felicidades!','🎉'],['gero arte','hasta luego',''],['ez horregatik','de nada',''],['egun on','buenos días','🌅'],
['kaixo','hola','👋'],['egun on','buenos días','🌅'],['arratsalde on','buenas tardes','🌇'],['gabon','buenas noches','🌙'],['agur','adiós','🙋'],['mesedez','por favor','🙏'],['eskerrik asko','muchas gracias','💚'],['barkatu','perdón','🙇'],['bai','sí','✅'],['ez','no','❌'],['zer moduz?','¿qué tal?','💬'],['ondo','bien','👍'],['ongi etorri','bienvenido/a','🤝']]},
{id:'zenbakiak',eu:'Zenbakiak',es:'Números',ic:'🔢',w:[
['hogeita hamar','treinta (30)',''],['berrogei','cuarenta (40)',''],['berrogeita hamar','cincuenta (50)',''],['hirurogei','sesenta (60)',''],['laurogei','ochenta (80)',''],['ehun','cien (100)','💯'],['berrehun','doscientos (200)',''],['mila','mil (1000)',''],
['bat','uno (1)','1️⃣'],['bi','dos (2)','2️⃣'],['hiru','tres (3)','3️⃣'],['lau','cuatro (4)','4️⃣'],['bost','cinco (5)','5️⃣'],['sei','seis (6)','6️⃣'],['zazpi','siete (7)',''],['zortzi','ocho (8)',''],['bederatzi','nueve (9)',''],['hamar','diez (10)','🔟'],['hamaika','once (11)',''],['hamabi','doce (12)',''],['hogei','veinte (20)','']]},
{id:'familia',eu:'Familia',es:'Familia y gente',ic:'👨‍👩‍👧',w:[
['senarra','el marido',''],['emaztea','la esposa',''],['osaba','el tío',''],['izeba','la tía',''],['iloba','el sobrino / la sobrina',''],['bikotea','la pareja','💑'],
['ama','madre','👩'],['aita','padre','👨'],['anaia','hermano (de un chico)','👦'],['arreba','hermana (de un chico)','👧'],['seme','hijo','🧒'],['alaba','hija','👧'],['aitona','abuelo','👴'],['amona','abuela','👵'],['lagun','amigo/a','🧑‍🤝‍🧑'],['familia','familia','🏠']]},
{id:'janaria',eu:'Janaria',es:'Comida y bebida',ic:'🍞',w:[
['patata','la patata','🥔'],['arroza','el arroz','🍚'],['tomatea','el tomate','🍅'],['fruta','la fruta','🍎'],['olioa','el aceite',''],['azukrea','el azúcar',''],
['ogia','el pan','🍞'],['ura','el agua','💧'],['esnea','la leche','🥛'],['gazta','el queso','🧀'],['arraultza','el huevo','🥚'],['haragia','la carne','🥩'],['arraina','el pescado','🐟'],['sagarra','la manzana','🍎'],['ardoa','el vino','🍷'],['kafea','el café','☕'],['gatza','la sal','🧂'],['sagardoa','la sidra','🍺'],['pintxoa','el pincho','🍢']]},
{id:'koloreak',eu:'Koloreak',es:'Colores',ic:'🎨',w:[
['gorria','rojo','🔴'],['urdina','azul','🔵'],['berdea','verde','🟢'],['horia','amarillo','🟡'],['beltza','negro','⚫'],['zuria','blanco','⚪'],['marroia','marrón','🟤'],['laranja','naranja','🟠'],['grisa','gris',''],['arrosa','rosa','🌸']]},
{id:'denbora',eu:'Egunak eta denbora',es:'Días y tiempo',ic:'📅',w:[
['astelehena','lunes',''],['asteartea','martes',''],['asteazkena','miércoles',''],['osteguna','jueves',''],['ostirala','viernes',''],['larunbata','sábado',''],['igandea','domingo',''],['gaur','hoy','📆'],['bihar','mañana','➡️'],['atzo','ayer','⬅️'],['orain','ahora','⏱️'],['beti','siempre','♾️'],['egunero','cada día','🔁'],['goiza','la mañana','🌅'],['arratsaldea','la tarde','🌇'],['gaua','la noche','🌙'],['data','la fecha','🗓️']]},
{id:'hilabeteak',eu:'Hilabeteak',es:'Los meses',ic:'🗓️',w:[
['urtarrila','enero',''],['otsaila','febrero',''],['martxoa','marzo',''],['apirila','abril',''],['maiatza','mayo',''],['ekaina','junio',''],['uztaila','julio',''],['abuztua','agosto',''],['iraila','septiembre',''],['urria','octubre',''],['azaroa','noviembre',''],['abendua','diciembre','']]},
{id:'urtaroak',eu:'Urtaroak',es:'Estaciones y calendario',ic:'🍂',w:[
['udaberria','la primavera','🌸'],['uda','el verano','☀️'],['udazkena','el otoño','🍂'],['negua','el invierno','❄️'],['urtea','el año','🎆'],['hilabetea','el mes','🗓️'],['astea','la semana',''],['eguna','el día','📆'],['urtebetetzea','el cumpleaños','🎂']]},
{id:'adjetiboak',eu:'Adjektiboak',es:'Adjetivos',ic:'🔎',w:[
['handia','grande','🐘'],['txikia','pequeño/a','🐜'],['zaharra','viejo/a',''],['berria','nuevo/a','🆕'],['gaztea','joven',''],['polita','bonito/a','✨'],['ona','bueno/a','👍'],['txarra','malo/a','👎'],['luzea','largo/a',''],['laburra','corto/a',''],['garestia','caro/a','💶'],['merkea','barato/a','🏷️'],['beroa','caliente','🔥'],['hotza','frío/a','🧊'],['azkarra','rápido/a','⚡'],['motela','lento/a','🐢']]},
{id:'etxea',eu:'Etxea eta gauzak',es:'Casa y objetos',ic:'🏠',w:[
['etxea','la casa','🏠'],['gela','la habitación','🛏️'],['sukaldea','la cocina','🍳'],['mahaia','la mesa',''],['aulkia','la silla','🪑'],['atea','la puerta','🚪'],['leihoa','la ventana','🪟'],['liburua','el libro','📖'],['telefonoa','el teléfono','📱'],['kalea','la calle','🛣️']]},
{id:'baztan',eu:'Baztan eta natura',es:'Naturaleza y valle',ic:'⛰️',w:[
['mendia','el monte','⛰️'],['baserria','el caserío','🏡'],['ibaia','el río','🏞️'],['basoa','el bosque','🌲'],['elurra','la nieve','❄️'],['euria','la lluvia','🌧️'],['haizea','el viento','💨'],['eguzkia','el sol','☀️']]},
{id:'galderak',eu:'Galdera-hitzak',es:'Palabras de pregunta',ic:'❓',w:[
['zer','qué','❓'],['nor','quién',''],['non','dónde','📍'],['nora','adónde',''],['noiz','cuándo','🕒'],['nola','cómo',''],['zergatik','por qué',''],['zenbat','cuánto/s','']]},
{id:'aditzak',eu:'Aditzak',es:'Verbos (significado)',ic:'🏃',w:[
['jan','comer','🍽️'],['edan','beber','🥤'],['joan','ir','➡️'],['etorri','venir','⬅️'],['egin','hacer',''],['ikusi','ver','👀'],['irakurri','leer','📖'],['idatzi','escribir','✍️'],['ikasi','aprender / estudiar','🎓'],['ulertu','entender',''],['hitz egin','hablar','🗣️'],['lan egin','trabajar','💼'],['lo egin','dormir','😴'],['bizi','vivir','🏡']]},
{id:'norabidea',lv:'a1',eu:'Norabidea',es:'Direcciones',ic:'🧭',w:[
['eskuinera','a la derecha','➡️'],['ezkerrera','a la izquierda','⬅️'],['zuzen','recto','⬆️'],['hurbil','cerca',''],['urrun','lejos',''],['hemen','aquí','📍'],['hor','ahí',''],['han','allí',''],['goian','arriba','⬆️'],['behean','abajo','⬇️']]},
{id:'eskola',lv:'a1',eu:'Eskola eta ikasgaiak',es:'Clase y asignaturas',ic:'🏫',w:[
['ikasgela','el aula',''],['arbela','la pizarra',''],['boligrafoa','el bolígrafo','🖊️'],['koadernoa','el cuaderno','📓'],['ikasgaia','la asignatura / lección',''],['matematika','las matemáticas','➗'],['hizkuntza','la lengua / el idioma',''],['historia','la historia',''],['euskaltegia','la escuela de euskera','']]},
{id:'lanbideak',lv:'a1',eu:'Lanbideak',es:'Profesiones',ic:'👷',w:[
['sukaldaria','el cocinero','👨‍🍳'],['zerbitzaria','el camarero',''],['ingeniaria','el ingeniero',''],['nekazaria','el agricultor','🧑‍🌾'],['artzaina','el pastor',''],['idazlea','el escritor','✍️'],['argazkilaria','el fotógrafo','📷'],['polizia','el policía','👮'],['dendaria','el tendero',''],['gidaria','el conductor / guía','']]},
{id:'datuak',lv:'a1',eu:'Datu pertsonalak',es:'Datos personales',ic:'🪪',w:[
['izena','el nombre',''],['abizena','el apellido',''],['helbidea','la dirección',''],['adina','la edad',''],['jaiotza-data','la fecha de nacimiento',''],['lanbidea','la profesión',''],['nazionalitatea','la nacionalidad',''],['telefono-zenbakia','el número de teléfono','📞'],['posta elektronikoa','el correo electrónico','📧']]},
{id:'gelak',lv:'a1',eu:'Etxeko gelak',es:'Partes de la casa',ic:'🛋️',w:[
['egongela','el salón',''],['logela','el dormitorio','🛏️'],['komuna','el baño','🚽'],['jangela','el comedor',''],['ohea','la cama','🛏️'],['sofa','el sofá','🛋️'],['telebista','la televisión','📺'],['lorategia','el jardín','🌷'],['teilatua','el tejado',''],['igogailua','el ascensor','']]},
{id:'animaliak',lv:'a1',eu:'Animaliak',es:'Animales',ic:'🐴',w:[
['txakurra','el perro','🐕'],['katua','el gato','🐈'],['zaldia','el caballo','🐴'],['behia','la vaca','🐄'],['ardia','la oveja','🐑'],['ahuntza','la cabra','🐐'],['txerria','el cerdo','🐖'],['astoa','el burro',''],['zezena','el toro','🐂'],['oiloa','la gallina','🐔'],['ahatea','el pato','🦆'],['txoria','el pájaro','🐦'],['usoa','la paloma','🕊️'],['arranoa','el águila','🦅'],['untxia','el conejo','🐇'],['sagua','el ratón','🐭'],['otsoa','el lobo','🐺'],['hartza','el oso','🐻'],['azeria','el zorro','🦊'],['oreina','el ciervo','🦌'],['basurdea','el jabalí','🐗'],['lehoia','el león','🦁'],['elefantea','el elefante','🐘'],['tximinoa','el mono','🐒'],['arraina','el pez','🐟'],['balea','la ballena','🐋'],['izurdea','el delfín','🐬'],['igela','la rana','🐸'],['sugea','la serpiente','🐍'],['tximeleta','la mariposa','🦋'],['erleak','las abejas','🐝'],['inurria','la hormiga','🐜'],['armiarma','la araña','🕷️'],['euli','la mosca','']]},
{id:'jaiak',lv:'a1',eu:'Jaiak',es:'Fiestas y celebraciones',ic:'🎉',w:[
['jaia','la fiesta / festivo','🎉'],['Gabonak','la Navidad','🎄'],['Aratusteak','el carnaval','🎭'],['Sanferminak','los Sanfermines','🐂'],['Aste Santua','la Semana Santa',''],['Urte Berri','el Año Nuevo','🎆'],['oparia','el regalo','🎁'],['dantza','el baile','💃']]},
{id:'informatika',lv:'a1',eu:'Informatika',es:'Ordenador e internet',ic:'💻',w:[
['ordenagailua','el ordenador','💻'],['pantaila','la pantalla',''],['teklatua','el teclado','⌨️'],['interneta','internet','🌐'],['mezua','el mensaje','✉️'],['pasahitza','la contraseña','🔑'],['gorde','guardar','💾'],['bidali','enviar','📤']]},
{id:'lekuak',lv:'a1',eu:'Lekuak',es:'Lugares de la ciudad',ic:'🏙️',w:[
['denda','la tienda','🏪'],['banku','el banco','🏦'],['ospitalea','el hospital','🏥'],['eskola','la escuela','🏫'],['parkea','el parque','🌳'],['plaza','la plaza',''],['geltokia','la estación','🚉'],['kafetegia','la cafetería','☕'],['jatetxea','el restaurante','🍽️'],['farmazia','la farmacia','💊'],['hiria','la ciudad','🏙️'],['herria','el pueblo','🏘️']]},
{id:'garraioak',lv:'a1',eu:'Garraioak',es:'Transporte',ic:'🚌',w:[
['autobusa','el autobús','🚌'],['trena','el tren','🚆'],['autoa','el coche','🚗'],['bizikleta','la bicicleta','🚲'],['hegazkina','el avión','✈️'],['bidaia','el viaje','🧳'],['txartela','la tarjeta / el billete','🎫']]},
{id:'gorputza',lv:'a1',eu:'Gorputza',es:'El cuerpo',ic:'🧍',w:[
['burua','la cabeza',''],['aurpegia','la cara',''],['begia','el ojo','👁️'],['sudurra','la nariz','👃'],['ahoa','la boca','👄'],['belarria','la oreja','👂'],['eskua','la mano','✋'],['besoa','el brazo','💪'],['hanka','la pierna','🦵'],['oina','el pie','🦶'],['bihotza','el corazón','❤️'],['ilea','el pelo','']]},
{id:'itxura',lv:'a2',eu:'Itxura eta izaera',es:'Aspecto y carácter',ic:'🧑',w:[
['ile luzea','pelo largo'],['ile beltza','pelo negro'],['ile horia','pelo rubio'],['ile kizkurra','pelo rizado'],['burusoila','calvo'],['bizarra','la barba'],['bibotea','el bigote'],['betaurrekoak','las gafas'],['begi urdinak','ojos azules'],['begi marroiak','ojos marrones'],['altua','alto'],['baxua','bajo'],['mehea','delgado'],['lodia','grueso'],['indartsua','fuerte'],['jatorra','simpático'],['lotsatia','tímido'],['alaia','alegre'],['langilea','trabajador'],['alferra','vago'],['ausarta','valiente'],['barregarria','gracioso']]},
{id:'jatetxea',lv:'a2',eu:'Jatetxea eta ostatua',es:'Restaurante y alojamiento',ic:'🍽️',w:[
['menua','el menú'],['eguneko menua','el menú del día'],['hasierakoa','el primer plato'],['bigarren platera','el segundo plato'],['postrea','el postre'],['kontua','la cuenta'],['gomendatu','recomendar'],['erreserbatu','reservar'],['pertsona','la persona'],['mahaia','la mesa'],['gela bikoitza','habitación doble'],['gela bakarra','habitación individual'],['gaua','la noche'],['barne','incluido'],['harrera','la recepción'],['giltza','la llave'],['wifia','el wifi'],['igogailua','el ascensor']]},
{id:'denborak',lv:'a2',eu:'Iragana eta geroa',es:'Expresiones de tiempo pasado y futuro',ic:'⏳',w:[
['atzo','ayer'],['herenegun','anteayer'],['joan den astean','la semana pasada'],['joan den hilean','el mes pasado'],['iaz','el año pasado'],['duela','hace'],['behin','una vez'],['bitan','dos veces'],['inoiz','alguna vez'],['bihar','mañana'],['etzi','pasado mañana'],['datorren astean','la semana que viene'],['datorren hilean','el mes que viene'],['datorren urtean','el año que viene'],['laster','pronto'],['noizbait','algún día'],['dagoeneko','ya'],['oraindik','todavía']]},
{id:'iritziak',lv:'a2',eu:'Iritziak',es:'Opinar y valorar',ic:'💬',w:[
['uste dut','creo'],['nire ustez','en mi opinión'],['ados nago','estoy de acuerdo'],['ez nago ados','no estoy de acuerdo'],['nahiago dut','prefiero'],['egia da','es verdad'],['agian','quizá'],['noski','claro'],['zer iruditzen zaizu?','¿qué te parece?'],['hobe da','es mejor'],['zalantza dut','tengo dudas'],['garrantzitsua da','es importante']]},
{id:'arropa',lv:'a2',eu:'Arropa',es:'Ropa',ic:'👕',w:[
['alkandora','la camisa','👔'],['galtzak','los pantalones','👖'],['jaka','la chaqueta','🧥'],['zapatak','los zapatos','👞'],['txapela','la txapela','🎩'],['soinekoa','el vestido','👗'],['galtzerdiak','los calcetines','🧦']]},
{id:'sentitu',lv:'a1',eu:'Nola zaude?',es:'Estados y sensaciones',ic:'🙂',w:[
['gaixorik','enfermo/a','🤒'],['nekatuta','cansado/a','😴'],['pozik','contento/a','😊'],['triste','triste','😢'],['gose','hambre (gose naiz)','🍴'],['egarri','sed (egarri naiz)','🥤'],['hotz','frío (hotz naiz)','🥶'],['bero','calor (bero naiz)','🥵']]},
{id:'kokapena',lv:'a1',eu:'Non? Kokapena',es:'Dónde está: sobre, bajo, dentro…',ic:'📍',w:[
['gainean','sobre, encima de',''],['azpian','debajo de',''],['barruan','dentro de',''],['kanpoan','fuera de',''],['ondoan','al lado de',''],['aurrean','delante de',''],['atzean','detrás de',''],['artean','entre','']]},
{id:'errutina',lv:'a1',eu:'Egunerokoa',es:'Rutina diaria',ic:'⏰',w:[
['jaiki','levantarse','⏰'],['dutxatu','ducharse','🚿'],['gosaldu','desayunar','🥐'],['bazkaldu','comer (mediodía)','🍝'],['afaldu','cenar','🍲'],['ohera joan','irse a la cama','🛏️'],['garbitu','limpiar',''],['ordua','la hora / una hora','🕒']]},
{id:'aditzak2',lv:'a2',eu:'Aditz gehiago',es:'Más verbos',ic:'🛠️',w:[
['lagundu','ayudar',''],['eman','dar',''],['ekarri','traer',''],['erosi','comprar','🛒'],['saldu','vender',''],['ireki','abrir',''],['itxi','cerrar',''],['esan','decir',''],['galdetu','preguntar',''],['erantzun','responder',''],['bilatu','buscar','🔎'],['aurkitu','encontrar',''],['erabili','usar',''],['ordaindu','pagar','💶']]},
{id:'eguraldia',lv:'a1',eu:'Eguraldia',es:'El tiempo atmosférico',ic:'🌦️',w:[
['eguraldia','el tiempo','🌦️'],['euria','la lluvia','🌧️'],['elurra','la nieve','🌨️'],['haizea','el viento','💨'],['eguzkia','el sol','☀️'],['hodeia','la nube','☁️'],['lainoa','la niebla','🌫️'],['ekaitza','la tormenta','⛈️']]},
{id:'osasuna',lv:'a1',eu:'Osasuna',es:'Salud',ic:'🩺',w:[
['mina','el dolor',''],['sukarra','la fiebre','🌡️'],['gripea','la gripe','🤧'],['eztarria','la garganta',''],['sabela','el estómago',''],['bizkarra','la espalda',''],['medikua','el médico','🧑‍⚕️'],['botika','la medicina','💊'],['atseden','el descanso','🛌']]},
{id:'erosketak',lv:'a1',eu:'Erosketak',es:'Compras',ic:'🛍️',w:[
['prezioa','el precio','🏷️'],['dirua','el dinero','💶'],['poltsa','la bolsa','👜'],['kutxa','la caja',''],['saltzailea','el vendedor',''],['bezeroa','el cliente',''],['erosketak','las compras','🛒'],['merkatua','el mercado','🧺']]},
{id:'lana',lv:'a2',eu:'Lana eta ikasketak',es:'Trabajo y estudios',ic:'💼',w:[
['lana','el trabajo','💼'],['enpresa','la empresa','🏢'],['bulegoa','la oficina',''],['nagusia','el jefe',''],['langilea','el trabajador',''],['ikaslea','el alumno',''],['irakaslea','el profesor','👩‍🏫'],['ikastaroa','el curso',''],['azterketa','el examen','📝'],['liburutegia','la biblioteca','📚'],['oporrak','las vacaciones','🏖️'],['bilera','la reunión','']]},
{id:'aisialdia',lv:'a2',eu:'Aisialdia',es:'Ocio y cultura',ic:'🎭',w:[
['zinema','el cine','🎬'],['antzerkia','el teatro','🎭'],['museoa','el museo','🏛️'],['hondartza','la playa','🏖️'],['kirola','el deporte','⚽'],['musika','la música','🎵'],['kontzertua','el concierto','🎤'],['festa','la fiesta','🎉']]},
{id:'otorduak',lv:'a1',eu:'Otorduak',es:'Comidas y restaurante',ic:'🍽️',w:[
['menua','el menú',''],['otordua','la comida (el plato)',''],['gosaria','el desayuno','🥐'],['bazkaria','la comida (mediodía)','🍝'],['afaria','la cena','🍲'],['zopa','la sopa','🥣'],['entsalada','la ensalada','🥗'],['postrea','el postre','🍮']]}
];

const PRON=['ni','zu','bera','gu','zuek','haiek'];
const PRON_ES=['yo','tú','él / ella','nosotros/as','vosotros/as','ellos / ellas'];
const NORK=['nik','zuk','berak','guk','zuek','haiek'];

/* conjugaciones sueltas */
const CONJ={
izan:{es:'ser (identidad, origen, profesión) · auxiliar de «nor»',ty:'nor',T:{
 oraina:{n:'Orainaldia',e:'presente',f:['naiz','zara','da','gara','zarete','dira']},
 iragana:{n:'Iragana',e:'pasado',f:['nintzen','zinen','zen','ginen','zineten','ziren']}}},
egon:{es:'estar (lugar y estado) · quedarse',ty:'nor',T:{
 oraina:{n:'Orainaldia',e:'presente',f:['nago','zaude','dago','gaude','zaudete','daude']},
 iragana:{n:'Iragana',e:'pasado',f:['nengoen','zeunden','zegoen','geunden','zeundeten','zeuden']}}},
ukan:{es:'auxiliar de verbos con objeto («nork»): jan dut, ikusten dut…',ty:'nork',T:{
 oraina1:{n:'Orainaldia · 1 gauza',e:'presente, un solo objeto',f:['dut','duzu','du','dugu','duzue','dute'],seg:[[['d','obj'],['u','root'],['t','person']],[['d','obj'],['u','root'],['zu','person']],[['d','obj'],['u','root']],[['d','obj'],['u','root'],['gu','person']],[['d','obj'],['u','root'],['zu','person'],['e','person']],[['d','obj'],['u','root'],['te','person']]]},
 oraina2:{n:'Orainaldia · gauza asko',e:'presente, varios objetos',f:['ditut','dituzu','ditu','ditugu','dituzue','dituzte'],seg:[[['d','obj'],['itu','root'],['t','person']],[['d','obj'],['itu','root'],['zu','person']],[['d','obj'],['itu','root']],[['d','obj'],['itu','root'],['gu','person']],[['d','obj'],['itu','root'],['zu','person'],['e','person']],[['d','obj'],['itu','root'],['zte','person']]]},
 iragana1:{n:'Iragana · 1 gauza',e:'pasado, un solo objeto',f:['nuen','zenuen','zuen','genuen','zenuten','zuten']},
 iragana2:{n:'Iragana · gauza asko',e:'pasado, varios objetos',f:['nituen','zenituen','zituen','genituen','zenituzten','zituzten']}}},
eduki:{es:'tener (posesión) · daukat = tengo',ty:'nork',T:{
 oraina1:{n:'Orainaldia · 1 gauza',e:'presente, un solo objeto',f:['daukat','daukazu','dauka','daukagu','daukazue','daukate']},
 oraina2:{n:'Orainaldia · gauza asko',e:'presente, varios objetos',f:['dauzkat','dauzkazu','dauzka','dauzkagu','dauzkazue','dauzkate']}}},
joan:{es:'ir · forma sintética (sin auxiliar)',ty:'nor',T:{
 oraina:{n:'Orainaldia',e:'presente',f:['noa','zoaz','doa','goaz','zoazte','doaz']}}},
etorri:{es:'venir · forma sintética (sin auxiliar)',ty:'nor',T:{
 oraina:{n:'Orainaldia',e:'presente',f:['nator','zatoz','dator','gatoz','zatozte','datoz']}}},
gustatu:{lv:'a2',es:'gustar · «a quién» + zait/zaio… (NOR-NORI)',ty:'nori',T:{
 oraina1:{n:'Orainaldia · 1 gauza',e:'presente, gusta una cosa',f:['zait','zaizu','zaio','zaigu','zaizue','zaie']},
 oraina2:{n:'Orainaldia · gauza asko',e:'presente, gustan varias cosas',f:['zaizkit','zaizkizu','zaizkio','zaizkigu','zaizkizue','zaizkie']}}},
'joan (iragana)':{lv:'a2',es:'ir (pasado) · forma sintética: nindoan = iba',ty:'nor',T:{
 iragana:{n:'Iragana',e:'pasado',f:['nindoan','zindoazen','zihoan','gindoazen','zindoazten','zihoazen']}}},
'etorri (iragana)':{lv:'a2',es:'venir (pasado) · forma sintética: nentorren = venía',ty:'nor',T:{
 iragana:{n:'Iragana',e:'pasado',f:['nentorren','zentozen','zetorren','gentozen','zentozten','zetozen']}}},
ibili:{lv:'a2',es:'andar, moverse · forma sintética (sin auxiliar)',ty:'nor',T:{
 oraina:{n:'Orainaldia',e:'presente',f:['nabil','zabiltza','dabil','gabiltza','zabiltzate','dabiltza']}}},
'ibili (iragana)':{lv:'a2',es:'andar (pasado) · forma sintética',ty:'nor',T:{
 iragana:{n:'Iragana',e:'pasado',f:['nenbilen','zenbiltzan','zebilen','genbiltzan','zenbiltzaten','zebiltzan']}}},
jakin:{lv:'a2',es:'saber · forma sintética con objeto (nork): dakit = lo sé',ty:'nork',T:{
 oraina:{n:'Orainaldia',e:'presente',f:['dakit','dakizu','daki','dakigu','dakizue','dakite']}}},
'eman (berak… niri, zuri…)':{lv:'a2',es:'«él/ella me/te… da» · NOR-NORI-NORK con «a quién» variable (dit, dizu, dio…)',ty:'nori',T:{
 oraina1:{n:'Orainaldia · 1 gauza',e:'presente, una cosa',f:['dit','dizu','dio','digu','dizue','die']},
 oraina2:{n:'Orainaldia · gauza asko',e:'presente, varias cosas',f:['dizkit','dizkizu','dizkio','dizkigu','dizkizue','dizkie']},
 iragana1:{n:'Iragana · 1 gauza',e:'pasado, una cosa',f:['zidan','zizun','zion','zigun','zizuen','zien']},
 iragana2:{n:'Iragana · gauza asko',e:'pasado, varias cosas',f:['zizkidan','zizkizun','zizkion','zizkigun','zizkizuen','zizkien']}}},
ekarri:{lv:'a2',es:'traer (hacia aquí) · dakart = lo traigo',ty:'nork',T:{
 oraina1:{n:'Orainaldia · 1 gauza',e:'presente, una cosa',f:['dakart','dakarzu','dakar','dakargu','dakarzue','dakarte']},
 oraina2:{n:'Orainaldia · gauza asko',e:'presente, varias cosas',f:['dakartzat','dakartzazu','dakartza','dakartzagu','dakartzazue','dakartzate']}}},
eraman:{lv:'a2',es:'llevar (hacia allá) · daramat = lo llevo',ty:'nork',T:{
 oraina1:{n:'Orainaldia · 1 gauza',e:'presente, una cosa',f:['daramat','daramazu','darama','daramagu','daramazue','daramate']},
 oraina2:{n:'Orainaldia · gauza asko',e:'presente, varias cosas',f:['daramatzat','daramatzazu','daramatza','daramatzagu','daramatzazue','daramatzate']}}},
'ahal (dezaket)':{lv:'a2',es:'poder con objeto · dezaket = puedo (hacerlo)',ty:'nork',T:{
 oraina:{n:'Orainaldia',e:'potencial, presente',f:['dezaket','dezakezu','dezake','dezakegu','dezakezue','dezakete']}}},
'ahal (naiteke)':{lv:'a2',es:'poder sin objeto · naiteke = puedo (ir, venir…)',ty:'nor',T:{
 oraina:{n:'Orainaldia',e:'potencial, presente',f:['naiteke','zaitezke','daiteke','gaitezke','zaitezkete','daitezke']}}},
eman:{es:'dar (a él/ella) · diot = yo se lo doy (NOR-NORI-NORK)',ty:'nork',T:{
 oraina1:{n:'Orainaldia · 1 gauza',e:'presente, se da una cosa',f:['diot','diozu','dio','diogu','diozue','diote']},
 oraina2:{n:'Orainaldia · gauza asko',e:'presente, se dan varias cosas',f:['dizkiot','dizkiozu','dizkio','dizkiogu','dizkiozue','dizkiote']}}}
};

/* verbos «participio + auxiliar» */
const PART=[
{p:'jan',es:'comer',ty:'nork',hab:'jaten',fut:'jango',obj:'ogia',eso:'pan',s:['como','estoy comiendo','comí','he comido','comeré']},
{p:'edan',es:'beber',ty:'nork',hab:'edaten',fut:'edango',obj:'ura',eso:'agua',s:['bebo','estoy bebiendo','bebí','he bebido','beberé']},
{p:'ikusi',es:'ver',ty:'nork',hab:'ikusten',fut:'ikusiko',obj:'filma',eso:'la película',s:['veo','estoy viendo','vi','he visto','veré']},
{p:'irakurri',es:'leer',ty:'nork',hab:'irakurtzen',fut:'irakurriko',obj:'liburua',eso:'el libro',s:['leo','estoy leyendo','leí','he leído','leeré']},
{p:'ikasi',es:'aprender / estudiar',ty:'nork',hab:'ikasten',fut:'ikasiko',obj:'euskara',eso:'euskera',s:['estudio','estoy estudiando','estudié','he estudiado','estudiaré']},
{p:'joan',es:'ir',ty:'nor',hab:'joaten',fut:'joango',obj:'Iruñera',eso:'a Pamplona',s:['voy','estoy yendo','fui','he ido','iré']},
{p:'etorri',es:'venir',ty:'nor',hab:'etortzen',fut:'etorriko',obj:'etxera',eso:'a casa',s:['vengo','estoy viniendo','vine','he venido','vendré']},
{p:'bizi',es:'vivir',ty:'nor',hab:'bizi',fut:'biziko',obj:'Elizondon',eso:'en Elizondo',s:['vivo',null,'viví',null,'viviré'],only:['oraina','iragana','geroa']}
];
const TEN={
 oraina:{eu:'Oraina (ohikoa)',es:'Presente (hábito)',si:0},
 ari:{eu:'Ari izan (orain)',es:'Presente continuo (ahora mismo)',si:1},
 iragana:{eu:'Iragana',es:'Pasado',si:2},
 perfektua:{eu:'Perfektua',es:'Pretérito perfecto (he…)',si:3},
 geroa:{eu:'Geroa',es:'Futuro',si:4}
};

/* generador de frases «participio + auxiliar» */
function genSentence(v,tk,i){
  const nor=v.ty==='nor';
  let subj,parts,aux,rule;
  if(tk==='oraina'){ // hábito
    subj=nor?PRON[i]:NORK[i]; aux=nor?CONJ.izan.T.oraina.f[i]:CONJ.ukan.T.oraina1.f[i];
    parts=[v.obj,v.hab,aux]; if(v.p==='bizi')parts=[v.obj,'bizi',aux];
  }else if(tk==='ari'){
    subj=PRON[i]; aux=CONJ.izan.T.oraina.f[i]; parts=[v.obj,v.hab,'ari',aux];
  }else if(tk==='iragana'){
    subj=nor?PRON[i]:NORK[i]; aux=nor?CONJ.izan.T.iragana.f[i]:CONJ.ukan.T.iragana1.f[i];
    parts=[v.obj,v.p,aux];
  }else if(tk==='perfektua'){
    subj=nor?PRON[i]:NORK[i]; aux=nor?CONJ.izan.T.oraina.f[i]:CONJ.ukan.T.oraina1.f[i];
    parts=[v.obj,v.p,aux];
  }else{
    subj=nor?PRON[i]:NORK[i]; aux=nor?CONJ.izan.T.oraina.f[i]:CONJ.ukan.T.oraina1.f[i];
    parts=[v.obj,v.fut,aux];
  }
  const tokens=[subj].concat(parts);
  const tn=TEN[tk]; let esTxt=null;
  if(i===0){
    const si=(v.only&&!v.only.includes(tk))?null:v.s[tn.si];
    if(si)esTxt='(Yo) '+si+' '+v.eso;
  }
  return {tokens,aux,subj,esTxt,tk};
}

/* frases hechas con la gramática del A1 */
const SENT=[
{t:['ni','Dabid','naiz'],es:'Yo soy David.',tip:'izan: identidad. «Ni … naiz». El verbo va al final.'},
{t:['ni','Elizondon','bizi','naiz'],es:'Vivo en Elizondo.',tip:'-n = «en». Elizondo + n → Elizondon.'},
{t:['nik','ogia','jaten','dut'],es:'Yo como pan.',tip:'Con objeto (ogia) el sujeto lleva -k: ni → nik.'},
{t:['zuk','kafea','edaten','duzu'],es:'Tú bebes café.',tip:'jaten/edaten + dut/duzu: «participio habitual» + auxiliar.'},
{t:['gu','etxean','gaude'],es:'Nosotros estamos en casa.',tip:'egon: lugar. etxea + n → etxean.'},
{t:['haiek','mendira','doaz'],es:'Ellos van al monte.',tip:'-ra = «a, hacia». mendia → mendira.'},
{t:['atzo','nik','liburu','bat','irakurri','nuen'],es:'Ayer leí un libro.',tip:'Pasado: participio (irakurri) + nuen. «bat» = un/una.'},
{t:['bihar','Iruñera','joango','naiz'],es:'Mañana iré a Pamplona.',tip:'Futuro: joan + go = joango. Va con naiz porque joan no lleva objeto.'},
{t:['ama','sukaldean','dago'],es:'Mamá está en la cocina.',tip:'sukaldea + n → sukaldean. egon: dago = está.'},
{t:['aitak','ura','edaten','du'],es:'El padre bebe agua.',tip:'aita + k = aitak, sujeto de un verbo con objeto.'},
{t:['nik','euskara','ikasten','dut'],es:'Yo estudio euskera.',tip:'ikasi → ikasten (habitual) + dut.'},
{t:['zuek','euskaraz','hitz','egiten','duzue'],es:'Vosotros habláis en euskera.',tip:'hitz egin = hablar. -z = «en/por medio de» (euskaraz = en euskera).'},
{t:['haiek','ez','daude','etxean'],es:'Ellos no están en casa.',tip:'Negación: «ez» justo antes del auxiliar.'},
{t:['zer','edaten','duzu'],es:'¿Qué bebes?',tip:'Pregunta con zer: «zer» + verbo + auxiliar.',x:['non']},
{t:['non','bizi','zara'],es:'¿Dónde vives?',tip:'non = dónde. izan-aux: zara = tú eres.',x:['zer']},
{t:['nor','zara','zu'],es:'¿Quién eres tú?',tip:'nor = quién. Se contesta «Ni … naiz».'},
{t:['behiak','mendian','daude'],es:'Las vacas están en el monte.',tip:'-ak = plural (las vacas). mendia → mendian.'},
{t:['ni','ez','nago','etxean'],es:'Yo no estoy en casa.',tip:'Negación: «ez» + nago (egon). El auxiliar siempre va pegado a «ez».'},
{t:['gaur','nik','sagardoa','edaten','dut'],es:'Hoy bebo sidra.',tip:'El tiempo (gaur) suele ir al principio.'},
{t:['gu','Baztanera','goaz'],es:'Nosotros vamos a Baztan.',tip:'goaz = nosotros vamos (forma sintética de joan).'},
{t:['mahaiaren','gainean','liburu','bat','dago'],es:'Hay un libro sobre la mesa.',tip:'mahaia + ren (genitivo) + gainean = sobre la mesa.'},
{t:['katua','aulkiaren','azpian','dago'],es:'El gato está debajo de la silla.',tip:'aulkia + ren + azpian = debajo de la silla.'},
{t:['txakurra','etxearen','kanpoan','dago'],es:'El perro está fuera de la casa.',tip:'etxea + ren + kanpoan = fuera de la casa.'},
{t:['nik','amari','liburua','ematen','diot'],es:'Yo le doy el libro a mamá.',tip:'ama + ri = amari (a quién). diot = yo se lo (a él/ella) doy.'},
{t:['nire','etxea','zurea','baino','handiagoa','da'],es:'Mi casa es más grande que la tuya.',tip:'adjetivo + -ago = más; baino = que.'},
{t:['gaur','ezin','dut','etorri'],es:'Hoy no puedo venir.',tip:'ezin = no poder. Lleva el auxiliar justo detrás (ezin dut).'},
{t:['zortziak','dira'],es:'Son las ocho.',tip:'Hora: número + -ak + dira (una hora: «bata da»).'},
{t:['goizean','zortzietan','jaikitzen','naiz'],es:'Por la mañana me levanto a las ocho.',tip:'zortziak → zortzietan (a las ocho).'},
{t:['euskaraz','hitz','egiten','al','duzu'],es:'¿Hablas euskera?',tip:'Pregunta de sí/no: «al» justo delante del auxiliar.'},
{t:['atzo','liburu','bat','erosi','nuen'],es:'Ayer compré un libro.',tip:'Pasado: erosi (participio) + nuen.'},
{t:['hiru','t\'erdiak','dira'],es:'Son las tres y media.',tip:'t\'erdiak = y media.'},
{t:['euria','ari','du'],es:'Está lloviendo.',tip:'euria ari du = llueve (ahora).'},
{t:['gaur','hotz','egiten','du'],es:'Hoy hace frío.',tip:'hotz egiten du = hace frío.'},
{t:['zatoz','hona'],es:'Ven aquí.',tip:'zatoz = ven (etorri).'},
{t:['ireki','ezazu','atea'],es:'Abre la puerta.',tip:'verbo + ezazu = petición educada.'},
{t:['amarekin','mendira','joaten','naiz'],es:'Voy al monte con mamá.',tip:'-rekin = con.'},
{t:['autobusez','etorri','naiz'],es:'He venido en autobús.',tip:'-z = en (medio).'},
{t:['nahi','baduzu','etorri'],es:'Si quieres, ven.',tip:'ba- + duzu = baduzu (si).'},
{t:['buruko','mina','dut'],es:'Me duele la cabeza.',tip:'buru + ko mina dut.'},
{t:['zenbat','balio','du'],es:'¿Cuánto cuesta?',tip:'balio du = cuesta.'}
];

/* frases del A2 */
const SENT2=[
{t:['amari','kafea','gustatzen','zaio'],es:'A mamá le gusta el café.',tip:'-ri = a quién; zaio = le (a él/ella) gusta (una cosa).'},
{t:['guri','mendia','gustatzen','zaigu'],es:'A nosotros nos gusta el monte.',tip:'guri = a nosotros; zaigu = nos gusta (una cosa).'},
{t:['gaixorik','nagoelako','etxean','nago'],es:'Estoy en casa porque estoy enfermo.',tip:'nago + -elako = nagoelako (porque estoy).'},
{t:['txikitan','mendira','joaten','nintzen'],es:'De pequeño iba al monte.',tip:'Pasado habitual: joaten + nintzen.'},
{t:['ikasten','ari','nintzen'],es:'Estaba estudiando.',tip:'ari + nintzen = estaba (haciendo).'},
{t:['maite','zaitut'],es:'Te quiero.',tip:'zaitut = yo a ti.'},
{t:['zuk','ni','ikusten','nauzu'],es:'Tú me ves.',tip:'nauzu = tú a mí.'},
{t:['euskaraz','hitz','egin','dezaket'],es:'Puedo hablar en euskera.',tip:'dezaket = puedo (con objeto).'},
{t:['esan','du','etorriko','dela'],es:'Ha dicho que vendrá.',tip:'da + ela = dela.'},
{t:['bizi','naizen','herria','Elizondo','da'],es:'El pueblo donde vivo es Elizondo.',tip:'naiz + en = naizen (relativo).'},
{t:['lehenik','jaikitzen','naiz','gero','gosaltzen','dut'],es:'Primero me levanto, luego desayuno.',tip:'lehenik / gero ordenan los hechos.'},
{t:['nekatuta','nago','horregatik','etxean','geratuko','naiz'],es:'Estoy cansado, por eso me quedaré en casa.',tip:'horregatik = por eso.'},
{t:['atzo','etxean','nengoen'],es:'Ayer estaba en casa.',tip:'egon en pasado: nengoen.'},
{t:['Iruñera','nindoan'],es:'Iba a Pamplona.',tip:'joan en pasado: nindoan.'},
{t:['amak','liburu','bat','eman','zidan'],es:'Mamá me dio un libro.',tip:'zidan = me lo dio.'},
{t:['bihar','Iruñera','joango','naiz'],es:'Mañana iré a Pamplona.',tip:'joan + go + naiz.'},
{t:['euskaraz','hitz','egiten','hasi','naiz'],es:'He empezado a hablar en euskera.',tip:'-tzen hasi naiz.'},
{t:['uste','dut','euskara','polita','dela'],es:'Creo que el euskera es bonito.',tip:'uste dut + -ela.'},
{t:['atea','irekita','dago'],es:'La puerta está abierta.',tip:'irekita dago.'},
{t:['joan','den','astean','Bilbora','joan','nintzen'],es:'La semana pasada fui a Bilbao.',tip:'joan den astean + nintzen.'},
{t:['kontua','mesedez'],es:'La cuenta, por favor.',tip:'kontua = la cuenta.'},
{t:['haurrei','txokolatea','gustatzen','zaie'],es:'A los niños les gusta el chocolate.',tip:'haurrei + zaie.'}
];

const NORI=['niri','zuri','berari','guri','zuei','haiei'];
const NORI_ES=['a mí','a ti','a él / ella','a nosotros/as','a vosotros/as','a ellos / ellas'];
const pronOf=c=>c.ty==='nork'?NORK:c.ty==='nori'?NORI:PRON;
const pronEs=c=>c.ty==='nori'?NORI_ES:PRON_ES;
const lvOf=x=>x.lv||'a1';


/* nor ala nork: ¿qué auxiliar usa cada verbo? */
const NN=[
['jan','comer','nork'],['edan','beber','nork'],['ikusi','ver','nork'],['irakurri','leer','nork'],['idatzi','escribir','nork'],['ikasi','aprender','nork'],['ulertu','entender','nork'],
['joan','ir','nor'],['etorri','venir','nor'],['bizi','vivir','nor'],['egon','estar','nor'],['jaio','nacer','nor'],['erori','caer','nor']
];
