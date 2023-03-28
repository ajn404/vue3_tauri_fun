// mouse.js
import { ref, onMounted, onUnmounted, type Ref, watch } from 'vue';
import type p5 from 'p5';

import { debounce } from '../utils';

import { useStore } from '@/stores';

export const useP5 = () => {
  const container: Ref<HTMLElement | null> = ref(null);
  const p5_instance: Ref<p5 | null> = ref(null);
  const store = useStore();

  const resize = () => {
    p5_instance.value?.setup();
  };

  const drop_instance = () => {
    if (p5_instance.value) {
      p5_instance.value.remove();
    }
  };
  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => {
    watch(() => store.viewStyle, debounce(resize, 1000));
    addEventListener('resize', debounce(resize, 1000));
  });
  onUnmounted(() => {
    drop_instance();
  });

  // 通过返回值暴露所管理的状态
  return { container, p5_instance };
};
