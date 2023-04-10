import { animationWorld } from './';
import { createLights } from '../basic/light';
import { createTextureCube } from '../basic/cube';
export class textureWorld extends animationWorld {
  constructor(container: HTMLElement) {
    super(container);
  }

  addProject() {
    const light = createLights();
    this.cube = createTextureCube();
    this.cube.updateMatrix();
    this.scene?.add(light, this.cube);
  }
}
