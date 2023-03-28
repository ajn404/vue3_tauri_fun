<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useGrid } from './composition/useGrid';
const { container } = useGrid();
</script>
