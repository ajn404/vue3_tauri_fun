<template>
  <div class="view" ref="view">
    <el-button @click="toggle">toggle</el-button>
    <Appeal class="box" />
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue';
const view = ref(null);
const tl = ref();
const ctx = ref();

const instance = getCurrentInstance();

onMounted(() => {
  if (instance) {
    let _gsap = instance.appContext.config.globalProperties.$gsap;

    ctx.value = _gsap.context((self: any) => {
      const boxes = self.selector('.box');
      tl.value = _gsap
        .timeline()
        .to(boxes[0], { x: 200, rotation: 1200 })
        .to(boxes[0], { x: 0, rotation: 0 })
        .reverse();
    }, view.value);
  }
});

onUnmounted(() => {
  ctx.value.revert();
});

const toggle = () => {
  tl.value.reversed(!tl.value.reversed());
};
</script>

<style lang="scss" scoped>
.view {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  place-items: center;
  .box {
    transform-origin: 50% 0;
  }
}
</style>
