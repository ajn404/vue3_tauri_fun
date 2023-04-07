import {
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  Object3D,
  Cache,
} from 'three';
import { createPerspectiveCamera } from '../basic/camera';
import { createCube } from '../basic/cube';
import { createScene } from '../basic/scene';
import { createRenderer } from '../basic/renderer';
import { resize } from '../basic/resize';

import { useStore } from '@/stores';
import { watch, nextTick } from 'vue';
import type { animationWorld } from './animationWorld';
const store = useStore();
//World

class World {
  camera: PerspectiveCamera;
  scene: Object3D;
  renderer: WebGLRenderer;
  cube?: Object3D;

  constructor(container: HTMLElement) {
    this.camera = createPerspectiveCamera();
    this.scene = createScene();
    this.renderer = createRenderer(
      container.clientWidth,
      container.clientHeight
    );
    this.appendRender(container);
    this.addProject();
    watch(
      () => store.menu,
      () => {
        nextTick(() => {
          resize(this, container);
        });
      }
    );
  }

  appendRender(container: HTMLElement): void {
    container.append(this.renderer.domElement);
  }

  addProject() {
    this.cube = createCube({ material: 'MeshBasicMaterial' });
    this.scene.add(this.cube);
  }

  render(container: HTMLElement) {
    resize(this, container);
    addEventListener(
      'resize',
      () => {
        resize(this, container);
      },
      false
    );
  }

  beforeDestroy() {
    this.scene.traverse((item: any) => {
      disposeChild(item);
    });
    Cache.clear();
    this.scene.clear();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
  }
}

const disposeChild = (mesh: any) => {
  if (mesh instanceof Mesh) {
    if (mesh.geometry?.dispose) {
      mesh.geometry.dispose();
    }
    if (mesh.material?.dispose) {
      mesh.material.dispose();
    }
    if (mesh.material?.texture?.dispose) {
      mesh.material.texture.dispose();
    }
  }
  if (mesh instanceof Group) {
    mesh.clear();
  }
  if (mesh instanceof Object3D) {
    mesh.clear();
  }
};

export { World };
