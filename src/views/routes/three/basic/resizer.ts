import type { World } from './world';
export const resizer = (world: World, container: HTMLElement) => {
  const width = container.clientWidth;
  const height = container.clientHeight;

  world.renderer.setSize(width, height);

  world.camera.aspect = width / height;
  world.camera.updateProjectionMatrix();

  world.renderer.setPixelRatio(window.devicePixelRatio);
};
