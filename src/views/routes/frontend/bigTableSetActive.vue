<template>
  <div class="view h-auto">
    <h2 class="text-center">很多数据，实现高效的点击响应</h2>
    <div
      class="m-auto w-auto flex justify-center flex-wrap h-10/12 overflow-y-scroll"
    >
      <div
        class="row bg-gradient-to-b from-cyan-50 to-blue-50 hover:bg-gradient-to-b hover:from-cyan-100 hover:to-blue-100"
        v-for="_ in new Array(100)"
      >
        <div
          class="item p-1 border-red-100 text-sm/[16px] border-2 text-center cursor-edit hover:bg-blue-300"
          v-for="__ in new Array(10)"
          @click="itemClick"
        >
          {{ renderItem() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const itemClick = (e: MouseEvent) => {
  console.log(e.target);
  if (e.target instanceof HTMLElement) {
    e.target.classList.add('active');
    e.target.contentEditable = 'true';
  }
};
const emo = ['😊', '😭', '😂', '🐶', '🐮', '🐱'];
const renderItem = () => {
  let item: number = Number(Math.random().toFixed(2));
  let num: number = Math.floor(item * (emo.length - 1));
  return `${item}${emo[num]}`;
};
</script>
