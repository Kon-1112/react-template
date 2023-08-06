/**
 * validationUtils.ts
 * @author souta.konno
 */

/**
 * メールアドレスの形式が正しいかを判定する
 * @param email メールアドレス
 * @returns メールアドレスの形式が正しい場合はtrue、そうでない場合はfalse
 * @example isValidEmail('example@example.com') // true
 * @example isValidEmail('example') // false
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 文字列が空でないかを判定する
 * @param value 文字列
 * @returns 文字列が空でない場合はtrue、そうでない場合はfalse
 * @example isNotEmpty('あいうえお') // true
 * @example isNotEmpty('') // false
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim() !== '';
}

/**
 * パスワードの強度が一定以上かを判定する
 * @description 8文字以上の長さと数字・英大文字・英小文字を含むことを要求する
 * @param password パスワード
 * @returns パスワードの強度が一定以上の場合はtrue、そうでない場合はfalse
 * @example isStrongPassword('Password123') // true
 * @example isStrongPassword('password') // false
 */
export const isStrongPassword = (password: string): boolean => {
  const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password);
}
