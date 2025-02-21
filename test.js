importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

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

// messaging.onBackgroundMessage((payload) => {
//   console.log("백그라운드 메시지 수신:", payload);

//   self.registration.showNotification(payload.data.title, {
//     body: payload.data.body,
//     icon: "/firebase-logo.png"
//   });
// });

// messaging.onMessage((payload) => {
//     console.log("포그라운드 메시지 수신:", payload);
  
//     self.registration.showNotification(payload.data.title, {
//       body: payload.data.body,
//       icon: "/firebase-logo.png"
//     });
//   });


  
const isGithubUrl = 0 <= location.origin.indexOf("github");



// PWA관련 스크립트
self.addEventListener('install', event => {
    console.log('[Service Worker] 설치됨');
    event.waitUntil(
        caches.open('pwa-cache-v1').then(cache => {
            let serviceWorkerCache = "/index.html";

            // TODO: github일때 추가
            if(true == isGithubUrl) {
                serviceWorkerCache = "/pws_test";
            }

            return cache.addAll([
                serviceWorkerCache
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