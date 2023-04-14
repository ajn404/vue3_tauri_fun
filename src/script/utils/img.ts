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
