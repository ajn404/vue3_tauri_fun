import type p5 from 'p5';

const make2DArray = (cols: any, rows: any, w: number, _: p5) => {
  const arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    _.rect(i, i, w, w);
  }
  return arr;
};
//coding is art
export const grid = (_: p5, container: HTMLElement | null) => {
  const rows = 20,
    cols = 20,
    w = 20;

  const grid = make2DArray(cols, rows, w, _);
  console.log(grid);

  _.setup = () => {
    _.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    _.background(0).noStroke();
  };

  _.draw = () => {};
};
