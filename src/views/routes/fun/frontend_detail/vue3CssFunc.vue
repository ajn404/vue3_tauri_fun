<template>
  <div class="view">
    {{ color }}
    <p :class="$style.yellow">This should be yellow</p>

    <div class="plus"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, useCssModule } from 'vue';
const color = ref('red');
console.log(useCssModule());
</script>

<style lang="scss" scoped>
.view {
  color: v-bind(color);
  background-image: radial-gradient(#000, #eee);
  .plus {
    width: 200px;
    height: 200px;
    outline: 20px solid #000;
    outline-offset: -118px;
  }
}

// 全局规则
:global(.red) {
  color: red;
}
</style>

<style module>
.yellow {
  color: yellow;
}
</style>
