importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js")
// importScripts("/__/firebase/9.2.0/firebase-app-compat.js")
// importScripts("/__/firebase/9.2.0/firebase-messaging-compat.js")

/* UNCOMMENT THE LINE BELOW FOR LOCAL DEVELOPMENT USES */
// importScripts("/__/firebase/init.js?useEmulator=true")

/* COMMENT THE LINE BELOW FOR LOCAL DEVELOPMENT */
//importScripts('/__/firebase/init.js');
const firebaseConfig = {
  apiKey: "AIzaSyDC-OCAVUXuIBV--vudjepYhrtf-o4fo4U",
  authDomain: "cruzhacks-2023-development.firebaseapp.com",
  projectId: "cruzhacks-2023-development",
  storageBucket: "cruzhacks-2023-development.appspot.com",
  messagingSenderId: "855766203124",
  appId: "1:855766203124:web:231ca5aaba09024ed3fca1",
  measurementId: "G-CWGFM9BX5V",
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload)
  // Customize notification here
  if (payload && payload.notification && payload.notification.title && payload.notification.body) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
      body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
  }
})
