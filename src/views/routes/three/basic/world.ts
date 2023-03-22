import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  Object3D,
  Cache,
} from 'three';
import { createRenderer } from './renderer';
import { createPerspectiveCamera } from './camera';
import { createScene } from './scene';
//World

class World {
  camera: PerspectiveCamera;
  scene: Object3D;
  renderer: WebGLRenderer;
  cube: Object3D;

  constructor(container: HTMLElement) {
    this.camera = createPerspectiveCamera();
    this.scene = createScene();
    this.renderer = createRenderer(
      container.clientWidth,
      container.clientHeight
    );

    this.cube = createCube();
    this.scene.add(this.cube);
    container.append(this.renderer.domElement);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
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

const createCube = () => {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  return cube;
};

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

export { World, createCube, createPerspectiveCamera, createScene };
