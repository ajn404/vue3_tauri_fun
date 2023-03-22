<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import Sketch from './sketch';
import { onUnmounted, ref, watch } from 'vue';
const container = ref(null);
let sketch = new Sketch();
watch(
  () => container.value,
  () => {
    const options = {
      container: container.value,
    };
    if (options.container) sketch.init(options);
  }
);

onUnmounted(() => {
  sketch.beforeDestroy();
});
</script>

<style lang="scss"></style>
