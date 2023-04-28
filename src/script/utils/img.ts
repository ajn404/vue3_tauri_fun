/*
 * @Description:获取图片的宽高
 * @Version: 1.0
 * */

export const getImgSize = (
  url: string
): Promise<{ width: number; height: number }> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = function () {
      resolve({
        width: img.width,
        height: img.height,
      });

      img.onerror = function () {
        reject(new Error('error'));
      };
    };
  });

/**
 *
 * 懒加载
 */
export const lazyLoad = (
  imgs: NodeListOf<HTMLImageElement>,
  contentHeight: number = document.body.clientHeight
) => {
  const imgsArr = Array.from(imgs);
  imgsArr.forEach((item) => {
    if (!item.dataset.src) return;
    const { top, bottom } = item.getBoundingClientRect();
    console.log(top, top < contentHeight * 2 && bottom >= 0);

    if (top < contentHeight * 2 && bottom >= 0) {
      item.src = item.dataset.src;
      item.removeAttribute('data-src');
    }
  });
};
