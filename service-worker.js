importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");


const firebaseConfig = {
  apiKey: "AIzaSyBUTB7eB75zqP2ER1xG7WDRldh9cS-rGy8",
  authDomain: "je-test-e14c9.firebaseapp.com",
  projectId: "je-test-e14c9",
  storageBucket: "je-test-e14c9.firebasestorage.app",
  messagingSenderId: "565490563935",
  appId: "1:565490563935:web:b73c5948df8f14b45794ea",
  measurementId: "G-137ECMGPH2"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.title;
  const notificationOptions = {
      body: payload.body
      // icon: payload.icon
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});



// PWA관련 스크립트

self.addEventListener('install', event => {
    console.log('[Service Worker] 설치됨');
    event.waitUntil(
        caches.open('pwa-cache-v1').then(cache => {
            return cache.addAll([
                '/pws_test/index.html'
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

