/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_PWA_MODE: 'development' | 'production'
  readonly VITE_PWA_BASE: string
  readonly VITE_PWA_ENABLE_DEV: 'true' | 'false'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
