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
import { nextTick, ref, type Ref, watch } from 'vue';
import TagsCloud from '@/script/tagsCloud';
import { useStore } from '@/stores';
const store = useStore();

watch(
  () => store.menu,
  (val) => {
    if (!val) {
      main();
    } else {
      cancelAnimationFrame(store.animationIds);
    }
  }
);
const tags = ref([
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
]);

const view: Ref<HTMLElement | null> = ref(null);
const main = () => {
  {
    const root: HTMLElement | null = document.querySelector('.tags-cloud');
    if (root) {
      const cloud = new TagsCloud(root);

      cloud.start();
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

nextTick(() => {
  main();
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
  background-color: #1b263b;
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
