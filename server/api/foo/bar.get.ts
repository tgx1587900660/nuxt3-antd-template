export default defineEventHandler((event) => {
  // handle GET requests for the `api/foo/bar` endpoint
  return {
    method: 'get',
    url: 'api/foo/bar',
    random: Math.random(),
  };
});
