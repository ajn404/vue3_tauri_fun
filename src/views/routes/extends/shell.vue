<template>
  <div class="view bg-slate-400 h-auto">
    <el-autocomplete
      v-model="exec"
      :fetch-suggestions="querySearch"
      class="auto-input"
      clearable
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
      :theme="pass_props.theme"
      :file="pass_props.file"
    ></ShellPlayer>

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
import { onMounted, ref, type Ref, reactive, nextTick } from 'vue';
import type { AutocompleteFetchSuggestionsCallback } from 'element-plus';
import type { asciinema_player } from '@/components/player/shellPlayer.vue';

const exec = ref('nu');

const player: Ref<null | asciinema_player> = ref(null);

interface LinkItem {
  value: string;
  des: string;
  file: string;
  theme:
    | 'asciinema'
    | 'monokai'
    | 'tango'
    | 'solarized-dark'
    | 'solarized-light';
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

const loadAll = (): LinkItem[] => {
  return [
    {
      value: 'nushell',
      file: 'nu',
      theme: 'solarized-dark',
      des: 'a new type of shell',
    },
    {
      value: 'man',
      file: 'man-ascii',
      theme: 'solarized-dark',
      des: '查看命令的帮助，命令的词典，更复杂的还有info,但不常用',
    },
    {
      value: 'whois',
      file: 'whois',
      theme: 'tango',
      des: '查询域名ip及所有者信息',
    },
    {
      value: 'curl parrot.live; ',
      file: 'curlLive',
      theme: 'solarized-light',
      des: '查询域名ip及所有者信息',
    },
  ];
};

let pass_props = reactive(loadAll()[0]);

const handleSelect = async (item: any) => {
  if (player.value) {
    pass_props = item;
    player.value.asciinema_instance?.dispose();
    await nextTick();
    if (player.value) player.value.generate();
  }
};

onMounted(() => {
  suggestLinks.value = loadAll();
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
