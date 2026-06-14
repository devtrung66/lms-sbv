/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_TIMEOUT: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_PASS_THRESHOLD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}