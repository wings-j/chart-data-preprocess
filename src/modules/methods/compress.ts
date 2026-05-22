/**
 * Consecutive Duplicate Compress
 * @description Compresses the input array by removing consecutive duplicate entries while preserving order.
 * @type [T] Data Type
 * @param [array] Array
 * @param [vGetter] Value Getter
 * @return Compressed Array
 */
function consecutiveDuplicateCompress<T = any>(array: T[], vGetter?: (item: T) => any): T[] {
  if (array.length > 2) {
    let temp = [array[0]!];
    let last = temp[0]!;
    for (let i = 1; i < array.length - 1; i++) {
      let current = array[i]!;

      if (vGetter) {
        if (vGetter(current) !== vGetter(last)) {
          temp.push(current);
          last = current;
        }
      } else {
        if (current !== last) {
          temp.push(current);
          last = current;
        }
      }
    }
    temp.push(array.at(-1)!);

    return temp;
  } else {
    return Array.from(array);
  }
}
/**
 * Distance Threshold Compress
 * @description Compresses the input vector array by removing points whose x-distance to the previous kept point is within the given unit threshold.
 * @type [T] Data Type
 * @param [array] Array
 * @param [xGetter] X Getter
 * @param [unit] Unit Size
 * @returns Compressed Array
 */
function distanceThresholdCompress<T = any>(array: T[], xGetter: (item: T) => number, unit: number): T[] {
  if (array.length > 2) {
    let temp = Array.from(array) as (T | undefined)[];

    const getPrevious = (start: number) => {
      let index = start;
      let current: T | undefined = undefined;
      while (current === undefined && index >= 0) {
        current = temp[index];
        index--;
      }

      return current;
    };

    let previous = getPrevious(0)!;
    for (let i = 1; i < array.length - 1; i++) {
      let next = array[i + 1];
      if (next) {
        if (xGetter(next) - xGetter(previous) <= unit) {
          temp[i] = undefined;
        }
        previous = getPrevious(i)!;
      }
    }

    return temp.filter(a => a !== undefined);
  } else {
    return Array.from(array);
  }
}
/**
 * Largest Triangle Three Buckets Compress
 * @description Downsamples the input vector array to the requested length using the largest-triangle-three-buckets (LTTB) algorithm.
 * @type [T] Data Type
 * @param [array] Array
 * @param [length] Target Length
 * @return Compressed Array
 */
function largestTriangleThreeBucketsCompress<T = any>(array: T[], xGetter: (item: T) => number, yGetter: (item: T) => number, length: number): T[] {
  if (array.length <= length || array.length <= 3) {
    return Array.from(array);
  } else {
    let temp = [array.at(0)!]; // Include first point.
    let batch = (array.length - 2) / (length - 2); // Bucket size.

    let currentPoint = array.at(0)!; // Starting reference point.
    let maxArea = -1; // Current max triangle area.
    let maxAreaPoint = currentPoint; // Candidate with max area.

    for (let i = 0; i < length - 2; i++) {
      maxArea = -1; // Reset max area for this bucket.
      maxAreaPoint = currentPoint; // Default to current point.

      let nextBucketAverage = { x: 0, y: 0 }; // Accumulator for next bucket average.
      let nextBucketRange: [number, number] = [Math.floor((i + 1) * batch) + 1, Math.floor((i + 2) * batch) + 1]; // Next bucket indices.
      nextBucketRange[1] = nextBucketRange[1] < array.length ? nextBucketRange[1] : array.length; // Clamp end.
      let nextBucketLength = nextBucketRange[1] - nextBucketRange[0]; // Next bucket length.

      if (nextBucketLength > 0) {
        for (let j = nextBucketRange[0]; j < nextBucketRange[1]; j++) {
          nextBucketAverage.x += xGetter(array[j]!);
          nextBucketAverage.y += yGetter(array[j]!);
        }
        nextBucketAverage.x /= nextBucketLength; // Compute average x.
        nextBucketAverage.y /= nextBucketLength; // Compute average y.
      } else {
        let fallback = array[nextBucketRange[0]] ?? array[array.length - 1] ?? currentPoint; // Fallback to the next available point or current point.
        nextBucketAverage.x = xGetter(fallback);
        nextBucketAverage.y = yGetter(fallback);
      }

      let currentBucketRange: [number, number] = [Math.floor(i * batch) + 1, Math.floor((i + 1) * batch) + 1]; // Current bucket indices.
      for (let j = currentBucketRange[0]; j < currentBucketRange[1]; j++) {
        let candidate = array[j]!; // Candidate point.
        let area =
          Math.abs(
            (xGetter(currentPoint) - nextBucketAverage.x) * (yGetter(candidate) - yGetter(currentPoint)) -
              (xGetter(currentPoint) - xGetter(candidate)) * (nextBucketAverage.y - yGetter(currentPoint))
          ) * 0.5; // Triangle area.
        if (area > maxArea) {
          maxArea = area;
          maxAreaPoint = candidate;
        }
      }

      temp.push(maxAreaPoint); // Select point for this bucket.
      currentPoint = maxAreaPoint; // Advance reference point.
    }

    temp.push(array.at(-1)!);

    return temp;
  }
}

export { consecutiveDuplicateCompress, distanceThresholdCompress, largestTriangleThreeBucketsCompress };
