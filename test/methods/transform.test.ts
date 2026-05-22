import { describe, expect, it } from 'vitest';
import { ratio } from '../../src';

describe('ratio', () => {
  it('$', () => {
    let list = [
      { name: '1', x: 1 },
      { name: '2', x: 2 },
      { name: '3', x: 3 }
    ];

    let r = ratio(list, a => a.x);

    expect(r).toEqual([
      { value: list[0], x: 1 / 6 },
      { value: list[1], x: 2 / 6 },
      { value: list[2], x: 3 / 6 }
    ]);
  });
});
