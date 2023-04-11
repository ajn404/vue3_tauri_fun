<template>
  <div class="mix-container">
    <bubble></bubble>
    <quick></quick>
    <Heap></Heap>
    <Counting></Counting>
  </div>
</template>

<script lang="ts" setup>
import bubble from './bubble.vue';
import Counting from './counting.vue';
import Heap from './heap.vue';
import quick from './quick.vue';
</script>
<style lang="scss" scoped>
.mix-container {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  :deep(.view) {
    position: static;
    height: 25%;

    .data-view {
      display: none;
    }

    .control {
      display: none;
    }
  }
}
</style>
