<template>
  <div class="view" ref="view">
    <div id="cursor"></div>
    <ul class="tags-cloud">
      <li class="tag" v-for="tag in tags" :key="tag">
        <span class="wrap">{{ tag }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, ref, type Ref, watch, reactive } from 'vue';
import TagsCloud from '@/script/instances/tagsCloud';
import { useStore } from '@/stores';
import { invoke } from '@tauri-apps/api';
import { handleIsTauri } from '@/script/utils';

const store = useStore();
watch(
  () => store.menu,
  (val) => {
    if (val) {
      cloud?.stop();
    }
  }
);
const tags = ref(['Three', 'Vtk', 'Vue3', 'Ts', 'scss', 'git', 'tauri']);

const view: Ref<HTMLElement | null> = ref(null);
let cloud: any = reactive({});

const main = () => {
  {
    const root: HTMLElement | null = document.querySelector('.tags-cloud');

    if (root) {
      cloud = new TagsCloud(root);
      cloud?.start();
    }
  }

  {
    const cursor = document.getElementById('cursor');
    const isActivated = false;

    if (view.value)
      view.value.addEventListener('mousemove', (e) => {
        if (!isActivated) {
          cursor?.classList.add('-activated');
        }

        if (cursor)
          cursor.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
      });
  }
};

onMounted(async () => {
  if (handleIsTauri()) {
    const response: string[] = await invoke('read_tags');
    if (response?.length > 0) {
      tags.value = response;
    }
  }
  if (!store.menu) main();
});

onUpdated(() => {
  if (!store.menu) main();
});
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.view {
  background-image: linear-gradient(to bottom, #000, #555);
  color: #778da9;
  cursor: none;
  width: 100%;
  height: 100%;
  #cursor {
    position: fixed;
    top: -16px;
    left: -16px;
    z-index: 1;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #e0e1dd;
    opacity: 0;
    &.-activated {
      animation: fadeIn 1s ease-out forwards;
    }
  }

  .tags-cloud {
    position: fixed;
    top: calc(50% - 30vmin);
    left: calc(50% - 30vmin);
    height: 60vmin;
    width: 60vmin;
    list-style: none;
    opacity: 0;
    &.-loaded {
      animation: fadeIn 1s ease-out forwards;
    }

    & > .tag {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 5vmin;
      font-weight: bold;
      transition: transform 0.5s linear, opacity 0.5s linear;
    }

    & > .tag > .wrap {
      display: inline-block;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
</style>
