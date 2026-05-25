import { describe, expect, it } from 'vitest';
import { autoGapSplit } from '../../src';

describe('autoGapSplit', () => {
  it('$', () => {
    let r = autoGapSplit(
      [
        { x: 1, value: 'a' },
        { x: 2, value: 'a' },
        { x: 3, value: 'a' },
        { x: 4, value: 'a' },
        { x: 11, value: 'a' },
        { x: 12, value: 'a' },
        { x: 13, value: 'a' }
      ],
      a => a.x
    );

    expect(r).toEqual([
      [
        { x: 1, value: 'a' },
        { x: 2, value: 'a' },
        { x: 3, value: 'a' },
        { x: 4, value: 'a' }
      ],
      [
        { x: 11, value: 'a' },
        { x: 12, value: 'a' },
        { x: 13, value: 'a' }
      ]
    ]);
  });
});
