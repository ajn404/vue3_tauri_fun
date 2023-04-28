<template>
    <!-- <XyzTransitionGroup tag="div" class="view flex flex-wrap" body-scroll-lock-ignore appear duration="auto"
        xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0">
        <img src="@/assets/k.webp" v-for="(_, index) in new Array(5).fill(1)"
            :data-src="`${baseUrl}imgs/splash/${index + 1}.jpg`" class="image max-w-xs" />
    </XyzTransitionGroup> -->
    <div class="view flex flex-wrap justify-center gap-10">
        <img src="@/assets/k.webp" v-for="(_, index) in new Array(9).fill(1)"
            xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0"
            :data-src="`${baseUrl}imgs/splash/${index + 1}.jpg`" class="xyz-in image m-w-full min-h-full" />
    </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue';
import { lazyLoad } from '@/script/utils';

const baseUrl = ref(import.meta.env.BASE_URL);
onMounted(() => {
    const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll('.image');
    nextTick(() => {
        lazyLoad(imgs);
    })
    addEventListener('scroll', () => {
        lazyLoad(imgs);
    });
});
</script>
