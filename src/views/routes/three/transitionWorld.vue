<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick } from 'vue';
import { useTransitionWorld } from './composition';
let { container, world } = useTransitionWorld();
nextTick(() => {
  console.log(world.value);
});
</script>
