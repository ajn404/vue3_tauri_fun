import type p5 from 'p5';

const make2DArray = (cols: any, rows: any, w: number, h: number, _: p5) => {
  const arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < cols; j++) {
      _.rect(i * w, j * h, w, h);
    }
  }
  return arr;
};
//coding is art
export const grid = (_: p5, container: HTMLElement | null) => {
  const rows = 20,
    cols = 20;
  let w = 20,
    h = 20;

  _.setup = () => {
    _.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    _.background(0).noStroke();
    w = _.width / cols;
    h = _.height / rows;
    console.log(w, h);

    const grid = make2DArray(cols, rows, w, h, _);
    console.log(grid);
  };

  _.draw = () => {};
};
