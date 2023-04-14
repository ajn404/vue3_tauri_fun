<template>
  <div class="view">
    <div class="fixed top-1 right-0 w-1/2">
      <span>rate 迭代速度(分辨率)</span>
      <el-slider
        :min="1"
        :max="60"
        :step="1"
        v-model="option.rate"
        @change="update"
      />

      <span>rate 迭代倍率（redrew）</span>
      <el-slider
        :min="1"
        :max="10000"
        :step="10"
        v-model="option.magnification"
        @change="update"
      />
      <span>叠叠图</span>
      <el-switch v-model="option.switch" />

      <h1>第i={{ option.index }}次迭代</h1>
      <h2>PI={{ option.PI * 4 }}</h2>
    </div>
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useLeibnizSeries } from '../composition/practice';
const option = reactive({
  index: 1,
  rate: 30,
  PI: 0,
  magnification: 1,
  switch: false,
});
const { container, update } = useLeibnizSeries(option);
</script>
