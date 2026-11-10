'use strict';
const PREFIX = 'cahier-ifmem:' + self.registration.scope + ':';
const CACHE = PREFIX + '8eb1fcbada7a5be85a30';
const FILES = ["index.144x144.png", "index.180x180.png", "index.512x512.png", "index.apple-touch-icon.png", "index.audio.position.worklet.js", "index.audio.worklet.js", "index.html", "index.icon.png", "index.js", "index.manifest.json", "index.offline.html", "index.pck", "index.png", "index.wasm"];
self.addEventListener('message', event => {
  if (event.data === 'claim') event.waitUntil(self.clients.claim());
});
self.addEventListener('install', event => {
  // A version becomes available only when every required file is cached.
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES.map(path => new Request(path,{cache:'reload'})))));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(PREFIX) && name !== CACHE) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(event.request.mode === 'navigate' ? 'index.html' : event.request);
    if (cached) return cached;
    return fetch(event.request);
  })());
});
