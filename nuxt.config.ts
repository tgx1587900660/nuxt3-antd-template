import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },

  modules: ['@pinia/nuxt', '@ant-design-vue/nuxt', '@nuxt/icon'],

  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['.vue'],
      },
    ],
  },

  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons',
        normalizeIconName: false,
      },
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

  vite: {
    resolve: {
      alias: {
        'ant-design-vue/dist': 'ant-design-vue/dist',
        'ant-design-vue/es': 'ant-design-vue/es',
        'ant-design-vue/lib': 'ant-design-vue/es',
        'ant-design-vue': 'ant-design-vue/es',
      },
    },
  },

  compatibilityDate: '2024-12-16',

  runtimeConfig: {
    githubToken: '', // 暂未用到
    public: {
      testPublicVar: 'testPublicVar',
    },
  },

  nitro: {
    compressPublicAssets: { gzip: true },
  },
});
