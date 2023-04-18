import type p5 from 'p5';
import type { p5Function } from '../index';
//coding is art
export const leibnizSeries: p5Function = (
  sketch: p5,
  container: HTMLElement | null,
  option
) => {
  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    sketch.frameRate(option?.rate || 1);
    sketch.background(255);
  };
  sketch.mouseClicked = () => {};
  const calcPi = () => {
    if (option?.index && (option.PI || option.PI === 0)) {
      let temp = 1 / (option.index * 2 - 1);
      if (option.index % 2 === 0) {
        option.PI -= temp;
      } else {
        option.PI += temp;
      }
      option.index++;
    }
  };

  sketch.draw = async () => {
    if (Number.isSafeInteger(option?.index))
      new Array(option?.magnification || 10000).fill(1).map(() => {
        calcPi();
      });
    if (!option?.switch) {
      sketch.background(255);
    }
    sketch.rect(sketch.mouseX, sketch.mouseY, 50, 50);
    sketch.fill(sketch.mouseX, 200, 99);
    sketch.rectMode(sketch.CENTER);
  };
};
