import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Material,
  MeshStandardMaterial,
} from 'three';

interface createCubeOption {
  material: 'MeshStandardMaterial' | 'MeshBasicMaterial';
  color?: String;
}

export const createCube = (option?: createCubeOption) => {
  const geometry = new BoxGeometry(2, 2, 2);

  let material: Material | undefined;

  switch (option?.material) {
    case 'MeshBasicMaterial':
      material = new MeshBasicMaterial();
      break;
    case 'MeshStandardMaterial':
      material = new MeshStandardMaterial();
      break;
    default:
      material = new MeshBasicMaterial();
      break;
  }
  const cube = new Mesh(geometry, material);

  return cube;
};
