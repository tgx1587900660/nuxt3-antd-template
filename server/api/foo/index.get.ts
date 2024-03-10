export default defineEventHandler((event) => {
  // handle GET requests for the `api/foo` endpoint
  return {
    method: 'get',
    url: 'api/foo',
    random: Math.random(),
  };
});
