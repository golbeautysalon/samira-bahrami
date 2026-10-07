const CACHE='samira-bahrami-pwa-v3-install-wizard';
const LOCAL=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./images/cover.jpg", "./images/gol-cube.gif", "./images/gol-logo.png", "./images/last-logo.jpg", "./images/page01.jpg", "./images/page02.jpg", "./images/page03.jpg", "./images/page04.jpg", "./images/page05.jpg", "./images/page06.jpg", "./images/page07.jpg", "./images/page08.jpg", "./images/page09.jpg", "./images/page10.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(LOCAL))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{
 e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(resp=>{
   const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return resp;
 })));
});
