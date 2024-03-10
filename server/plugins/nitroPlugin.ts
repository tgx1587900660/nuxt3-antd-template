// 拿到服务端的 user-agent, 可以在页面加载之前进行一些操作
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (ctx, { event }) => {
    const userAgent = event.headers.get('user-agent') || '';
    const pattern = /123|abc|(AppleWebKit\/537\.36)/;
    if (pattern.test(userAgent)) {
      // console.log('在 123 或 abc 或 AppleWebKit/537.36 中');
      // do something...
    }

    ctx.body.push(`<script>console.log('[nitroPlugin] :>> test server plugin')</script>`);
  });
});
