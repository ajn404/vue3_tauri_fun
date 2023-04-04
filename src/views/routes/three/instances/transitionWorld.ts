import { createLights } from '../basic/light';
import { createCube } from '../basic/cube';
import { World } from './world';
import { createRenderer } from '../basic/renderer';
import { Euler, Matrix4 } from 'three';

export class transitionWorld extends World {
  constructor(container: HTMLElement) {
    super(container);
  }

  appendRender(container: HTMLElement): void {
    this.renderer = createRenderer(
      container.clientWidth,
      container.clientHeight
    );
    container.append(this.renderer.domElement);
  }

  addProject() {
    const light = createLights();

    this.cube = createCube({
      material: 'MeshStandardMaterial',
      color: 'blue',
      cubeRotate: new Euler(1, 1, 1),
    });

    // this.cube.setRotationFromAxisAngle(new Vector3(2, 2, 2), 1);

    let mut = new Matrix4();
    //绕x轴旋转30度
    const translateArr = [
      1, 0, 0, 0, 0, 0.866, 0.5, 0, 0, -0.5, 0.866, 0, 0, 0, 0, 1,
    ];

    // mut.set(10, 10, 0, 0, 0, 0.866, 0.5, 0, 0, -0.5, 0.866, 0, 0, 0, 0, 1);
    mut = mut.fromArray(translateArr);
    this.cube.setRotationFromMatrix(mut);

    this.cube.scale.x = 5;
    this.cube.scale.y = 7;
    this.cube.scale.z = 9;

    this.cube.updateMatrix();
    console.log(this.cube.matrixWorld);

    this.scene?.add(light, this.cube);
  }
}
