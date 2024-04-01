// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  // 全局添加CSS文件
  css: ['~/assets/css/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {}, // 将Tailwind添加到PostCSS配置中
      autoprefixer: {},
    },
  },
});
