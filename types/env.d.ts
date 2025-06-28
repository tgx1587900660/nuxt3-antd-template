// 获得vite环境变量的代码提示 https://vitejs.cn/vite3-cn/guide/env-and-mode.html#env-files

/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_TEST_VAR: string;
  readonly VITE_APP_USER: string;
  readonly VITE_APP_PASS: string;
  [key: string]: string | undefined;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '@ckeditor/ckeditor5-inspector';
