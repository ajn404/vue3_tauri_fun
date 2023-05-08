import { ref, onMounted, onUnmounted, type Ref, watch, nextTick } from 'vue';
import p5 from 'p5';
import { debounce } from '../utils';
import { useStore } from '@/stores';
import type { p5Option, p5Function } from '@/views/routes/p5/instances';

declare global {
  interface Window {
    p5: any;
  }
  var p5: any;
}
if (window) window.p5 = p5;

export const useP5 = (method: p5Function, option?: p5Option) => {
  const container: Ref<HTMLElement | null> = ref(null);
  const p5_instance: Ref<p5 | null> = ref(null);
  const store = useStore();

  const drop_instance = () => {
    if (p5_instance.value) {
      p5_instance.value.remove();
    }
  };

  const update = () => {
    //先销毁再创建
    drop_instance();
    init();
  };

  const init = () => {
    if (container.value) {
      p5_instance.value = new p5(function (args: p5) {
        method(args, container.value, option);
      }, container.value);
    }
  };
  onMounted(() => {
    //防抖
    watch(() => store.viewStyle, debounce(update, 100));
    if (!option?.banResize)
      addEventListener('resize', debounce(update, 100), false);
  });
  onUnmounted(() => {
    drop_instance();
    removeEventListener('resize', update, false);
  });

  nextTick(() => {
    init();
  });

  // 通过返回值暴露所管理的状态
  return { container, p5_instance, drop_instance, update };
};
