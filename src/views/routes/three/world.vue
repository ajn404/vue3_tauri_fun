<template>
  <div class="view">
    <el-button @click="toggleRender" class="btn" v-show="showButton"
      >延迟渲染</el-button
    >
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue';
import { World } from '@/script/world';

const container = ref();

let world: World | Object = reactive({});

const resizer = (world: World) => {
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;

  world.renderer.setSize(width, height);

  world.camera.aspect = width / height;
  world.camera.updateProjectionMatrix();

  world.renderer.setPixelRatio(window.devicePixelRatio);
};
nextTick(() => {
  if (container.value) {
    world = new World(container.value);
  }
});

const showButton = ref(true);

const toggleRender = () => {
  if (world instanceof World) {
    resizer(world);
    world.render();

    showButton.value = false;
  }
};
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
