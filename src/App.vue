<script setup lang="ts" name="App">
import { RouterView } from 'vue-router';
import { endRoutes } from './router';
import Menu from './views/menu.vue';
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

<style>
.App{
  display: flex;
}
</style>
