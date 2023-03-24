<script setup lang="ts" name="App">
import { RouterView, useRoute } from 'vue-router';
import Menu from './views/menu/index.vue';
import { watch, ref } from 'vue';
import { useStore } from './stores';
import { invoke } from '@tauri-apps/api';
import { handleIsTauri } from '@/script/utils';

if (handleIsTauri())
  invoke('greet', { name: 'World' })
    // `invoke` returns a Promise
    .then((response) => console.log(response));

const route = useRoute();
watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log(`路由从 ${oldPath} 切换到了 ${newPath}`);
    // const newPathLevel = newPath.split("/").length;
    // const oldPathLevel = oldPath.split("/").length;
  }
);

const store = useStore();
const component = ref(null);
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
    <router-view v-slot="{ Component }">
      <component
        class="component"
        ref="component"
        :style="store.viewStyle"
        :is="Component"
      />
    </router-view>
  </div>
</template>
