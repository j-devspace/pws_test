// PWA관련 스크립트

self.addEventListener('install', event => {
    WriteLog('[Service Worker] 설치됨');
    event.waitUntil(
        caches.open('pwa-cache-v1').then(cache => {
            return cache.addAll([
                '/index.html'
            ]);
        })
    );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

