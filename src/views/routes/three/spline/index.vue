<template>
  <div class="view">
    <loading :percent="reactiveData.percent"></loading>
    <div class="container" ref="container"></div>
    <el-select v-model="file" placeholder="Select" class="absolute left-10 top-1/2" size="large">
      <el-option v-for="item in options" :key="item" :label="item" :value="item" />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { useSpline } from '../composition';
const options = ['room', 'cat','animate','scene']
const { container, world, reactiveData, file } = useSpline();
</script>
