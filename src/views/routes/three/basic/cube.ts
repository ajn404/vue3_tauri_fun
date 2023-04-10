import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Material,
  MeshStandardMaterial,
  type ColorRepresentation,
  Euler,
  TextureLoader,
  ClampToEdgeWrapping,
  RepeatWrapping,
  Vector2,
} from 'three';
import imgPath from '@/assets/uv-test-bw.png';
interface createCubeOption {
  material: 'MeshStandardMaterial' | 'MeshBasicMaterial';
  color?: ColorRepresentation | undefined;
  cubeRotate?: Euler;
}

export const createMeshStandardMaterial = (
  color: ColorRepresentation | undefined
) => {
  const material = new MeshStandardMaterial({ color });
  return material;
};

export const createMeshStandardTextureMaterial = () => {
  const textLoader = new TextureLoader();
  const texture = textLoader.load(imgPath);
  // texture.wrapS = ClampToEdgeWrapping;
  //   texture.wrapS = RepeatWrapping;
  texture.offset = new Vector2(0.0, 0.0);

  //从纹理的offset,repeat,rotation和center属性来更新纹理的uv变换矩阵
  //   texture.updateMatrix();

  //这里设置了map,就无需设置color,如果同时设置，纹理中的颜色会乘以color,而且color为白色则不影响，其他颜色只会让纹理变暗
  const material = new MeshStandardMaterial({ map: texture });

  //同样可以在new之后设置map
  // material.map = texture;

  return material;
};

export const createCube = (option?: createCubeOption): Mesh => {
  const geometry = new BoxGeometry(2, 2, 2);

  let material: Material | undefined;

  switch (option?.material) {
    case 'MeshBasicMaterial':
      material = new MeshBasicMaterial();
      break;
    case 'MeshStandardMaterial':
      material = createMeshStandardMaterial(option?.color);
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

export const createTextureCube = (): Mesh => {
  const geometry = new BoxGeometry(2, 2, 2);
  let material: Material | undefined;
  material = createMeshStandardTextureMaterial();
  const cube = new Mesh(geometry, material);
  return cube;
};
