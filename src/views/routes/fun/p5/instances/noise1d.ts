import type p5 from 'p5';
import type { p5_func } from './index';

//coding is art
export const noise: p5_func = (sketch: p5, container: HTMLElement | null) => {
  let x_off = 0.0;
  const x_increment = 0.01;
  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    sketch.background(0).noStroke();
  };

  sketch.draw = () => {
    sketch.fill(0, 10);
    sketch.rect(0, 0, sketch.width, sketch.height);
    // 基于 x_off 和 scale 得到一个噪声值
    // 并根据窗口宽度进行缩放
    const n = sketch.noise(x_off) * sketch.width;

    // 每一轮增加 x_off
    x_off += x_increment;

    // 绘制由柏林噪声产生的数值的椭圆
    sketch.fill(200);
    sketch.ellipse(n, sketch.height / 2, 64, 64);
  };
};
