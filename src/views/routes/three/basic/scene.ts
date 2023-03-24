import { Color, Scene } from 'three';

export const createScene = () => {
  const scene = new Scene();
  scene.background = new Color('rgba(10,10,10,0.5)');
  return scene;
};
