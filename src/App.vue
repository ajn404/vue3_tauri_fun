<script setup lang="ts" name="App">
import { RouterView } from 'vue-router';
import { endRoutes } from './router';
import Menu from './views/menu/index.vue';
console.log(endRoutes);
</script>

<template>
  <div class="App">
    <transition>
      <keep-alive>
        <Menu />
      </keep-alive>
    </transition>
    <transition>
      <keep-alive>
        <RouterView />
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
.App{
  display: grid;
  grid-template-columns: 10% 1fr;
  width: 100vw;
  height: 100vh;
}
</style>
