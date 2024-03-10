import * as directives from '~/utils/directives';

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(directives).forEach(([name, directive]) => {
    // console.log('name :>> ', name);
    // console.log('directive :>> ', directive);
    nuxtApp.vueApp.directive(name, directive);
  });
});
