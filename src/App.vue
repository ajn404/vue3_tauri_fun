<script setup lang="ts" name="App">
import { RouterView, useRoute } from 'vue-router';
import Menu from './views/menu/index.vue';
import {
  watch,
  ref,
  reactive,
  type StyleValue,
  onMounted,
  nextTick,
} from 'vue';
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
const menu = ref(store.menu);
const viewStyle: StyleValue = reactive({});
const component = ref(null);

const computeStyle = () => {
  viewStyle.transform = menu.value
    ? `translate(${document.querySelector('#menu')?.clientWidth}px,0)`
    : '';
};

onMounted(() => {
  nextTick(() => {
    computeStyle();
  });
});

watch(
  () => store.menu,
  (val) => {
    menu.value = val;

    computeStyle();

    if (!viewStyle.transform && menu.value) {
      menu.value = false;
    }

    if (viewStyle.transform && !menu.value) {
      menu.value = true;
    }
  }
);
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
      <KeepAlive>
        <XyzTransition appear :xyz="`fade stagger-2`" mode="in-out">
          <component
            class="component"
            ref="component"
            :style="viewStyle"
            :is="Component"
          />
        </XyzTransition>
      </KeepAlive>
    </router-view>
  </div>
</template>
