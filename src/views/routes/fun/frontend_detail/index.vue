<script lang="ts" setup>
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
// import { Codemirror } from 'vue-codemirror';
const limit_time = 20;
const mute = ref(limit_time);
const video: Ref<HTMLVideoElement | null> = ref(null);

const code = ref('');
let timer: ReturnType<typeof setInterval> | undefined;

const document_isReady = () => {
  return document.hasFocus() && document.readyState === 'complete';
};

const setTimer = () => {
  timer = setInterval(() => {
    if (document_isReady()) mute.value--;

    if (mute.value <= 0 && video.value?.paused) {
      video.value
        ?.play()
        .then(() => {})
        .catch(() => {
          mute.value = limit_time;
        });
    } else if (mute.value > 0) {
      video.value?.pause();
    }
  }, 1000);
};

const reset_mute = () => {
  mute.value = limit_time;
};

onMounted(() => {});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang="scss" scoped>
$back_color: #eee;

.view {
  display: grid;
  grid-template-columns: 100%;
  place-items: center;
  background-color: $back_color;
  & > * {
    width: 70%;
  }

  video {
    height: 70%;
  }

  h2 {
    color: #000;
    transition: all 4s linear;
    text-align: center;
    font-size: 1em;
    width: 4em;
    height: 4em;
    &.hide {
      color: transparent;
      animation: ten 4s infinite linear;
    }
  }

  .editor {
    :deep(.cm-editor) {
      width: 70%;
    }
  }
}
</style>

<template>
  <div class="view" @click.once="setTimer">
    <video loop ref="video">
      <source src="@/assets/large.mp4" type="video/mp4" />
      <a href="@/assets/large.mp4">MP4</a>
    </video>

    <h2 :class="[mute > 0 ? 'display' : 'hide']">
      用户{{ mute }}s不操作，视频自动播放
    </h2>

    <defaultEditor
      ref="editor"
      v-model="code"
      placeholder="尝试在这里输入内容，视频就会暂停，计时会重新开始"
      @change="reset_mute"
      class="editor"
      :autofocus="false"
      :indent-with-tab="true"
      :tab-size="2"
    />
  </div>
</template>
