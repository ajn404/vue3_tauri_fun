<!-- eslint-disable no-irregular-whitespace -->
<template>
  <div class="view red" ref="view">
    <div class="content"></div>
    <div class="drag_box" id="drag_box" ref="drag_box">
      <div class="drag_con">
        <div class="ball" id="ball" ref="ball"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, type Ref } from 'vue';
const drag_box: Ref<HTMLElement | null> = ref(null);
const ball: Ref<HTMLElement | null> = ref(null);
const view: Ref<HTMLElement | null> = ref(null);
nextTick(() => {
  if (drag_box.value) {
    drag_box.value.scrollLeft = 50;
    drag_box.value.scrollTop = 50;
  }
  document.addEventListener('touchstart', (ev) => {
    if (ev.target && !ball.value?.contains(ev.target as Node)) {
      drag_box.value?.classList.add('move');
    }
  });

  document.addEventListener('touchend', () => {
    drag_box.value?.classList.remove('move');
  });
});
</script>

<style lang="scss" scoped>
.view {
  .content {
    height: 200vh;
    background-image: radial-gradient(#000, #999, rgba(44, 33, 256, 0.2));
  }
  .drag_box {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .drag_con {
      width: calc(200% - 50px);
      height: calc(200% - 50px);
    }

    .ball {
      position: relative;
      width: 50px;
      height: 50px;
      background-color: cornflowerblue;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      pointer-events: all;
    }
    &.move {
      overflow: hidden;
      pointer-events: none;
    }
  }
}
</style>
