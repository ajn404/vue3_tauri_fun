import type p5 from 'p5';

export const transform = (sketch: p5,rate:number=0.01) :p5=> {
    return sketch
      .rotateZ(sketch.frameCount * rate)
      .rotateX(sketch.frameCount * rate)
      .rotateY(sketch.frameCount * rate);
  }