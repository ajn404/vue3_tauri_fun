import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Material,
  MeshStandardMaterial,
  type ColorRepresentation,
  Euler,
} from 'three';

interface createCubeOption {
  material: 'MeshStandardMaterial' | 'MeshBasicMaterial';
  color?: ColorRepresentation | undefined;
  cubeRotate?: Euler;
}

export const createCube = (option?: createCubeOption): Mesh => {
  const geometry = new BoxGeometry(2, 2, 2);

  let material: Material | undefined;

  switch (option?.material) {
    case 'MeshBasicMaterial':
      material = new MeshBasicMaterial();
      break;
    case 'MeshStandardMaterial':
      material = new MeshStandardMaterial({ color: option?.color });
      break;
    default:
      material = new MeshBasicMaterial();
      break;
  }
  const cube = new Mesh(geometry, material);
  if (option?.cubeRotate) {
    const { x, y, z } = option.cubeRotate;
    cube.rotation.set(x, y, z);
  }

  return cube;
};
