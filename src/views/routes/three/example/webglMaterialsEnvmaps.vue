<template>
    <div class="view">
        <div class="container" ref="container">

        </div>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, reactive, ref, watch } from 'vue';
import { textureWorld } from '../instances';
import '../three.scss';
import { MathUtils, Clock, PerspectiveCamera, TextureLoader, EquirectangularReflectionMapping, SRGBColorSpace, Object3D, type Event, Scene, IcosahedronGeometry, MeshBasicMaterial, Mesh, Texture } from 'three';

import type { createCameraControlOption } from '../plugin';
import { createCameraControl } from '../plugin';

import { resize } from '../basic/resize';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const clock = new Clock();

class mandalaWorld extends textureWorld {
    control: OrbitControls;
    option?: createCameraControlOption;
    scene: Scene;
    textureEquirec?: Texture
    constructor(container: HTMLElement, option?: createCameraControlOption) {
        super(container);

        this.camera = new PerspectiveCamera(70, container.clientWidth / container.clientHeight, 1, 100000);
        this.camera.position.set(0, 0, 1000);
        this.scene = new Scene();
        this.option = option;
        this.control = createCameraControl(
            this.camera,
            this.renderer.domElement,
            this.option
        );
        this.control.minDistance = 500;
        this.control.maxDistance = 2500;
        this.texture();

    }

    texture() {
        const textureUrl = `${import.meta.env.BASE_URL}imgs/textures/360.jpg`
        const textureLoader = new TextureLoader();
        this.textureEquirec = textureLoader.load(textureUrl);
        this.textureEquirec.mapping = EquirectangularReflectionMapping;
        // textureEquirec.colorSpace = SRGBColorSpace;
        this.scene.background = this.textureEquirec;


        const geometry = new IcosahedronGeometry(400, 15);
        const sphereMaterial = new MeshBasicMaterial({ envMap: this.textureEquirec });
        const sphereMesh = new Mesh(geometry, sphereMaterial);
        this.scene.add(sphereMesh);
    }

    addProject() {
        //需要先load texture
    }

    animate() {
        const delta = clock.getDelta();
        const rate = MathUtils.degToRad(30) * delta;
        if (this.cube) {
            this.cube.rotation.x += rate * 10;
            this.cube.rotation.y += rate;
            this.cube.rotation.z += rate;
        }
    }
    render(container: HTMLElement) {
        this.camera.lookAt(this.scene.position)
        resize(this, container);
        this.control?.update();
        this.animate();
        if (container.getBoundingClientRect().width > 0) {
            this.animationFrame = requestAnimationFrame(
                this.render.bind(this, container)
            );
        } else return;
    }
}
const container = ref();
let world: mandalaWorld | Object = reactive({});
let option: createCameraControlOption = reactive({
    dampingFactor: 0.05,
    enableDamping: false,
    control: true,
});
const toggleRender = () => {
    if (container.value) {
        world = new mandalaWorld(container.value, option);
        if (world instanceof mandalaWorld) {
            world.render(container.value);
        }
    }
};
nextTick(() => {
    toggleRender();
});
const destroyInstance = () => {
    if (world instanceof mandalaWorld) {
        world.control.dispose();
        world.stop();
        world.beforeDestroy();
    }
};
onUnmounted(() => {
    destroyInstance();
});


</script>
