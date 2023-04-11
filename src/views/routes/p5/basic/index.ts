/**
 * define some basic functions when using p5
 *
 */

import type p5 from 'p5';

export const transform = (sketch: p5, rate = 0.01): p5 => {
  return sketch
    .rotateZ(sketch.frameCount * rate)
    .rotateX(sketch.frameCount * rate)
    .rotateY(sketch.frameCount * rate);
};

export const randomColor = (sketch: p5) => {
  return sketch.color(
    sketch.random(0, 255),
    sketch.random(0, 255),
    sketch.random(0, 255)
  );
};

interface cell {
  x: number;
  y: number;
}

export const make2DArray = (
  cols: number, //列
  rows: number, //行
  w: number, //宽
  h: number //高
): cell[][] => {
  const arr = new Array(cols);
  for (let i = 0; i < cols - 1; i += 1) {
    arr[i] = new Array(rows);
    for (let j = 0; j < rows - 1; j += 1) {
      arr[i][j] = {
        x: i * w,
        y: j * h,
      };
    }
  }
  return arr;
};
