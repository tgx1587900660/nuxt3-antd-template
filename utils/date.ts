/**
 * 时间处理器, 传入 '时间戳' 或 '原始时间格式', 返回该格式：2020-10-14 15:01:03
 * @param dateStr
 * @returns 返回该格式：2020-10-14 15:01:03
 * @example
 * getCurrentTime(1602648779952) // 2020-10-14 12:12:59
 * getCurrentTime(new Date()) // 2020-10-14 12:14:59
 */
export function getCurrentTime(dateStr: number | Date): string {
  const date = new Date(dateStr);
  const y = date.getFullYear();
  const m = padZero(date.getMonth() + 1);
  const d = padZero(date.getDate());
  const hh = padZero(date.getHours());
  const mm = padZero(date.getMinutes());
  const ss = padZero(date.getSeconds());
  // 补零函数
  function padZero(date: number) {
    return date > 9 ? date : `0${date}`;
  }
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}
// test
// console.log(getCurrentTime(1602648779952));
// console.log(getCurrentTime(new Date()));
