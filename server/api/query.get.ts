export default defineEventHandler((event) => {
  const query = getQuery(event);

  return {
    random: Math.random(),
    a: query.foo,
    b: query.baz,
  };
});
