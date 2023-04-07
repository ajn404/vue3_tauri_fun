<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { animationWorld } from '../instances';

const container = ref();
let world: animationWorld | Object = reactive({});
const toggleRender = () => {
  if (world instanceof animationWorld) {
    world.render(container.value);
  }
};
nextTick(() => {
  if (container.value) {
    world = new animationWorld(container.value);
    toggleRender();
  }
});
onUnmounted(() => {
  if (world instanceof animationWorld) {
    world.beforeDestroy();
    world.stop();
  }
});
</script>
