<template>
  <div class="view">
    <div class="container" ref="container"></div>
    <div class="controller fixed right-0 top-5 flex flex-1 flex-col gap-2 min-w-1/4">
      <el-button @click="toggleCustomer">{{ customer ? '关闭' : '打开' }}控制</el-button>
      <div class="grid grid-cols-2" v-show="customer">
        <span class="text-white">camera position x</span>
        <el-slider :min="-12" :max="12" :step="0.1" v-model="option.cpx" />

        <span class="text-white">camera position z</span>
        <el-slider :min="0" :max="50" :step="0.1" v-model="option.cpz" />

        <span class="text-white">mesh position x</span>
        <el-slider :min="-15" :max="15" :step="0.1" v-model="option.mpx" />

        <span class="text-white">mesh position z</span>
        <el-slider :min="-15" :max="15" :step="0.1" v-model="option.mpz" />

        <span class="text-white">camera position x</span>
        <el-slider :min="0" :max="6.28" :step="0.01" v-model="option.mrx" />

        <span class="text-white">camera position z</span>
        <el-slider :min="0" :max="6.28" :step="0.01" v-model="option.mrz" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { animationWorld } from '../instances';

const animate = animationWorld.prototype.animate;
const option = ref({
  cpx: 0,
  cpz: 20,

  mpx: 0,
  mpz: 0,

  mrx: 3,
  mrz: 3,
});
const container = ref();
let world: animationWorld | Object = reactive({});
const toggleRender = () => {
  world = new animationWorld(container.value);
  if (world instanceof animationWorld) {
    world.render(container.value);
  }
};

const customer = ref(false);

const toggleCustomer = () => {
  customer.value = !customer.value;

  if (customer.value) {
    animationWorld.prototype.animate = function () {
      //0,0,20
      if (this.camera) {
        this.camera.position.x = option.value.cpx;
        this.camera.position.z = option.value.cpz;
      }
      //0,0,0
      if (this.cube) {
        this.cube.position.x = option.value.mpx;
        this.cube.position.z = option.value.mpz;
        this.cube.rotation.x = option.value.mrx;
        this.cube.rotation.z = option.value.mrz;
      }
    };
  } else {
    animationWorld.prototype.animate = animate;
  }
};

nextTick(() => {
  if (container.value) {
    toggleRender();
  }
});
onUnmounted(() => {
  if (world instanceof animationWorld) {
    world.beforeDestroy();
    world.stop();
  }
});
</script>
