<template>
    <div class="view">
        <div class="container" ref="dicomImage"></div>
        <div style="width:512px;height:512px;position:relative;color:white" oncontextmenu="return false"
            onmousedown="return false">

            <div id="dicomImage" style="width:512px;height:512px;top:0px;left:0px;position:absolute">
            </div>

            <div id="topleft" class="overlay" style="position:absolute;top:0px;left:0px">
                Patient Name
            </div>
            <div id="topright" class="overlay" style="position:absolute;top:0px;right:0px">
                Hospital
            </div>
            <div id="bottomright" class="overlay" style="position:absolute;bottom:0px;right:0px">
                Zoom:
            </div>
            <div id="bottomleft" class="overlay" style="position:absolute;bottom:0px;left:0px">
                WW/WC:
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import * as cornerstone from 'cornerstone-core'
import { type Ref, ref, nextTick } from 'vue';
const dicomImage: Ref<HTMLElement | null> = ref(null);

declare global {
    interface Window {
        cornerstone: typeof cornerstone
    }
}
nextTick(() => {
    window.cornerstone = cornerstone
    const exampleUrl = 'https://rawgit.com/cornerstonejs/cornerstone/master/example/exampleImageIdLoader.js'
    import(exampleUrl).then(() => {
        cornerstone.enable(dicomImage.value);
        const imageId = 'example://1';
        cornerstone.loadImage(imageId).then(function (image: any) {
            cornerstone.displayImage(dicomImage.value, image);
            const viewport = cornerstone.getViewport(dicomImage.value);
            // document.getElementById('bottomright').textContent = "Zoom: " + viewport.scale + "x";
            // document.getElementById('bottomleft').textContent = "WW/WC:" + Math.round(viewport.voi.windowWidth)
            //     + "/" + Math.round(viewport.voi.windowCenter);
        });
    })

})

</script>