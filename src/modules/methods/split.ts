import type { Vector1 } from '../../types/vector';
import { median } from '../math';

/**
 * Auto Gap Split
 * @description Split an array into sub arrays based on gaps between consecutive elements.
 * @type [T] Data Type
 * @param [array] Array to split
 * @param [xGetter] Function to extract the numeric value for gap calculation
 * @param [tolerance] Multiplier for the normal gap to determine the threshold
 * @return Array of Sub Arrays
 */
function autoGapSplit<T extends Vector1 = any>(array: T[], xGetter: (item: T) => number, tolerance = 2) {
  if (array.length <= 2) {
    return [Array.from(array)];
  } else {
    let gaps: number[] = [];
    for (let i = 1; i < array.length; i++) {
      gaps.push(xGetter(array[i]!) - xGetter(array[i - 1]!));
    }

    let normalGap = median(gaps);
    let threshold = normalGap * tolerance;
    let result: T[][] = [];
    for (let i = 0; i < array.length; i++) {
      if (i === 0 || xGetter(array[i]!) - xGetter(array[i - 1]!) > threshold) {
        result.push([]);
      }
      result.at(-1)!.push(array[i]!);
    }

    return result;
  }
}

export { autoGapSplit };
