import type p5 from 'p5';
import type { p5Function } from '../index';

//coding is art
export const waveCube: p5Function = (
  sketch: p5,
  container: HTMLElement | null
) => {
  let angle = 0;
  let width: number, height: number;
  let rect_width = 50;
  let gap = 5;
  let r = sketch.random(255),
    b = sketch.random(255),
    g = sketch.random(255);

  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    sketch.noStroke();
    sketch.frameRate(40);
    sketch.rectMode(sketch.CENTER);
    width = sketch.width;
    height = sketch.height;
  };

  const draw_loop = async () => {
    sketch.translate(width / 2, height / 2);
    angle += 0.1;

    if (Math.floor(angle) % 10 === 0)
      (r = sketch.random(255)),
        (b = sketch.random(255)),
        (g = sketch.random(255));

    let offset = 0;
    for (let i = 0; i < width; i += rect_width) {
      let a = angle + offset;
      let h = sketch.map(sketch.sin(a), -1, 1, 0, 100);
      let x = i - width / 2 + rect_width / 2;
      let y1 = (i / width) * height - height / 2 + h / 2;
      let y2 = height / 2 - (i / width) * height - h / 2;
      sketch.rect(x, 0, rect_width - gap, h);
      sketch.rect(x, y1, rect_width - gap, h);
      sketch.rect(x, y2, rect_width - gap, h);
      offset += 0.1;
      // r = sketch.random(255), b = sketch.random(255), g = sketch.random(255);
      // sketch.fill(r, g, b);
    }
  };

  sketch.draw = async () => {
    sketch.background(0);
    sketch.fill(r, g, b);
    await draw_loop();
  };
};
