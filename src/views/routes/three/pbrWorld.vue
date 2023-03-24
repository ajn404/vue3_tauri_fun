<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { pbrWorld } from './instances/pbrWorld';

const container = ref();
let world: pbrWorld | Object = reactive({});

const toggleRender = () => {
  if (world instanceof pbrWorld) {
    world.render(container.value);
  }
};

nextTick(() => {
  if (container.value) {
    world = new pbrWorld(container.value);
    toggleRender();
  }
});

onUnmounted(() => {
  if (world instanceof pbrWorld) {
    world.beforeDestroy();
  }
});
</script>

<style lang="scss" scoped>
.view {
  position: absolute;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  place-items: center;
  .container {
    width: 100%;
    height: 100%;
  }
}
</style>
