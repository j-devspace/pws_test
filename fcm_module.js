
// ✅ 3. FCM 토큰 가져오기
function getFCMToken() {
    const vapId = "BA7k3cK4ONvLAMjsanhDsg6IWCL7y296bvYnmdFXzvPP3_1kLM7M-JcBeS2hXGB28Jd6NXeH8OMYoQKZlqRhldA";

    messaging.getToken({ vapidKey: vapId })
        .then(token => {
            if (token) {
                document.getElementById("token").innerText = token;
                logMessage("✅ FCM 토큰을 가져왔습니다.");
            } else {
                logMessage("❌ FCM 토큰이 없습니다.");
            }
        })
        .catch(error => {
            logMessage("❌ FCM 토큰 가져오기 실패: " + error);
        });
}

// ✅ 4. FCM 서버로 푸시 알림 전송
// 액세스 토큰 요청 함수
async function getAccessToken() {
    // 서명 생성
    const jwt = await getJTW();

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

    WriteLog('Get AccessToken jwt', jwt);

    const data = await response.json();

    if (data.access_token) {
        WriteLog('Get AccessToken', data.access_token);
        return data.access_token;
    } else {
        WriteLog('Get AccessToken Fail', data);
    }
}

async function sendPushNotification() {
    const accessToken = await getAccessToken();
    const token = document.getElementById("token").innerText;
    if (!token) {
        logMessage("⚠ 먼저 'FCM 토큰 가져오기'를 실행하세요!");
        return;
    }

    const payload = {
        message: {
            token: token,
            notification: {
                title: "테스트 알림",
                body: "이것은 FCM 푸시 알림 테스트입니다!"
            },
            data: {
                customKey: "customValue"
            }
        }
    };

    fetch(`https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then(data => logMessage("📩 푸시 발송 성공: " + JSON.stringify(data)))
        .catch(error => logMessage("❌ 푸시 발송 실패: " + error));
}


messaging.onMessage((payload) => {
    console.log("✅ 포그라운드 메시지 수신:", payload);

    if (!payload.notification) {
        console.log("⚠ 알림 데이터가 없음, payload 내용:", payload);
        return;
    }

    new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/firebase-logo.png"
    });
});