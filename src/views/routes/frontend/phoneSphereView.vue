<template>
  <div id="container" class="m-auto" ref="container"></div>
</template>
<script lang="ts" setup>
import { Viewer } from '@photo-sphere-viewer/core';
import { getImgSize } from '@/script/utils';

import '@photo-sphere-viewer/core/index.scss';
import imgPath from '@/assets/k.webp';
import { onMounted, ref, type Ref } from 'vue';
const container: Ref<HTMLElement | null> = ref(null);
const viewer: any = ref(null);
const img_url = ref(imgPath);

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
