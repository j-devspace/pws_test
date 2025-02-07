import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";


// Firebase 초기화
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

try {
    WriteLog(`Messaging Init`, messaging);

    getToken(messaging, { vapidKey: vapId })
        .then((currentToken) => {
            if (currentToken) {
                window.userToken = currentToken;
                WriteLog(`FCM Token`, currentToken);
            } else {
                WriteLog(`No registration token available. currentToken`, currentToken);
            }
        })
        .catch((err) => {
            WriteLog("An error occurred while retrieving token.", err);
        });

    // 포그라운드에서 메시지 수신
    onMessage(messaging, (payload) => {
        WriteLog(`Message received. ${JSON.stringify(payload)}`);
        WriteLog('Message received. ', payload);

        // 알림 표시
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: '/firebase-logo.png' // 아이콘 경로를 적절히 변경하세요
        };

        if (Notification.permission === 'granted') {
            new Notification(notificationTitle, notificationOptions);
        } else {
            WriteLog('Notification permission not granted');
        }
    });

    // // 이건뭐지
    // messaging.onBackgroundMessage((payload) => {
    //     const notificationTitle = payload.title;
    //     const notificationOptions = {
    //         body: payload.body
    //         // icon: payload.icon
    //     };
    //     self.registration.showNotification(notificationTitle, notificationOptions);
    // });

} catch (e) {
    WriteLog(`initFCM Exception!`, err);
}

// get accessToken
async function getAccessToken() {
    let data = "";

    try {

        const header = {
            alg: "RS256",
            typ: "JWT"
        };

        const now = Math.floor(Date.now() / 1000);

        const claimSet = {
            iss: serviceAccount.client_email,
            scope: "https://www.googleapis.com/auth/cloud-platform",
            aud: "https://oauth2.googleapis.com/token",
            exp: now + 3600,
            iat: now
        };

        function base64UrlEncode(str) {
            return btoa(str)
                .replace(/=/g, '')
                .replace(/\+/g, '-')
                .replace(/\//g, '_');
        }

        const unsignedToken = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(claimSet))}`;

        function pemToArrayBuffer(pem) {
            const b64Lines = pem;
            const b64 = atob(b64Lines);
            const buf = new ArrayBuffer(b64.length);
            const view = new Uint8Array(buf);
            for (let i = 0; i < b64.length; i++) {
                view[i] = b64.charCodeAt(i);
            }
            return buf;
        }

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

        const signature = await signJwt(unsignedToken, serviceAccount.private_key);
        const jwt = `${unsignedToken}.${signature}`;

        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                'assertion': jwt
            })
        })
            .then(data => {
                WriteLog(`Accesstoken success : ${JSON.stringify(data)}`);
            })
            .catch(err => {
                WriteLog(`Accesstoken Get Error! \n${JSON.stringify(err)}`);
            });

        data = await response.json();

    }
    catch (err) {
        WriteLog(`Accesstoken Get Error! \n${JSON.stringify(err)}`);

    }

    return data.access_token;
}


// 액세스 토큰 요청 함수
async function getAccessToken2() {
    // 서명 생성
    const jwt = getJTW();

    // 액세스 토큰 요청
    const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'grant_type': 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            'assertion': jwt,
        }),
    });

    const data = await response.json();

    if (data.access_token) {
        return data.access_token;
    } else {
        WriteLog('Get AccessToken Fail', data);
    }
}











const accessToken = await getAccessToken2();


// 클라이언트에서 푸시 알림 전송 함수
async function sendPushNotification() {
    const to = window.userToken; // 전송할 토큰
    const notification = {
        title: '펄어비스 - 어플리케이션V2',
        body: '알람내용',
        // target: 'target',
        // tag: 'tag1',
        // sound: 'default'      
        // android_channel_id = ''  
    };

    if (!accessToken) {
        WriteLog("accountToken 비정상!!")
        return;
    }


    fetch(`https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            message: {
                token: to,
                notification: notification
            }
        })
    })
        .then(response => response.json())
        .then(data => {
            WriteLog(`Successfully sent message: ${JSON.stringify(data)}`);
        })
        .catch(error => {
            WriteLog('Error sending message:', error);
        });
}


window.sendPushNotification = sendPushNotification;