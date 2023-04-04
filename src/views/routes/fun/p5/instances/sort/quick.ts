export const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

export const no_recursion_quicksort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const stack: [number, number][] = [[0, arr.length - 1]];
  while (stack.length > 0) {
    const [start, end] = stack.pop()!;
    if (start >= end) {
      continue;
    }
    const pivotIndex = partition(arr, start, end);
    stack.push([start, pivotIndex - 1]);
    stack.push([pivotIndex + 1, end]);
  }
  return arr;
};

export const partition = (
  arr: number[],
  start: number,
  end: number
): number => {
  let pivotIndex = start;
  const pivot = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
};

import type p5 from 'p5';
import type { p5Option } from '..';
export interface quickSortViewOption extends p5Option {
  rate?: number;
}

export const quickSortView = (
  sketch: p5,
  container: HTMLElement | null,
  option?: quickSortViewOption
) => {
  let values: number[] = [];
  const width: number = option?.width || 1;
  const rate = option?.rate || 60;
  const stack: [number, number][] = [];

  sketch.setup = () => {
    sketch.createCanvas(
      container?.clientWidth || sketch.windowWidth,
      container?.clientHeight || sketch.windowHeight
    );
    sketch.frameRate(rate * 100);
    values = new Array(Math.round(sketch.width / width));
    for (let n = 0; n < values.length; n++) {
      values[n] = sketch.random(sketch.height);
    }
    stack.push([0, values.length - 1]);
  };

  const drawLine = () => {
    for (let m = 0; m < values.length; m++) {
      const color = (m / values.length) * 255;
      const reverseColor = 255 - color;
      const line_height = sketch.height - values[m];
      sketch
        .stroke(reverseColor, reverseColor, color)
        .strokeWeight(width)
        .line(m * width, sketch.height, m * width, line_height);
    }
  };

  const _partition = async (
    arr: number[],
    start: number,
    end: number
  ): Promise<number> => {
    return new Promise((resolve) => {
      let pivotIndex = start;
      const pivot = arr[end];
      for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
          [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
          pivotIndex++;
        }
      }
      [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];

      resolve(pivotIndex);
    });
  };

  sketch.draw = async () => {
    sketch.background(0);
    drawLine();

    //快排核心代码
    if (stack.length > 0) {
      const [start, end] = stack.pop()!;

      if (start < end) {
        const pivotIndex = await _partition(values, start, end);
        stack.push([start, pivotIndex - 1]);
        stack.push([pivotIndex + 1, end]);

        [start, end, pivotIndex].forEach((item) => {
          const line_height = sketch.height - values[item];
          const color = (item / values.length) * 255;

          sketch
            .stroke(color, 255 - color, color)
            .line(item * width, sketch.height, item * width, line_height);
        });
      }
    } else {
      sketch.noLoop();
    }
  };
};
