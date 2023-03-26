<template>
    <div class="view">
      <div class="container" ref="container"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import p5 from 'p5';
  import { nextTick, onUnmounted, ref, type Ref } from 'vue';
  import { geometries } from './instances';
  
  const container: Ref<HTMLElement | null> = ref(null);
  const p5_instance: Ref<p5 | null> = ref(null);
  
  nextTick(() => {
    if (container.value) {
      p5_instance.value = new p5(function (args: p5) {
        geometries(args, container.value);
      }, container.value);
    }
  });
  
  const drop_instance = () => {
    if (p5_instance.value) {
      p5_instance.value.remove();
    }
  };
  
  onUnmounted(() => {
    drop_instance();
  });
  </script>
  