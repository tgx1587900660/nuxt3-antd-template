export default defineEventHandler((event) => {
  // event.context.params.slug to get the route segment: 'bar/baz'
  return {
    text: `Default foo handler`,
    'event.context.path': event.context.path || 'event.context.path',
    'event.context.params._': event.context.params?._ || 'event.context.params._',
    'event.context.params.slug': event.context.params?.slug || 'event.context.params.slug',
  };
});
