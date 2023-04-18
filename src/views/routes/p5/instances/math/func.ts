import type p5 from 'p5';
import type { p5Function } from '../index';

export const func: p5Function = (sketch: p5, container: HTMLElement | null) => {
  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
  };
  const execFunc = (x: number) => {
    return Math.pow(x, 1 / 2);
  };

  sketch.draw = () => {
    sketch.background(255);

    for (let x = 0; x < sketch.width; x += 1) {
      let y = Math.pow(x, 1);
      sketch.point(x, y);
    }

    sketch.line(
      sketch.mouseX,
      sketch.mouseY,
      execFunc(sketch.mouseX),
      execFunc(sketch.mouseY)
    );
  };
};
