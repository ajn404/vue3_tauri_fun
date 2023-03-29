import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { pbrWorld } from '../instances/pbrWorld';
import '../three.scss';
export const usePbrWorld = () => {
  const container = ref();
  let world: pbrWorld | Object = reactive({});

  const toggleRender = () => {
    if (world instanceof pbrWorld) {
      world.render(container.value);
    }
  };

  nextTick(() => {
    if (container.value) {
      world = new pbrWorld(container.value);
      toggleRender();
    }
  });

  onUnmounted(() => {
    if (world instanceof pbrWorld) {
      world.beforeDestroy();
    }
  });

  return {
    container,
    world,
  };
};
