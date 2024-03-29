### 2023/04/06 
- 使用@phone-sphere-view/core实现全景查看
```vue
<template>
  <div id="container" class="m-auto" ref="container"></div>
</template>
<script lang="ts" setup>
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.scss';
import imgPath from '@/assets/k.webp';
import { onMounted, ref, type Ref } from 'vue';
const container: Ref<HTMLElement | null> = ref(null);
const viewer: any = ref(null);
const img_url = ref(imgPath);

const getImgSize = (url: string): Promise<{ width: number; height: number }> =>
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

onMounted(async () => {
  if (container.value) {
    const res = await getImgSize(imgPath);
    let { width, height } = res;
    let c_height = container.value.clientHeight;
    let cal_height = (c_height * height) / width;
    cal_height = cal_height > c_height ? c_height : cal_height;
    viewer.value = new Viewer({
      container: container.value,
      panorama: img_url.value,
      size: {
        height: `${cal_height}px`,
        width: `${container.value.clientWidth}px`,
      },
    });
  }
});
</script>

```