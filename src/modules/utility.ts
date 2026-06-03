/**
 * Parse
 * @param [value] Value
 * @return Number
 */
function parse(value: any): number {
  if (value == null || value === undefined || value === '') {
    return 0;
  } else if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    if (value.endsWith('%')) {
      return Number.parseFloat(value) / 100;
    } else {
      return Number.parseFloat(value);
    }
  } else {
    return NaN;
  }
}

/**
 * Format
 * @param [value] Value
 * @param [fraction] Fraction
 * @param [trim] Trim
 * @return String
 */
function format(value: number, fraction: number, trim = false): string {
  let result = value.toFixed(fraction);
  if (trim) {
    result = result.replace(/\.0+$/, '');
  }

  return result;
}

export { format, parse };
