import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { Spline } from '../instances';
import '../three.scss';
export const useSpline = () => {
  const container = ref();
  let world: Spline | Object = reactive({});

  const toggleRender = () => {
    world = new Spline(container.value);
    if (world instanceof Spline) {
      world.render(container.value);
    }
  };
  nextTick(() => {
    if (container.value) {
      toggleRender();
    }
  });
  onUnmounted(() => {
    if (world instanceof Spline) {
      world.beforeDestroy();
      world.stop();
    }
  });

  return {
    container,
    world,
  };
};
