/**
 * Min
 * @param [array] Array
 * @return Value
 */
function min(array: number[]): number {
  return Math.min(...array);
}
/**
 * Max
 * @param [array] Array
 * @return Value
 */
function max(array: number[]): number {
  return Math.max(...array);
}
/**
 * Min Max
 * @param [array] Array
 * @return Min Value and Max Value
 */
function minMax(array: number[]): [number, number] {
  let min = Infinity;
  let max = -Infinity;

  for (let a of array) {
    if (a < min) {
      min = a;
    }
    if (a > max) {
      max = a;
    }
  }

  return [min, max];
}
/**
 * Sum
 * @param [array] Array
 * @return Value
 */
function sum(array: number[]): number {
  return array.reduce((p, c) => p + c, 0);
}
/**
 * Mean
 * @param [array] Array
 * @return Value
 */
function mean(array: number[]): number {
  return sum(array) / array.length;
}
/**
 * Median
 * @description Calculate the median of an array of numbers.
 * @param [array] Array of numbers
 * @return Median value
 */
function median(array: number[]): number {
  if (array.length <= 1) {
    return array[0]!;
  } else {
    let sorted = Array.from(array).sort((a, b) => a - b);
    let middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1]! + sorted[middle]!) / 2;
    } else {
      return sorted[middle]!;
    }
  }
}

export { max, mean, median, min, minMax, sum };
