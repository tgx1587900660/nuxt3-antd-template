export default defineEventHandler((event) => {
  // setResponseStatus(event, 202); // 设置状态码

  if (!event.context.params) {
    return 'not has params';
  }

  const id = parseInt(event.context.params.id);

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    });
  }
  return 'All good';
});
