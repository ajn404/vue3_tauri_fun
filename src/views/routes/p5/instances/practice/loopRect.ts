import type p5 from 'p5';
import type { p5Function } from '../index';

//coding is art
export const loopRect: p5Function = (
  sketch: p5,
  container: HTMLElement | null
) => {
  let i = 0;
  let j = 0;
  let k = 0;
  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    sketch.background(0);
    sketch.noStroke();
    sketch.frameRate(60);
  };

  const draw_loop = async () => {
    if (j % 2 === 0) {
      if (i === 0) {
        j = Math.floor(sketch.random(255));
      }

      for (let n = 0; n < sketch.height; n++) {
        sketch.fill(j, (n / sketch.height) * 255, 255 - j);

        sketch.rect(i, n, 1, 1);
      }
      i++;
      i = i % sketch.width;
    } else {
      if (k === 0) {
        j = Math.floor(sketch.random(255));
      }

      for (let n = 0; n < sketch.width; n++) {
        sketch.fill(j, (n / sketch.width) * 255, 255 - j);
        sketch.rect(n, k, 1, 1);
      }
      k++;
      k = k % sketch.height;
    }
  };

  sketch.mouseClicked = () => {
    i = Math.floor(sketch.random(sketch.width));
    j = Math.floor(sketch.random(255));
    k = Math.floor(sketch.random(sketch.height));
  };

  sketch.draw = async () => {
    await draw_loop();
  };
};
