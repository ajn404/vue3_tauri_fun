<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useTransitionWorld } from '../composition';
let { container } = useTransitionWorld();
</script>
