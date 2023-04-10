import { nextTick, onUnmounted, reactive, ref, watchEffect, watch } from 'vue';
import { textureControlWorld } from '../instances';
import '../three.scss';
import type { createCameraControlOption } from '../plugin';

export const useOrbitControl = () => {
  const container = ref();
  let world: textureControlWorld | Object = reactive({});

  let option: createCameraControlOption = reactive({
    dampingFactor: 0.05,
    enableDamping: false,
    control: true,
  });

  let control = ref(false);
  const toggleRender = () => {
    if (container.value) {
      world = new textureControlWorld(container.value, option);
      if (world instanceof textureControlWorld) {
        world.render(container.value);
      }
    }
  };

  watch(
    () => option,
    () => {},
    {
      deep: true,
    }
  );

  nextTick(() => {
    toggleRender();
  });

  const destroyInstance = () => {
    if (world instanceof textureControlWorld) {
      world.control.dispose();
      world.stop();
      world.beforeDestroy();
    }
  };
  onUnmounted(() => {
    destroyInstance();
  });

  return {
    container,
    world,
    control,
    option,
  };
};
