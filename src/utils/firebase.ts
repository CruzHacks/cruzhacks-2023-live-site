import { initializeApp } from "firebase/app"
import { getDatabase, connectDatabaseEmulator } from "firebase/database"
import async from "async"

const { VITE_FIREBASE_VAPID_KEY, VITE_FIREBASE_CONFIG } = import.meta.env

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig)
export const rtdb = getDatabase(app)

if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectDatabaseEmulator(rtdb, "localhost", 9000)
}
