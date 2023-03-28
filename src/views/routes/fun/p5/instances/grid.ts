import type p5 from 'p5';

const make2DArray = (
  cols: number,
  rows: number,
  w: number,
  h: number,
  sketch: p5
) => {
  const arr = new Array(cols);
  for (let i = 1; i < cols - 1; i += 2) {
    arr[i] = new Array(rows);
    for (let j = 1; j < rows - 1; j += 2) {
      sketch.rect(i * w, j * h, w, h);
      arr[i][j] = {
        x: i * w,
        y: j * h,
      };
    }
  }
  return arr;
};
//coding is art
export const grid = (sketch: p5, container: HTMLElement | null) => {
  const rows = 20,
    cols = 20;
  let w = 20,
    h = 20;

  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    sketch.background(0).noStroke();
    w = sketch.width / cols;
    h = sketch.height / rows;

    const grid = make2DArray(cols, rows, w, h, sketch);
    console.log(grid);
  };

  sketch.draw = () => {};
};
