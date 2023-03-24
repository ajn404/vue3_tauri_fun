import { DirectionalLight, type Light } from 'three';

export const createLights = (): Light => {
  //在这里，我们创建一个强度为 8 的纯白光：
  const light = new DirectionalLight('white', 8);
  return light;
};
