export const getDigit = (num: number) =>
  num > 0 ? num.toString().length : num.toString().length - 1;

export const ChaosSystem = (
  x: number,
  y: number,
  a: number,
  b: number,
  c: number,
  d: number
): number[] => {
  var x1 = Math.sin(a * y) + c * Math.cos(a * x);
  var y1 = Math.sin(b * x) + d * Math.cos(b * y);
  return [x1, y1];
};
