import { initializeApp } from "firebase/app"
import { getDatabase, connectDatabaseEmulator } from "firebase/database"

const { VITE_FIREBASE_CONFIG } = import.meta.env

const firebaseConfig = JSON.parse(VITE_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig)
export const rtdb = getDatabase(app)

if (location.hostname === "localhost") {
  connectDatabaseEmulator(rtdb, "localhost", 9000)
}
