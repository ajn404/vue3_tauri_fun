<template>
  <div class="view">
    <XyzTransition appear :xyz="`fade stagger-1 duration-10`" mode="out">
      <el-progress
        type="dashboard"
        :percentage="reactiveData?.percent"
        :color="colors"
        class="fixed top-1/2 left-1/2"
        v-show="reactiveData?.percent && reactiveData?.percent < 100"
      />
    </XyzTransition>
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { useSpline } from '../composition';
const { container, world, reactiveData } = useSpline();
const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
];
</script>
