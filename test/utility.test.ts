import { describe, expect, it } from 'vitest';
import { format, parse } from '../src';

describe('parse', () => {
  it('Number', () => {
    let r = parse(1);

    expect(r).toBe(1);
  });
  it('String', () => {
    let r = parse('1');

    expect(r).toBe(1);
  });
  it('Empty', () => {
    let r = [parse(null), parse(undefined), parse('')];

    expect(r.every(a => a === 0)).toBe(true);
  });
  it('NaN', () => {
    let r = [parse('a'), parse({})];

    expect(r.every(a => Number.isNaN(a))).toBe(true);
  });
  it('Percentage', () => {
    let r = parse('1%');

    expect(r).toBe(0.01);
  });
});

describe('format', () => {
  it('$', () => {
    expect(format(1.23456, 2)).toBe('1.23');
  });

  it('Trim', () => {
    expect(format(1, 2, true)).toBe('1');
  });
});
