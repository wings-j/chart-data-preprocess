import { describe, expect, it } from 'vitest';
import { max, mean, median, min, minMax, sum } from '../src';

describe('min', () => {
  it('$', () => {
    let r = min([1, 2, 3]);

    expect(r).toBe(1);
  });
});
describe('max', () => {
  it('$', () => {
    let r = max([1, 2, 3]);

    expect(r).toBe(3);
  });
});
describe('minMax', () => {
  it('$', () => {
    let r = minMax([1, 2, 3]);

    expect(r).toEqual([1, 3]);
  });
});
describe('sum', () => {
  it('$', () => {
    let r = sum([1, 2, 3]);

    expect(r).toBe(6);
  });
});
describe('mean', () => {
  it('$', () => {
    let r = mean([1, 2, 3]);

    expect(r).toBe(2);
  });
});
describe('median', () => {
  it('$', () => {
    expect(median([4, 1, 3, 2, 0, 10])).toBe(2.5);
  });
});
