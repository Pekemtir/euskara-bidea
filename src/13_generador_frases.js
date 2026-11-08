/* ===== v28: generador de frases por plantillas (casi infinitas, coherentes con la lección) ===== */
const G={};
(function(){
const rn=a=>a[rnd(a.length)];
const ERG=['nik','zuk','berak','guk','zuek','haiek'],PRO=['ni','zu','bera','gu','zuek','haiek'],DAT=['niri','zuri','berari','guri','zuei','haiei'];
const IZ=['naiz','zara','da','gara','zarete','dira'],IZP=['nintzen','zinen','zen','ginen','zineten','ziren'];
const UK=['dut','duzu','du','dugu','duzue','dute'],UKP=['nuen','zenuen','zuen','genuen','zenuten','zuten'];
const EG=['nago','zaude','dago','gaude','zaudete','daude'],EGP=['nengoen','zeunden','zegoen','geunden','zeundeten','zeuden'];
const ZA=['zait','zaizu','zaio','zaigu','zaizue','zaie'],ZAP=['zaizkit','zaizkizu','zaizkio','zaizkigu','zaizkizue','zaizkie'];
const DI=['diot','diozu','dio','diogu','diozue','diote'],DZ=['dezaket','dezakezu','dezake','dezakegu','dezakezue','dezakete'],NT=['naiteke','zaitezke','daiteke','gaitezke','zaitezkete','daitezke'];
const ELA=['nagoelako','zaudelako','dagoelako','gaudelako','zaudetelako','daudelako'];
G.AUX={IZ,IZP,UK,UKP,EG,EGP,ZA,ZAP,DI,DZ,NT,ELA};
/* español */
const ESI=['yo','tú','él','nosotros','vosotros','ellos'],HAB=['he','has','ha','hemos','habéis','han'];
const RP={ar:['o','as','a','amos','áis','an'],er:['o','es','e','emos','éis','en'],ir:['o','es','e','imos','ís','en']};
const RT={ar:['é','aste','ó','amos','asteis','aron'],er:['í','iste','ió','imos','isteis','ieron'],ir:['í','iste','ió','imos','isteis','ieron']};
const RI={ar:['aba','abas','aba','ábamos','abais','aban'],er:['ía','ías','ía','íamos','íais','ían'],ir:['ía','ías','ía','íamos','íais','ían']};
const ES={
comer:{t:'er',part:'comido',ger:'comiendo'},beber:{t:'er',part:'bebido',ger:'bebiendo'},leer:{t:'er',part:'leído',ger:'leyendo',pret:['leí','leíste','leyó','leímos','leísteis','leyeron']},
ver:{t:'er',part:'visto',ger:'viendo',pres:['veo','ves','ve','vemos','veis','ven'],pret:['vi','viste','vio','vimos','visteis','vieron']},
estudiar:{t:'ar',part:'estudiado',ger:'estudiando'},comprar:{t:'ar',part:'comprado',ger:'comprando'},escribir:{t:'ir',part:'escrito',ger:'escribiendo'},escuchar:{t:'ar',part:'escuchado',ger:'escuchando'},
ir:{t:'ir',part:'ido',ger:'yendo',pres:['voy','vas','va','vamos','vais','van'],pret:['fui','fuiste','fue','fuimos','fuisteis','fueron'],imp:['iba','ibas','iba','íbamos','ibais','iban']},
venir:{t:'ir',part:'venido',ger:'viniendo',pres:['vengo','vienes','viene','venimos','venís','vienen'],pret:['vine','viniste','vino','vinimos','vinisteis','vinieron'],fut:['vendré','vendrás','vendrá','vendremos','vendréis','vendrán']},
vivir:{t:'ir',part:'vivido',ger:'viviendo'},
estar:{t:'ar',part:'estado',ger:'estando',pres:['estoy','estás','está','estamos','estáis','están'],pret:['estuve','estuviste','estuvo','estuvimos','estuvisteis','estuvieron']},
dar:{t:'ar',part:'dado',ger:'dando',pres:['doy','das','da','damos','dais','dan'],pret:['di','diste','dio','dimos','disteis','dieron']},
poder:{t:'er',pres:['puedo','puedes','puede','podemos','podéis','pueden']},pensar:{t:'ar',pres:['pienso','piensas','piensa','pensamos','pensáis','piensan']},
querer:{t:'er',pres:['quiero','quieres','quiere','queremos','queréis','quieren']},tener:{t:'er',pres:['tengo','tienes','tiene','tenemos','tenéis','tienen']},
ser:{t:'er',pres:['soy','eres','es','somos','sois','son']}
};
Object.keys(ES).forEach(k=>{ES[k].inf=k});
const esv=(k,t,i)=>{const v=ES[k],st=k.slice(0,-2);
 if(t==='inf')return k;
 if(t==='pres')return (v.pres||RP[v.t].map(e=>st+e))[i];
 if(t==='pret')return (v.pret||RT[v.t].map(e=>st+e))[i];
 if(t==='imp')return (v.imp||RI[v.t].map(e=>st+e))[i];
 if(t==='fut')return (v.fut||['é','ás','á','emos','éis','án'].map(e=>k+e))[i];
 if(t==='perf')return HAB[i]+' '+v.part;
 if(t==='ari')return ES.estar.pres[i]+' '+v.ger;
};
const up=s=>s.charAt(0).toUpperCase()+s.slice(1);
const esS=a=>{const s=a.filter(Boolean).join(' ').replace(/\s+/g,' ').trim();return up(s)+'.'};
const aDat=s=>('a '+s).replace(/^a el /,'al ');
/* léxico */
const NAMES=['Dabid','Miren','Mikel','Ane','Jon','Amaia','Leire'];
const PROF=[['irakaslea','profesor/a'],['ikaslea','estudiante'],['medikua','médico/a'],['sukaldaria','cocinero/a'],['idazlea','escritor/a'],['langilea','trabajador/a']];
const SUBJ=[{a:'ama',e:'amak',d:'amari',es:'mamá'},{a:'aita',e:'aitak',d:'aitari',es:'papá'},{a:'anaia',e:'anaiak',d:'anaiari',es:'el hermano'},{a:'arreba',e:'arrebak',d:'arrebari',es:'la hermana'},{a:'laguna',e:'lagunak',d:'lagunari',es:'el amigo'},
{a:'Mikel',e:'Mikelek',d:'Mikeli',es:'Mikel'},{a:'Miren',e:'Mirenek',d:'Mireni',es:'Miren'},{a:'Jon',e:'Jonek',d:'Joni',es:'Jon'},{a:'Ane',e:'Anek',d:'Aneri',es:'Ane'}];
const P=(a,i,t,es,et)=>({a,i,t,es,et}); // abs, inesivo, alativo, es en, es a
const PL={etxea:['etxea','etxean','etxera','en casa','a casa'],eskola:['eskola','eskolan','eskolara','en la escuela','a la escuela'],mendia:['mendia','mendian','mendira','en el monte','al monte'],sukaldea:['sukaldea','sukaldean','sukaldera','en la cocina','a la cocina'],
plaza:['plaza','plazan','plazara','en la plaza','a la plaza'],kalea:['kalea','kalean','kalera','en la calle','a la calle'],lana:['lana','lanean','lanera','en el trabajo','al trabajo'],parkea:['parkea','parkean','parkera','en el parque','al parque'],
denda:['denda','dendan','dendara','en la tienda','a la tienda'],ospitalea:['ospitalea','ospitalean','ospitalera','en el hospital','al hospital'],liburutegia:['liburutegia','liburutegian','liburutegira','en la biblioteca','a la biblioteca'],
jatetxea:['jatetxea','jatetxean','jatetxera','en el restaurante','al restaurante'],herria:['herria','herrian','herrira','en el pueblo','al pueblo'],
Elizondo:['Elizondo','Elizondon','Elizondora','en Elizondo','a Elizondo'],Iruñea:['Iruñea','Iruñean','Iruñera','en Pamplona','a Pamplona'],Bilbo:['Bilbo','Bilbon','Bilbora','en Bilbao','a Bilbao'],Donostia:['Donostia','Donostian','Donostiara','en San Sebastián','a San Sebastián'],Baztan:['Baztan','Baztanen','Baztanera','en Baztán','a Baztán']};
const pl=k=>{const p=PL[k];return{a:p[0],i:p[1],t:p[2],ei:p[3],et:p[4],k}};
const CIT=['Elizondo','Iruñea','Bilbo','Donostia','Baztan'];
const KOA={Elizondo:['Elizondokoa','Elizondokoak','de Elizondo'],Iruñea:['Iruñekoa','Iruñekoak','de Pamplona'],Bilbo:['Bilbokoa','Bilbokoak','de Bilbao'],Donostia:['Donostiakoa','Donostiakoak','de San Sebastián'],Baztan:['Baztangoa','Baztangoak','de Baztán']};
const L_EGON=['etxea','eskola','mendia','sukaldea','plaza','kalea','lana','parkea','denda','ospitalea','liburutegia','jatetxea','herria'].concat(CIT);
const L_JOAN=['etxea','eskola','mendia','plaza','kalea','lana','parkea','denda','ospitalea','liburutegia','jatetxea','herria'].concat(CIT);
const L_ETORRI=['etxea','eskola','lana','plaza','jatetxea','liburutegia','Elizondo','Iruñea','Bilbo'];
const MOV=[{k:'joan',es:'ir',hab:'joaten',fut:'joango',part:'joan',tze:'joateko',pl:L_JOAN},{k:'etorri',es:'venir',hab:'etortzen',fut:'etorriko',part:'etorri',tze:'etortzeko',pl:L_ETORRI}];
const O=(eu,es)=>({eu,es});
const NV=[
{k:'jan',es:'comer',hab:'jaten',fut:'jango',part:'jan',tze:'jateko',o:[O('ogia','el pan'),O('gazta','el queso'),O('arraultza','el huevo'),O('haragia','la carne'),O('arraina','el pescado'),O('sagarra','la manzana'),O('patata','la patata'),O('arroza','el arroz'),O('fruta','la fruta'),O('tomatea','el tomate'),O('pintxoa','el pincho')]},
{k:'edan',es:'beber',hab:'edaten',fut:'edango',part:'edan',tze:'edateko',o:[O('ura','el agua'),O('esnea','la leche'),O('kafea','el café'),O('ardoa','el vino'),O('sagardoa','la sidra')]},
{k:'irakurri',es:'leer',hab:'irakurtzen',fut:'irakurriko',part:'irakurri',tze:'irakurtzeko',o:[O('liburua','el libro'),O('egunkaria','el periódico'),O('gutuna','la carta'),O('mezua','el mensaje')]},
{k:'ikusi',es:'ver',hab:'ikusten',fut:'ikusiko',part:'ikusi',tze:'ikusteko',o:[O('filma','la película'),O('telebista','la tele'),O('mendia','el monte'),O('katua','el gato'),O('txakurra','el perro')]},
{k:'ikasi',es:'estudiar',hab:'ikasten',fut:'ikasiko',part:'ikasi',tze:'ikasteko',o:[O('euskara','el euskera'),O('gaztelania','el castellano'),O('ingelesa','el inglés'),O('matematika','las matemáticas')]},
{k:'erosi',es:'comprar',hab:'erosten',fut:'erosiko',part:'erosi',tze:'erosteko',o:[O('ogia','el pan'),O('esnea','la leche'),O('liburua','el libro'),O('sagarra','la manzana'),O('gazta','el queso'),O('arraina','el pescado'),O('egunkaria','el periódico')]},
{k:'idatzi',es:'escribir',hab:'idazten',fut:'idatziko',part:'idatzi',tze:'idazteko',o:[O('gutuna','la carta'),O('mezua','el mensaje')]},
{k:'entzun',es:'escuchar',hab:'entzuten',fut:'entzungo',part:'entzun',tze:'entzuteko',o:[O('musika','la música'),O('irratia','la radio'),O('abestia','la canción')]}
];
const ESV={jan:'comer',edan:'beber',irakurri:'leer',ikusi:'ver',ikasi:'estudiar',erosi:'comprar',idatzi:'escribir',entzun:'escuchar',joan:'ir',etorri:'venir'};
const GUS1=[O('kafea','el café'),O('ogia','el pan'),O('gazta','el queso'),O('sagarra','la manzana'),O('musika','la música'),O('mendia','el monte'),O('euskara','el euskera'),O('filma','la película'),O('telebista','la tele'),O('arraina','el pescado'),O('fruta','la fruta')];
const GUSP=[O('sagarrak','las manzanas'),O('liburuak','los libros'),O('filmak','las películas'),O('txakurrak','los perros'),O('katuak','los gatos'),O('mendiak','los montes'),O('animaliak','los animales'),O('patatak','las patatas')];
const GIVE=[O('liburua','el libro'),O('ogia','el pan'),O('kafea','el café'),O('gutuna','la carta'),O('mezua','el mensaje'),O('sagarra','la manzana')];
const WANT=[O('kafea','el café'),O('ura','el agua'),O('ogia','el pan'),O('esnea','la leche'),O('liburua','el libro')];
const TP=[['egunero','todos los días'],['goizean','por la mañana'],['arratsaldean','por la tarde'],['gauean','por la noche']];
const TF=[['bihar','mañana'],['etzi','pasado mañana'],['laster','pronto'],['datorren astean','la semana que viene']];
const ADJ=[['gaixorik','enfermo/a','enfermos/as'],['nekatuta','cansado/a','cansados/as'],['pozik','contento/a','contentos/as']];
/* sujeto */
function subj(kind){ // kind: 'a' absolutivo, 'e' ergativo
  if(Math.random()<.65){const i=rnd(6);return{i,pron:true,eu:(kind==='e'?ERG:PRO)[i],es:i===2?rn(['él','ella']):ESI[i]}}
  const o=rn(SUBJ);return{i:2,pron:false,o,eu:o[kind],es:o.es};
}
const ex=(arr,i)=>Math.random()<.4?[rn(arr.filter((_,j)=>j!==i))]:[];
const time=(arr,p)=>Math.random()<p?rn(arr):null;
const T={};
T.ident=()=>{let sb=subj('a');while(sb.i>=3)sb=subj('a');const i=sb.i,nm=Math.random()<.4,x=ex(IZ,i);
 if(nm&&sb.pron&&i<2){const n=rn(NAMES);return{t:[sb.eu,n,IZ[i]],es:esS([sb.es,esv('ser','pres',i),n]),tip:'izan: identidad. «'+up(sb.eu)+' … '+IZ[i]+'». El verbo va al final.',x}}
 const p=rn(PROF);return{t:[sb.eu,p[0],IZ[i]],es:esS([sb.es,esv('ser','pres',i),p[1]]),tip:'izan + profesión: «'+p[0]+'» (sin «un/una»). El verbo va al final.',x}};
T.origin=()=>{const s=subj('a'),c=rn(CIT),pl=s.i>=3,k=KOA[c];
 return{t:[s.eu,pl?k[1]:k[0],IZ[s.i]],es:esS([s.es,esv('ser','pres',s.i),k[2]]),tip:'-ko = «de» (origen): '+c+' → '+(pl?k[1]:k[0])+(pl?' (plural -ak)':'')+'. Después, izan: '+IZ[s.i]+'.',x:ex(IZ,s.i)}};
T.egon=()=>{const s=subj('a'),p=pl(rn(L_EGON)),neg=Math.random()<.25;
 const t=neg?[s.eu,'ez',EG[s.i],p.i]:[s.eu,p.i,EG[s.i]];
 return{t,es:esS([s.es,neg?'no':'',esv('estar','pres',s.i),p.ei]),tip:'egon: lugar. '+p.a+' + n → '+p.i+'. '+(neg?'Negación: «ez» justo antes del auxiliar ('+EG[s.i]+').':'«'+EG[s.i]+'» = '+(s.pron?s.es:'él/ella')+' está.'),x:ex(EG,s.i)}};
T.bizi=()=>{const s=subj('a'),p=pl(rn(CIT));
 return{t:[s.eu,p.i,'bizi',IZ[s.i]],es:esS([s.es,esv('vivir','pres',s.i),p.ei]),tip:'bizi + izan ('+IZ[s.i]+'). '+p.a+' + n → '+p.i+'.',x:ex(IZ,s.i)}};
T.joan_hab=()=>{const s=subj('a'),m=rn(MOV),p=pl(rn(m.pl)),tm=time(TP,.6);
 return{t:[tm&&tm[0],s.eu,p.t,m.hab,IZ[s.i]].filter(Boolean),es:esS([tm&&tm[1],s.es,esv(ESV[m.k],'pres',s.i),p.et]),tip:m.k+' → '+m.hab+' (hábito) + izan ('+IZ[s.i]+'). -ra = «a, hacia»: '+p.a+' → '+p.t+'.',x:ex(IZ,s.i)}};
T.nork=()=>{const s=subj('e'),v=rn(NV),o=rn(v.o),tm=time(TP,.5);
 return{t:[tm&&tm[0],s.eu,o.eu,v.hab,UK[s.i]].filter(Boolean),es:esS([tm&&tm[1],s.es,esv(ESV[v.k],'pres',s.i),o.es]),tip:'Con objeto ('+o.eu+') el sujeto lleva -k: '+s.eu+'. '+v.k+' → '+v.hab+' + '+UK[s.i]+'.',x:ex(UK,s.i)}};
T.ari=()=>{const s=subj('a'),v=Math.random()<.8?rn(NV):rn(MOV);let obj,eu,es;
 if(v.o){const o=rn(v.o);eu=o.eu;es=o.es}else{const p=pl(rn(v.pl));eu=p.t;es=p.et}
 return{t:['orain',s.eu,eu,v.hab,'ari',IZ[s.i]],es:esS(['ahora',s.es,esv(ESV[v.k],'ari',s.i),es]),tip:'ari izan = estar haciendo: '+v.hab+' + ari + izan ('+IZ[s.i]+').',x:ex(IZ,s.i)}};
T.gus=()=>{const i=rnd(6),noun=Math.random()<.35,d=noun?rn(SUBJ):null,plu=Math.random()<.35,o=rn(plu?GUSP:GUS1),k=noun?2:i;
 const dat=noun?d.d:DAT[i],aux=(plu?ZAP:ZA)[k],pre=noun?aDat(d.es)+' le':[ 'a mí me','a ti te',rn(['a él le','a ella le']),'a nosotros nos','a vosotros os','a ellos les'][i];
 return{t:[dat,o.eu,'gustatzen',aux],es:esS([pre,plu?'gustan':'gusta',o.es]),tip:'-ri = a quién ('+dat+'). El auxiliar concuerda con lo que gusta: '+(plu?'varias cosas → '+aux:'una cosa → '+aux)+'.',x:ex(plu?ZAP:ZA,k)}};
T.nahi=()=>{const s=subj('e'),v=Math.random()<.5;
 if(v){const n=rn(NV.filter(x=>x.k==='ikasi'||x.k==='irakurri'||x.k==='jan'||x.k==='edan')),o=rn(n.o);return{t:[s.eu,o.eu,n.part,'nahi',UK[s.i]],es:esS([s.es,esv('querer','pres',s.i),esv(ESV[n.k],'inf'),o.es]),tip:'nahi dut + verbo en participio ('+n.part+'). Nahi izan usa ukan: '+UK[s.i]+'.',x:ex(UK,s.i)}}
 const o=rn(WANT);return{t:[s.eu,o.eu,'nahi',UK[s.i]],es:esS([s.es,esv('querer','pres',s.i),o.es]),tip:'nahi + ukan ('+UK[s.i]+'). El sujeto lleva -k.',x:ex(UK,s.i)}};
T.behar=()=>{const s=subj('e'),m=rn(MOV),p=pl(rn(m.pl));
 return{t:[s.eu,p.t,m.part,'behar',UK[s.i]],es:esS([s.es,esv('tener','pres',s.i),'que',esv(ESV[m.k],'inf'),p.et]),tip:'behar + ukan ('+UK[s.i]+'): participio + behar + auxiliar. '+p.a+' → '+p.t+'.',x:ex(UK,s.i)}};
T.eman=()=>{const s=subj('e'),d=rn(SUBJ.filter(x=>x.es!==s.es)),o=rn(GIVE),tm=time(TP,.35);
 return{t:[tm&&tm[0],s.eu,d.d,o.eu,'ematen',DI[s.i]].filter(Boolean),es:esS([tm&&tm[1],s.es,'le',esv('dar','pres',s.i),o.es,aDat(d.es)]),tip:d.a+' + ri = '+d.d+' (a quién). '+DI[s.i]+' = '+(s.pron?s.es:'él/ella')+' se lo da.',x:ex(DI,s.i)}};
T.past_nor=()=>{const s=subj('a'),r=rnd(3);
 if(r===0){const p=pl(rn(L_EGON));return{t:['atzo',s.eu,p.i,EGP[s.i]],es:esS(['ayer',s.es,esv('estar','imp',s.i),p.ei]),tip:'egon en pasado: '+EGP[s.i]+'. '+p.a+' + n → '+p.i+'.',x:ex(EGP,s.i)}}
 if(r===1){const a=rn(ADJ);return{t:['atzo',s.eu,a[0],IZP[s.i]],es:esS(['ayer',s.es,esv('estar','imp',s.i),s.i>=3?a[2]:a[1]]),tip:'izan en pasado: '+IZP[s.i]+'. Marcador: atzo (ayer).',x:ex(IZP,s.i)}}
 const m=rn(MOV),p=pl(rn(m.pl));return{t:['atzo',s.eu,p.t,m.part,IZP[s.i]],es:esS(['ayer',s.es,esv(ESV[m.k],'pret',s.i),p.et]),tip:'Pasado: participio ('+m.part+') + '+IZP[s.i]+' (izan, porque '+m.k+' no lleva objeto).',x:ex(IZP,s.i)}};
T.past_nork=()=>{const s=subj('e'),v=rn(NV),o=rn(v.o);
 return{t:['atzo',s.eu,o.eu,v.part,UKP[s.i]],es:esS(['ayer',s.es,esv(ESV[v.k],'pret',s.i),o.es]),tip:'Pasado con objeto: participio ('+v.part+') + '+UKP[s.i]+'. El sujeto lleva -k.',x:ex(UKP,s.i)}};
T.perfect=()=>{const s=subj('e');
 if(Math.random()<.4){const sa=subj('a'),m=rn(MOV),p=pl(rn(m.pl));return{t:['gaur',sa.eu,p.t,m.part,IZ[sa.i]],es:esS(['hoy',sa.es,esv(ESV[m.k],'perf',sa.i),p.et]),tip:'«He hecho»: participio + auxiliar en presente ('+IZ[sa.i]+'). Marcador: gaur (hoy).',x:ex(IZ,sa.i)}}
 const v=rn(NV),o=rn(v.o);return{t:['gaur',s.eu,o.eu,v.part,UK[s.i]],es:esS(['hoy',s.es,esv(ESV[v.k],'perf',s.i),o.es]),tip:'«He hecho»: participio ('+v.part+') + auxiliar en presente ('+UK[s.i]+').',x:ex(UK,s.i)}};
T.fut=()=>{const tm=rn(TF),r=rnd(3);
 if(r===0){const s=subj('e'),v=rn(NV),o=rn(v.o);return{t:[tm[0],s.eu,o.eu,v.fut,UK[s.i]],es:esS([tm[1],s.es,esv(ESV[v.k],'fut',s.i),o.es]),tip:'Futuro: '+v.part+' + '+(v.fut.slice(-2)==='go'?'-go':'-ko')+' = '+v.fut+'. Auxiliar en presente ('+UK[s.i]+').',x:ex(UK,s.i)}}
 if(r===1){const s=subj('a'),m=rn(MOV),p=pl(rn(m.pl));return{t:[tm[0],s.eu,p.t,m.fut,IZ[s.i]],es:esS([tm[1],s.es,esv(ESV[m.k],'fut',s.i),p.et]),tip:'Futuro: '+m.part+' + '+(m.fut.slice(-2)==='go'?'-go':'-ko')+' = '+m.fut+'. Auxiliar en presente ('+IZ[s.i]+').',x:ex(IZ,s.i)}}
 const s=subj('a'),p=pl(rn(L_EGON));return{t:[tm[0],s.eu,p.i,'egongo',IZ[s.i]],es:esS([tm[1],s.es,esv('estar','fut',s.i),p.ei]),tip:'egon → egongo (futuro) + izan ('+IZ[s.i]+').',x:ex(IZ,s.i)}};
T.hab_past=()=>{const tm=rn([['txikitan','de pequeño'],['gaztetan','de joven']]);
 if(Math.random()<.5){const s=subj('e'),v=rn(NV),o=rn(v.o);return{t:[tm[0],s.eu,o.eu,v.hab,UKP[s.i]],es:esS([tm[1],s.es,esv(ESV[v.k],'imp',s.i),o.es]),tip:'Pasado habitual: '+v.hab+' + '+UKP[s.i]+'.',x:ex(UKP,s.i)}}
 const s=subj('a'),m=rn(MOV),p=pl(rn(m.pl));return{t:[tm[0],s.eu,p.t,m.hab,IZP[s.i]],es:esS([tm[1],s.es,esv(ESV[m.k],'imp',s.i),p.et]),tip:'Pasado habitual: '+m.hab+' + '+IZP[s.i]+'.',x:ex(IZP,s.i)}};
T.ahal=()=>{if(Math.random()<.55){const s=subj('e'),v=rn(NV),o=rn(v.o);return{t:[s.eu,o.eu,v.part,DZ[s.i]],es:esS([s.es,esv('poder','pres',s.i),esv(ESV[v.k],'inf'),o.es]),tip:'Poder con objeto: participio + '+DZ[s.i]+'.',x:ex(DZ,s.i)}}
 const s=subj('a'),m=rn(MOV),p=pl(rn(m.pl));return{t:[s.eu,p.t,m.part,NT[s.i]],es:esS([s.es,esv('poder','pres',s.i),esv(ESV[m.k],'inf'),p.et]),tip:'Poder sin objeto: participio + '+NT[s.i]+'.',x:ex(NT,s.i)}};
T.asmoa=()=>{const s=subj('e'),tm=rn(TF.filter(x=>x[0]!=='laster'));let eu,es,v;
 if(Math.random()<.5){v=rn(NV);const o=rn(v.o);eu=o.eu;es=o.es}else{v=rn(MOV);const p=pl(rn(v.pl));eu=p.t;es=p.et}
 return{t:[tm[0],s.eu,eu,v.tze,'asmoa',UK[s.i]],es:esS([tm[1],s.es,esv('pensar','pres',s.i),esv(ESV[v.k],'inf'),es]),tip:'-tzeko asmoa dut = tengo la intención de: '+v.tze+' + asmoa + '+UK[s.i]+'.',x:ex(UK,s.i)}};
T.hasi=()=>{const s=subj('a'),v=rn(NV),o=rn(v.o);
 return{t:[s.eu,o.eu,v.hab,'hasi',IZ[s.i]],es:esS([s.es,HAB[s.i],'empezado a',esv(ESV[v.k],'inf'),o.es]),tip:'-tzen hasi naiz = he empezado a: '+v.hab+' + hasi + izan ('+IZ[s.i]+').',x:ex(IZ,s.i)}};
const LKP={gaixorik:['etxea','ospitalea'],nekatuta:['etxea','kalea'],pozik:['parkea','kalea','etxea','jatetxea']};
T.lako=()=>{const i=rnd(6),a=rn(ADJ),p=pl(rn(LKP[a[0]]));
 return{t:[a[0],ELA[i],p.i,EG[i]],es:esS([esv('estar','pres',i),p.ei,'porque',esv('estar','pres',i),i>=3?a[2]:a[1]]),tip:'-lako = porque: '+EG[i]+' + lako = '+ELA[i]+'. Primero el motivo, luego el resultado.',x:ex(EG,i)}};
/* API */
G.T=T;
G.gen=(names,n)=>{const out=[],seen=new Set();let tries=0;
 while(out.length<n&&tries++<n*25){const r=T[rn(names)]();if(!r)continue;const key=r.t.join(' ');if(seen.has(key))continue;seen.add(key);out.push(sq({es:r.es,t:r.t,x:r.x||[],tip:r.tip}))}
 return out};
G.adv=()=>S.level==='a2'||S.a1test===1||!!window.FORCEPAST||(typeof SES!=='undefined'&&SES&&SES.cfg&&!!SES.cfg.test);
G.pool=()=>{const L=S.lessons||{},d=id=>L[id]!=null,v=G.adv(),a=['ident'];
 if(v||d('l4'))a.push('egon','bizi','joan_hab','origin');
 if(v||d('l7'))a.push('nork'); if(v||d('l8'))a.push('ari');
 if(v||d('l9'))a.push('gus','nahi','behar'); if(v||d('b2'))a.push('eman');
 if(v||d('l10'))a.push('past_nor'); if(v||d('t2'))a.push('past_nork','perfect'); if(v||d('t3'))a.push('fut');
 if(S.level==='a2'){a.push('hab_past','ahal','asmoa','hasi','lako')}
 return a};
G.LGEN={l2:['ident'],l4:['egon','bizi','joan_hab','origin'],l7:['nork'],l8:['nork','joan_hab','ari'],l9:['gus','nahi','behar'],l10:['past_nor'],t2:['past_nork','perfect'],t3:['fut'],b2:['eman'],
 r1:['nork','egon','joan_hab','bizi'],r2:['nork','gus','eman','egon'],b3:['gus'],b9:['past_nor'],b10:['hab_past'],b13:['ahal'],e2:['asmoa','fut'],e3:['hasi'],b6:['lako'],r3:['gus','eman','nork','past_nork'],r4:['past_nor','past_nork','fut','perfect']};
Object.keys(G.LGEN).forEach(id=>{const Ls=LESSONS.find(x=>x.id===id);if(!Ls)return;const old=Ls.make;
 Ls.make=()=>{const qs=old();const nb=qs.filter(q=>q.k==='build').length;if(!nb)return qs;
  const g=G.gen(G.LGEN[id],nb);if(g.length<nb)return qs;let gi=0;return qs.map(q=>q.k==='build'?g[gi++]:q)}});
/* frases fijas: no mostrar pasado/futuro antes de tiempo */
const TIMEY=/^(atzo|bihar|etzi|laster|nuen|zenuen|zuen|genuen|zenuten|zuten|nintzen|zinen|zen|ginen|zineten|ziren|nengoen|nindoan|zidan|\w*(iko|ngo))$/;
const sentOk=s=>G.adv()||(S.lessons&&S.lessons.t3!=null)||!s.t.some(w=>TIMEY.test(w));
const _bq=buildQs;
buildQs=function(n){
 const A2=S.level==='a2',nf=Math.max(1,Math.round(n*.25));
 const fixed=pick((A2?SENT2:SENT.filter(sentOk)),nf).map(s=>sq({es:s.es,t:s.t,x:s.x,tip:s.tip}));
 const g=G.gen(G.pool(),n-fixed.length);
 return shuffle(fixed.concat(g)).slice(0,n)};
})();
