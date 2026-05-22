/**
 * Succession Combine
 * @description Merge multiple arrays into one by identifier, removing duplicates while preserving the succession order.
 * @type [T] Data Type
 * @param [array] Array
 * @param [xGetter] X Getter
 * @param [unit] Unit
 * @return Combined Array
 */
function successionCombine<T = any>(array: T[], xGetter: (item: T) => number, unit: number): { start: T; end: T; middle: T[] }[] {
  if (array.length < 1) {
    return [];
  } else if (array.length === 1) {
    return [{ start: array[0]!, end: array[0]!, middle: [] }];
  } else {
    let temp: { start: T; end: T; middle: T[] }[] = [];
    let segment = { start: array[0]!, end: undefined as T | undefined, middle: [] as T[] };
    for (let i = 1; i < array.length; i++) {
      let current = array[i]!;
      let previous = array[i - 1]!;
      if (xGetter(current) - xGetter(previous) <= unit) {
        segment.middle.push(current);
      } else {
        segment.end = previous;
        if (segment.middle.includes(previous)) {
          let index = segment.middle.indexOf(previous);
          segment.middle.splice(index, 1);
        }

        temp.push(segment as { start: T; end: T; middle: T[] });
        segment = { start: current, end: undefined, middle: [] };
      }
    }

    segment.end = segment.middle.at(-1) ?? segment.start;
    if (segment.middle.includes(segment.end)) {
      let index = segment.middle.indexOf(segment.end);
      segment.middle.splice(index, 1);
    }

    temp.push(segment as { start: T; end: T; middle: T[] });

    return temp;
  }
}
/**
 * Multiple Parts Combine
 * @description Merge multiple arrays into one by identifier, removing duplicates while preserving the first-seen order.
 * @type [T] Data Type
 * @param [array] Array Groups
 * @param [vGetter] Value Getter
 * @return Combined Array
 */
function multiplePartsCombine<T = any>(array: T[][], vGetter: (item: T) => any): T[] {
  let temp: T[] = [];
  let set = new Set();
  for (let a of array) {
    for (let b of a) {
      let key = vGetter(b);
      if (!set.has(key)) {
        temp.push(b);
        set.add(key);
      }
    }
  }

  return temp;
}

export { multiplePartsCombine, successionCombine };
