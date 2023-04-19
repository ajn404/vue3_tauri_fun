<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useSpline } from '../composition';
const { container } = useSpline();
</script>
