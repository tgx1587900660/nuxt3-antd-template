export default fromNodeMiddleware((req: any, res: any) => {
  res.end('Legacy handler');
});
