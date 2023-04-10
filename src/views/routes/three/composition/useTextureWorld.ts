import { nextTick, onUnmounted, reactive, ref } from 'vue';
import { textureWorld } from '../instances';
import '../three.scss';
export const useTextureWorld = () => {
  const animate = textureWorld.prototype.animate;
  const option = ref({
    cpx: 0,
    cpz: 20,

    mpx: 0,
    mpz: 0,

    mrx: 3,
    mrz: 3,
    mry: 3,
  });
  const container = ref();
  const customer = ref(false);
  let world: textureWorld | Object = reactive({});

  const toggleRender = () => {
    world = new textureWorld(container.value);
    if (world instanceof textureWorld) {
      world.render(container.value);
    }
  };

  const toggleCustomer = () => {
    customer.value = !customer.value;
    if (customer.value) {
      textureWorld.prototype.animate = function () {
        //0,0,20
        if (this.camera) {
          this.camera.position.x = option.value.cpx;
          this.camera.position.z = option.value.cpz;
        }
        //0,0,0
        if (this.cube) {
          this.cube.position.x = option.value.mpx;
          this.cube.position.z = option.value.mpz;
          this.cube.rotation.x = option.value.mrx;
          this.cube.rotation.z = option.value.mrz;
          this.cube.rotation.y = option.value.mry;
        }
      };
    } else {
      textureWorld.prototype.animate = animate;
    }
  };
  nextTick(() => {
    if (container.value) {
      toggleRender();
    }
  });
  onUnmounted(() => {
    if (world instanceof textureWorld) {
      world.beforeDestroy();
      world.stop();
    }
  });

  return {
    container,
    world,
    customer,
    toggleCustomer,
    option,
  };
};
