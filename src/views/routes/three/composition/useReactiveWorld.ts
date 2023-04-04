import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { reactiveWorld } from '../instances';
import '../three.scss';
export const useReactiveWorld = () => {
  const container = ref();
  let world: reactiveWorld | Object = reactive({});

  const toggleRender = () => {
    if (world instanceof reactiveWorld) {
      world.render(container.value);
    }
  };

  nextTick(() => {
    if (container.value) {
      world = new reactiveWorld(container.value);
      toggleRender();
    }
  });

  onUnmounted(() => {
    if (world instanceof reactiveWorld) {
      world.beforeDestroy();
    }
  });

  return {
    container,
    world,
  };
};
