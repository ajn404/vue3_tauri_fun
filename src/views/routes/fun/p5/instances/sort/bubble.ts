import type p5 from 'p5';
import type { p5Option } from '..';
// import { randomColor } from '../../basic';

export interface bubbleSortViewOption extends p5Option {
  rate?: number;
}

export const bubbleSortView = (
  sketch: p5,
  container: HTMLElement | null,
  option?: bubbleSortViewOption
) => {
  let i = 0;
  let values: number[] = [];
  const width: number = option?.width || 1;

  const rate = option?.rate || 60;

  sketch.setup = () => {
    i = 0;

    sketch.createCanvas(
      container?.clientWidth || sketch.windowWidth,
      container?.clientHeight || sketch.windowHeight
    );
    sketch.frameRate(rate);
    values = new Array(Math.round(sketch.width / width));
    for (let n = 0; n < values.length; n++) {
      values[n] = sketch.random(sketch.windowHeight);
    }
  };
  sketch.draw = () => {
    sketch.background(0);

    if (i < values.length) {
      for (let j = 0; j < values.length - i - 1; j++) {
        const a = values[j];
        const b = values[j + 1];
        if (a > b) {
          [values[j], values[j + 1]] = [values[j + 1], values[j]];
        }
      }
    } else {
      sketch.noLoop();
    }
    i++;
    for (let m = 0; m < values.length; m++) {
      sketch.stroke((m % 200) + 50, (m % 355) - 100, (m % 55) + 200);
      sketch.strokeWeight(width);

      const line_height = sketch.height - values[m];
      sketch.line(m * width, sketch.height, m * width, line_height);
    }
  };

  sketch.mousePressed = () => {};
};
