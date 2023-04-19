import type { World, Spline } from '../instances';

const resize = (world: World | Spline, container: HTMLElement) => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  (world as Spline).camera.left = width / -2;
  (world as Spline).camera.right = width / 2;
  (world as Spline).camera.top = height / 2;
  (world as Spline).camera.bottom = height / -2;

  world.renderer.setSize(width, height);
  (world as World).camera.aspect = width / height;
  world.camera.updateProjectionMatrix();
  world.renderer.setPixelRatio(window.devicePixelRatio);

  world.renderer.render(world.scene, world.camera);
};

export { resize };
