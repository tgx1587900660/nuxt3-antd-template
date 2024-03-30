// 在vue 组件中访问这里的全局配置：
// const appConfig = useAppConfig()
// console.log('appConfig :>> ', appConfig)

export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000',
    },
  },
});
