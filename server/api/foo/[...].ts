export default defineEventHandler((event) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  return {
    text: `Default foo handler`,
    'event.context.path': event.context.path || 'event.context.path',
    'event.context.params._': event.context.params?._ || 'event.context.params._',
  };
});
