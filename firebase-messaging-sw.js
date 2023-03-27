importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
 apiKey: 'AIzaSyDASGjO5TTOlEvoZiUMLR8WEgBJOYZfIAQ',
    appId: '1:35217108490:android:cec1488189df76c3cd79f3',
    messagingSenderId: '35217108490',
    projectId: 'lapelota-d0777',
    storageBucket: 'lapelota-d0777.appspot.com',
     authDomain: "...",
     databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});