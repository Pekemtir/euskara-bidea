/* ===== v36: números, alfabeto, escucha, reto diario, tema ===== */
const EU_U=['zero','bat','bi','hiru','lau','bost','sei','zazpi','zortzi','bederatzi','hamar','hamaika','hamabi','hamahiru','hamalau','hamabost','hamasei','hamazazpi','hemezortzi','hemeretzi'];
const EU_V={20:'hogei',40:'berrogei',60:'hirurogei',80:'laurogei'};
const EU_HUND=['','ehun','berrehun','hirurehun','laurehun','bostehun','seiehun','zazpiehun','zortziehun','bederatziehun'];
function euUnder100(n){if(n<=19)return EU_U[n];const b=Math.floor(n/20)*20,r=n-b;return r===0?EU_V[b]:EU_V[b]+'ta '+EU_U[r]}
function euNum(n){if(n<20)return EU_U[n];const parts=[],t=Math.floor(n/1000),r=n%1000;if(t>0)parts.push(t===1?'mila':euNum(t)+' mila');const h=Math.floor(r/100),u=r%100;if(h>0)parts.push(EU_HUND[h]);if(u>0)parts.push(euUnder100(u));return parts.length===1?parts[0]:parts.slice(0,-1).join(' ')+' eta '+parts[parts.length-1]}
const EU_ABC=[['a','a'],['b','be'],['d','de'],['e','e'],['f','efe'],['g','ge'],['h','hatxe'],['i','i'],['j','jota'],['k','ka'],['l','ele'],['m','eme'],['n','ene'],['ñ','eñe'],['o','o'],['p','pe'],['r','erre'],['s','ese'],['t','te'],['u','u'],['x','ixa'],['z','zeta']];
/* números dictados: escribe la cifra */
function numQs(n){
  const lim=S.level==='a2'?[[21,99],[100,999],[1000,2999]]:[[1,20],[11,99],[21,99]];
  return Array.from({length:n||6},(_,i)=>{
    const r=lim[i%lim.length],v=r[0]+rnd(r[1]-r[0]+1),w=euNum(v);
    return {k:'type',kind:'Zenbakiak · números',p:'Escucha y escribe la cifra',hint:'Pulsa 🔊 (o 🐢 para ir más despacio) y escribe el número con cifras.',say:w,hide:1,auto:1,ans:String(v),alts:[],wid:null,
      expl:`<b>${esc(w)}</b> = ${v}`,why:`<b>${esc(w)}</b> = ${v}. Sistema vigesimal: hogei=20, berrogei=40, hirurogei=60, laurogei=80.`,rev:`${esc(w)} = ${v}`};
  });
}
function numRevQs(n){
  return Array.from({length:n||4},()=>{const v=1+rnd(S.level==='a2'?999:99),w=euNum(v);
    const o=new Set([w]);while(o.size<4)o.add(euNum(Math.max(1,v+(rnd(2)?1:-1)*(1+rnd(12)))));
    return {k:'choice',kind:'Zenbakiak · números',p:String(v),hint:'¿Cómo se dice en euskera?',opts:shuffle([...o]),ans:w,say:w,expl:`${v} = <b>${esc(w)}</b>`,why:`${v} = <b>${esc(w)}</b>`,rev:`${v} = ${esc(w)}`}});
}
/* deletreo: oye el nombre de la letra y elígela */
function abcQs(n){
  return pick(EU_ABC,n||6).map(L=>{const o=shuffle(EU_ABC.filter(x=>x[0]!==L[0])).slice(0,3).map(x=>x[0].toUpperCase());
    return {k:'choice',kind:'Alfabetoa · deletreo',p:'¿Qué letra es?',hint:'Escucha el nombre de la letra.',say:L[1],hide:1,auto:1,opts:shuffle(o.concat(L[0].toUpperCase())),ans:L[0].toUpperCase(),expl:`<b>${L[1]}</b> = ${L[0].toUpperCase()}`,why:`La letra <b>${L[0].toUpperCase()}</b> se llama «${L[1]}».`,rev:`${L[0].toUpperCase()} = ${L[1]}`}});
}
/* escucha y elige: oye la palabra, elige el significado */
function listenQs(n){
  const pool=KW();
  return pickWords(pool,n||6).map(w=>{const o=shuffle(pool.filter(x=>x.es!==w.es)).slice(0,3).map(x=>x.es);
    return {k:'choice',kind:'Entzun · escucha',p:'¿Qué significa?',hint:'Escucha y elige el significado.',say:w.eu,hide:1,auto:1,opts:shuffle(o.concat(w.es)),ans:w.es,wid:w.id,expl:`<b>${esc(w.eu)}</b> = ${esc(w.es)}`,why:`<b>${esc(w.eu)}</b> = ${esc(w.es)}`,rev:`${esc(w.eu)} = ${esc(w.es)}`}});
}
function dictQs(n){
  return pickWords(KW(),n||5).map(w=>({k:'type',kind:'Diktatua · dictado',p:'Escucha y escribe en euskera',hint:'Pulsa 🔊 y escribe la palabra.',say:w.eu,hide:1,auto:1,ans:w.eu,wid:w.id,expl:`<b>${esc(w.eu)}</b> = ${esc(w.es)}`,why:`<b>${esc(w.eu)}</b> = ${esc(w.es)}`,rev:`${esc(w.eu)} = ${esc(w.es)}`}));
}
/* reto diario: determinista por fecha, un bonus de XP una vez al día */
function dailyQs(){
  const d=new Date(),seed=d.getFullYear()*372+d.getMonth()*31+d.getDate();let s=seed;
  const old=Math.random;Math.random=()=>{s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff};
  let qs;try{qs=shuffle(vocabQs(KW(),3).concat(listenQs(2),numQs(2),conjQs(pick(knownVerbs(),2),1)))}finally{Math.random=old}
  return qs;
}
const todayKey=()=>{const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()};
const dailyDone=()=>S.dailyDay===todayKey();
/* código de profesor (hash, no legible en el HTML) */
const h32=s=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36)};
const TKEY='4dcmnv';
/* tema: dark (pizarra) | light | auto */
function applyTheme(){
  const t=S.theme||'dark';let light=t==='light';
  if(t==='auto'){try{light=matchMedia('(prefers-color-scheme: light)').matches}catch(e){}}
  document.body.classList.toggle('th-light',light);
  const m=document.querySelector('meta[name=theme-color]');if(m)m.content=light?'#EDF1EC':'#1E2B27';
}
try{matchMedia('(prefers-color-scheme: light)').addEventListener('change',applyTheme)}catch(e){}
document.addEventListener('DOMContentLoaded',applyTheme);applyTheme();
