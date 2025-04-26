/**
 * 判断文本是否是中文
 * @param text 文本
 * @returns 是否是中文
 */
export function isChinese(text: string): boolean {
  return /[\u4e00-\u9fa5]/.test(text);
}

/**
 * 判断文本是否是英文
 * @param text 文本
 * @returns 是否是英文
 */
export function isEnglish(text: string): boolean {
  return /^[a-zA-Z]+$/.test(text);
}
