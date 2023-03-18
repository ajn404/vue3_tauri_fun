<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, ref } from 'vue';
import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

const container = ref();

const initSketch = () => {
  if (container.value) {
    const scene = new Scene();
    scene.background = new Color('skyblue');
    const fov = 35; // AKA Field of View
    const aspect = container.value.clientWidth / container.value.clientHeight;
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane
    const camera = new PerspectiveCamera(fov, aspect, near, far);

    camera.position.set(0, 0, 10);

    const geometry = new BoxGeometry(2, 2, 2);
    // create a default (white) Basic material
    const material = new MeshBasicMaterial();

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    // add the mesh to the scene
    scene.add(cube);

    // create the renderer
    const renderer = new WebGLRenderer();

    // next, set the renderer to the same size as our container element

    renderer.setSize(container.value.clientWidth, container.value.clientHeight);

    // finally, set the pixel ratio so that our scene will look good on HiDPI displays
    renderer.setPixelRatio(window.devicePixelRatio);

    // add the automatically created <canvas> element to the page
    container.value.append(renderer.domElement);

    // render, or 'create a still image', of the scene
    renderer.render(scene, camera);
  }
};
nextTick(() => {
  initSketch();
});

onUnmounted(() => {});
</script>

<style lang="scss" scoped>
.view {
  position: absolute;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(to right, skyblue, blue);
  display: grid;
  place-items: center;
  .container {
    width: 100%;
    height: 100%;
  }
}
</style>
