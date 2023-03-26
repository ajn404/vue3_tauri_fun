<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import p5 from 'p5';
import { geometries } from './instances/geometries';
import P5Common from '@/components/common/p5Common.vue';

export default defineComponent({
  extends: P5Common,
  setup() {
    const container: Ref<HTMLElement | null> = ref(null);
    return { container }
  },
  mounted() {
    this.$nextTick(() => {

      if (this.container) {
        const container = this.container

        this.p5_instance = new p5(function (args: p5) {
          geometries(args, container);
        }, this.container);
      }
    });
  }
})
</script>

