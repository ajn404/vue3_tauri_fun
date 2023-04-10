<template>
  <div class="view">
    <div class="container" ref="container"></div>
    <div
      class="controller fixed right-0 top-5 flex flex-1 flex-col gap-2 min-w-1/4"
    >
      <el-button @click="toggleCustomer"
        >{{ customer ? '关闭' : '打开' }}控制</el-button
      >
      <div class="grid grid-cols-2" v-show="customer">
        <span class="text-white">camera position x</span>
        <el-slider :min="-12" :max="12" :step="0.1" v-model="option.cpx" />

        <span class="text-white">camera position z</span>
        <el-slider :min="0" :max="50" :step="0.1" v-model="option.cpz" />

        <span class="text-white">mesh position x</span>
        <el-slider :min="-15" :max="15" :step="0.1" v-model="option.mpx" />

        <span class="text-white">mesh position z</span>
        <el-slider :min="-15" :max="15" :step="0.1" v-model="option.mpz" />

        <span class="text-white">cube rotation x</span>
        <el-slider :min="0" :max="6.28" :step="0.01" v-model="option.mrx" />

        <span class="text-white">cube rotation y</span>
        <el-slider :min="0" :max="6.28" :step="0.01" v-model="option.mry" />

        <span class="text-white">cube rotation z</span>
        <el-slider :min="0" :max="6.28" :step="0.01" v-model="option.mrz" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTextureWorld } from '../composition';
const { container, customer, toggleCustomer, option } = useTextureWorld();
</script>
