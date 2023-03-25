import type p5 from 'p5';
//coding is art\

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

    sketch
      .rotateZ(sketch.frameCount * 0.1)
      .rotateX(sketch.frameCount * 0.1)
      .rotateY(sketch.frameCount * 0.1);

    sketch.plane(200).pop();

    sketch.translate(200, 0, 0).push();
    sketch
      .rotateZ(sketch.frameCount * 0.01)
      .rotateX(sketch.frameCount * 0.01)
      .rotateY(sketch.frameCount * 0.01);

    sketch.box(70, 70, 70);
    sketch.pop();

    sketch.translate(200, 0, 0).push();
    sketch
      .rotateZ(sketch.frameCount * 0.01)
      .rotateX(sketch.frameCount * 0.01)
      .rotateY(sketch.frameCount * 0.01);
    sketch.cylinder(30, 10);
    sketch.pop();

    sketch.translate(-400, 200, 0);
    sketch.push();
    sketch.rotateZ(sketch.frameCount * 0.01);
    sketch.rotateX(sketch.frameCount * 0.01);
    sketch.rotateY(sketch.frameCount * 0.01);
    // 底r和高
    sketch.cone(30, 100);
    sketch.pop();

    sketch.translate(200, 0, 0);
    sketch.push();
    sketch.rotateZ(sketch.frameCount * 0.02);
    sketch.rotateX(sketch.frameCount * 0.01);
    sketch.rotateY(sketch.frameCount * 0.01);
    // 圆环 半径和高
    sketch.torus(60, 30);
    sketch.pop();

    sketch.translate(200, 0, 0);
    sketch.push();
    sketch.rotateZ(sketch.frameCount * 0.01);
    sketch.rotateX(sketch.frameCount * 0.01);
    sketch.rotateY(sketch.frameCount * 0.01);
    sketch.sphere(70);
    sketch.pop();
  };
};
