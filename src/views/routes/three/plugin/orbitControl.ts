import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Camera } from 'three';

export declare interface createCameraControlOption {
  dampingFactor: number;
  enableDamping: boolean;
  control?: boolean;
}

export const createCameraControl = (
  object: Camera,
  domElement?: HTMLElement,
  option?: createCameraControlOption
): OrbitControls => {
  const control = new OrbitControls(object, domElement);

  if (option && !option?.control) {
    control.enabled = false;
    control.stopListenToKeyEvents();
  } else {
    control.enableDamping = option?.enableDamping || false; //添加阻尼使控制的感觉更加真实
    control.dampingFactor = option?.dampingFactor || 0.01;
    control.listenToKeyEvents(window);
  }

  return control;
};
