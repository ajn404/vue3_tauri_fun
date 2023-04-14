<template>
  <div class="player w-4/6 m-auto" ref="player"></div>
</template>

<script lang="ts" setup>
import * as AsciinemaPlayer from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import { ref, nextTick, type Ref, inject } from 'vue';

export interface asciinema_player {
  player: HtmlElement;
  asciinema_instance: any;
  generate: () => {};
}

const url = inject('cast_url') || `${import.meta.env.BASE_URL}data/casts`;

const player: Ref<HtmlElement | null> = ref(null);
const asciinema_instance = ref();
const props = defineProps({
  file: String,
  theme: {
    type: String,
    require: false,
    default: 'tango',
    validator: (val: string) => {
      return [
        'asciinema',
        'monokai',
        'tango',
        'solarized-dark',
        'solarized-light',
      ].includes(val);
    },
  },
});

const generate = () => {
  const option = {
    theme: props.theme || 'asciinema',
    autoPlay: true,
    loop: true,
  };
  const container = player.value;
  const file_url = `${url}/${props.file || 'man-ascii'}.cast`;
  asciinema_instance.value = AsciinemaPlayer.create(
    file_url,
    container,
    option
  );
};

defineExpose({ player, asciinema_instance, generate: generate });

nextTick(() => {
  generate();
});
</script>

<style scoped lang="scss">
:deep(svg) {
  display: inline;
}
</style>
