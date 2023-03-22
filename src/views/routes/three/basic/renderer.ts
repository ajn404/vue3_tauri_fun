import { WebGLRenderer } from 'three';

export const createRenderer = (
  width: number,
  height: number,
  updateStyle?: boolean
) => {
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height, updateStyle);
  return renderer;
};

//pbr

export const createPBRRender = (
  width: number,
  height: number,
  updateStyle?: boolean
) => {
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height, updateStyle);
  renderer.physicallyCorrectLights = true;
  return renderer;
};
