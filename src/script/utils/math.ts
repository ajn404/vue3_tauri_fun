export const getDigit = (num: number) =>
  num > 0 ? num.toString().length : num.toString().length - 1;
