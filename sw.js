// 離線快取：程式與資料走「先網路、失敗用快取」，經文 JSON 走「先快取」（讀過的章節離線可讀）
const V="bt-v14";
const CORE=["./","index.html","manifest.json","icon-180.png","data/books.js","data/eras.js","data/events-ot.js","data/events-nt.js","data/pawson.js","data/pawson-zonglan.js","data/pawson-framework.js","data/keller.js","data/issues.js","data/keller-audio.js","data/en/ev-ot1.js","data/en/ev-ot2.js","data/en/ev-nt.js","data/en/pawson.js","data/en/rest.js","data/en/apply.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.origin!==location.origin)return;
  if(u.pathname.includes("/bible/")){
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put(e.request,c));return res})));
    return;
  }
  e.respondWith(fetch(e.request).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put(e.request,c));return res}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});
