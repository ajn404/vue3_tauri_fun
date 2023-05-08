<template>
    <div class="view">
        <div class="container" ref="container">

        </div>
    </div>
</template>


<script lang="ts" setup>
import { assertIsHTMLElement } from '@/script/utils';
import type { Renderer } from 'three';
import * as THREE from 'three';

import { defineComponent, onMounted, reactive, ref, type Ref } from 'vue';
let camera = reactive({}),
    scene = reactive({}),
    renderer: THREE.WebGLRenderer = reactive(new THREE.WebGLRenderer()),
    controls = reactive({});


const container: Ref<HTMLElement | null> = ref(null);



const init = () => {

    assertIsHTMLElement(container.value, "three container");
    {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.value.clientWidth, container.value.clientHeight);
    }

    {
        container.value.appendChild(renderer.domElement);
        // addEventListener('mousedown', startDraw, false);
        // addEventListener('mouseup', stopDraw, false);
        // addEventListener('mousemove', doDraw, false);
        // addEventListener('touchstart', onTouchEvent, false);
        // addEventListener('touchend', stopDraw, false);
        // addEventListener('touchmove', onTouchEvent, false);
    }


}

onMounted(() => {
    init()
})
</script>

<script lang="ts">
export default defineComponent({
    name: "mandala",
    data() {
        return {
        }
    },
    mounted() {

    },
    activated() {

    },
    deactivated() {

    },
    unmounted() {

    },

})
</script>