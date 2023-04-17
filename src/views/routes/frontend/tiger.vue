<template>
  <div class="view flex" ref="view">
    <canvas ref="canvas" class="hidden" width="500" height="500"></canvas>
    <div ref="svg" class="m-auto"></div>
  </div>
</template>

<script lang="ts" setup>
import { Element } from 'svgcanvas';

import { tiger } from '@/script/instances';
import { onMounted, ref, type Ref } from 'vue';
const canvas: Ref<HTMLCanvasElement | null> = ref(null);
const view: Ref<HTMLElement | null> = ref(null);
const svg: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  if (canvas.value && view.value) {
    let canvas_ctx = canvas.value.getContext('2d');
    const options = {
      height: view.value.clientWidth, // falsy values get converted to 500
      width: 0 / 0, // falsy values get converted to 500
      ctx: canvas_ctx, // existing Context2D to wrap around
      enableMirroring: true, // whether canvas mirroring (get image data) is enabled (defaults to false)
      document: undefined, // overrides default document object
    };
    if (canvas_ctx && svg.value) {
      const element = new Element(options);
      svg.value.append(element.getElement());
      tiger(element.ctx); //绘制svg
    }
  }
});
</script>
