const timeConsumingBackgroundTask = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('2. 然后再执行后台任务');
      resolve(true);
    }, 1000);
  });
};

export default eventHandler((event) => {
  // schedule a background task without blocking the response
  event.waitUntil(timeConsumingBackgroundTask());

  // immediately send the response to the client
  console.log('1. 先返回给客户端');
  return 'done';
});
