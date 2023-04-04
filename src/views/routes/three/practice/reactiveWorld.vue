<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useReactiveWorld } from '../composition';
let { container } = useReactiveWorld();
</script>
