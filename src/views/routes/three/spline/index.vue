<template>
  <div class="view">
    <loading :percent="reactiveData.percent"></loading>
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useSpline } from '../composition';

const { container, world, reactiveData } = useSpline();
</script>
