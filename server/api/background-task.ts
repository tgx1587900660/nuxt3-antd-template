const timeConsumingBackgroundTask = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export default eventHandler((event) => {
  // schedule a background task without blocking the response
  event.waitUntil(timeConsumingBackgroundTask());

  // immediately send the response to the client
  return 'done';
});
