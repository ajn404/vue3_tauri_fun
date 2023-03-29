<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { usePbrWorld } from './composition/usePbrWorld';
let { container } = usePbrWorld();
</script>
