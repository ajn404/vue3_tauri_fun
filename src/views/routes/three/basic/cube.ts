import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Material,
  MeshStandardMaterial,
  type ColorRepresentation,
} from 'three';

interface createCubeOption {
  material: 'MeshStandardMaterial' | 'MeshBasicMaterial';
  color?: ColorRepresentation | undefined;
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

  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
};
