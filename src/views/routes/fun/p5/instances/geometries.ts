import type p5 from 'p5';
//coding is art\
import { transform } from '../basic'

export const geometries = (sketch: p5, container: HTMLElement | null) => {
  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400,
      sketch.WEBGL
    );
  };

  sketch.draw = () => {
    sketch.background(255);
    sketch.translate(-200, -100, 0);
    sketch.normalMaterial();

    sketch.push();

    transform(sketch, 0.02)

    sketch.plane(200).pop();

    sketch.translate(200, 0, 0).push();
    transform(sketch);
    sketch.box(70, 70, 70);
    sketch.pop();

    sketch.translate(200, 0, 0).push();
    transform(sketch);

    sketch.cylinder(30, 10);
    sketch.pop();

    sketch.translate(-400, 200, 0);
    sketch.push();
    transform(sketch);

    // 底r和高
    sketch.cone(30, 100);
    sketch.pop();

    sketch.translate(200, 0, 0);
    sketch.push();
    transform(sketch);

    // 圆环 半径和高
    sketch.torus(60, 30);
    sketch.pop();

    sketch.translate(200, 0, 0);
    sketch.push();
    transform(sketch);

    sketch.sphere(70);
    sketch.pop();
  };
};
