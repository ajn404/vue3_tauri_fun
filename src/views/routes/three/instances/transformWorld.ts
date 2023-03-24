import { createLights } from '../basic/light';
import { createCube } from '../basic/cube';
import { World } from './world';

export class transformWorld extends World {
  constructor(container: HTMLElement) {
    super(container);
  }

  addProject() {
    const light = createLights();

    this.cube = createCube({
      material: 'MeshStandardMaterial',
      color: 'blue',
    });

    this.scene.add(light, this.cube);
  }
}
