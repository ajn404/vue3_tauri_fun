<template>
  <div class="view">
    <img
      v-for="(item, index) in new Array(5).fill(1)"
      src="@/assets/k.webp"
      :data-src="`${baseUrl}imgs/splash/${index + 1}.jpg`"
      class="img min-h-full"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { lazyLoad } from '@/script/utils';

const baseUrl = ref(import.meta.env.BASE_URL);
onMounted(() => {
  const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll('.img');
  lazyLoad(imgs);
  addEventListener('scroll', () => {
    lazyLoad(imgs);
  });
});
</script>
