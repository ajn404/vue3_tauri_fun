<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useP5 } from '@/script/composition';
import type p5 from 'p5';

const { container, p5_instance } = useP5(
  (sketch: p5, container: HTMLElement | null) => {
    sketch.setup = () => {
      sketch.createCanvas(
        container?.clientWidth || 400,
        container?.clientHeight || 400,
        sketch.WEBGL
      );
      let vert = ``;
      let frag = ``;
      let shader = sketch.createShader(vert, frag);
      console.log(sketch);
      console.log(shader);
    };
    sketch.draw = () => {};
  }
);
</script>
