export default fromNodeMiddleware((req, res, next) => {
  // console.log('Legacy middleware 被触发了');
  next();
});
