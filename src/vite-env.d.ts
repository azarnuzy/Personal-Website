/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TEMPLATE_EMAILJS: string;
  readonly VITE_SERVICE_ID_EMAILJS: string;
  readonly VITE_PUBLIC_KEY_EMAILJS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
