/**
 * dateUtils.ts
 * @author souta.konno
 */

/**
 * 日付を指定したフォーマットで文字列に変換する
 * @param date 日付
 * @param format フォーマット(YYYY:年, MM:月, DD:日, HH:時, mm:分, ss:秒)
 * @returns フォーマットに従った文字列
 * @example formatDate(new Date(), 'YYYY/MM/DD HH:mm:ss')
 * @example formatDate(new Date(), 'YYYY年MM月DD日 HH時mm分ss秒')
 */
export const formatDate = (date: Date, format: string): string => {
  const year: number = date.getFullYear();
  const month: string = String(date.getMonth() + 1).padStart(2, '0');
  const day: string = String(date.getDate()).padStart(2, '0');
  const hours: string = String(date.getHours()).padStart(2, '0');
  const minutes: string = String(date.getMinutes()).padStart(2, '0');
  const seconds: string = String(date.getSeconds()).padStart(2, '0');

  format = format.replace('YYYY', String(year));
  format = format.replace('MM', month);
  format = format.replace('DD', day);
  format = format.replace('HH', hours);
  format = format.replace('mm', minutes);
  format = format.replace('ss', seconds);

  return format;
}

/**
 * 2つの日付の差分を日数で返す
 * @param date1 日付1
 * @param date2 日付2
 * @returns 日数
 * @example calculateDateDifference(new Date('2021/01/01'), new Date('2021/01/02')) // 1
 * @example calculateDateDifference(new Date('2021/01/01'), new Date('2021/01/01')) // 0
 */
export const calculateDateDifference = (date1: Date, date2: Date): number => {
  const oneDay: number = 24 * 60 * 60 * 1000;
  const timeDiff: number = Math.abs(date2.getTime() - date1.getTime());
  return Math.round(timeDiff / oneDay);
}

/**
 * 現在の日付を指定したフォーマットで文字列に変換する
 * @param format フォーマット(YYYY:年, MM:月, DD:日, HH:時, mm:分, ss:秒)
 * @returns フォーマットに従った文字列
 * @example getCurrentDate('YYYY/MM/DD HH:mm:ss') // 2021/01/01 00:00:00
 * @example getCurrentDate('YYYY年MM月DD日 HH時mm分ss秒') // 2021年01月01日 00時00分00秒
 */
export const getCurrentDate = (format: string): string => {
  return formatDate(new Date(), format);
}
