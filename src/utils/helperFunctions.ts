/**
 * helperFunctions.ts
 * @author souta.konno
 */

/**
 * 数値を指定された桁数に丸める
 * @param number 数値
 * @param decimals 桁数
 * @returns 丸められた数値
 * @example roundNumber(1.2345, 2) // 1.23
 * @example roundNumber(1.2345, 3) // 1.235
 */
export const roundNumber = (number: number, decimals: number): number => {
  return Number(number.toFixed(decimals));
}

/**
 * 配列の要素をシャッフルする
 * @param array 配列
 * @returns シャッフルされた配列
 * @example shuffleArray([1, 2, 3, 4, 5]) // [3, 1, 5, 4, 2]
 * @example shuffleArray(['a', 'b', 'c', 'd', 'e']) // ['c', 'a', 'e', 'd', 'b']
 */
export const shuffleArray = (array: never[]): never[] => {
  const shuffledArray: never[] = array.slice();
  for (let i: number = shuffledArray.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

/**
 * 2つのオブジェクトをマージする
 * @param obj1 オブジェクト1
 * @param obj2 オブジェクト2
 * @returns マージされたオブジェクト
 * @example mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // { a: 1, b: 2, c: 3, d: 4 }
 */
export const mergeObjects = (obj1: any, obj2: any): any => {
  return { ...obj1, ...obj2 };
}

/**
 * オブジェクトのキーを指定して、オブジェクトをソートする
 * @param obj オブジェクト
 * @param order ソート順('asc' or 'desc')
 * @returns ソートされたオブジェクト
 * @example sortObjectByKey({ b: 2, a: 1, c: 3 }, 'asc') // { a: 1, b: 2, c: 3 }
 * @example sortObjectByKey({ b: 2, a: 1, c: 3 }, 'desc') // { c: 3, b: 2, a: 1 }
 */
export const sortObjectByKey = (obj: any, order: 'asc' | 'desc'): any => {
  const sortedObj: any = {};
  const sortedKeys: string[] = Object.keys(obj).sort((a: string, b: string): number => {
    if (order === 'asc') {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });
  for (const key of sortedKeys) {
    sortedObj[key] = obj[key];
  }
  return sortedObj;
}

/**
 * オブジェクトのキーを指定して、オブジェクトをフィルタリングする
 * @param obj オブジェクト
 * @param keys フィルタリングするキーの配列
 * @returns フィルタリングされたオブジェクト
 * @example filterObjectByKey({ a: 1, b: 2, c: 3 }, ['a', 'c']) // { a: 1, c: 3 }
 * @example filterObjectByKey({ a: 1, b: 2, c: 3 }, ['b']) // { b: 2 }
 */
export const filterObjectByKey = (obj: any, keys: string[]): any => {
  const filteredObj: any = {};
  for (const key of keys) {
    filteredObj[key] = obj[key];
  }
  return filteredObj;
}
