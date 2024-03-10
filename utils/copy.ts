/**
 * 惰性函数，用于复制文本, 会根据浏览器支持情况选择最佳的复制方式, 如果浏览器不支持, 则会使用 input 元素的方式复制,
 * 这种函数只会在第一次调用时进行初始化, 之后会直接调用最佳的复制方式，是一种提升效率的手段
 * @param text 要复制的文本
 * @returns 无
 * @example
 * ```ts
 * copyText('Hello, world!');
 * ```
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/writeText
 */
export let copyText = (text: string) => {
  if (import.meta.server) {
    console.warn('copyText 不支持服务端');
    return;
  }

  if (navigator.clipboard) {
    copyText = (text: string) => {
      navigator.clipboard
        .writeText(`${text}【复制后可处理事件，比如：弹窗提示---> 版权来自 tangganxiao】`)
        .then(() => {
          console.log('复制成功-可处理事件，比如：弹窗提示');
        })
        .catch((err) => {
          console.log('复制失败:', err);
        });
    };
  } else {
    copyText = (text: string) => {
      const input = document.createElement('input');
      input.setAttribute('value', text);
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    };
  }

  copyText(text);
};
