const serviceAccount = {
    "type": "service_account",
    "project_id": "je-test-e14c9",
    "private_key_id": "d0710b90161725fd3b7ad39f281f42655f34867d",
    "private_key": "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDa1ameSdAFUft8/7WkHkXw/CK1PW4QW3hJzq2j+AphyYYqc83JMUbLQAmJXmBg616AAoKoe90DWkFcNkbrefmJM9kJSiMs79BQxrR2ObjK1qIygbzmiqeu49SV0wdjXnDYqsLBJORVmCrIDuKdaa3/dJsTUqYwfjD1ONNY+R4S4LVxf3k0gkCY7hifZiJ5Hx915EZNkEmcu6S3tMLLEcPkjujYM3/FY51r/bjG9hnVmMH2UJa26xWTeoLm41IKgO7klGPevDgBh/i9oa7kT6KL5KYnF++ltEUD22JJDrkSPGFQf/bqEkq9dTJzqlZvyUsd+V6TrKwMmgm+ZhjL7EJPAgMBAAECggEAGj1hJP7Fd8Mt0ajjweBzaIMDMmeW8//T0PMnCls/+3EWVQQlGnPTK6SWatIAjSk2ip5CcStxA+mQSXCkrlr7he0hStDd85HJ5nWnxpQDSXx/tGiuxZdopeWMZG61GxWEQyauoEmT1i5J1Z/wol69ThKlqaUmZ6LUrK16Ai1/jVRgWTrbWQlVytQMkvGARtzWKD9kdhFBt2Y96OA6HEEPy5ADX2SAo7zU/px+AaLsExYmLsuS8IWh07n+Xmh/K0dqAgnkAs8BDivKb7oLJFXELuqjQfY5RTzZw8WPcZrkrporcfr5g6f1KV4nzEeNkJ8bQr4mp+JkHxuDL6V1VlMmkQKBgQDzxp32KA4B+LSUMVImJ0EozNXTtSKwbY8p5bdeuTNgcqaWtElj1TPjqGaBeU3V43/C5p50XI4BFwDx7CUWFNjp2+EB4Q5sn2oBgW7bFPYarOvdRYWn01AXV9eYeKoAShsDlD7veMsdgRypWTRzbNIr3HY7ZqvW6wd7VBD3GD8h+QKBgQDlzt8lxg4OeM/TJZeRPRRNFYfIx2Q2YQHC64EAf8nR6h9YZ08sJJDH6OAXlIOrVWVCylvCgjgVQaLRAG09ee6au1K0Lmyc0HiIC1QU8MbPLmZsBHpnrYg1Vv1Jo+0GZXW0xqHiwFDea/DyUAFlm0tvVbUWJNX2D5zibQxKT4IYhwKBgQDg5vou8u9RdFGtcv9WQdsEuE4CHtgdK0bsoYmWc4jpz3zQBw66cyWHQIMpqm9cCKKDft7rfcRpTv7JM1NX1u30e65QXIFBR6W2M+LBbspK/AQzRYO0vOjkUF+QxKoa0EOx/qA9sRS7aLW3q5wPbXNNkfzmeqfJBVcGuh1Yyl7ciQKBgEjwhTEXEKUVQVlSKC5IBaaFu+hFKRB9b7KvTu2aobMHrVVAzQdEv9NDncS+NaBu5UnysnclH6nXgFb33LRTfCEObayUw5JuNKNxfQl8do2Ru55zOWqo0H+lkZUK+5M5Jsfu97jhs4k1F2/BZwAZ7zJyMJzLqkGEKRZQ6EK5w6AHAoGAHVM6O1LewxAhkm+sSw0Ld21ca1JhyfTT9bG/DSuINWZ23psvxu7H00OYXZU0Z7w1prDtdV7A/fCErGP3QPSQ+Cr9o6ZW3mx72fN4mcYU5d0frskhBLK9Gtj95l57DmbGi0xUvl+PAbCk3GUz/qei5cXZtTWfcH31HjfdxBx6LUE=",
    "client_email": "firebase-adminsdk-fbsvc@je-test-e14c9.iam.gserviceaccount.com",
    "client_id": "107588653504297096705",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40je-test-e14c9.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};
const firebaseConfig = {
    apiKey: "AIzaSyBUTB7eB75zqP2ER1xG7WDRldh9cS-rGy8",
    authDomain: "je-test-e14c9.firebaseapp.com",
    projectId: "je-test-e14c9",
    storageBucket: "je-test-e14c9.firebasestorage.app",
    messagingSenderId: "565490563935",
    appId: "1:565490563935:web:b73c5948df8f14b45794ea",
    measurementId: "G-137ECMGPH2"
};
const private_key_id = "d0710b90161725fd3b7ad39f281f42655f34867d";
const projectId = "565490563935";
const vapId = "BA7k3cK4ONvLAMjsanhDsg6IWCL7y296bvYnmdFXzvPP3_1kLM7M-JcBeS2hXGB28Jd6NXeH8OMYoQKZlqRhldA";


let serviceWorkerJs = "/service-worker.js";
// TODO: github일때 추가
serviceWorkerJs = "/pws_test/service-worker.js";

let serviceWorkerCache = "/index.html";
// TODO: github일때 추가
serviceWorkerCache = "/pws_test/index.html";


function WriteLog(message, obj) {
    const $divResult = document.querySelector('.divResult');
    let logMessage = message;

    if (obj) {
        logMessage = `${logMessage}<br><pre class="txtResult" disabled>${JSON.stringify(obj, null, 4)}</pre>`;
    }

    $divResult.innerHTML = `${$divResult.innerHTML}${logMessage}<hr>`;
    console.log(message, obj || '');
}

// 사이트 초기화
function init() {
    // 알람 허용 여부
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            WriteLog("알림 권한이 허용되었습니다.");
        } else {
            WriteLog("알림 권한이 거부되었습니다.");
        }
    });

    // Service Worker 등록
    window.addEventListener("load", function () {
        //initServiceWorker();
    });
}

function initServiceWorker() {
    WriteLog('Service Worker Start');
    
    if (!("serviceWorker" in navigator)) {
        WriteLog('Service Worker is error');
        return;
    }

    try {
        // 등록된 ServiceWorker 삭제 
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (let registration of registrations) {
                registration.unregister();
            }
            WriteLog('전체 Service Worker 삭제 성공');
        }).then(() => {

            // ServiceWorker 등록
            navigator.serviceWorker
                .register('/service-worker.js', { scope: './' })
                .then(function (registration) {
                    WriteLog(`Service Worker가 scope에 등록되었습니다.`, registration.scope);
                })
                .catch(function (err) {
                    WriteLog(`Service Worker 등록 실패`, err);
                });

        }).catch(function (err) {
            WriteLog(`Service Worker 삭제 실패`, err);
        });

    }
    catch (err) {
        WriteLog(`Service Worker 초기화 실패`, err);
    }
}


// base64Url 인코딩 함수
function base64UrlEncode(str) {
    return btoa(str)
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

// JWT 서명 생성
async function signJwt(unsignedToken, privateKey) {
    const encoder = new TextEncoder();
    const keyArrayBuffer = pemToArrayBuffer(privateKey);

    const key = await crypto.subtle.importKey(
        'pkcs8',
        keyArrayBuffer,
        { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
        false,
        ['sign']
    );

    const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, encoder.encode(unsignedToken));
    return base64UrlEncode(String.fromCharCode.apply(null, new Uint8Array(signature)));
}

// PEM 키를 ArrayBuffer로 변환하는 함수
function pemToArrayBuffer(pem) {
    const b64Lines = pem.replace(/-----.*-----/g, '').replace(/\n/g, '');
    const b64 = atob(b64Lines);
    const buf = new ArrayBuffer(b64.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < b64.length; i++) {
        view[i] = b64.charCodeAt(i);
    }
    return buf;
}

async function getJTW() {
    const now = Math.floor(Date.now() / 1000);
    const header = {
        alg: 'RS256',
        typ: 'JWT',
    };
    const claimSet = {
        iss: serviceAccount.client_email,
        scope: 'https://www.googleapis.com/auth/cloud-platform',
        aud: 'https://oauth2.googleapis.com/token',
        exp: now + 3600,  // 1시간 동안 유효
        iat: now,         // 발급 시간
    };

    const unsignedToken = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(claimSet))}`;

    // 서명 생성
    const signature = await signJwt(unsignedToken, serviceAccount.private_key);
    return `${unsignedToken}.${signature}`;
}
