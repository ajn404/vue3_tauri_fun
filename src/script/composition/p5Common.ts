// mouse.js
import { ref, onMounted, onUnmounted, type Ref } from 'vue';
import type p5 from 'p5';

export function useP5() {
  const container: Ref<HTMLElement | null> = ref(null);
  const p5_instance: Ref<p5 | null> = ref(null);

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // 来启动和卸载副作用
  onMounted(() => {});
  onUnmounted(() => {});

  // 通过返回值暴露所管理的状态
  return { container, p5_instance };
}
