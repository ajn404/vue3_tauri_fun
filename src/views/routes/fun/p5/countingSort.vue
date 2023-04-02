<template>
  <div class="view">
    <div class="control">
      <span>rate 迭代速度</span>
      <el-slider
        :min="1"
        :max="120"
        :step="1"
        v-model="option.rate"
        @change="update"
      />

      <span>width</span>
      <el-slider
        :min="1"
        :max="50"
        :step="1"
        v-model="option.width"
        @change="update"
      />
    </div>
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useCounting } from './composition';

const { container, update, option } = useCounting();
</script>

<style lang="scss" scoped>
.view {
  background-image: linear-gradient(to right, #aaa, #666);
  .control {
    width: 50vw;
    position: fixed;
    top: 20px;
    color: white;
    left: calc(50% - 25vw);
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
}
</style>
