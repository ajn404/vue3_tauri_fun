import { createLights } from '../basic/light';
import { createCube } from '../basic/cube';
import { World } from './world';
import { createAntialiasRender } from '../basic/renderer';
import { Euler, Matrix4 } from 'three';

export class reactiveWorld extends World {
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
      color: 'rgb(20,20,255)',
      cubeRotate: new Euler(1, 1, 1),
    });
    let mut = new Matrix4();
    const translateArr = [
      1, 2, 0, 0, 0, 0.866, 0.5, 0, 0, -0.5, 0.866, 0, 0, 0, 0, 1,
    ];
    mut = mut.fromArray(translateArr);
    this.cube.setRotationFromMatrix(mut);

    this.cube.updateMatrix();
    this.scene?.add(light, this.cube);
  }
}
