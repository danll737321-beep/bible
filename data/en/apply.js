// Switches all data to English when the interface language is English (localStorage bt-ui = "en"). Runs before the main script.
(function(){
  let en=false;try{en=localStorage.getItem("bt-ui")==="en"}catch(e){}
  window.UI_EN=en;if(!en)return;
  const W=window;document.documentElement.lang="en";
  const srcEN=s=>{if(!s)return s;let r=String(s);(W.EN_SRCMAP||[]).forEach(([a,b])=>{r=r.split(a).join(b)});
    return r.replace(/第(\d+)章/g,"ch. $1").replace(/第(\d+)–(\d+)講/g,"Lectures $1–$2").replace(/第(\d+)講/g,"Lecture $1").replace(/〈/g," \"").replace(/〉/g,"\"").replace(/（/g," (").replace(/）/g,")").replace(/，/g,", ").replace(/；/g,"; ").replace(/、/g,", ").replace(/：/g,": ").replace(/\s+/g," ").replace(/\( /g,"(").replace(/ ,/g,",").trim()};
  W.srcEN=srcEN;
  const tg=t=>t&&(W.EN_TG[t]||t);
  W.BOOKS.forEach(b=>{b[1]=b[2]});
  W.ERAS.forEach((r,i)=>Object.assign(r,W.EN_ERAS[i]||{}));
  Object.values(W.THEMES).forEach(t=>{t.n=t.en});
  (W.DEFAULT_PASTORS||[]).forEach(p=>{const x=W.EN_PASTORS[p.id];if(x){p.n=x.n;p.note=x.note}});
  W.EVENTS.forEach(e=>{const t=W.EN_EV[e.id];e.t=e.en||e.t;
    if(t){["d","p","bg","c","f"].forEach(k=>{if(t[k])e[k]=t[k]});(e.ty||[]).forEach((y,i)=>{if(t.ty&&t.ty[i])y.n=t.ty[i]});(e.v||[]).forEach(v=>{if(t.v&&t.v[v.w])v.s=t.v[v.w]})}
    (e.v||[]).forEach(v=>{if(v.src)v.src=srcEN(v.src)});
    if(W.EN_ALT[e.id])e.alt=W.EN_ALT[e.id]});
  for(const [k,v] of Object.entries(W.PAWSON||{})){const x=W.EN_PAWSON[k];if(x){v.s=x.s;if(x.tg)v.tg=x.tg}else v.tg=tg(v.tg);v.src=srcEN(v.src)}
  (W.PAWSON_ERAS||[]).forEach((p,i)=>{const x=W.EN_PAWSON_ERAS[i];if(x)Object.assign(p,x)});
  const Z=W.EN_ZL;
  for(const [k,v] of Object.entries(W.ZL_LECTURES||{}))if(Z.lectures[k])v.n=Z.lectures[k];
  for(const [k,v] of Object.entries(W.ZL_ERA||{}))if(Z.era[k])v.s=Z.era[k];
  for(const [k,v] of Object.entries(W.ZL_VIEWS||{})){if(Z.views[k])v.s=Z.views[k];v.tg=tg(v.tg)}
  (W.ZL_TY||[]).forEach(t=>{const n=Z.ty[t.from+">"+t.to];if(n)t.n=n});
  const F=W.EN_PF;W.PF_SRC.n=F.src;
  (W.PF_PERIODS||[]).forEach(p=>{const x=F.periods[p.id];if(!x)return;["n","sub","y","ev","who","lead","leadW","s","world"].forEach(k=>{if(x[k]!=null)p[k]=x[k]});(p.books||[]).forEach((b,i)=>{if(x.books&&x.books[i])b[1]=x.books[i]})});
  ["heb","en"].forEach(k=>(W.PF_CANON[k]||[]).forEach((g,i)=>{const x=F.canon[k][i];if(!x)return;g.n=x.n;g.note=x.note;g.b.forEach(b=>{if(b[1])b[1]=(x.alt||{})[b[0]]||""})}));
  W.PF_PRINCIPLES.splice(0,W.PF_PRINCIPLES.length,...F.principles);W.PF_GEO.splice(0,W.PF_GEO.length,...F.geo);
  const K=W.EN_KELLER;
  (W.KELLER_ACTS||[]).forEach((a,i)=>Object.assign(a,K.acts[i]||{}));
  for(const [k,v] of Object.entries(W.KELLER_ERA||{})){if(!v)continue;const x=K.era[k];if(x){v.tb=x.tb;v.s=x.s}v.src=srcEN(v.src)}
  for(const [k,v] of Object.entries(W.KELLER_VIEWS||{})){if(K.views[k])v.s=K.views[k];v.src=srcEN(v.src)}
  (W.ISSUES||[]).forEach(x=>{const y=W.EN_ISSUES[x.id];if(!y)return;x.n=y.n;x.q=y.q;x.agree=y.agree;x.differ=y.differ;
    if(x.p){if(y.p)x.p.s=y.p;x.p.src=srcEN(x.p.src)}if(x.k){if(y.k)x.k.s=y.k;x.k.src=srcEN(x.k.src)}
    x.o.forEach(o=>{if(y.o&&y.o[o.w])o.s=y.o[o.w];o.src=srcEN(o.src)})});
})();
