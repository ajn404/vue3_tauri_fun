/// <reference types="vite/client" />
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// vite-env.d.ts
declare const NODE_ENV: string
declare const VUE_APP_MODE: string
