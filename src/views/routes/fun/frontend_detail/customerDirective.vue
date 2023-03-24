<template>
  <div class="view">
    <input
      type="text"
      placeholder="自动聚焦，你值得拥有"
      v-focus
      v-model="input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'customerDirective',
  data() {
    return {
      input: '',
    };
  },

  directives: {
    focus: {
      mounted: (el) => {
        el.focus();
      },
    },
  },
});
</script>

<style lang="scss">
.view {
  input {
    padding: 2px 1em;
    color: #222;
  }
}
</style>
