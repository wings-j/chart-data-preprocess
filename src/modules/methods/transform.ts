import { sum } from '../math';

/**
 * Ratio
 * @description Calculate ratio
 * @type [T] Data Type
 * @param [array] Array
 * @param [xGetter] X Getter
 * @return Array with X Ratio
 */
function ratio<T = any>(array: T[], xGetter: (item: T) => number): { value: T; x: number }[] {
  let total = sum(array.map(a => xGetter(a)));

  return array.map(a => ({ value: a, x: xGetter(a) / total }));
}

export { ratio };
