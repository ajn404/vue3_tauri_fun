<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import p5 from 'p5';
import { nextTick } from 'vue';
import { geometries } from './instances';

import { useP5 } from '@/script/composition';

const { container, p5_instance } = useP5();

nextTick(() => {
  if (container.value) {
    p5_instance.value = new p5(function (args: p5) {
      geometries(args, container.value);
    }, container.value);
  }
});
</script>
