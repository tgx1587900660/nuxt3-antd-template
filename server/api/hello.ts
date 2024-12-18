export default defineEventHandler((event) => {
  // 可以直接返回 JSON 数据、Promise 或使用 event.node.res.end（） 发送响应
  return {
    hello: 'world',
    random: Math.random(),
  };
});
