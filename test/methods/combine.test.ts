import { describe, expect, it } from 'vitest';
import { multiplePartsCombine, successionCombine } from '../../src';

describe('successionCombine', () => {
  it('$', () => {
    let r = successionCombine(
      [
        { x: 1, y: 1, value: 'a' },
        { x: 2, y: 2, value: 'b' },
        { x: 3, y: 3, value: 'c' },
        { x: 8, y: 4, value: 'd' },
        { x: 9, y: 5, value: 'e' },
        { x: 10, y: 6, value: 'f' }
      ],
      a => a.x,
      2
    );

    expect(r).toEqual([
      {
        start: { x: 1, y: 1, value: 'a' },
        end: { x: 3, y: 3, value: 'c' },
        middle: [{ x: 2, y: 2, value: 'b' }]
      },
      {
        start: { x: 8, y: 4, value: 'd' },
        end: { x: 10, y: 6, value: 'f' },
        middle: [{ x: 9, y: 5, value: 'e' }]
      }
    ]);
  });
});

describe('multiplePartsCombine', () => {
  it('$', () => {
    let r = multiplePartsCombine(
      [
        [
          { x: 1, y: 1, value: 'a' },
          { x: 2, y: 2, value: 'b' }
        ],
        [
          { x: 2, y: 2, value: 'b' },
          { x: 3, y: 3, value: 'c' }
        ],
        [
          { x: 1, y: 1, value: 'a' },
          { x: 4, y: 4, value: 'd' }
        ]
      ],
      a => a.x
    );

    expect(r).toEqual([
      { x: 1, y: 1, value: 'a' },
      { x: 2, y: 2, value: 'b' },
      { x: 3, y: 3, value: 'c' },
      { x: 4, y: 4, value: 'd' }
    ]);
  });
});
