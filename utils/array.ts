/**
 * 传入一个数组, 随机返回它的某一个元素
 * @param arr
 * @returns 随机返回数组中的一个元素
 * @example
 * getRandomItem([1, 2, 3, 4, 5]) // 随机返回 1, 2, 3, 4, 5 中的一个
 */
export function getRandomItem<T>(arr: Array<T>): T {
  const min = 0;
  const max = arr.length - 1;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return arr[random];
}
// test
// console.log('item :>> ', getRandomItem([1, 2, 3, 4, 5]));
// console.log('item :>> ', getRandomItem([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }]));

/**
 * 将一个数组分割成多个子数组
 * @param arr
 * @param size
 * @returns 分割后的子数组
 * @example
 * chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export function getArrayChunk<T>(arr: Array<T>, size: number): Array<Array<T>> {
  let [start, end] = [0, 0];
  const result: Array<Array<T>> = [];
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    start = i * size;
    end = start + size;
    result.push(arr.slice(start, end));
  }
  return result;
}
// test
// console.log('chunk :>> ', getArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
// console.log('chunk :>> ', getArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// console.log('chunk :>> ', getArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// console.log('chunk :>> ', getArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
