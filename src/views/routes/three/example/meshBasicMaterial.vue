<template>
    <div class="view">
        <div class="container" ref="container"></div>
        <div class="absolute left-1 w-1/5 top-0">
            <el-radio-group v-model="selectMaterial" size="large">
                <el-radio v-for="mat in slectMaterial" :key="mat" :label="mat" />
            </el-radio-group>
        </div>
    </div>
</template>



<script lang="ts" setup>
import { nextTick, onUnmounted, watch, type Ref, ref, onDeactivated, reactive } from 'vue';
import '../three.scss';
import { disposeChild } from '../instances';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { GUI } from 'lil-gui';
import {
    Scene,
    Fog,
    Color,
    TextureLoader,
    CubeTextureLoader,
    AmbientLight,
    Mesh,
    Material,
    TorusKnotGeometry,
    BufferGeometry,
    MeshBasicMaterial,
    MeshLambertMaterial,
    MultiplyOperation,
    MixOperation,
    AddOperation,
    FrontSide,
    BackSide,
    DoubleSide,
    NoBlending,
    NormalBlending,
    AdditiveBlending,
    SubtractiveBlending,
    MultiplyBlending,
    CustomBlending,
    AddEquation,
    SubtractEquation,
    ReverseSubtractEquation,
    ZeroFactor,
    OneFactor,
    SrcColorFactor,
    OneMinusSrcColorFactor,
    SrcAlphaFactor,
    OneMinusSrcAlphaFactor,
    DstAlphaFactor,
    OneMinusDstAlphaFactor,
    DstColorFactor,
    OneMinusDstColorFactor,
    SrcAlphaSaturateFactor,
    type Side,
    Cache,
    CubeTexture,
    Texture,
    RepeatWrapping,
    CubeRefractionMapping,
    NearestFilter,
    Float32BufferAttribute,
    WebGLRenderer,
    MeshMatcapMaterial,
    MeshPhongMaterial,
    LineBasicMaterial,
    type Combine,
    MeshToonMaterial,
    MeshStandardMaterial,
    MeshPhysicalMaterial,
    MeshDepthMaterial,
    MeshNormalMaterial,
    PointLight,
    PerspectiveCamera,
    PMREMGenerator,
    Light,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const constants = {
    combine: {
        'THREE.MultiplyOperation': MultiplyOperation,
        'THREE.MixOperation': MixOperation,
        'THREE.AddOperation': AddOperation,
    },

    side: {
        'THREE.FrontSide': FrontSide,
        'THREE.BackSide': BackSide,
        'THREE.DoubleSide': DoubleSide,
    },

    blendingMode: {
        'THREE.NoBlending': NoBlending,
        'THREE.NormalBlending': NormalBlending,
        'THREE.AdditiveBlending': AdditiveBlending,
        'THREE.SubtractiveBlending': SubtractiveBlending,
        'THREE.MultiplyBlending': MultiplyBlending,
        'THREE.CustomBlending': CustomBlending,
    },

    equations: {
        'THREE.AddEquation': AddEquation,
        'THREE.SubtractEquation': SubtractEquation,
        'THREE.ReverseSubtractEquation': ReverseSubtractEquation,
    },

    destinationFactors: {
        'THREE.ZeroFactor': ZeroFactor,
        'THREE.OneFactor': OneFactor,
        'THREE.SrcColorFactor': SrcColorFactor,
        'THREE.OneMinusSrcColorFactor': OneMinusSrcColorFactor,
        'THREE.SrcAlphaFactor': SrcAlphaFactor,
        'THREE.OneMinusSrcAlphaFactor': OneMinusSrcAlphaFactor,
        'THREE.DstAlphaFactor': DstAlphaFactor,
        'THREE.OneMinusDstAlphaFactor': OneMinusDstAlphaFactor,
    },

    sourceFactors: {
        'THREE.DstColorFactor': DstColorFactor,
        'THREE.OneMinusDstColorFactor': OneMinusDstColorFactor,
        'THREE.SrcAlphaSaturateFactor': SrcAlphaSaturateFactor,
    },
};
export interface reactiveData { }
export interface Maps {
    none: null;
    reflection?: CubeTexture;
    refraction?: CubeTexture;
    bricks?: Texture;
}
export type selectMaterial =
    | 'MeshBasicMaterial'
    | 'MeshLambertMaterial'
    | 'MeshMatcapMaterial'
    | 'MeshPhongMaterial'
    | 'MeshToonMaterial'
    | 'MeshStandardMaterial'
    | 'MeshPhysicalMaterial'
    | 'MeshDepthMaterial'
    | 'MeshNormalMaterial'
    | 'LineBasicMaterial';

const getObjectsKeys = (obj: any) => {
    const keys = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    return keys;
};

const textureLoader = new TextureLoader();
const cubeTextureLoader = new CubeTextureLoader();
const textureUrl = `${import.meta.env.BASE_URL}imgs/textures/`;

const envMaps = (): Maps => {
    const path = `${textureUrl}cube/SwedishRoyalCastle/`;
    const format = '.jpg';
    const urls = [
        path + 'px' + format,
        path + 'nx' + format,
        path + 'py' + format,
        path + 'ny' + format,
        path + 'pz' + format,
        path + 'nz' + format,
    ];
    const reflectionCube = cubeTextureLoader.load(urls);
    const refractionCube = cubeTextureLoader.load(urls);
    refractionCube.mapping = CubeRefractionMapping;

    return {
        none: null,
        reflection: reflectionCube,
        refraction: refractionCube,
    };
};

const diffuseMaps = function () {
    const bricks = textureLoader.load(`${textureUrl}brick_diffuse.jpg`);
    bricks.wrapS = RepeatWrapping;
    bricks.wrapT = RepeatWrapping;
    bricks.repeat.set(9, 1);

    return {
        none: null,
        bricks: bricks,
    };
};

const roughnessMaps = function () {
    const bricks = textureLoader.load(`${textureUrl}brick_roughness.jpg`);
    bricks.wrapT = RepeatWrapping;
    bricks.wrapS = RepeatWrapping;
    bricks.repeat.set(9, 1);

    return {
        none: null,
        bricks: bricks,
    };
};

const matcaps = function () {
    return {
        none: null,
        porcelainWhite: textureLoader.load(
            `${textureUrl}matcaps/matcap-porcelain-white.jpg`
        ),
    };
};

const alphaMaps = function () {
    const fibers = textureLoader.load(`${textureUrl}alphaMap.jpg`);
    fibers.wrapT = RepeatWrapping;
    fibers.wrapS = RepeatWrapping;
    fibers.repeat.set(9, 1);

    return {
        none: null,
        fibers: fibers,
    };
};

const gradientMaps = function () {
    const threeTone = textureLoader.load(
        `${textureUrl}gradientMaps/threeTone.jpg`
    );
    threeTone.minFilter = NearestFilter;
    threeTone.magFilter = NearestFilter;

    const fiveTone = textureLoader.load(`${textureUrl}gradientMaps/fiveTone.jpg`);
    fiveTone.minFilter = NearestFilter;
    fiveTone.magFilter = NearestFilter;

    return {
        none: null,
        threeTone: threeTone,
        fiveTone: fiveTone,
    };
};

const envMapKeys = getObjectsKeys(envMaps());
const envMapKeysPBR = envMapKeys.slice(0, 2);
const diffuseMapKeys = getObjectsKeys(diffuseMaps());
const roughnessMapKeys = getObjectsKeys(roughnessMaps());
const matcapKeys = getObjectsKeys(matcaps());
const alphaMapKeys = getObjectsKeys(alphaMaps());
const gradientMapKeys = getObjectsKeys(gradientMaps());

function guiScene(gui: GUI, scene: Scene, ambientLight: AmbientLight) {
    const folder = gui.addFolder('Scene');
    const data = {
        background: '#000000',
        'ambient light': ambientLight.color.getHex(),
    };
    folder
        .addColor(data, 'ambient light')
        .onChange(handleColorChange(ambientLight.color));
    guiSceneFog(folder, scene);
}

function guiSceneFog(folder: GUI, scene: Scene) {
    const fogFolder = folder.addFolder('scene.fog');
    const fog = new Fog(0x3f7b9d, 0, 60);
    //这个类中的参数定义了线性雾。也就是说，雾的密度是随着距离线性增大的。
    const data = {
        fog: {
            'THREE.Fog()': false,
            'scene.fog.color': fog.color.getHex(),
        },
    };
    fogFolder.add(data.fog, 'THREE.Fog()').onChange(function (useFog: number) {
        if (useFog) {
            scene.fog = fog;
        } else {
            scene.fog = null;
        }
    });
    fogFolder
        .addColor(data.fog, 'scene.fog.color')
        .onChange(handleColorChange(fog.color));
}

function handleColorChange(color: Color) {
    return function (value: any) {
        if (typeof value === 'string') {
            value = value.replace('#', '0x');
        }
        color.setHex(value);
    };
}

function generateVertexColors(geometry: TorusKnotGeometry | BufferGeometry) {
    const positionAttribute = (geometry as TorusKnotGeometry).attributes.position;

    const colors = [];
    const color = new Color();

    for (let i = 0, il = positionAttribute.count; i < il; i++) {
        color.setHSL((i / il) * Math.random(), 0.5, 0.5);
        colors.push(color.r, color.g, color.b);
    }

    (geometry as TorusKnotGeometry).setAttribute(
        'color',
        new Float32BufferAttribute(colors, 3)
    );
}

function updateCombine(material: MeshLambertMaterial | MeshBasicMaterial) {
    return function (combine: any) {
        material.combine = parseInt(combine) as Combine;
        material.needsUpdate = true;
    };
}

function updateTexture(material: any, materialKey: any, textures: any) {
    return function (key: any) {
        material[materialKey] = textures[key];
        material.needsUpdate = true;
    };
}

function guiMaterial(
    gui: GUI,
    mesh: Mesh,
    material: Material,
    geometry: BufferGeometry
) {
    const folder = gui.addFolder('THREE.Material');

    folder.add(material, 'transparent').onChange(needsUpdate(material, geometry));
    folder.add(material, 'opacity', 0, 1).step(0.01);
    // folder.add( material, 'blending', constants.blendingMode );
    // folder.add( material, 'blendSrc', constants.destinationFactors );
    // folder.add( material, 'blendDst', constants.destinationFactors );
    // folder.add( material, 'blendEquation', constants.equations );
    folder.add(material, 'depthTest');
    folder.add(material, 'depthWrite');
    // folder.add( material, 'polygonOffset' );
    // folder.add( material, 'polygonOffsetFactor' );
    // folder.add( material, 'polygonOffsetUnits' );
    folder
        .add(material, 'alphaTest', 0, 1)
        .step(0.01)
        .onChange(needsUpdate(material, geometry));
    folder.add(material, 'visible');
    folder
        .add(material, 'side', constants.side)
        .onChange(needsUpdate(material, geometry));
}

function needsUpdate(material: Material, geometry: BufferGeometry) {
    return function () {
        material.side = parseInt(material.side.toString()) as Side; //Ensure number
        material.needsUpdate = true;
        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.normal.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
    };
}

function guiMeshBasicMaterial(
    gui: GUI,
    mesh: Mesh,
    material: MeshBasicMaterial,
    geometry: BufferGeometry
) {
    const data = {
        color: material.color.getHex(),
        envMaps: envMapKeys[0],
        map: diffuseMapKeys[0],
        alphaMap: alphaMapKeys[0],
    };

    const folder = gui.addFolder('THREE.MeshBasicMaterial');

    folder.addColor(data, 'color').onChange(handleColorChange(material.color));
    folder.add(material, 'wireframe');
    folder
        .add(material, 'vertexColors')
        .onChange(needsUpdate(material, geometry));
    folder.add(material, 'fog').onChange(needsUpdate(material, geometry));

    folder
        .add(data, 'envMaps', envMapKeys)
        .onChange(updateTexture(material, 'envMap', envMaps));
    folder
        .add(data, 'map', diffuseMapKeys)
        .onChange(updateTexture(material, 'map', diffuseMaps));
    folder
        .add(data, 'alphaMap', alphaMapKeys)
        .onChange(updateTexture(material, 'alphaMap', alphaMaps));
    folder
        .add(material, 'combine', constants.combine)
        .onChange(updateCombine(material));
    folder.add(material, 'reflectivity', 0, 1);
    folder.add(material, 'refractionRatio', 0, 1);
}

function guiMeshDepthMaterial(gui: GUI, mesh: Mesh, material: Material) {
    const data = {
        alphaMap: alphaMapKeys[0],
    };

    const folder = gui.addFolder('THREE.MeshDepthMaterial');

    folder.add(material, 'wireframe');

    folder
        .add(data, 'alphaMap', alphaMapKeys)
        .onChange(updateTexture(material, 'alphaMap', alphaMaps));
}

function guiMeshNormalMaterial(
    gui: GUI,
    mesh: Mesh,
    material: Material,
    geometry: BufferGeometry
) {
    const folder = gui.addFolder('THREE.MeshNormalMaterial');

    folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
    folder.add(material, 'wireframe');
}

function guiLineBasicMaterial(
    gui: GUI,
    mesh: Mesh,
    material: LineBasicMaterial,
    geometry: BufferGeometry
) {
    const data = {
        color: material.color.getHex(),
    };

    const folder = gui.addFolder('THREE.LineBasicMaterial');

    folder.addColor(data, 'color').onChange(handleColorChange(material.color));
    folder.add(material, 'linewidth', 0, 10);
    folder.add(material, 'linecap', ['butt', 'round', 'square']);
    folder.add(material, 'linejoin', ['round', 'bevel', 'miter']);
    folder
        .add(material, 'vertexColors')
        .onChange(needsUpdate(material, geometry));
    folder.add(material, 'fog').onChange(needsUpdate(material, geometry));
}

function guiMeshLambertMaterial(
    gui: GUI,
    mesh: Mesh,
    material: MeshLambertMaterial,
    geometry: BufferGeometry
) {
    const data = {
        color: material.color.getHex(),
        emissive: material.emissive.getHex(),
        envMaps: envMapKeys[0],
        map: diffuseMapKeys[0],
        alphaMap: alphaMapKeys[0],
    };

    const folder = gui.addFolder('THREE.MeshLambertMaterial');

    folder.addColor(data, 'color').onChange(handleColorChange(material.color));
    folder
        .addColor(data, 'emissive')
        .onChange(handleColorChange(material.emissive));

    folder.add(material, 'wireframe');
    folder
        .add(material, 'vertexColors')
        .onChange(needsUpdate(material, geometry));
    folder.add(material, 'fog').onChange(needsUpdate(material, geometry));

    folder
        .add(data, 'envMaps', envMapKeys)
        .onChange(updateTexture(material, 'envMap', envMaps));
    folder
        .add(data, 'map', diffuseMapKeys)
        .onChange(updateTexture(material, 'map', diffuseMaps));
    folder
        .add(data, 'alphaMap', alphaMapKeys)
        .onChange(updateTexture(material, 'alphaMap', alphaMaps));
    folder
        .add(material, 'combine', constants.combine)
        .onChange(updateCombine(material));
    folder.add(material, 'reflectivity', 0, 1);
    folder.add(material, 'refractionRatio', 0, 1);
}

function guiMeshMatcapMaterial(
    gui: GUI,
    mesh: Mesh,
    material: MeshMatcapMaterial,
    geometry: BufferGeometry
) {
    const data = {
        color: material.color.getHex(),
        matcap: matcapKeys[1],
        alphaMap: alphaMapKeys[0],
    };

    const folder = gui.addFolder('THREE.MeshMatcapMaterial');

    folder.addColor(data, 'color').onChange(handleColorChange(material.color));

    folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
    folder
        .add(data, 'matcap', matcapKeys)
        .onChange(updateTexture(material, 'matcap', matcaps));
    folder
        .add(data, 'alphaMap', alphaMapKeys)
        .onChange(updateTexture(material, 'alphaMap', alphaMaps));
}

function guiMeshPhongMaterial(
    gui: GUI,
    mesh: Mesh,
    material: MeshPhongMaterial,
    geometry: BufferGeometry
) {
    const data = {
        color: material.color.getHex(),
        emissive: material.emissive.getHex(),
        specular: material.specular.getHex(),
        envMaps: envMapKeys[0],
        map: diffuseMapKeys[0],
        alphaMap: alphaMapKeys[0],
    };

    const folder = gui.addFolder('THREE.MeshPhongMaterial');

    folder.addColor(data, 'color').onChange(handleColorChange(material.color));
    folder
        .addColor(data, 'emissive')
        .onChange(handleColorChange(material.emissive));
    folder
        .addColor(data, 'specular')
        .onChange(handleColorChange(material.specular));

    folder.add(material, 'shininess', 0, 100);
    folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
    folder.add(material, 'wireframe');
    folder
        .add(material, 'vertexColors')
        .onChange(needsUpdate(material, geometry));
    folder.add(material, 'fog').onChange(needsUpdate(material, geometry));
    folder
        .add(data, 'envMaps', envMapKeys)
        .onChange(updateTexture(material, 'envMap', envMaps));
    folder
        .add(data, 'map', diffuseMapKeys)
        .onChange(updateTexture(material, 'map', diffuseMaps));
    folder
        .add(data, 'alphaMap', alphaMapKeys)
        .onChange(updateTexture(material, 'alphaMap', alphaMaps));
    folder
        .add(material, 'combine', constants.combine)
        .onChange(updateCombine(material));
    folder.add(material, 'reflectivity', 0, 1);
    folder.add(material, 'refractionRatio', 0, 1);
}

function guiMeshToonMaterial(gui: GUI, mesh: Mesh, material: MeshToonMaterial) {
    const data = {
        color: material.color.getHex(),
        map: diffuseMapKeys[0],
        gradientMap: gradientMapKeys[1],
        alphaMap: alphaMapKeys[0],
    };

    const folder = gui.addFolder('THREE.MeshToonMaterial');

    folder.addColor(data, 'color').onChange(handleColorChange(material.color));
    folder
        .add(data, 'map', diffuseMapKeys)
        .onChange(updateTexture(material, 'map', diffuseMaps));
    folder
        .add(data, 'gradientMap', gradientMapKeys)
        .onChange(updateTexture(material, 'gradientMap', gradientMaps));
    folder
        .add(data, 'alphaMap', alphaMapKeys)
        .onChange(updateTexture(material, 'alphaMap', alphaMaps));
}

function guiMeshStandardMaterial(
    gui: GUI,
    mesh: Mesh,
    material: MeshStandardMaterial,
    geometry: BufferGeometry
) {
    const data = {
        color: material.color.getHex(),
        emissive: material.emissive.getHex(),
        envMaps: envMapKeysPBR[0],
        map: diffuseMapKeys[0],
        roughnessMap: roughnessMapKeys[0],
        alphaMap: alphaMapKeys[0],
    };

    const folder = gui.addFolder('THREE.MeshStandardMaterial');

    folder.addColor(data, 'color').onChange(handleColorChange(material.color));
    folder
        .addColor(data, 'emissive')
        .onChange(handleColorChange(material.emissive));

    folder.add(material, 'roughness', 0, 1);
    folder.add(material, 'metalness', 0, 1);
    folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
    folder.add(material, 'wireframe');
    folder
        .add(material, 'vertexColors')
        .onChange(needsUpdate(material, geometry));
    folder.add(material, 'fog').onChange(needsUpdate(material, geometry));
    folder
        .add(data, 'envMaps', envMapKeysPBR)
        .onChange(updateTexture(material, 'envMap', envMaps));
    folder
        .add(data, 'map', diffuseMapKeys)
        .onChange(updateTexture(material, 'map', diffuseMaps));
    folder
        .add(data, 'roughnessMap', roughnessMapKeys)
        .onChange(updateTexture(material, 'roughnessMap', roughnessMaps));
    folder
        .add(data, 'alphaMap', alphaMapKeys)
        .onChange(updateTexture(material, 'alphaMap', alphaMaps));

    // TODO metalnessMap
}

function guiMeshPhysicalMaterial(
    gui: GUI,
    mesh: Mesh,
    material: MeshPhysicalMaterial,
    geometry: BufferGeometry
) {
    const data = {
        color: material.color.getHex(),
        emissive: material.emissive.getHex(),
        envMaps: envMapKeys[0],
        map: diffuseMapKeys[0],
        roughnessMap: roughnessMapKeys[0],
        alphaMap: alphaMapKeys[0],
    };

    const folder = gui.addFolder('THREE.MeshPhysicalMaterial');

    folder.addColor(data, 'color').onChange(handleColorChange(material.color));
    folder
        .addColor(data, 'emissive')
        .onChange(handleColorChange(material.emissive));

    folder.add(material, 'roughness', 0, 1);
    folder.add(material, 'metalness', 0, 1);
    folder.add(material, 'reflectivity', 0, 1);
    folder.add(material, 'clearcoat', 0, 1).step(0.01);
    folder.add(material, 'clearcoatRoughness', 0, 1).step(0.01);
    folder.add(material, 'flatShading').onChange(needsUpdate(material, geometry));
    folder.add(material, 'wireframe');
    folder
        .add(material, 'vertexColors')
        .onChange(needsUpdate(material, geometry));
    folder.add(material, 'fog').onChange(needsUpdate(material, geometry));
    folder
        .add(data, 'envMaps', envMapKeysPBR)
        .onChange(updateTexture(material, 'envMap', envMaps));
    folder
        .add(data, 'map', diffuseMapKeys)
        .onChange(updateTexture(material, 'map', diffuseMaps));
    folder
        .add(data, 'roughnessMap', roughnessMapKeys)
        .onChange(updateTexture(material, 'roughnessMap', roughnessMaps));
    folder
        .add(data, 'alphaMap', alphaMapKeys)
        .onChange(updateTexture(material, 'alphaMap', alphaMaps));
}

function choose(
    gui: GUI,
    mesh: Mesh,
    geometry: BufferGeometry,
    selectedMaterial: selectMaterial,
    lights: Light[]
) {
    let material;
    switch (selectedMaterial) {
        case 'MeshBasicMaterial':
            material = new MeshBasicMaterial({ color: 0x049ef4 });
            guiMaterial(gui, mesh, material, geometry);
            guiMeshBasicMaterial(gui, mesh, material, geometry);
            return material;
            break;

        case 'MeshLambertMaterial':
            material = new MeshLambertMaterial({ color: 0x049ef4 });
            guiMaterial(gui, mesh, material, geometry);
            guiMeshLambertMaterial(gui, mesh, material, geometry);
            return material;
            break;

        case 'MeshMatcapMaterial':
            material = new MeshMatcapMaterial({
                matcap: matcaps().porcelainWhite,
            });
            guiMaterial(gui, mesh, material, geometry);
            guiMeshMatcapMaterial(gui, mesh, material, geometry);
            // no need for lights
            lights[0].visible = false;
            lights[1].visible = false;
            lights[2].visible = false;

            return material;

            break;

        case 'MeshPhongMaterial':
            material = new MeshPhongMaterial({ color: 0x049ef4 });
            guiMaterial(gui, mesh, material, geometry);
            guiMeshPhongMaterial(gui, mesh, material, geometry);

            return material;

            break;

        case 'MeshToonMaterial':
            material = new MeshToonMaterial({
                color: 0x049ef4,
                gradientMap: gradientMaps().threeTone,
            });
            guiMaterial(gui, mesh, material, geometry);
            guiMeshToonMaterial(gui, mesh, material);

            // only use a single point light

            lights[0].visible = false;
            lights[2].visible = false;

            return material;

            break;

        case 'MeshStandardMaterial':
            material = new MeshStandardMaterial({ color: 0x049ef4 });
            guiMaterial(gui, mesh, material, geometry);
            guiMeshStandardMaterial(gui, mesh, material, geometry);

            // only use scene environment

            lights[0].visible = false;
            lights[1].visible = false;
            lights[2].visible = false;

            return material;

            break;

        case 'MeshPhysicalMaterial':
            material = new MeshPhysicalMaterial({ color: 0x049ef4 });
            guiMaterial(gui, mesh, material, geometry);
            guiMeshPhysicalMaterial(gui, mesh, material, geometry);

            // only use scene environment

            lights[0].visible = false;
            lights[1].visible = false;
            lights[2].visible = false;

            return material;

            break;

        case 'MeshDepthMaterial':
            material = new MeshDepthMaterial();
            guiMaterial(gui, mesh, material, geometry);
            guiMeshDepthMaterial(gui, mesh, material);

            return material;

            break;

        case 'MeshNormalMaterial':
            material = new MeshNormalMaterial();
            guiMaterial(gui, mesh, material, geometry);
            guiMeshNormalMaterial(gui, mesh, material, geometry);

            return material;

            break;

        case 'LineBasicMaterial':
            material = new LineBasicMaterial({ color: 0x2194ce });
            guiMaterial(gui, mesh, material, geometry);
            guiLineBasicMaterial(gui, mesh, material, geometry);

            return material;

            break;
    }
}

function assertIsHTMLElement(
    value: unknown,
    name: string
): asserts value is HTMLElement {
    if (!(value instanceof HTMLElement)) {
        console.error(`Expect "${name}" to be a HTMLElement`);
    }
}

const container: Ref<HTMLElement | null> = ref(null);
const selectMaterial: Ref<selectMaterial> = ref('MeshToonMaterial')
const slectMaterial = ['MeshBasicMaterial'
    , 'MeshLambertMaterial'
    , 'MeshMatcapMaterial'
    , 'MeshPhongMaterial'
    , 'MeshToonMaterial'
    , 'MeshStandardMaterial'
    , 'MeshPhysicalMaterial'
    , 'MeshDepthMaterial'
    , 'MeshNormalMaterial'
    , 'LineBasicMaterial'];

let rid = 0;
let reactiveData = reactive({
    percent: 0,
    splineSceneUrl: `${import.meta.env.BASE_URL}data/models/room.splinecode`,
});
const setup = (val?: selectMaterial) => {
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    assertIsHTMLElement(container.value, 'container');

    container.value.innerHTML = '';
    container.value.appendChild(renderer.domElement);

    const gui = new GUI({});
    gui.domElement.classList.add('absolute');
    gui.domElement.classList.add('right-2');
    gui.domElement.classList.add('top-0');

    const pmremGenerator = new PMREMGenerator(renderer);

    let scene: Scene = new Scene();
    scene.background = new Color(0x444444);
    scene.environment = pmremGenerator.fromScene(
        new RoomEnvironment(),
        0.04
    ).texture;

    const camera = new PerspectiveCamera(
        70,
        container.value.clientWidth / container.value.clientHeight,
        10,
        100
    );
    camera.position.z = 35;
    new OrbitControls(camera, container.value);

    const ambientLight = new AmbientLight(0x000000);
    scene.add(ambientLight);

    const light1 = new PointLight(0xffffff, 1, 0);
    light1.position.set(0, 200, 0);
    scene.add(light1);

    const light2 = new PointLight(0xffffff, 1, 0);
    light2.position.set(100, 200, 100);
    scene.add(light2);

    const light3 = new PointLight(0xffffff, 1, 0);
    light3.position.set(-100, -200, -100);
    scene.add(light3);

    guiScene(gui, scene, ambientLight);

    const geometry = new TorusKnotGeometry(10, 3, 200, 32).toNonIndexed();
    generateVertexColors(geometry);

    const mesh: Mesh = new Mesh(geometry);
    mesh.material = choose(gui, mesh, geometry, val || selectMaterial.value, [
        light1,
        light2,
        light3,
    ]);
    scene.add(mesh);

    let prevFog: any = false;
    function render() {
        rid = requestAnimationFrame(render);
        if (prevFog !== scene.fog) {
            (mesh.material as Material).needsUpdate = true;
            prevFog = scene.fog;
        }
        renderer.render(scene, camera);
    }
    const resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    addEventListener('resize', resize, false);
    render();

    const beforeDestroy = () => {
        removeEventListener('resize', resize, false);
        cancelAnimationFrame(rid);
        scene.traverse((item: any) => {
            disposeChild(item);
        });
        Cache.clear();
        scene.clear();
        renderer.dispose();
        renderer.forceContextLoss();
        gui.destroy();
    };
    return {
        beforeDestroy,
    };
};

let beforeDestroy = () => { };
if (container.value) {
    beforeDestroy = setup().beforeDestroy;
}

nextTick(() => {
    beforeDestroy = setup().beforeDestroy;
})

onDeactivated(() => {
    beforeDestroy();
});

watch(
    () => selectMaterial.value,
    (val) => {
        beforeDestroy();
        setup(val);
    }
);

onUnmounted(() => {
    beforeDestroy();
});



</script>