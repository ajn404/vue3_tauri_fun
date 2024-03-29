import { PerspectiveCamera, OrthographicCamera, Euler } from 'three';

export const createPerspectiveCamera = () => {
  const fov = 35; // AKA Field of View
  //three.js中的角度是使用弧度而不是度数指定的。唯一的例外是 PerspectiveCamera.fov属性使用度数来匹配真实世界摄影惯例的
  const aspect = 1;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 20);
  return camera;
};

export const createOrthographicCamera = (container: HTMLElement) => {
  const camera = new OrthographicCamera(
    container.clientWidth / -2,
    container.clientWidth / 2,
    container.clientHeight / 2,
    container.clientHeight / -2,
    -100000,
    100000
  );
  camera.position.set(-840.75, 872.62, -204.75);
  camera.quaternion.setFromEuler(new Euler(-2.22, -0.98, -2.31));
  return camera;
};
