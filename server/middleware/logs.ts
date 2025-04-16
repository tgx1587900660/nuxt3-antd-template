export default defineEventHandler((event) => {
  console.info('新请求: ' + getRequestURL(event));
});
