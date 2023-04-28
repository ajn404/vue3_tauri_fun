import { createCameraControl } from '../plugin';
import { textureWorld } from './textureWorld';
import { resize } from '../basic/resize';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { createCameraControlOption } from '../plugin';

export class textureControlWorld extends textureWorld {
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

  render(container: HTMLElement) {
    resize(this, container);

    this.control?.update();

    this.animate();

    if (this.camera) {
      this.camera.rotation.x += 0.001;
    }

    if (container.getBoundingClientRect().width > 0) {
      this.animationFrame = requestAnimationFrame(
        this.render.bind(this, container)
      );
    } else return;
  }
}
