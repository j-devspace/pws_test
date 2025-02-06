


// 클라이언트에서 푸시 알림 전송 함수
async function sendPushNotification() {
    const accessToken = await getAccessToken();
    const to = userToken; // 전송할 토큰
    const notification = {
        title: 'Hello from Client',
        body: 'This is a client-initiated push notification'
    };

    fetch('https://fcm.googleapis.com/v1/projects/YOUR_PROJECT_ID/messages:send', {
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
            console.log('Successfully sent message:', data);
            WriteLog(`Successfully sent message: ${JSON.stringify(data)}`);
        })
        .catch(error => {
            console.error('Error sending message:', error);
            WriteLog(`Error sending message: ${error}`);
        });
}

// accessToken
async function getAccessToken() {

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
        const b64Lines = pem.replace(/-----.*-----/g, '').replace(/\n/g, '');
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
    });

    const data = await response.json();
    return data.access_token;
}

// 클라이언트에서 푸시 알림 전송 함수
async function sendPushNotification() {
    const accessToken = await getAccessToken();
    const to = window.userToken; // 전송할 토큰
    const notification = {
        title: '펄어비스 - 어플리케이션V2',
        body: '알람내용',
        // target: 'target',
        // tag: 'tag1',
        // sound: 'default'      
        // android_channel_id = ''  
    };

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
            console.error('Error sending message:', error);
            WriteLog(`Error sending message: ${error}`);
        });
}


