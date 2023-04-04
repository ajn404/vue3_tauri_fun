<template>
  <div class="view">
    <div class="control">
      <span>rate 迭代速度</span>
      <el-slider
        :min="1"
        :max="20"
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
import { useQuick } from '../composition';

const { container, update, option } = useQuick();
</script>

<style lang="scss" scoped>
@import url('./sort.scss');
</style>
