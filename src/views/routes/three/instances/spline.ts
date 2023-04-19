import {
  Mesh,
  OrthographicCamera,
  WebGLRenderer,
  Group,
  Object3D,
  Cache,
  Clock,
  MathUtils,
  PCFShadowMap,
  Color,
  Scene,
} from 'three';
import { createOrthographicCamera } from '../basic/camera';
import { createScene } from '../basic/scene';
import { createAntialiasRender } from '../basic/renderer';
import { resize } from '../basic/resize';
import { useStore } from '@/stores';
import { watch, nextTick } from 'vue';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createCameraControl } from '../plugin';
import SplineLoader from '@splinetool/loader';
import type { reactiveData } from '../composition';

const clock = new Clock();
const store = useStore();

class Spline {
  camera: OrthographicCamera;
  scene: Scene;
  //   splineScene?: Scene;
  renderer: WebGLRenderer;
  cube?: Object3D;
  animationFrame?: number;
  control?: OrbitControls;
  reactiveData: reactiveData;

  constructor(container: HTMLElement, reactiveData: reactiveData) {
    this.reactiveData = reactiveData;
    this.camera = createOrthographicCamera(container);
    this.scene = createScene();
    this.scene.background = new Color('rgb(255,200,160)');
    this.renderer = createAntialiasRender(
      container.clientWidth,
      container.clientHeight
    );
    container.append(this.renderer.domElement);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFShadowMap;
    this.renderer.setClearAlpha(1);

    this.addControl();
    this.loadSpline().then((splineScene) => {
      this.scene = splineScene;
      this.scene.background = new Color('rgb(255,200,160)');
    });

    watch(
      () => store.menu,
      () => {
        nextTick(() => {
          resize(this, container);
        });
      }
    );
  }

  addControl() {
    this.control = createCameraControl(this.camera, this.renderer.domElement);
    this.control.enableDamping = true;
    this.control.dampingFactor = 0.125;
  }

  loadSpline(): Promise<Scene> {
    return new Promise((resolve, reject) => {
      const loader = new SplineLoader();
      const url = `${import.meta.env.BASE_URL}data/models/scene.splinecode`;
      loader.load(
        url,
        (splineScene) => {
          resolve(splineScene);
          //   console.clear();
        },
        (progress: ProgressEvent) => {
          if (progress.lengthComputable) {
            const { total, loaded } = progress;
            const percent = (loaded / total) * 100;

            this.reactiveData.percent = Number(percent.toFixed(2));
            if (total > loaded) {
              console.log('加载中');
            } else {
              console.log('加载完毕');
            }
          }
        },
        (error) => {
          reject(new Error('An error happened'));
        }
      );
    });
  }

  animate() {
    const delta = clock.getDelta();
    const rate = MathUtils.degToRad(30) * delta;
    if (this.cube) {
      this.cube.rotation.x += rate;
      this.cube.rotation.y += rate;
      this.cube.rotation.z += rate;
    }
  }

  //真正的动画函数在这里
  render(container: HTMLElement) {
    this.control?.update();
    this.animate();
    resize(this, container);

    if (container.getBoundingClientRect().width > 0) {
      this.animationFrame = requestAnimationFrame(
        this.render.bind(this, container)
      );
    } else return;
  }

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    } else return;
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

const disposeChild = (mesh: unknown) => {
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

export { Spline };
