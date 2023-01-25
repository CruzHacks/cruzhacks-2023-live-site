import { initializeApp } from "firebase/app"
import { getMessaging, getToken, onMessage } from "firebase/messaging"
import async from "async"

const { VITE_FIREBASE_VAPID_KEY, VITE_FIREBASE_CONFIG } = import.meta.env

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

export const requestPermission = () => {
  console.log("Requesting permission...")
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log("Notification permission granted.")
    }
  })
}

export const getTokenWrapper = async (
  setNotificationEnabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return getToken(messaging, { vapidKey: VITE_FIREBASE_VAPID_KEY })
    .then(currentToken => {
      if (currentToken) {
        setNotificationEnabled(true)
      } else {
        setNotificationEnabled(false)
      }
      return currentToken
    })
    .catch(err => {
      console.log(err)
    })
}

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
onMessage(messaging, payload => {
  console.log("Message received. ", payload)
  // ...
})
