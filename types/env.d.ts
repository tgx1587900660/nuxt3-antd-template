interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_TEST_VAR: string;
  readonly VITE_APP_USER: string;
  readonly VITE_APP_PASS: string;
  [key: string]: string | undefined;
  // 添加更多环境变量，以用来获得代码提示...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
