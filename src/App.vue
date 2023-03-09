<script setup lang="ts" name="App">
import { RouterView, useRoute } from 'vue-router';
import Menu from './views/menu/index.vue';
import { watch } from 'vue';

const route = useRoute();
watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log(`路由从 ${oldPath} 切换到了 ${newPath}`);
    // const newPathLevel = newPath.split("/").length;
    // const oldPathLevel = oldPath.split("/").length;


  }
)

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
    <KeepAlive>
      <router-view v-slot="{ Component }">
        <XyzTransition appear :xyz="`fade stagger-2`" mode="in-out">
          <component :is="Component" />
        </XyzTransition>
      </router-view>
    </KeepAlive>


  </div>
</template>

<style lang="scss">
.App {
  width: 100vw;
  height: 100vh;
  position: relative;


}
</style>
