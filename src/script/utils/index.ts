//防抖 强制函数在某段时间内只执行一次
export const debounce = <T extends (...args: any) => any>(
  fn: T,
  delay: number
) => {
  let inDebounce: string | number | NodeJS.Timeout;
  return function (this: any, ...args: [e: any]) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
//节流
export const throttle = <T extends (...args: any) => any>(
  fn: T,
  threshold: number
) => {
  // 记录上次执行的时间
  let last: number;
  // 定时器
  let timer: ReturnType<typeof setTimeout>;
  // 默认间隔为 250ms
  threshold = threshold || 250;
  // 返回的函数，每过 threshold 毫秒就执行一次 fn 函数
  return function (this: any, ...args: []) {
    // 保存函数调用时的上下文和参数，传递给 fn
    // const args = arguments as IArguments;
    const now = +new Date();
    // 如果距离上次执行 fn 函数的时间小于 threshold，那么就放弃
    // 执行 fn，并重新计时
    if (last && now < last + threshold) {
      clearTimeout(timer);
      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(function (this: any) {
        last = now;
        fn.apply(this, args);
      }, threshold);
      // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
    } else {
      last = now;
      fn.apply(this, args);
    }
  };
};

export const toggleFullScreen = (docElm: HtmlElement, doc: DocumentExtend) => {
  const requestFullScreen =
    docElm?.requestFullscreen ||
    docElm?.mozRequestFullScreen ||
    docElm?.webkitRequestFullScreen ||
    docElm?.msRequestFullscreen;
  const cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    switch (true) {
      case !!requestFullScreen:
        requestFullScreen.call(docElm);
        break;
      default:
        console.log('Fullscreen API is not supported');
    }
  } else {
    switch (true) {
      case !!cancelFullScreen:
        cancelFullScreen.call(document);
        break;
      default:
        console.log('Fullscreen API is not supported');
    }
  }
};

export const handleIsTauri = () => {
  return Boolean(
    typeof window !== 'undefined' &&
      window !== undefined &&
      window.__TAURI_IPC__ !== undefined
  );
};

export const messOrder = (arr: any[]) => {
  arr.sort(() => Math.random() - 0.5);
};

export const sleep = async (time?: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('操作已完成');
    }, time || 1000);
  });
};

// Here are some commonly used utility functions in TypeScript:
// @index('./*', f => `export * from '${f.path}'`)
export * from './browser';
export * from './dom';
export * from './img';
export * from './math';
export * from './switchBoard';
export * from './type';
