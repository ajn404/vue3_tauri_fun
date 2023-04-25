<template>
  <div class="view">
    <img
      v-for="(item, index) in new Array(5).fill(1)"
      :src="`${baseUrl}imgs/splash/${index + 1}.jpg`"
      alt=""
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { lazyLoad } from '@/script/utils';

const baseUrl = ref(import.meta.env.BASE_URL);
</script>
