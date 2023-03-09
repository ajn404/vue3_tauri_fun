<script setup lang="ts" name="App">
import { RouterView } from 'vue-router';
import Menu from './views/menu/index.vue';

</script>

<template>
  <div class="App">
    <div class="menu">
      <transition>
        <keep-alive>
          <Menu />
        </keep-alive>
      </transition>
    </div>
    <div class="view">
      <transition>
        <keep-alive>
          <RouterView />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
.App {
  width: 100vw;
  height: 100vh;
  position: relative;
  .view{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

</style>
