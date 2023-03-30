// mouse.js
import { ref, onMounted, onUnmounted, type Ref, watch, nextTick } from 'vue';
import p5 from 'p5';

import { debounce } from '../utils';

import { useStore } from '@/stores';
import type { p5Option, p5_func } from '@/views/routes/fun/p5/instances';

export const useP5 = (method: p5_func, option: p5Option) => {
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
  });
  onUnmounted(() => {
    drop_instance();
  });

  const init = () => {
    if (container.value) {
      p5_instance.value = new p5(function (args: p5) {
        method(args, container.value, option);
      }, container.value);
    }
  };

  nextTick(() => {
    init();
  });

  const update = () => {
    drop_instance();
    init();
  };

  // 通过返回值暴露所管理的状态
  return { container, p5_instance, drop_instance, update };
};
