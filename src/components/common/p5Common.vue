<template>
  <div class="view">
    <div class="container" ref="container"></div>
  </div>
</template>

<script lang="ts">
import type p5 from 'p5';
import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
  setup() {
    const p5_instance: Ref<p5 | null> = ref(null);

    return {
      p5_instance,
    };
  },

  unmounted() {
    this.drop_instance();
  },
  methods: {
    drop_instance() {
      if (this.p5_instance) {
        this.p5_instance.remove();
      }
    },
  },
});
</script>
