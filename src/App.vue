<script setup lang="ts" name="App">
import { RouterView } from 'vue-router';
</script>

<template>
  <transition>
    <keep-alive>
      <RouterView />
    </keep-alive>
  </transition>
</template>
