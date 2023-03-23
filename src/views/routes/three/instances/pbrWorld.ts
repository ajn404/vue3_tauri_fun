import { createLights } from '../basic/light';
import { createCube } from '../basic/cube';
import { World } from './world';

export class pbrWorld extends World {
  constructor(container: HTMLElement) {
    super(container);
  }

  addProject() {
    const light = createLights();
    this.cube = createCube({ material: 'MeshStandardMaterial' });
    this.scene.add(light, this.cube);
    //添加灯光不会有任何立竿见影的效果，因为我们目前使用的是MeshBasicMaterial。
  }
}
