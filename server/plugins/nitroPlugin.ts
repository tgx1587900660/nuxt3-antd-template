export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (ctx, { event }) => {
    const userAgent = event.headers.get('user-agent') || '';
    const pattern = /123|abc|(AppleWebKit\/537\.36)/;
    if (pattern.test(userAgent)) {
      console.log('在 123 或 abc 或 AppleWebKit/537.36 中');
    }

    ctx.body.push(`<script>console.log('test server plugins nitroPlugin'</script>`);
  });
});
