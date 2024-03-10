// 获取元素的坐标 (将要被 vueApp.directive() 注册的指令, 不能以 v 开头起名)
export const coordinate = (el: HTMLElement) => {
  console.log('test directive');

  const { left, top } = el.getBoundingClientRect();
  console.log('left, top :>> ', left, top);
};
