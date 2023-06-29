<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { textureWorld } from '../instances';
import '../three.scss';
import { MathUtils, Clock } from 'three';

import type { createCameraControlOption } from '../plugin';
import { createCameraControl } from '../plugin';
import { resize } from '../basic/resize';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const clock = new Clock();

class mandalaWorld extends textureWorld {
  control: OrbitControls;
  option?: createCameraControlOption;
  constructor(container: HTMLElement, option?: createCameraControlOption) {
    super(container);
    this.option = option;
    this.control = createCameraControl(
      this.camera,
      this.renderer.domElement,
      this.option
    );
  }

  animate() {
    const delta = clock.getDelta();
    const rate = MathUtils.degToRad(30) * delta;
    if (this.cube) {
      this.cube.rotation.x += rate * 10;
      this.cube.rotation.y += rate;
      this.cube.rotation.z += rate;
    }
  }
  render(container: HTMLElement) {
    resize(this, container);
    this.control?.update();
    this.animate();
    if (container.getBoundingClientRect().width > 0) {
      this.animationFrame = requestAnimationFrame(
        this.render.bind(this, container)
      );
    } else return;
  }
}
const container = ref();
let world: mandalaWorld | Object = reactive({});
let option: createCameraControlOption = reactive({
  dampingFactor: 0.05,
  enableDamping: false,
  control: true,
});
const toggleRender = () => {
  if (container.value) {
    world = new mandalaWorld(container.value, option);
    if (world instanceof mandalaWorld) {
      world.render(container.value);
    }
  }
};
nextTick(() => {
  toggleRender();
});
const destroyInstance = () => {
  if (world instanceof mandalaWorld) {
    world.control.dispose();
    world.stop();
    world.beforeDestroy();
  }
};
onUnmounted(() => {
  destroyInstance();
});
</script>
