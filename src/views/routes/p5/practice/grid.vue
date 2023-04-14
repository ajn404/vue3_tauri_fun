<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useGrid } from '../composition';
const { container } = useGrid();
</script>
