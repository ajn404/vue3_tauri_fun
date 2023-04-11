import type p5 from 'p5';
import type { p5Option } from '..';
import { debounce } from '@/script/utils';
export interface heapSortViewOption extends p5Option {
  rate?: number;
}



const heapSort = (array: number[]) => {
  // 构建最大堆
  buildMaxHeap(array);

  // 交换堆顶元素到数组末尾，并调整堆
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    maxHeapify(array, 0, i);
  }

  return array;
}

const buildMaxHeap = (array: number[]) => {
  // 从最后一个非叶子节点开始，依次进行最大堆调整
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    maxHeapify(array, i, array.length);
  }
}

const maxHeapify = (array: number[], i: number, heapSize: number) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  // 找到左右子节点中最大的节点
  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  // 如果最大节点不是当前节点，则交换节点并递归调整堆
  if (largest !== i) {
    swap(array, i, largest);
    maxHeapify(array, largest, heapSize);
  }
}

const swap = (array: number[], i: number, j: number) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}



export const heapSortView = (
  sketch: p5,
  container: HTMLElement | null,
  option?: heapSortViewOption
) => {
  let i = 0;
  let values: number[] = [];
  const width: number = option?.width || 1;
  const rate = option?.rate || 60;
  sketch.setup = () => {
    i = 0;
    sketch.createCanvas(
      container?.clientWidth || sketch.windowWidth,
      container?.clientHeight || sketch.windowHeight
    );
    sketch.frameRate(rate);
    values = new Array(Math.round(sketch.width / width));
    for (let n = 0; n < values.length; n++) {
      values[n] = sketch.random(sketch.height);
    }

    i = values.length - 1
    buildMaxHeap(values);

  };

  const g = sketch.random(255);

  const drawLine = () => {
    for (let m = 0; m < values.length; m++) {
      const color = (m / values.length) * 255;
      const reverseColor = 255 - color;

      sketch.stroke(g,  reverseColor, color);
      sketch.strokeWeight(width);

      const line_height = sketch.height - values[m];
      sketch.line(m * width, sketch.height, m * width, line_height);
    }
  };

  sketch.keyPressed = () => {
    if (sketch.key === 's') {
        sketch.saveGif("heapSort", 2, {});
    }
}

  sketch.draw = () => {
    sketch.translate(0.5 * width, 0);
    sketch.background(0);
    if (i > 0) {

      {
        swap(values, 0, i);
        maxHeapify(values, 0, i);
      }
    
      i--
    } else {
      sketch.noLoop();
    }
    drawLine();

  };


};
