import type { World } from '../instances/world';
export const resize = (world: World, container: HTMLElement) => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  world.renderer.setSize(width, height);
  world.camera.aspect = width / height;
  world.camera.updateProjectionMatrix();
  world.renderer.setPixelRatio(window.devicePixelRatio);
  world.renderer.render(world.scene, world.camera);
};
