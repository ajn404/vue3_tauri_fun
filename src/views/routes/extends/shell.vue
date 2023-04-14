<template>
  <div class="view bg-slate-400 h-auto">
    <h2 class="text-center">shell record</h2>
    <el-autocomplete
      v-model="exec"
      :fetch-suggestions="querySearch"
      class="auto-input"
      clearable
      ref="execSearch"
      placeholder="Please Input"
      @select="handleSelect"
    >
      <template #default="{ item }">
        <div class="value text-red-300">{{ item.value }}</div>
        <span class="des">{{ item.des }}</span>
      </template>
    </el-autocomplete>

    <ShellPlayer
      ref="player"
      :theme="theme"
      :file="pass_props.file"
    ></ShellPlayer>

    <h3 class="text-center">theme</h3>

    <el-radio-group
      v-model="theme"
      class="justify-center m-auto flex gap-1 items-center w-full text-lg"
      @change="handleSelect"
    >
      <el-radio-button
        v-for="_ in [
          'asciinema',
          'monokai',
          'tango',
          'solarized-dark',
          'solarized-light',
        ]"
        :label="_"
        >{{ _ }}</el-radio-button
      >
    </el-radio-group>

    <div class="w-10/12 sticky m-9 bg-black text-white p-3">
      <ul dir="auto">
        <li><kbd>space</kbd> - play / pause</li>
        <li><kbd>f</kbd> - toggle fullscreen mode</li>
        <li>
          <kbd>←</kbd> / <kbd>→</kbd> - rewind by 5 seconds / fast-forward by 5
          seconds
        </li>
        <li>
          <kbd>Shift</kbd> + <kbd>←</kbd> / <kbd>Shift</kbd> + <kbd>→</kbd> -
          rewind by 10% / fast-forward by 10%
        </li>
        <li>
          <kbd>0</kbd>, <kbd>1</kbd>, <kbd>2</kbd> ... <kbd>9</kbd> - jump to
          0%, 10%, 20% ... 90%
        </li>
        <li>
          <kbd>.</kbd> - step through a recording a frame at a time (when
          paused)
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref, reactive, nextTick, inject } from 'vue';
import type {
  AutocompleteFetchSuggestionsCallback,
  AutocompleteInstance,
} from 'element-plus';
import type { asciinema_player } from '@/components/player/shellPlayer.vue';

const exec = ref('nu');
const execSearch: Ref<null | AutocompleteInstance> = ref(null);
const player: Ref<null | asciinema_player> = ref(null);

type Theme =
  | 'asciinema'
  | 'monokai'
  | 'tango'
  | 'solarized-dark'
  | 'solarized-light';
const theme: Ref<Theme> = ref('solarized-dark');

interface LinkItem {
  value: string;
  des: string;
  file: string;
}
const suggestLinks = ref<LinkItem[]>([]);
const querySearch = (
  queryString: string,
  cb: AutocompleteFetchSuggestionsCallback
) => {
  const results = queryString
    ? suggestLinks.value.filter(createFilter(queryString))
    : suggestLinks.value;

  cb(results);
};

const createFilter = (queryString: string) => {
  return (suggestLinks: LinkItem) => {
    return (
      suggestLinks.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

let pass_props = reactive({
  value: 'nushell',
  file: 'nu',
  des: 'a new type of shell',
});

const handleSelect = async (item: any) => {
  if (player.value) {
    pass_props = item;
    player.value.asciinema_instance?.dispose();
    await nextTick();
    if (player.value) player.value.generate();
  }
};

onMounted(async () => {
  const response = await fetch(`${inject('cast_url')}/shell.json`, {});
  const data = await response.json();
  suggestLinks.value = data;
});
</script>

<style scoped lang="scss">
:deep(.auto-input) {
  position: static;
  display: block;
  margin: 2em auto;
  width: 50%;
}
</style>
