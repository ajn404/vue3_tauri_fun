import { createLights } from '../basic/light';
import { createCube } from '../basic/cube';
import { World } from './world';
import { createPBRRender } from '../basic/renderer';
import { Euler } from 'three';

export class pbrWorld extends World {
  light_position_x?: number;
  light_position_y?: number;
  light_position_z?: number;
  constructor(container: HTMLElement) {
    super(container);
  }

  appendRender(container: HTMLElement): void {
    this.renderer = createPBRRender(
      container.clientWidth,
      container.clientHeight
    );
    container.append(this.renderer.domElement);
  }

  addProject() {
    const light = createLights();

    light.position.set(
      this.light_position_x ?? 10,
      this.light_position_y ?? 10,
      this.light_position_z ?? 10
    );

    this.cube = createCube({
      material: 'MeshStandardMaterial',
      color: 'blue',
      cubeRotate: new Euler(1, 1, 1),
    });

    this.cube.position.set(0, 0, 10);
    this.cube.scale.set(1.7, 0.7, 0.7);

    this.scene?.add(light, this.cube);
  }
}
