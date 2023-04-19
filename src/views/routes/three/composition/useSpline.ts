import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { Spline } from '../instances';
import '../three.scss';

export interface reactiveData {
  percent?: number;
}

export const useSpline = () => {
  const container = ref();
  let world: Spline | Object = reactive({});
  let reactiveData: reactiveData = reactive({
    percent: 0,
  });

  const toggleRender = () => {
    world = new Spline(container.value, reactiveData);
    if (world instanceof Spline) {
      world.render(container.value);
      reactiveData = world.reactiveData;
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
    reactiveData,
  };
};
