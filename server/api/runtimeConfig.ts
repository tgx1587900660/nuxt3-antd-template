export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  // console.log('config :>> ', config);
  return config;
});
