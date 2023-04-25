<template>
    <div class="container bg-black m-0 w-screen overflow-hidden ">
        <div id="image-track" ref="track">
            <img draggable="false" class="image" v-for="(item, index) in new Array(8).fill(1)"
                :src="`${baseUrl}imgs/splash/${index + 1}.jpg`">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { debounce } from '@/script/utils';
import { onMounted, onUnmounted, type Ref, ref } from 'vue';
const baseUrl = ref(import.meta.env.BASE_URL);
const track: Ref<HTMLElement | null> = ref(null)
const mouseDownAt = ref(0);
const prePercent = ref(0);
const percent = ref(0)
const mouseDown = (e: any) => {
    mouseDownAt.value = e.clientX;
}
const mouseUp = (e: any) => {
    mouseDownAt.value = 0
    prePercent.value = percent.value;
}
const imgs: Ref<null | HTMLCollectionOf<Element>> = ref(null);
const maxDelta = window.innerWidth;

const mouseMove = (e: any) => {
    if (mouseDownAt.value === 0) return;
    if (track.value && imgs.value) {
        const mouseDelta = mouseDownAt.value - e.clientX;
        percent.value = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = prePercent.value + percent.value
        const nextPercent = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        percent.value = nextPercent;
        track.value.animate({
            transform: `translate(${nextPercent}%, -50%)`
        }, { duration: 10, fill: "forwards" });

        Array.from(imgs.value).forEach(image => {
            image.animate({
                objectPosition: `${100 + nextPercent}% center`
            }, { duration: 10, fill: "forwards" });
        })

    }

}


onMounted(() => {

    if (track.value) {
        imgs.value = track.value.getElementsByClassName("image")
    }
    addEventListener('mousedown', mouseDown);
    addEventListener('touchstart', e => mouseDown(e.touches[0]))

    addEventListener('mousemove', mouseMove);
    addEventListener('touchmove', e => mouseMove(e.touches[0]))
    addEventListener('mouseup', mouseUp)
    addEventListener('touchend', e => mouseUp(e.touches[0]))
})

onUnmounted(() => {
    removeEventListener('mousedown', mouseDown)
    removeEventListener('touchstart', e => mouseDown(e.touches[0]))

    removeEventListener('mousemove', mouseMove)
    removeEventListener('touchmove', e => mouseMove(e.touches[0]))

    removeEventListener('mouseup', mouseUp)
    removeEventListener('touchend', e => mouseUp(e.touches[0]))


})
</script>

<style lang="scss" scoped>
.container {
    height: 100vh !important;
    width: 100vw !important;
    background-color: black !important;
    margin: 0rem !important;
    overflow: hidden !important;

    #image-track {
        display: flex;
        position: absolute;
        gap: 4vmin;
        left: 50%;
        top: 50%;
        user-select: none;
        transform: translate(0, -50%);
        width: 20vmin*8;

        .image {
            width: 16vmin;
            height: 56vmin;
            object-fit: cover;
            object-position: 100% center;
        }
    }
}
</style>