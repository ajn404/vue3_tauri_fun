<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { usePbrWorld } from '../composition';
let { container } = usePbrWorld();
</script>
