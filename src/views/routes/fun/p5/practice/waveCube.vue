<template>
    <div class="view">
      <div class="container" ref="container"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { waveCube } from '../instances';
  import { useP5 } from '@/script/composition';

  const { container } = useP5(waveCube);
  </script>
  