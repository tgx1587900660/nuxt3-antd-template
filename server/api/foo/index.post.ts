export default defineEventHandler((event) => {
  // handle POST requests for the `api/foo` endpoint
  return {
    method: 'post',
    url: 'api/foo',
    random: Math.random(),
  };
});
