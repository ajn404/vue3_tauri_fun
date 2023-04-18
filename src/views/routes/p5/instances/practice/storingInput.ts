import type p5 from 'p5';
//coding is art\
import type { p5Function } from '../index';

export const storing_input: p5Function = (
  sketch: p5,
  container: HTMLElement | null
) => {
  let num = 50;
  let mx: number[] = [];
  let my: number[] = [];

  let r = sketch.random(255);
  let g = sketch.random(255);

  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );

    sketch.noStroke();
    sketch.fill((g % 155) + 100, 153);

    for (let i = 0; i < num; i++) {
      mx.push(i);
      my.push(i);
    }
  };

  sketch.draw = () => {
    sketch.background(25, 179, 180);
    let which = sketch.frameCount % num;
    mx[which] = sketch.mouseX;
    my[which] = sketch.mouseY;
    for (let i = 0; i < num; i++) {
      let index = (which + 1 + i) % num;
      sketch.ellipse(mx[index], my[index], i, i);
    }
  };
};
