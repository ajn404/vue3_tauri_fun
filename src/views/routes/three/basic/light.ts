import { DirectionalLight } from 'three';

export const createLights = () => {
  //在这里，我们创建一个强度为 8 的纯白光：
  const light = new DirectionalLight('white', 8);
  light.position.set(10, 10, 10);
  return light;
};
