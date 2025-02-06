import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";


try {

    // Firebase 초기화
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);

    WriteLog(`[messaging] \n${JSON.stringify(messaging)}`);

    // VAPID 키 사용하여 FCM 토큰 가져오기
    const vapId = "BA7k3cK4ONvLAMjsanhDsg6IWCL7y296bvYnmdFXzvPP3_1kLM7M-JcBeS2hXGB28Jd6NXeH8OMYoQKZlqRhldA";
    getToken(messaging, { vapidKey: vapId })
        .then((currentToken) => {
            if (currentToken) {
                window.userToken = currentToken;
                WriteLog(`FCM Token: ${currentToken}`);
            } else {
                WriteLog(`No registration token available. currentToken: ${currentToken}`);
            }
        })
        .catch((err) => {
            WriteLog("An error occurred while retrieving token.");
            WriteLog(err);
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

} catch (e) {
    WriteLog(`Exception!\n${e}`);
}



