<template>
  <div class="player h-2 w-1/2 m-auto" ref="player"></div>
</template>

<script lang="ts" setup>
import * as AsciinemaPlayer from 'asciinema-player';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import { ref, nextTick } from 'vue';
const player = ref();

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

nextTick(() => {
  const option = {
    theme: props.theme || 'asciinema',
    autoPlay: false,
  };
  const container = player.value;
  const file_url = `${import.meta.env.BASE_URL}/src/data/casts/${
    props.file || 'man-ascii'
  }.cast`;
  AsciinemaPlayer.create(file_url, container, option);
});
</script>
