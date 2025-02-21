// ✅ 1. Firebase 설정
const projectId = "565490563935";

const serviceAccount = {
    "type": "service_account",
    "project_id": "je-test-e14c9",
    "private_key_id": "bb228d1a5ef6f686db67c50a109ac2fb3fb7a4f8",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCaTwxvxdasX1x9\n51RkGa2euXQvDcwWPMFWg2sDI8vY4yyqUpYOwivZDEDzcRfFCMsIqCImn4bqWpuO\nuW8vvzEDhXhLxvex51bqvN7DrmUJb65kIJ1eXYZEbaC4DeE01nkF9HQEeKx63fPe\nGeCQemBeBDnitEmqV3cbi2+eaYPi+2msMXZIbZd6f1cqr/dEyIFN4yQtQMFbiEQB\npsJiXuvED5lWoFQ086yNoGsfc3GCBaOzLF2bNIOsV8aHxH6uBJ0vkjuVQa8hPx1b\nHjDc5BG4pgdSrgbmHWSggtXuDuJuLEqvYFNbxp4+fPsa3t5+ZAokFzOx56p/ScW9\nkyBI8vZ3AgMBAAECggEANAiu7Wv9uW+IvW4J351nFgx8eLeC2AbRvU4gglUKUs88\nSw0BS+W/Kng+2LiMpuURrhAgP/zwXkuChCzUqPmkWgciaw8jjGqxvQNGbR78NCPk\nXyA+YMlR0vZSyW3owMwH0HG/w5g7tUzuBLmeJ6oUn+9145Qe+SF4aSHqWDVFg370\nrEDY0rG7/MjTVkXFfeiIdG3Yyrv0qj7ci5P748EzcxOmm6kWT//JE6EFJ4JOyV0O\nsX37FlMNfSnSkxtOdM+Zn9IjefmRDZozH78ZA5ieaZ20AsLuvUwV4Jsy2iy/CDXl\nQM0cHXrpMc8/am7zzOHSPuO5uKhGOv1aGVCkmAcKcQKBgQDURVkOY5Cqo6WX071d\nz5OoLWdhDev1Dq+3gLsBBjRtUb46Wbp6FgE8pjD5UB9nQq8tt3FEFERzS+OmYXEO\n4Z8JrcdZzSxSmcdxXRyXIGQaUHiu44Yi66hJlcZr3nfRK+mq4U5WdI7zySA8LskN\nBFxKTz/0pmHlGXjeHh59RVi4pwKBgQC6GOty8dMla8PD8uyxwM2biof+CCAsWKrC\ng7rNQ/07pPS+U39UEfXTFkYk+Rm8Bk/INK5y+B4JgUXwAe4ypqxEpOx0ZI8qpYla\nJu4LNHNLIJwpfBoAWEcvS1bD8r00i0rQhOJicQOoV4FZOXNH5VBWvToqk9ZE+A0Y\nFR30eHi9sQKBgQC4E2snDzBkyYTQJM4Si+9/59++SlRULmgyuW9xc/AC3OAZubX8\nKRjpfzT4/oI9CZbgDjQq1WiGk0jW/6kLPpyryAcX2NSWzMQnipdAdtZX+3CsOKIZ\npkJJjZiD8mf0/B+mD7vfPTS6M6/AgNHYd++QgSj0/1PlWDF4bKYD/B70AQKBgGuS\nWg+Af9gCug+7jVyWoYNGiaOrGMXpnxN/R+y9X1Up3hticpirJRkWqAdZQqnwUA/f\ne/OTPvGpmz7ILuNyeuPXHaOOOT+inonRNQqfEAIeYIaOaQ1H+iX5e7cayonj9qQg\nHChhQYb+xhNIZT3q7Qymp0fTWylU5WTFWCJnvQuRAoGBAKmMCBpGVOT6G3Ojs9aR\n+qtuWiVkxs67fRXMFm/ayoD80nNq4QsOY9Vobjb6Wh9u3ORM8FQ3JYmC471EATeX\nE6Gu8cs14lDxKmyJ5v76qAQrj+j/u2ftgqDjODO2dH9q0Q7d4cF15gdnwjt8E0i5\nK6yXkqOH3A6KU6WuOdr0ihdd\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fbsvc@je-test-e14c9.iam.gserviceaccount.com",
    "client_id": "107588653504297096705",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40je-test-e14c9.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com",

    "public_key": `-----BEGIN CERTIFICATE-----
MIIC/DCCAeSgAwIBAgIIY+mdDQdvdQ8wDQYJKoZIhvcNAQEFBQAwIDEeMBwGA1UE
AwwVMTA3NTg4NjUzNTA0Mjk3MDk2NzA1MCAXDTI1MDIyMDEyMDk1MVoYDzk5OTkx
MjMxMjM1OTU5WjAgMR4wHAYDVQQDDBUxMDc1ODg2NTM1MDQyOTcwOTY3MDUwggEi
MA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCaTwxvxdasX1x951RkGa2euXQv
DcwWPMFWg2sDI8vY4yyqUpYOwivZDEDzcRfFCMsIqCImn4bqWpuOuW8vvzEDhXhL
xvex51bqvN7DrmUJb65kIJ1eXYZEbaC4DeE01nkF9HQEeKx63fPeGeCQemBeBDni
tEmqV3cbi2+eaYPi+2msMXZIbZd6f1cqr/dEyIFN4yQtQMFbiEQBpsJiXuvED5lW
oFQ086yNoGsfc3GCBaOzLF2bNIOsV8aHxH6uBJ0vkjuVQa8hPx1bHjDc5BG4pgdS
rgbmHWSggtXuDuJuLEqvYFNbxp4+fPsa3t5+ZAokFzOx56p/ScW9kyBI8vZ3AgMB
AAGjODA2MAwGA1UdEwEB/wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQM
MAoGCCsGAQUFBwMCMA0GCSqGSIb3DQEBBQUAA4IBAQBeYFlG2hepH+lbtfbthaot
SAcmWJIaxGNPA38rbXgkddUeTxiU8zIqbdw9IAdXMV1JjGb9Rk58Xpb5W4HwJYHj
/t4hi2zqH8hu9ROoVTcqichuBJIxeoH5Aafj4eG1A7n+2qQbLdlGwup6ISqfGSoF
QYp8eNlB12rXiX7YMT/PnAgeHRxRXLMjzrJZjWLtySVhLiS6Fcxr1ha9RITh1Fu6
/Zk86E1eFTDQv5VRD+kt81IaVBxV31c2T+sz4bNioRAiz+xPlN7eAgPEPodZE6bo
4a2HexMGgcH2QjFgxl9c7o4jSWCtEUTDQ6ioFfsH+KKTIvRm7ahMh0GLR/q0cRDl
-----END CERTIFICATE-----
`
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


const isGithubUrl = 0 <= location.origin.indexOf("github");

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


// ✅ 5. 로그 출력 함수
function WriteLog(message, obj) {
    document.getElementById("log").innerText += message + "\n";
    console.log(message, obj || '');
}
function logMessage(message) {
    document.getElementById("log").innerText += message + "\n";
    console.log(message);
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

// ✅ 2. 푸시 알림 권한 요청
function requestPermission() {
    Notification.requestPermission().then(permission => {
        logMessage(`알림 권한 상태: ${permission}`);
        if (permission === "granted") {
            logMessage("✅ 알림 권한이 허용되었습니다.");
        } else {
            logMessage("❌ 알림 권한이 거부되었습니다.");
        }
    });
}








async function getJTW() {
    const now = Math.floor(Date.now() / 1000);
    const header = {
        alg: 'RS256',
        typ: 'JWT',
    };
    const claimSet = {
        iss: serviceAccount.client_email,
        scope: 'https://www.googleapis.com/auth/firebase.messaging',
        aud: 'https://oauth2.googleapis.com/token',
        exp: now + 3600,  // 1시간 동안 유효
        iat: now,         // 발급 시간
    };

    const unsignedToken = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(claimSet))}`;

    // 서명 생성
    const signature = await signJwt(unsignedToken, serviceAccount.private_key);
    return `${unsignedToken}.${signature}`;
}

if ('serviceWorker' in navigator) {

    let url = '/firebase-messaging-sw.js';
    if (true == isGithubUrl) {
        url = '/pws_test/firebase-messaging-sw.js'
    }

    navigator.serviceWorker.register(url)
        .then((registration) => {
            console.log("서비스 워커 등록 성공:", registration);
        })
        .catch((error) => {
            console.error("서비스 워커 등록 실패:", error);
        });
}
