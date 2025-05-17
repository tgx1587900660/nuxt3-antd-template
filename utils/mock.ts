/**
 * 获取随机颜色
 * @returns 随机颜色
 * @example
 * getRandomColor() // 随机返回一个颜色, 例如 #123456
 */
export function getRandomColor() {
  return `#${Math.random().toString(16).slice(2, 8).padStart(6, '0')}`;
}
// test
// console.log('color :>> ', getRandomColor());
