import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { transitionWorld } from '../instances/transitionWorld';
import '../three.scss';
export const useTransitionWorld = () => {
  const container = ref();
  let world: transitionWorld | Object = reactive({});

  const toggleRender = () => {
    if (world instanceof transitionWorld) {
      world.render(container.value);
    }
  };

  nextTick(() => {
    if (container.value) {
      world = new transitionWorld(container.value);
      console.table(world);

      toggleRender();
    }
  });

  onUnmounted(() => {
    if (world instanceof transitionWorld) {
      world.beforeDestroy();
    }
  });

  return {
    container,
    world,
  };
};
