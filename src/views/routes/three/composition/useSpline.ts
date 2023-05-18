import { h, nextTick, onUnmounted, reactive, ref, watch, watchEffect } from 'vue';
import { Spline } from '../instances';
import '../three.scss';
import { Application } from '@splinetool/runtime';

export interface reactiveData {
  percent: number;
  splineSceneUrl: string;
}

export const useSpline = () => {
  const container = ref();
  let world: Spline | Object = reactive({});
  const file = ref('room');
  let reactiveData: reactiveData = reactive({
    percent: 0,
    splineSceneUrl: `${import.meta.env.BASE_URL}data/models/${file.value}.splinecode`,
  });

  watch(() => file.value, (newVal) => {

    reactiveData.splineSceneUrl = `${import.meta.env.BASE_URL}data/models/${newVal}.splinecode`;

    if (world instanceof Spline) {
      world.beforeDestroy();
      world.stop();
    }
    container.value.innerHTML = ''
    nextTick(() => {
      if (container.value) {
        if (newVal === 'animate') {
          const canvas = document.createElement('canvas');;
          container.value.appendChild(canvas);
          const app = new Application(container.value.querySelector('canvas'));
          app.load(reactiveData.splineSceneUrl);
        } else
          toggleRender();
      }
    });
  })

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
    file,
  };
};
