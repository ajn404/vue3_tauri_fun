<script setup lang="ts" name="App">
import { RouterView } from 'vue-router';
import { endRoutes } from './router';
console.log(endRoutes);



</script>

<template>

  <div>

    <div>
      menu
    </div>

    <transition>
    <keep-alive>
      <RouterView />
    </keep-alive>
  </transition>
  </div>

</template>
