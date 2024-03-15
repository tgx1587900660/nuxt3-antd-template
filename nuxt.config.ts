// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 全局添加CSS文件
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {}, // 将Tailwind添加到PostCSS配置中
      autoprefixer: {}
    }
  }
})
