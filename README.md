`chart-data-preprocess` is a lightweight TypeScript library for preparing numeric data before generating charts. It provides utility functions for parsing values, formatting numbers, and transforming data arrays to support common chart preprocessing tasks.

# Installation

```bash
npm install @wings-j/chart-data-preprocess
```

# API

## Types

- [`Vector1`](#Vector1)
- [`Vector2`](#Vector2)

## Math

- [`min`](#min)
- [`max`](#max)
- [`minMax`](#minMax)
- [`sum`](#sum)
- [`mean`](#mean)
- [`median`](#median)

## Utility

- [`parse`](#parse)
- [`format`](#format)

## Methods

### combine

- [`successionCombine`](#successionCombine)
- [`multiplePartsCombine`](#multiplePartsCombine)

### compress

- [`consecutiveDuplicateCompress`](#consecutiveDuplicateCompress)
- [`distanceThresholdCompress`](#distanceThresholdCompress)
- [`largestTriangleThreeBucketsCompress`](#largestTriangleThreeBucketsCompress)

### split

- [`autoGapSplit`](#autoGapSplit)

### transform

- [`ratio`](#ratio)

# Document

## `Vector1`

```ts
interface Vector1 {
  x: number;
}
```

## `Vector2`

```ts
interface Vector2 {
  x: number;
  y: number;
}
```

## `min`

```ts
/**
 * Min
 * @description Find the minimum value in an array.
 * @param [array] Array
 * @return Value
 */
function min(array: number[]): number;
```

## `max`

```ts
/**
 * Max
 * @description Find the maximum value in an array.
 * @param [array] Array
 * @return Value
 */
function max(array: number[]): number;
```

## `minMax`

```ts
/**
 * Min Max
 * @description Find both the minimum and maximum values in an array.
 * @param [array] Array
 * @return Min Value and Max Value
 */
function minMax(array: number[]): [number, number];
```

## `sum`

```ts
/**
 * Sum
 * @description Calculate the sum of all values in an array.
 * @param [array] Array
 * @return Value
 */
function sum(array: number[]): number;
```

## `mean`

```ts
/**
 * Mean
 * @description Calculate the average (mean) of all values in an array.
 * @param [array] Array
 * @return Value
 */
function mean(array: number[]): number;
```

## `median`

```ts
/**
 * Median
 * @description Calculate the median of an array of numbers.
 * @param [array] Array of numbers
 * @return Median value
 */
function median(array: number[]): number;
```

## `parse`

```ts
/**
 * Parse
 * @param [value] Value
 * @return Number
 */
function parse(value: any): number;
```

## `format`

```ts
/**
 * Format
 * @param [value] Value
 * @param [fraction] Fraction
 * @param [trim] Trim
 * @return String
 */
function format(value: number, fraction: number, trim?: boolean): string;
```

## `successionCombine`

```ts
/**
 * Succession Combine
 * @description Merge multiple arrays into one by identifier, removing duplicates while preserving the succession order.
 * @type [T] Data Type
 * @param [array] Array
 * @param [xGetter] X Getter
 * @param [unit] Unit
 * @return Combined Array
 */
function successionCombine<T = any>(array: T[], xGetter: (item: T) => number, unit: number): { start: T; end: T; middle: T[] }[];
```

## `multiplePartsCombine`

```ts
/**
 * Multiple Parts Combine
 * @description Merge multiple arrays into one by identifier, removing duplicates while preserving the first-seen order.
 * @type [T] Data Type
 * @param [array] Array Groups
 * @param [vGetter] Value Getter
 * @return Combined Array
 */
function multiplePartsCombine<T = any>(array: T[][], vGetter: (item: T) => any): T[];
```

## `consecutiveDuplicateCompress`

```ts
/**
 * Consecutive Duplicate Compress
 * @description Compresses the input array by removing consecutive duplicate entries while preserving order.
 * @type [T] Data Type
 * @param [array] Array
 * @param [vGetter] Value Getter
 * @return Compressed Array
 */
function consecutiveDuplicateCompress<T = any>(array: T[], vGetter?: (item: T) => any): T[];
```

## `distanceThresholdCompress`

```ts
/**
 * Distance Threshold Compress
 * @description Compresses the input vector array by removing points whose x-distance to the previous kept point is within the given unit threshold.
 * @type [T] Data Type
 * @param [array] Array
 * @param [xGetter] X Getter
 * @param [unit] Unit Size
 * @returns Compressed Array
 */
function distanceThresholdCompress<T = any>(array: T[], xGetter: (item: T) => number, unit: number): T[];
```

## `largestTriangleThreeBucketsCompress`

```ts
/**
 * Largest Triangle Three Buckets Compress
 * @description Downsamples the input vector array to the requested length using the largest-triangle-three-buckets (LTTB) algorithm.
 * @type [T] Data Type
 * @param [array] Array
 * @param [length] Target Length
 * @return Compressed Array
 */
function largestTriangleThreeBucketsCompress<T = any>(array: T[], xGetter: (item: T) => number, yGetter: (item: T) => number, length: number): T[];
```

## `autoGapSplit`

```ts
/**
 * Auto Gap Split
 * @description Split an array into sub arrays based on gaps between consecutive elements.
 * @type [T] Data Type
 * @param [array] Array to split
 * @param [xGetter] Function to extract the numeric value for gap calculation
 * @param [tolerance] Multiplier for the normal gap to determine the threshold
 * @return Array of Sub Arrays
 */
function autoGapSplit<T extends Vector1 = any>(array: T[], xGetter: (item: T) => number, tolerance?: number): T[][];
```

## `ratio`

```ts
/**
 * Ratio
 * @description Calculate ratio.
 * @type [T] Data Type
 * @param [array] Array
 * @param [xGetter] X Getter
 * @return Array with X Ratio
 */
function ratio<T = any>(array: T[], xGetter: (item: T) => number): { value: T; x: number }[];
```
