/**
 * 深拷贝, 只考虑 3 种类型：对象、数组、普通类型
 * @param source
 * @returns 深拷贝后的对象
 * @example
 * deepClone({ a: 1, b: 2 }) // { a: 1, b: 2 }
 * deepClone([1, 2, 3]) // [1, 2, 3]
 * deepClone(1) // 1
 * deepClone('1') // '1'
 */
export function deepClone(source: any) {
  if (typeof source !== 'object' || source === null) {
    return source;
  }
  let res: any = source.constructor === Array ? [] : {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      res[key] = deepClone(source[key]);
    }
  }
  return res;
}
// test
// const arr = [1, { a: 'a' }, [2]];
// const newArr = deepClone(arr);
// console.log(arr); // [1,{"a":"a"},[2]]
// newArr[1].b = 'b';
// newArr[2].push(6456);
// console.log(arr); // [1,{"a":"a"},[2]]
// console.log(newArr); // [1,{"a":"a","b":"b"},[2,6456]]
// const arr2 = { a: 'a', b: { b2: 'b2' } };
// const newArr2 = deepClone(arr2);
// console.log(arr2); // {"a":"a","b":{"b2":"b2"}}
// newArr2.d = 'dd';
// newArr2.b.b3 = 'b3';
// console.log(arr2); // {"a":"a","b":{"b2":"b2"}}
// console.log(newArr2); // {"a":"a","b":{"b2":"b2","b3":"b3"},"d":"dd"}
// console.log(deepClone({ a: 1, b: 2 })); // { a: 1, b: 2 }
// console.log(deepClone([1, 2, 3])); // [1, 2, 3]
// console.log(deepClone(1)); // 1
// console.log(deepClone('1')); // '1'
