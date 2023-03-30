import type { Image } from 'p5';
import type p5 from 'p5';
import { randomColor, make2DArray } from '../basic';
import kk from '@/assets/k.webp';

import type { p5_func } from './index';
//coding is art
export const grid: p5_func = (sketch: p5, container: HTMLElement | null) => {
  const rows = 20,
    cols = 20;
  let w = 20,
    h = 20;

  const frameRate = 1;

  let grid: any[][];
  let button = true;
  let img: Image;

  const draw_or = (button: boolean) => {
    // sketch.fill(0)
    // sketch.rect(0, 0, sketch.width, sketch.height)
    grid.forEach((item) => {
      item.forEach((cell) => {
        const min_w = sketch.random(0, sketch.width);
        const max_w = sketch.random(0, sketch.width);
        const min_h = sketch.random(0, sketch.height);
        const max_h = sketch.random(0, sketch.height);

        //命运中的选定，简称天选之子
        if (
          cell.x < min_w &&
          cell.x > max_w &&
          cell.y < min_h &&
          cell.y > max_h
        ) {
          sketch.fill(randomColor(sketch));
          if (button) sketch.rect(cell.x, cell.y, w, h);
          else sketch.image(img, cell.x, cell.y, w, h);
        }
      });
    });
  };

  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    sketch.background(0).noStroke();
    w = sketch.width / cols;
    h = sketch.height / rows;
    sketch.frameRate(frameRate);

    grid = make2DArray(cols, rows, w, h);
  };

  sketch.preload = () => {
    img = sketch.loadImage(kk);
  };

  sketch.mouseClicked = () => {
    button = !button;
  };

  sketch.mousePressed = () => {};

  sketch.draw = () => {
    draw_or(button);
  };
};
