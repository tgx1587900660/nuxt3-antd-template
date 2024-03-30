/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    // 其他组件...
  ],
  theme: {
    extend: {},
    // 自定义媒体查询(断点取决于设计稿)
    screens: {
      mobile: { max: '768px' }, // 手机: 小于等于 768px
      pad: { min: '768px', max: '1024px' }, // 平板电脑: 大于 768px 并且小于等于 1024px
      pc: { min: '1024px' }, // 电脑: 大于等于 1024px
    },
    colors: {
      error: '#f40',
      auxiliary: '#ccc',
      green: {},
      uni: {},
    },
    // 添加字体
    fontFamily: {
      Oswald: 'Oswald, ui-serif', // Adds a new `font-Oswald` class
    },
  },
  corePlugins: {
    preflight: false, // 禁用预设样式 (如果要把 TailwindCSS 添加到现有项目中，可以禁用预设样式)
  },
};
