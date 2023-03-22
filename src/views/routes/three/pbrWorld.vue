<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { World } from './instances/world';

const container = ref();
let world: World | Object = reactive({});
const showButton = ref(true);

const toggleRender = () => {
  if (world instanceof World) {
    world.render(container.value);
    showButton.value = false;
  }
};

nextTick(() => {
  if (container.value) {
    world = new World(container.value);
    toggleRender();
  }
});

onUnmounted(() => {
  if (world instanceof World) {
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

  .btn {
    position: fixed;
    left: 50vw;
    top: 100px;
  }
}
</style>
