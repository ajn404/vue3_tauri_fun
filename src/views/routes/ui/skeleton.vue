<script lang="ts" setup>
import { onMounted, ref, onUnmounted, nextTick } from 'vue';
import { messOrder } from '@/script/utils';
const loading = ref(true);
const arr = [
  '1/你好呀',
  '2/这里是',
  '3/加载到的',
  '4/内容',
  '5/你可以',
  '6/随意',
  '7/打乱顺序',
];
const contents = ref(structuredClone(arr));
let timer: ReturnType<typeof setTimeout> | undefined;

const onLoading = () => {
  timer = setTimeout(() => {
    loading.value = !loading.value;
  }, 2000);
};

const messLoading = async () => {
  contents.value = [];
  await nextTick();
  contents.value = structuredClone(arr);
  messOrder(contents.value);
};

onMounted(() => {
  onLoading();
});
onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<template>
  <div class="skeleton">
    <el-skeleton :rows="5" animated :loading="loading" />
    <XyzTransitionGroup
      appear
      xyz="fade stagger-2 "
      :duration="{ out: 0, in: 'auto' }"
    >
      <template v-if="!loading">
        <div class="content" v-for="item in contents" :key="item">
          {{ item }}
        </div>
      </template>
      <el-button v-if="!loading" @click="messLoading">打乱顺序</el-button>
      <el-button
        v-if="!loading"
        @click="
          () => {
            loading = true;
            contents = arr;
            onLoading();
          }
        "
        >还原顺序并重新加载</el-button
      >
    </XyzTransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
.skeleton {
  padding-left: 2em;
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  align-items: center;
}
</style>
