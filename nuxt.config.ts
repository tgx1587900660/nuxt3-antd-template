import { defineNuxtConfig } from 'nuxt/config';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: ['@pinia/nuxt', '@ant-design-vue/nuxt', '@nuxt/icon'],
  components: {
    dirs: [{ path: '~/components', extensions: ['.vue'] }],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  icon: {
    customCollections: [
      { prefix: 'my-icon', dir: './assets/icons', normalizeIconName: false },
      // ...
    ],
  },
  antd: {
    extractStyle: true,
  },
  css: [
    '~/assets/css/index.css',
    // 'ant-design-vue/dist/reset.css',
    // ...
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-12-16',
  runtimeConfig: {
    githubToken: 'test-token: xxxxxxxxxxxxxxxxxxxxx', // 暂未用到
    public: {
      testPublicVar: 'testPublicVar',
    },
  },
  vite: {
    resolve: {
      alias: {
        'ant-design-vue/dist': 'ant-design-vue/dist',
        'ant-design-vue/es': 'ant-design-vue/es',
        'ant-design-vue/lib': 'ant-design-vue/es',
        'ant-design-vue': 'ant-design-vue/es',
      },
    },
    plugins: [ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') })],
    optimizeDeps: {
      include: [
        'pdfjs-dist',
        'colorthief',
        'docx-preview',
        '@ckeditor/ckeditor5-autoformat',
        '@ckeditor/ckeditor5-basic-styles',
        '@ckeditor/ckeditor5-editor-classic',
        '@ckeditor/ckeditor5-essentials',
        '@ckeditor/ckeditor5-heading',
        '@ckeditor/ckeditor5-link',
        '@ckeditor/ckeditor5-list',
        '@ckeditor/ckeditor5-paragraph',
        '@ckeditor/ckeditor5-block-quote',
        '@ckeditor/ckeditor5-alignment',
        '@ckeditor/ckeditor5-font',
      ],
    },
  },
  nitro: {
    compressPublicAssets: { gzip: true },
  },
});
