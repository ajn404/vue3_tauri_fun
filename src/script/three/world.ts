import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

import type { Object3D } from 'three';

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
}

const createRenderer = (
  width: number,
  height: number,
  updateStyle?: boolean
) => {
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height, updateStyle);
  return renderer;
};

const createScene = () => {
  const scene = new Scene();
  scene.background = new Color('rgba(10,10,10,0.5)');
  return scene;
};

const createPerspectiveCamera = () => {
  const fov = 35; // AKA Field of View
  const aspect = 1;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 20);
  return camera;
};

const createCube = () => {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  return cube;
};

export {
  World,
  createCube,
  createPerspectiveCamera,
  createScene,
  createRenderer,
};
