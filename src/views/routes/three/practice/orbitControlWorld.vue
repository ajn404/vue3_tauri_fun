<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useOrbitControl } from '../composition';
const { container, option } = useOrbitControl();
</script>
