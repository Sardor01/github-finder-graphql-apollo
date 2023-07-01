/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_GITHUB_URL: string
  VITE_APP_GITHUB_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
