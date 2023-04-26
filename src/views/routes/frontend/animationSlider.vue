<template>
    <div class="container">
        <div id="image-track" ref="track" data-mouse-down-at="0" data-prev-percentage="0">
            <img draggable="false" class="image" v-for="(item, index) in new Array(8).fill(1)"
                :src="`${baseUrl}imgs/splash/${index + 1}.jpg`">

        </div>
    </div>
</template>

<script lang="ts" setup>
import { onUnmounted, type Ref, ref, reactive, nextTick } from 'vue';
const baseUrl = ref(import.meta.env.BASE_URL);
const track: Ref<HTMLElement | null> = ref(null);

let dataset: any = reactive({});
const imgs: Ref<null | HTMLCollectionOf<Element>> = ref(null);
const maxDelta = window.innerWidth / 2;
let nextPercentageUnconstrained = 0;
let nextPercent = 0;
let aid = 0;
const mouseDown = (e: any) => {
    dataset.mouseDownAt = e.clientX;
}
const mouseUp = () => {
    dataset.mouseDownAt = '0';
    dataset.prevPercentage = dataset.percent;
    cancelAnimationFrame(aid);
}

/**
 * 
 * @param e 
 * Based on the code you provided, it seems that the mouse animation in animationSlider.vue is not as smooth as you would like it to be.

One possible reason for this could be the use of the animate() method in the moveFun() function. The animate() method can be resource-intensive and may cause performance issues, especially when used repeatedly in a short amount of time
 * 
 */
const moveFun = (e: any) => {
    if (dataset.mouseDownAt === '0') return;

    if (track.value && imgs.value) {
        const mouseDelta = parseFloat(dataset.mouseDownAt) - e.clientX;
        nextPercentageUnconstrained = parseFloat(dataset.prevPercentage) + (mouseDelta / maxDelta) * -100;
        nextPercent = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
        dataset.percent = nextPercent;
        track.value.style.transform = `translate(${nextPercent}%, -50%)`;
        for (const image of imgs.value) {
            (image as HTMLImageElement).style.objectPosition = `${100 + nextPercent}% center`;
        }
        aid = requestAnimationFrame(() => moveFun(e));

    }
}
// const moveFun = (e: any) => {
//     if (dataset.mouseDownAt === '0') return;
//     if (track.value && imgs.value) {
//         const mouseDelta = parseFloat(dataset.mouseDownAt) - e.clientX;
//         nextPercentageUnconstrained = parseFloat(dataset.prevPercentage) + (mouseDelta / maxDelta) * -100;
//         nextPercent = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
//         dataset.percent = nextPercent;
//         track.value.animate({
//             transform: `translate(${nextPercent}%, -50%)`
//         }, { fill: "forwards", duration: 1200 });
//         for (const image of imgs.value) {
//             image.animate({
//                 objectPosition: `${100 + nextPercent}% center`
//             }, { duration: 1200, fill: "forwards" });
//         }

//     }
// }

const mouseMove = (e: any) => {
    moveFun(e)
}

const addEvent = () => {
    addEventListener('mousedown', mouseDown);
    addEventListener('touchstart', e => mouseDown(e.touches[0]));
    addEventListener('mousemove', mouseMove);
    addEventListener('touchmove', e => mouseMove(e.touches[0]));
    addEventListener('mouseup', mouseUp);
    addEventListener('touchend', mouseUp);
}

nextTick(() => {
    if (track.value) {
        imgs.value = track.value.getElementsByClassName("image");
        dataset = track.value.dataset;
        addEvent();
    }
})

onUnmounted(() => {
    removeEventListener('mousedown', mouseDown);
    removeEventListener('touchstart', e => mouseDown(e.touches[0]));
    removeEventListener('mousemove', mouseMove);
    removeEventListener('touchmove', e => mouseMove(e.touches[0]));
    removeEventListener('mouseup', mouseUp);
    removeEventListener('touchend', mouseUp);
})
</script>

<style lang="scss" scoped>
$image-width: 40vmin;
$gap: 4vmin;
$img-num: 8;
$track-width: (
    $image-width+$gap )*$img-num;

.container {
    height: 100vh !important;
    width: 100vw !important;
    background-color: black !important;
    margin: 0rem !important;
    overflow: hidden !important;

    #image-track {
        display: flex;
        position: absolute;
        gap: $gap;
        left: 50%;
        top: 50%;
        user-select: none;
        transform: translate(0, -50%
        );
    animation-duration: 20ms;
    transition-duration: 1200ms;

    animation-fill-mode: forwards;
    width: $track-width;

    .image {
        width: $image-width;
        height: 56vh;
        object-fit: cover;
        object-position: 100% 50%;
        animation-duration: 1200ms;
        animation-fill-mode: forwards;
        transition-duration: 1200ms;
        transition: all 1200ms;
        aspect-ratio: 16/9;
    }
}
}
</style>