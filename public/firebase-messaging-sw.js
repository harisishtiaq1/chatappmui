importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDe9Qy_mCUu2qsV5EBR8-6w7ULIY-StyjA",
  authDomain: "chatapp-ffa2d.firebaseapp.com",
  projectId: "chatapp-ffa2d",
  storageBucket: "chatapp-ffa2d.appspot.com",
  messagingSenderId: "269634017614",
  appId: "1:269634017614:web:ae2f8920d27048f78d661f",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
