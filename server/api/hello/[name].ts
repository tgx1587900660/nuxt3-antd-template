// 访问 /api/hello/nuxt 可以得到 name 为 nuxt
export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name');

  return {
    hello: 'hello world!' + name,
    random: Math.random(),
  };
});
