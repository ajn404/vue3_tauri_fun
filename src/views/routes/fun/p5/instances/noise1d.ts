import type p5 from 'p5';

//coding is art
export const noise = (_: p5, container: HTMLElement | null) => {
  _.setup = () => {
    _.createCanvas(
      container?.clientWidth || 400,
      container?.clientHeight || 400
    );
    _.background(0).noStroke();
  };

  _.draw = () => {};
};
