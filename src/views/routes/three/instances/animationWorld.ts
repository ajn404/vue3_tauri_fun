import { createLights } from '../basic/light';
import { createCube } from '../basic/cube';
import { World } from './';
import { createAntialiasRender } from '../basic/renderer';
import { Euler, MathUtils, Clock } from 'three';
import { resize } from '../basic/resize';
const clock = new Clock();
export class animationWorld extends World {
  animationFrame?: number;
  constructor(container: HTMLElement) {
    super(container);
  }

  appendRender(container: HTMLElement): void {
    //创建抗锯齿的渲染器
    this.renderer = createAntialiasRender(
      container.clientWidth,
      container.clientHeight
    );

    container.append(this.renderer.domElement);
  }

  addProject() {
    const light = createLights();

    this.cube = createCube({
      material: 'MeshStandardMaterial',
      //   material: 'MeshBasicMaterial',

      color: 'rgb(20,255,255)',
      cubeRotate: new Euler(1, 1, 10),
    });

    this.cube.updateMatrix();

    Object.defineProperty(this.cube, 'tick', {
      get: function () {
        return () => {
          console.log(this);
        };
      },
      enumerable: true,
    });

    this.scene?.add(light, this.cube);
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

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    } else return;
  }

  render(container: HTMLElement) {
    resize(this, container);

    this.animate();
    if (container.getBoundingClientRect().width > 0) {
      this.animationFrame = requestAnimationFrame(
        this.render.bind(this, container)
      );
    } else return;
  }
}
