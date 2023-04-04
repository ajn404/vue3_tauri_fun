import { WebGLRenderer } from 'three';
type RenderFunc = (
  width: number,
  height: number,
  updateStyle?: boolean
) => WebGLRenderer;

const createRenderer: RenderFunc = (
  width: number,
  height: number,
  updateStyle?: boolean
) => {
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height, updateStyle);
  return renderer;
};

const createAntialiasRender: RenderFunc = (
  width: number,
  height: number,
  updateStyle?: boolean
) => {
  const render = new WebGLRenderer({ antialias: true });
  render.setSize(width, height, updateStyle);
  return render;
};

export { createRenderer, createAntialiasRender };
