/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH0_DOMAIN: string
  readonly VITE_AUTH0_CLIENTID: string
  readonly VITE_AUTH0_AUDIENCE: string
  readonly VITE_RECAPTCHA_SITE_KEY: string
  readonly VITE_API_KEY: string
  readonly VITE_ENDPOINT_URL: string
  readonly VITE_FIREBASE_CONFIG: string
  readonly VITE_FIREBASE_VAPID_KEY: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
