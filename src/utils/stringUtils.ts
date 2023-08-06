/**
 * stringUtils.ts
 * @author souta.konno
 */

/**
 * 文字列の先頭と末尾の空白を削除する
 * @param str 文字列
 * @returns トリム後の文字列
 * @example trimString('  あいうえお  ') // 'あいうえお'
 * @example trimString('  あいうえお') // 'あいうえお'
 */
export const trimString = (str: string): string => {
  return str.trim();
}

/**
 * 指定された文字列を別の文字列で置換する
 * @param str 文字列
 * @param find 置換対象の文字列
 * @param replace 置換後の文字列
 * @returns 置換後の文字列
 * @example replaceString('あいうえお', 'あ', 'か') // 'かいうえお'
 */
export const replaceString = (str: string, find: string, replace: string): string => {
  return str.replace(new RegExp(find, 'g'), replace);
}

/**
 * 文字列が特定の文字列で始まるかどうかを判定する
 * @param str 文字列
 * @param searchString 検索文字列
 * @returns 検索文字列で始まる場合はtrue、そうでない場合はfalse
 * @example startsWith('あいうえお', 'あ') // true
 * @example startsWith('あいうえお', 'か') // false
 */
export const startsWith = (str: string, searchString: string): boolean => {
  return str.startsWith(searchString);
}

/**
 * 文字列が特定の文字列で終わるかどうかを判定する
 * @param str 文字列
 * @param searchString 検索文字列
 * @returns 検索文字列で終わる場合はtrue、そうでない場合はfalse
 * @example endsWith('あいうえお', 'お') // true
 * @example endsWith('あいうえお', 'か') // false
 */
export const endsWith = (str: string, searchString: string): boolean => {
  return str.endsWith(searchString);
}
