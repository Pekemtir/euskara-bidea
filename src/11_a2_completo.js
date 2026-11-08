/* ===== A2 completo: lecciones e1–e12 según programas A2 (HABE/Gobierno Vasco/UNED) ===== */
const mt=(h,r)=>'<table class="mini"><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+r.map(x=>'<tr>'+x.map(y=>'<td>'+y+'</td>').join('')+'</tr>').join('')+'</table>';
LESSONS.push(
{id:'e1',lv:'a2',n:10,eu:'Eman zidan',es:'«Me dio», «te dijo»: el pasado con «a quién»',ic:'🎁',min:9,
 goals:['Formar zidan, zizun, zion, zigun, zizuen, zien','Usar dit, dizu, dio, digu en presente con sujeto de 3.ª persona','Contar quién te dio o te dijo algo'],
 steps:[
 {t:'Pasado: «me dio, te dio…»',h:'<p>Cuando <b>otra persona</b> (él, ella, mamá…) hace algo <b>a alguien</b>, el auxiliar cambia según el «a quién». Pasado, una cosa:</p>',
  tb:mt(['A quién','Una cosa','Varias cosas'],[['niri (a mí)','<b>zidan</b>','<b>zizkidan</b>'],['zuri (a ti)','<b>zizun</b>','<b>zizkizun</b>'],['berari (a él/ella)','<b>zion</b>','<b>zizkion</b>'],['guri (a nosotros)','<b>zigun</b>','<b>zizkigun</b>'],['zuei (a vosotros)','<b>zizuen</b>','<b>zizkizuen</b>'],['haiei (a ellos)','<b>zien</b>','<b>zizkien</b>']]),
  ex:[['Amak liburu bat eman zidan.','Mamá me dio un libro.'],['Irakasleak azalpen bat eman zigun.','El profesor nos dio una explicación.'],['Zer esan zizun?','¿Qué te dijo?'],['Ez zidan ezer esan.','No me dijo nada.']],
  tip:'Si lo dado es <b>varias cosas</b>, aparece <b>-zki-</b>: eman zizkidan liburuak.'},
 {t:'Presente: «me da, te da…»',h:'<p>En presente el auxiliar es el mismo patrón, sin la <b>z-</b> del pasado:</p>',
  tb:mt(['A quién','Una cosa','Varias cosas'],[['niri','<b>dit</b>','<b>dizkit</b>'],['zuri','<b>dizu</b>','<b>dizkizu</b>'],['berari','<b>dio</b>','<b>dizkio</b>'],['guri','<b>digu</b>','<b>dizkigu</b>'],['zuei','<b>dizue</b>','<b>dizkizue</b>'],['haiei','<b>die</b>','<b>dizkie</b>']]),
  ex:[['Aitak dirua ematen dit.','Papá me da dinero.'],['Irakasleak euskara irakasten digu.','El profesor nos enseña euskera.'],['Mikelek mezu bat bidaltzen dit.','Mikel me envía un mensaje.']]}
 ],
 make:()=>[].concat([
  mc('Pasado','«Me dio» (una cosa)','¿Cuál es?','zidan',['zizun','zion','dit'],'<b>zidan</b> = me (lo) dio.'),
  mc('Pasado','«Te dijo»','¿Cuál es?','zizun',['zidan','zigun','dizu'],'<b>zizun</b> = te (lo) dio / dijo.'),
  mc('Pasado','«Nos dio»','¿Cuál es?','zigun',['zidan','zien','zion'],'<b>zigun</b> = nos (lo) dio.'),
  mc('Presente','«Me da» (una cosa)','¿Cuál es?','dit',['zidan','dizkit','dio'],'<b>dit</b> = me (lo) da.'),
  mc('Varias cosas','«Me dio unos libros»','¿Qué auxiliar?','zizkidan',['zidan','dizkit','zizkion'],'Varias cosas → <b>-zki-</b>: zizkidan.')
 ],SQ0(['amak','liburu','bat','eman','zidan'],'Mamá me dio un libro.','zidan = me lo dio (una cosa).'),SQ0(['zer','esan','zizun'],'¿Qué te dijo?','zizun = te dijo.'),SQ0(['irakasleak','euskara','irakasten','digu'],'El profesor nos enseña euskera.','digu = nos lo enseña.'),conjQs(['eman (berak… niri, zuri…)'],3))},

{id:'e2',lv:'a2',n:11,eu:'Geroa eta asmoak',es:'Planes: iré, pienso, voy a…',ic:'🗓️',min:8,
 goals:['Formar el futuro con -ko/-go y hablar de planes','Decir «tengo la intención de…» con -tzeko asmoa dut','Usar expresiones de tiempo futuro'],
 steps:[
 {t:'Futuro y planes',h:'<p>Futuro: participio + <b>-ko</b> (o <b>-go</b> tras -n) + auxiliar en presente. Para un plan: <b>-tzeko asmoa dut</b> («tengo intención de»).</p>',
  ex:[['Bihar Iruñera joango naiz.','Mañana iré a Pamplona.'],['Euskara hobeto ikasteko asmoa dut.','Tengo intención de aprender mejor euskera.'],['Zer egingo duzu bihar?','¿Qué harás mañana?'],['Gaur gauean ez naiz irtengo.','Esta noche no saldré.']],
  tip:'Negativo: <b>ez</b> + auxiliar + participio con -ko: ez naiz irtengo.'},
 {t:'Cuándo',h:'<p>Expresiones de futuro:</p>',
  tb:mt(['Euskera','Español'],[['<b>bihar</b> / <b>etzi</b>','mañana / pasado mañana'],['<b>datorren astean</b>','la semana que viene'],['<b>datorren hilean</b>','el mes que viene'],['<b>datorren urtean</b>','el año que viene'],['<b>udan</b>, <b>negua</b>…','en verano, en invierno'],['<b>laster</b> / <b>noizbait</b>','pronto / algún día'],['<b>agian</b>','quizá']]),
  ex:[['Datorren astean familiarekin bazkalduko dugu.','La semana que viene comeremos con la familia.'],['Agian udan Baztanera joango gara.','Quizá en verano iremos a Baztan.']]}
 ],
 make:()=>[].concat([
  mc('Geroa','joan → futuro','Ni… (yo iré)','joango naiz',['joan naiz','joaten naiz','joaten ari naiz'],'joan acaba en -n → <b>-go</b>: joango naiz.'),
  mc('Geroa','ikasi → futuro','Nik… (yo estudiaré)','ikasiko dut',['ikasi dut','ikasten dut','ikasigo dut'],'No acaba en -n → <b>-ko</b>.'),
  mc('Tiempo','«La semana que viene»','¿Cuál es?','datorren astean',['joan den astean','aste honetan','atzo'],'<b>datorren</b> = que viene.'),
  mc('Asmoa','«Tengo intención de viajar»','¿Cuál es?','bidaiatzeko asmoa dut',['bidaiatzen dut','bidaiatu dut','bidaiatzera naiz'],'<b>-tzeko asmoa dut</b>.')
 ],SQ0(['bihar','Iruñera','joango','naiz'],'Mañana iré a Pamplona.','joan + go + naiz.'),SQ0(['zer','egingo','duzu','bihar'],'¿Qué harás mañana?','egin + go + duzu.'),SQ0(['euskara','hobeto','ikasteko','asmoa','dut'],'Tengo intención de aprender mejor euskera.','-tzeko asmoa dut.'),SQ0(['gaur','gauean','ez','naiz','irtengo'],'Esta noche no saldré.','ez + naiz + irtengo.'),vq('denborak',3))},

{id:'e3',lv:'a2',n:12,eu:'Hasi, jarraitu, utzi',es:'Empezar, seguir y dejar de hacer; ya y todavía',ic:'▶️',min:8,
 goals:['Decir -tzen hasi, jarraitu, amaitu, ikasi','Usar -tzeari utzi (dejar de)','Distinguir dagoeneko y oraindik ez'],
 steps:[
 {t:'Empezar, seguir, acabar',h:'<p>Estos verbos van con el verbo principal en <b>-tzen</b>:</p>',
  tb:mt(['Euskera','Español'],[['<b>-tzen hasi naiz</b>','he empezado a…'],['<b>-tzen jarraitzen dut</b>','sigo…'],['<b>-tzen amaitu dut</b>','he terminado de…'],['<b>-tzen ikasi dut</b>','he aprendido a…'],['<b>-tzeari utzi diot</b>','he dejado de…']]),
  ex:[['Euskaraz hitz egiten hasi naiz.','He empezado a hablar en euskera.'],['Gidatzen ikasi dut.','He aprendido a conducir.'],['Erretzeari utzi diot.','He dejado de fumar.'],['Lanean jarraitzen dut.','Sigo trabajando.']],
  tip:'<b>hasi</b> usa <b>naiz</b> (nor); jarraitu, amaitu, ikasi usan <b>dut</b>; utzi usa <b>diot</b> con -tzeari.'},
 {t:'Ya y todavía',h:'<p><b>dagoeneko</b> / <b>jada</b> = ya. <b>oraindik</b> = todavía; con negación, «todavía no».</p>',
  ex:[['Dagoeneko bazkaldu dut.','Ya he comido.'],['Oraindik ez dut bukatu.','Todavía no he terminado.'],['Jada ez dut gose.','Ya no tengo hambre.']]}
 ],
 make:()=>[].concat([
  mc('Aspektua','«He empezado a estudiar»','¿Cuál es?','ikasten hasi naiz',['ikasten hasi dut','ikasi hasi naiz','ikastera naiz'],'<b>hasi</b> + naiz.'),
  mc('Aspektua','«Ya»','¿Cuál es?','dagoeneko',['oraindik','beti','inoiz'],'<b>dagoeneko</b> o <b>jada</b>.'),
  mc('Aspektua','«Todavía no»','¿Cuál es?','oraindik ez',['dagoeneko','jada','inoiz'],'<b>oraindik ez</b>.')
 ],SQ0(['euskaraz','hitz','egiten','hasi','naiz'],'He empezado a hablar en euskera.','-tzen hasi naiz.'),SQ0(['gidatzen','ikasi','dut'],'He aprendido a conducir.','-tzen ikasi dut.'),SQ0(['erretzeari','utzi','diot'],'He dejado de fumar.','-tzeari utzi diot.'),SQ0(['oraindik','ez','dut','bukatu'],'Todavía no he terminado.','oraindik ez + dut + participio.'),SQ0(['dagoeneko','bazkaldu','dut'],'Ya he comido.','dagoeneko + dut.'))},

{id:'e4',lv:'a2',n:13,eu:'Iritziak',es:'Dar tu opinión, estar de acuerdo y preferir',ic:'💬',min:8,
 goals:['Decir uste dut… y nire ustez','Usar iruditzen zait y zer iruditzen zaizu?','Expresar acuerdo y preferencia (nahiago dut)'],
 steps:[
 {t:'Opinar',h:'<p>Para opinar:</p>',
  tb:mt(['Euskera','Español'],[['<b>Uste dut</b> + frase en <b>-ela</b>','creo que…'],['<b>Nire ustez</b>','en mi opinión'],['<b>Niri… iruditzen zait</b>','a mí me parece…'],['<b>Zer iruditzen zaizu?</b>','¿qué te parece?'],['<b>Ados nago</b> / <b>Ez nago ados</b>','estoy de acuerdo / no'],['<b>Egia da</b>','es verdad']]),
  ex:[['Uste dut euskara polita dela.','Creo que el euskera es bonito.'],['Niri zaila iruditzen zait.','A mí me parece difícil.'],['Nire ustez, erraza da.','En mi opinión, es fácil.'],['Zurekin ados nago.','Estoy de acuerdo contigo.']]},
 {t:'Preferir',h:'<p><b>nahiago dut</b> = prefiero. Lo que no eliges va con <b>baino</b>.</p>',
  ex:[['Kafea nahiago dut tea baino.','Prefiero el café al té.'],['Mendira joatea nahiago dut.','Prefiero ir al monte.']]}
 ],
 make:()=>[].concat([
  mc('Iritzia','«Creo que»','¿Cuál es?','uste dut',['nahi dut','badakit','iruditzen zait'],'<b>uste dut</b> + -ela.'),
  mc('Iritzia','«Estoy de acuerdo»','¿Cuál es?','ados nago',['ados dut','egia nago','uste nago'],'<b>ados nago</b>.'),
  mc('Iritzia','«En mi opinión»','¿Cuál es?','nire ustez',['zure ustez dut','nire uste','niri ustez'],'<b>nire ustez</b>.')
 ],SQ0(['uste','dut','euskara','polita','dela'],'Creo que el euskera es bonito.','dela = que es (-ela).'),SQ0(['niri','zaila','iruditzen','zait'],'A mí me parece difícil.','iruditzen zait.'),SQ0(['kafea','nahiago','dut','tea','baino'],'Prefiero el café al té.','nahiago dut + baino.'),SQ0(['zurekin','ados','nago'],'Estoy de acuerdo contigo.','ados nago.'),vq('iritziak',3))},

{id:'e5',lv:'a2',n:14,eu:'-egi, -tsu, -dun',es:'Demasiado, lleno de, con… y diminutivos',ic:'🧩',min:7,
 goals:['Usar -egi (demasiado)','Formar adjetivos con -tsu, -dun y -gabe','Reconocer el diminutivo -txo'],
 steps:[
 {t:'Sufijos del adjetivo',h:'<p>Un sufijo cambia el sentido de la palabra:</p>',
  tb:mt(['Sufijo','Sentido','Ejemplo'],[['<b>-egi</b>','demasiado','handi → <b>handiegia</b> (demasiado grande)'],['<b>-tsu</b>','lleno de, -oso','euri → <b>euritsua</b> (lluvioso)'],['<b>-dun</b>','que tiene','bizar → <b>bizardun</b> (con barba)'],['<b>-gabe</b>','sin','etxe → <b>etxegabea</b> (sin casa)'],['<b>-txo</b>','pequeño, cariñoso','etxe → <b>etxetxoa</b> (casita)']]),
  ex:[['Soineko hau handiegia da.','Este vestido es demasiado grande.'],['Eguraldi euritsua dago.','Hace un tiempo lluvioso.'],['Bizardun gizon bat ikusi dut.','He visto a un hombre con barba.'],['Etxetxo bat dute.','Tienen una casita.']]}
 ],
 make:()=>[].concat([
  mc('Atzizkia','«Demasiado grande»','¿Cuál es?','handiegia',['handitsua','handidun','handixoa'],'<b>-egi</b> = demasiado.'),
  mc('Atzizkia','«Lluvioso»','¿Cuál es?','euritsua',['euriegia','euridun','euritxoa'],'<b>-tsu</b> = lleno de.'),
  mc('Atzizkia','«Con barba»','¿Cuál es?','bizardun',['bizartsu','bizaregi','bizargabe'],'<b>-dun</b> = que tiene.'),
  mc('Atzizkia','«Casita»','¿Cuál es?','etxetxoa',['etxegia','etxedun','etxetsua'],'<b>-txo</b>.')
 ],SQ0(['soineko','hau','handiegia','da'],'Este vestido es demasiado grande.','handi + egi + a.'),SQ0(['eguraldi','euritsua','dago'],'Hace un tiempo lluvioso.','euri + tsu.'),SQ0(['bizardun','gizon','bat','ikusi','dut'],'He visto a un hombre con barba.','bizar + dun.'))},

{id:'e6',lv:'a2',n:15,eu:'Irekita dago',es:'Estados: abierto, cerrado, cansado',ic:'🚪',min:7,
 goals:['Formar el estado resultante con participio + -ta','Distinguir «he abierto» de «está abierto»','Usar prest, esna, irekita, itxita, nekatuta'],
 steps:[
 {t:'Participio + -ta dago',h:'<p>Para decir cómo <b>está</b> algo después de una acción: participio + <b>-ta</b> + <b>dago / daude</b> (o <b>nago</b>…).</p>',
  tb:mt(['Acción','Resultado'],[['Atea ireki dut. (<i>he abierto</i>)','Atea <b>irekita dago</b>. (<i>está abierta</i>)'],['Denda itxi dute.','Denda <b>itxita dago</b>.'],['Nekatu naiz.','<b>Nekatuta nago</b>.'],['Bazkaria prestatu dut.','Bazkaria <b>prest dago</b>.']]),
  ex:[['Atea irekita dago.','La puerta está abierta.'],['Leihoak irekita daude.','Las ventanas están abiertas.'],['Denda itxita dago.','La tienda está cerrada.'],['Gaur nekatuta nago.','Hoy estoy cansado.']],
  tip:'El plural no cambia la forma -ta, solo el verbo: <b>daude</b>.'}
 ],
 make:()=>[].concat([
  mc('Egoera','«La puerta está abierta»','¿Cuál es?','Atea irekita dago',['Atea ireki dut','Atea irekitzen da','Atea irekiko du'],'Estado: <b>irekita dago</b>.'),
  mc('Egoera','«La tienda está cerrada»','¿Cuál es?','Denda itxita dago',['Denda itxi dut','Denda ixten da','Denda itxiko dut'],'<b>itxita dago</b>.'),
  mc('Egoera','«Las ventanas están abiertas»','¿Cuál es?','Leihoak irekita daude',['Leihoak irekita dago','Leihoak ireki dut','Leihoak irekitzen dira'],'Plural → <b>daude</b>.')
 ],SQ0(['atea','irekita','dago'],'La puerta está abierta.','irekita dago.'),SQ0(['denda','itxita','dago'],'La tienda está cerrada.','itxita dago.'),SQ0(['atea','ireki','dut'],'He abierto la puerta.','acción: ireki dut.'),SQ0(['bazkaria','prest','dago'],'La comida está lista.','prest dago.'),SQ0(['gaur','nekatuta','nago'],'Hoy estoy cansado.','nekatuta nago.'))},

{id:'e7',lv:'a2',n:16,eu:'Norbait deskribatu',es:'Aspecto y carácter de una persona',ic:'🧑',min:8,
 goals:['Describir pelo, ojos y estatura con izan y ukan','Preguntar zer itxura du? y nolakoa da?','Decir a quién te pareces: antza du'],
 steps:[
 {t:'Izan o ukan',h:'<p>Con adjetivos de la persona se usa <b>izan</b> (<i>altua da</i>). Con partes del cuerpo se usa <b>ukan</b> (<i>ile beltza du</i>, <i>begi urdinak ditu</i>: plural → <b>ditu</b>).</p>',
  ex:[['Altua eta mehea da.','Es alto y delgado.'],['Ile beltza dut.','Tengo el pelo negro.'],['Begi urdinak ditu.','Tiene los ojos azules.'],['Nire aitari antza dut.','Me parezco a mi padre.']]},
 {t:'Preguntar',h:'<p><b>Zer itxura du?</b> = ¿qué aspecto tiene? <b>Nolakoa da?</b> = ¿cómo es (de carácter)?</p>',
  ex:[['Zer itxura du zure anaiak?','¿Qué aspecto tiene tu hermano?'],['Nolakoa da zure ama?','¿Cómo es tu madre?'],['Jatorra eta alaia da.','Es simpática y alegre.']]}
 ],
 make:()=>[].concat([
  mc('Deskribapena','«Tiene el pelo largo»','¿Cuál es?','Ile luzea du',['Ile luzea da','Ile luzea dago','Ile luzea dira'],'Parte del cuerpo → <b>ukan</b>: du.'),
  mc('Deskribapena','«Tiene los ojos azules»','¿Cuál es?','Begi urdinak ditu',['Begi urdinak du','Begi urdinak da','Begi urdinak dira'],'Plural → <b>ditu</b>.'),
  mc('Deskribapena','«¿Cómo es?» (carácter)','¿Cuál es?','Nolakoa da?',['Zer itxura du?','Non dago?','Zer du?'],'<b>Nolakoa da?</b>')
 ],SQ0(['ile','beltza','dut'],'Tengo el pelo negro.','ile beltza + dut.'),SQ0(['begi','urdinak','ditu'],'Tiene los ojos azules.','plural: ditu.'),SQ0(['zer','itxura','du'],'¿Qué aspecto tiene?','zer itxura du.'),SQ0(['nolakoa','da','zure','ama'],'¿Cómo es tu madre?','nolakoa da.'),vq('itxura',3))},

{id:'e8',lv:'a2',n:17,eu:'Telefonoz eta mezuetan',es:'Llamar, pedir cita y escribir un mensaje',ic:'📞',min:8,
 goals:['Mantener una llamada básica','Pedir una cita con nahi nuke','Empezar y terminar un mensaje o un correo'],
 steps:[
 {t:'Por teléfono',h:'<p>Frases útiles. <b>nahi nuke</b> = «querría»: es más educado que nahi dut.</p>',
  tb:mt(['Euskera','Español'],[['<b>Kaixo, Jon al da?</b>','Hola, ¿es Jon?'],['<b>Jonekin hitz egin nahi nuke.</b>','Querría hablar con Jon.'],['<b>Itxaron pixka bat, mesedez.</b>','Espere un poco, por favor.'],['<b>Mezu bat utzi dezaket?</b>','¿Puedo dejar un mensaje?'],['<b>Berriro deituko dizut.</b>','Te volveré a llamar.'],['<b>Ez dut ondo entzuten.</b>','No oigo bien.']])},
 {t:'Citas y mensajes',h:'<p>Para pedir cita y para escribir:</p>',
  tb:mt(['Euskera','Español'],[['<b>Hitzordu bat eskatu nahi nuke.</b>','Querría pedir una cita.'],['<b>Noiz etor naiteke?</b>','¿Cuándo puedo venir?'],['<b>Kaixo, …</b> / <b>Egun on, …</b>','Hola, … / Buenos días, …'],['<b>Eskerrik asko aldez aurretik.</b>','Gracias de antemano.'],['<b>Agur bero bat</b> / <b>Laster arte</b>','Un saludo / Hasta pronto']])}
 ],
 make:()=>[].concat([
  mc('Telefonoa','«Querría hablar con Jon»','¿Cuál es?','Jonekin hitz egin nahi nuke',['Jonekin hitz egin nahi dut','Jonekin hitz egingo dut','Jon hitz egin nahi nuke'],'<b>nahi nuke</b> = querría (cortés).'),
  mc('Telefonoa','«Te volveré a llamar»','¿Cuál es?','Berriro deituko dizut',['Berriro deitu dut','Berriro deitzen naiz','Berriro deituko naiz'],'<b>deituko dizut</b>.'),
  mc('Mezua','«Gracias de antemano»','¿Cuál es?','Eskerrik asko aldez aurretik',['Eskerrik asko atzo','Mila esker bihar','Agur aldez aurretik'],'<b>aldez aurretik</b> = de antemano.')
 ],SQ0(['jonekin','hitz','egin','nahi','nuke'],'Querría hablar con Jon.','nahi nuke = querría.'),SQ0(['berriro','deituko','dizut'],'Te volveré a llamar.','deituko dizut.'),SQ0(['itxaron','pixka','bat','mesedez'],'Espere un poco, por favor.','itxaron pixka bat.'),SQ0(['hitzordu','bat','eskatu','nahi','nuke'],'Querría pedir una cita.','hitzordu = cita.'),SQ0(['ez','dut','ondo','entzuten'],'No oigo bien.','entzuten dut.'))},

{id:'e9',lv:'a2',n:18,eu:'Duela… Joan den…',es:'Contar el pasado: hace años, la semana pasada, alguna vez',ic:'🧳',min:9,
 goals:['Situar hechos en el pasado: duela, joan den, iaz','Preguntar inoiz…? y contestar behin, bitan, inoiz ez','Contar un viaje con nintzen y nuen'],
 steps:[
 {t:'Cuándo pasó',h:'<p>Expresiones de tiempo pasado:</p>',
  tb:mt(['Euskera','Español'],[['<b>atzo</b> / <b>herenegun</b>','ayer / anteayer'],['<b>joan den astean</b>','la semana pasada'],['<b>joan den hilean</b>','el mes pasado'],['<b>iaz</b> / <b>joan den urtean</b>','el año pasado'],['<b>duela bi urte</b>','hace dos años'],['<b>duela hilabete bat</b>','hace un mes']]),
  ex:[['Joan den astean Bilbora joan nintzen.','La semana pasada fui a Bilbao.'],['Duela bi urte Italian egon nintzen.','Hace dos años estuve en Italia.'],['Iaz euskaltegian hasi nintzen.','El año pasado empecé en el euskaltegi.']]},
 {t:'Experiencias',h:'<p><b>Inoiz egon al zara…?</b> = ¿has estado alguna vez…? Contesta con <b>behin</b> (una vez), <b>bitan</b> / <b>bi aldiz</b> (dos veces) o <b>inoiz ez</b> (nunca).</p>',
  ex:[['Inoiz egon al zara Donostian?','¿Has estado alguna vez en San Sebastián?'],['Bai, behin izan nintzen.','Sí, estuve una vez.'],['Ez naiz inoiz Londresen egon.','Nunca he estado en Londres.']]}
 ],
 make:()=>[].concat([
  mc('Denbora','«Hace dos años»','¿Cuál es?','duela bi urte',['bi urte barru','iaz bi urte','datorren bi urte'],'<b>duela</b> + tiempo = hace.'),
  mc('Denbora','«La semana pasada»','¿Cuál es?','joan den astean',['datorren astean','aste honetan','duela astea'],'<b>joan den</b> = pasado.'),
  mc('Esperientzia','«Nunca he estado»','¿Cuál es?','Ez naiz inoiz egon',['Behin egon naiz','Bitan egon naiz','Dagoeneko egon naiz'],'<b>inoiz ez</b> = nunca.'),
  mc('Esperientzia','«Dos veces»','¿Cuál es?','bitan',['behin','inoiz','beti'],'<b>bitan</b> / <b>bi aldiz</b>.')
 ],SQ0(['joan','den','astean','Bilbora','joan','nintzen'],'La semana pasada fui a Bilbao.','joan den astean + nintzen.'),SQ0(['duela','bi','urte','Italian','egon','nintzen'],'Hace dos años estuve en Italia.','duela + tiempo.'),SQ0(['inoiz','egon','al','zara','Donostian'],'¿Has estado alguna vez en San Sebastián?','inoiz ... al zara.'),SQ0(['behin','Parisen','izan','nintzen'],'Estuve una vez en París.','behin = una vez.'),SQ0(['ez','naiz','inoiz','Londresen','egon'],'Nunca he estado en Londres.','ez ... inoiz.'),vq('denborak',2))},

{id:'e10',lv:'a2',n:19,eu:'Jatetxean eta ostatuan',es:'Pedir en un restaurante y reservar habitación',ic:'🍽️',min:8,
 goals:['Reservar mesa y pedir la comida','Pedir la cuenta y recomendaciones','Reservar y preguntar en un alojamiento'],
 steps:[
 {t:'En el restaurante',h:'<p>Frases de camarero y cliente:</p>',
  tb:mt(['Euskera','Español'],[['<b>Mahai bat erreserbatu nahi nuke.</b>','Querría reservar una mesa.'],['<b>Zenbat pertsonarentzat?</b>','¿Para cuántas personas?'],['<b>Zer nahi duzue?</b>','¿Qué queréis / quieren?'],['<b>Zer gomendatzen duzu?</b>','¿Qué recomienda?'],['<b>Kontua, mesedez.</b>','La cuenta, por favor.'],['<b>Eguneko menua</b>','El menú del día']])},
 {t:'En el alojamiento',h:'<p>Para reservar una habitación:</p>',
  tb:mt(['Euskera','Español'],[['<b>Gela bikoitza nahi nuke.</b>','Querría una habitación doble.'],['<b>Zenbat balio du gau batek?</b>','¿Cuánto cuesta una noche?'],['<b>Gosaria barne dago.</b>','El desayuno está incluido.'],['<b>Wifia dago?</b>','¿Hay wifi?'],['<b>Giltza, mesedez.</b>','La llave, por favor.']])}
 ],
 make:()=>[].concat([
  mc('Jatetxea','«La cuenta, por favor»','¿Cuál es?','Kontua, mesedez',['Menua, mesedez','Gosaria, mesedez','Mahaia, mesedez'],'<b>kontua</b> = la cuenta.'),
  mc('Ostatua','«El desayuno está incluido»','¿Cuál es?','Gosaria barne dago',['Gosaria beroa dago','Gosaria eta gaua','Gosaria itxita dago'],'<b>barne</b> = incluido.'),
  mc('Jatetxea','«¿Qué recomienda?»','¿Cuál es?','Zer gomendatzen duzu?',['Zer nahi duzu?','Zer jaten duzu?','Zer esaten duzu?'],'<b>gomendatu</b> = recomendar.')
 ],SQ0(['mahai','bat','erreserbatu','nahi','nuke'],'Querría reservar una mesa.','nahi nuke = querría.'),SQ0(['zer','gomendatzen','duzu'],'¿Qué recomienda?','gomendatu.'),SQ0(['kontua','mesedez'],'La cuenta, por favor.','kontua = la cuenta.'),SQ0(['gela','bikoitza','nahi','nuke'],'Querría una habitación doble.','gela bikoitza.'),SQ0(['zenbat','balio','du','gau','batek'],'¿Cuánto cuesta una noche?','gau batek: -k por ser sujeto.'),vq('jatetxea',3))},

{id:'e11',lv:'a2',n:20,eu:'Plurala eta kasuak',es:'-ek, -ei, -en, -ekin: los casos en plural',ic:'👥',min:8,
 goals:['Formar sujeto plural con -ek','Usar -ei (a quiénes), -en (de quiénes) y -ekin (con)','Distinguir singular y plural'],
 steps:[
 {t:'Los casos en plural',h:'<p>El plural de los casos se forma sobre el plural <b>-ak</b>, quitando la -a final y añadiendo la terminación. Ejemplo con <b>haur</b> (niño):</p>',
  tb:mt(['Caso','Singular','Plural'],[['sujeto (-k)','haurrak','<b>haurrek</b>'],['a quién (-ri)','haurrari','<b>haurrei</b>'],['de quién (-ren)','haurraren','<b>haurren</b>'],['para (-rentzat)','haurrarentzat','<b>haurrentzat</b>'],['con (-rekin)','haurrarekin','<b>haurrekin</b>']]),
  ex:[['Ikasleek euskara ikasten dute.','Los alumnos aprenden euskera.'],['Haurrei txokolatea gustatzen zaie.','A los niños les gusta el chocolate.'],['Ikasleen liburuak mahaian daude.','Los libros de los alumnos están en la mesa.'],['Lagunekin afaltzen dut.','Ceno con los amigos.']]}
 ],
 make:()=>[].concat([
  mc('Plurala','«Los alumnos» (sujeto)','¿Cuál es?','ikasleek',['ikasleak','ikasleei','ikasleen'],'<b>-ek</b> = sujeto plural.'),
  mc('Plurala','«A los niños»','¿Cuál es?','haurrei',['haurrek','haurren','haurrekin'],'<b>-ei</b> = a los…'),
  mc('Plurala','«De los alumnos»','¿Cuál es?','ikasleen',['ikasleek','ikasleei','ikasleak'],'<b>-en</b> = de los…'),
  mc('Plurala','«Con los amigos»','¿Cuál es?','lagunekin',['lagunarekin','lagunei','lagunak'],'<b>-ekin</b> = con los…')
 ],SQ0(['haurrei','txokolatea','gustatzen','zaie'],'A los niños les gusta el chocolate.','haurrei + zaie.'),SQ0(['ikasleek','euskara','ikasten','dute'],'Los alumnos aprenden euskera.','ikasleek: sujeto plural.'),SQ0(['ikasleen','liburuak','mahaian','daude'],'Los libros de los alumnos están en la mesa.','ikasleen = de los alumnos.'),SQ0(['lagunekin','afaltzen','dut'],'Ceno con los amigos.','lagunekin.'))},

{id:'e12',lv:'a2',n:21,eu:'Ekarri eta eraman',es:'Traer y llevar',ic:'🧺',min:7,
 goals:['Distinguir ekarri (traer) de eraman (llevar)','Conjugar dakart/dakartzat y daramat/daramatzat','Pedir y ofrecer cosas'],
 steps:[
 {t:'Traer y llevar',h:'<p><b>ekarri</b> = traer (hacia aquí). <b>eraman</b> = llevar (hacia allá). Sus formas no usan auxiliar:</p>',
  tb:mt(['','ekarri (1 cosa)','eraman (1 cosa)'],[['ni','<b>dakart</b>','<b>daramat</b>'],['zu','<b>dakarzu</b>','<b>daramazu</b>'],['bera','<b>dakar</b>','<b>darama</b>'],['gu','<b>dakargu</b>','<b>daramagu</b>'],['zuek','<b>dakarzue</b>','<b>daramazue</b>'],['haiek','<b>dakarte</b>','<b>daramate</b>']]),
  ex:[['Ogia dakart.','Traigo el pan.'],['Zer daramazu?','¿Qué llevas?'],['Mutilak kafea dakar.','El chico trae el café.'],['Poltsa daramagu.','Llevamos la bolsa.']],
  tip:'Con varias cosas: <b>dakartzat</b>, <b>daramatzat</b> (ni); <b>dakartza</b>, <b>daramatza</b> (bera).'}
 ],
 make:()=>[].concat([
  mc('Aditza','«Traigo el pan» (hacia aquí)','¿Cuál es?','Ogia dakart',['Ogia daramat','Ogia nator','Ogia noa'],'<b>ekarri</b> → dakart.'),
  mc('Aditza','«Llevo la bolsa» (hacia allá)','¿Cuál es?','Poltsa daramat',['Poltsa dakart','Poltsa dut','Poltsa noa'],'<b>eraman</b> → daramat.'),
  mc('Aditza','«Traer»','¿Cuál es?','ekarri',['eraman','joan','etorri'],'<b>ekarri</b> = traer.')
 ],SQ0(['nik','ogia','dakart'],'Yo traigo el pan.','dakart.'),SQ0(['zuk','zer','daramazu'],'¿Qué llevas?','daramazu.'),SQ0(['mutilak','kafea','dakar'],'El chico trae el café.','dakar.'),conjQs(['ekarri','eraman'],4))}
);

Object.assign(LSUM,{
e1:{sum:['Pasado «a quién»: <b>zidan</b> (me), <b>zizun</b> (te), <b>zion</b> (le), <b>zigun</b> (nos), <b>zizuen</b> (os), <b>zien</b> (les). Varias cosas: <b>zizkidan</b>…','Presente: <b>dit, dizu, dio, digu, dizue, die</b>; varias cosas: dizkit, dizkizu…','Ej.: Amak liburu bat eman zidan.'],
 kw:[['zidan','me (lo) dio'],['zizun','te (lo) dio'],['zion','le (lo) dio'],['zigun','nos (lo) dio'],['dit','me (lo) da'],['dizu','te (lo) da']]},
e2:{sum:['Futuro: participio + <b>-ko</b> (o <b>-go</b> tras -n) + auxiliar.','Planes: <b>-tzeko asmoa dut</b>.','Tiempo: bihar, etzi, datorren astean/hilean/urtean, laster, agian.'],
 kw:[['bihar','mañana'],['etzi','pasado mañana'],['datorren astean','la semana que viene'],['asmoa','intención'],['agian','quizá'],['laster','pronto']]},
e3:{sum:['<b>-tzen hasi naiz</b> (he empezado a), <b>-tzen jarraitzen dut</b> (sigo), <b>-tzen amaitu dut</b>, <b>-tzen ikasi dut</b>.','<b>-tzeari utzi diot</b> = he dejado de.','<b>dagoeneko / jada</b> = ya; <b>oraindik ez</b> = todavía no.'],
 kw:[['hasi','empezar'],['jarraitu','seguir'],['amaitu','terminar'],['utzi','dejar'],['dagoeneko','ya'],['oraindik','todavía']]},
e4:{sum:['<b>Uste dut</b> + -ela = creo que. <b>Nire ustez</b> = en mi opinión.','<b>Niri… iruditzen zait</b>; <b>Zer iruditzen zaizu?</b>','<b>Ados nago</b> / <b>Ez nago ados</b>; <b>nahiago dut… baino</b> = prefiero… a…'],
 kw:[['uste dut','creo que'],['nire ustez','en mi opinión'],['ados nago','estoy de acuerdo'],['nahiago dut','prefiero'],['iruditzen zait','me parece'],['egia da','es verdad']]},
e5:{sum:['<b>-egi</b> demasiado; <b>-tsu</b> lleno de; <b>-dun</b> que tiene; <b>-gabe</b> sin; <b>-txo</b> diminutivo.'],
 kw:[['handiegia','demasiado grande'],['euritsua','lluvioso'],['bizardun','con barba'],['etxegabea','sin casa'],['etxetxoa','casita']]},
e6:{sum:['Estado resultante: participio + <b>-ta</b> + dago/daude/nago: <b>irekita dago</b>, <b>itxita dago</b>, <b>nekatuta nago</b>.','Acción: Atea ireki dut. Estado: Atea irekita dago.'],
 kw:[['irekita','abierto'],['itxita','cerrado'],['nekatuta','cansado'],['prest','listo'],['esna','despierto']]},
e7:{sum:['Partes del cuerpo con <b>ukan</b>: ile beltza <b>dut</b>, begi urdinak <b>ditu</b> (plural → ditu). Adjetivos con <b>izan</b>: altua da.','<b>Zer itxura du?</b> aspecto; <b>Nolakoa da?</b> carácter. <b>Antza du</b> = se parece.'],
 kw:[['ilea','el pelo'],['begia','el ojo'],['bizarra','la barba'],['altua','alto'],['mehea','delgado'],['jatorra','simpático']]},
e8:{sum:['Teléfono: <b>Jon al da?</b>, <b>hitz egin nahi nuke</b>, <b>itxaron pixka bat</b>, <b>berriro deituko dizut</b>.','Cita: <b>hitzordu bat eskatu nahi nuke</b>. Cierre: <b>eskerrik asko aldez aurretik</b>, <b>laster arte</b>.'],
 kw:[['hitzordua','la cita'],['deitu','llamar'],['mezua','el mensaje'],['nahi nuke','querría'],['aldez aurretik','de antemano'],['itxaron','esperar']]},
e9:{sum:['Pasado: <b>atzo</b>, <b>joan den astean</b>, <b>iaz</b>, <b>duela bi urte</b>.','Experiencias: <b>Inoiz egon al zara…?</b> → <b>behin</b>, <b>bitan</b>, <b>inoiz ez</b>.'],
 kw:[['duela','hace'],['joan den','pasado'],['iaz','el año pasado'],['inoiz','alguna vez'],['behin','una vez'],['bitan','dos veces']]},
e10:{sum:['Restaurante: <b>mahai bat erreserbatu nahi nuke</b>, <b>zer gomendatzen duzu?</b>, <b>kontua, mesedez</b>.','Alojamiento: <b>gela bikoitza</b>, <b>gosaria barne dago</b>, <b>zenbat balio du gau batek?</b>'],
 kw:[['kontua','la cuenta'],['menua','el menú'],['gomendatu','recomendar'],['gela','la habitación'],['barne','incluido'],['giltza','la llave']]},
e11:{sum:['Plural de los casos: sujeto <b>-ek</b>, a quién <b>-ei</b>, de quién <b>-en</b>, con <b>-ekin</b>, para <b>-entzat</b>.','Ej.: ikasleek, haurrei, ikasleen, lagunekin.'],
 kw:[['ikasleek','los alumnos (sujeto)'],['haurrei','a los niños'],['ikasleen','de los alumnos'],['lagunekin','con los amigos']]},
e12:{sum:['<b>ekarri</b> = traer: dakart, dakarzu, dakar…; <b>eraman</b> = llevar: daramat, daramazu, darama…','Varias cosas: dakartzat / daramatzat.'],
 kw:[['ekarri','traer'],['eraman','llevar'],['dakart','traigo'],['daramat','llevo']]}
});
