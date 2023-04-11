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

    <div class="data-view">
      计数排序
      <p>A[j]={{ option.count }}</p>
    </div>
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useCounting } from '../composition';

const { container, update, option } = useCounting();
</script>

<style lang="scss" scoped>
@import url('./sort.scss');
</style>
