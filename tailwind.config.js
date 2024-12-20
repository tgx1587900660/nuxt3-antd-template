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
      blue: {
        default: 'blue',
        skyblue: 'skyblue',
        hover: '#f0f0f0',
        active: '#e6f4ff',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
      },
      pink: {
        default: 'deeppink',
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
    // 添加字体
    fontFamily: {
      Oswald: 'Oswald, ui-serif', // Adds a new `font-Oswald` class
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
  corePlugins: {
    preflight: true, // 禁用预设样式 (如果要把 TailwindCSS 添加到现有项目中，可以禁用预设样式)
  },
};
