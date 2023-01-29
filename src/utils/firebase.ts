import { initializeApp } from "firebase/app"
import { getMessaging, getToken, onMessage } from "firebase/messaging"
import async from "async"

const { VITE_FIREBASE_VAPID_KEY, VITE_FIREBASE_CONFIG } = import.meta.env

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)
