import { createFromIconfontCN } from '@ant-design/icons-vue';

export default defineNuxtPlugin((nuxtApp) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_2708382_wgkealtgq0b.js',
  });
  nuxtApp.vueApp.component('IconFont', IconFont);
});
