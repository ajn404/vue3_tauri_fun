import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

export const createCube = () => {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  return cube;
};
