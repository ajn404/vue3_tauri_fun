<script lang="ts" setup>
import { ref } from 'vue';
import { rust } from '@codemirror/lang-rust';
import { oneDark } from '@codemirror/theme-one-dark';
import { Codemirror } from 'vue-codemirror';
import { executeRustCode } from '@/script/http';
const playground: any = ref(null);
const editor: any = ref(null);
const extensions = [rust(), oneDark];
const props = defineProps({
  code: String,
  async: Boolean,
  editable: String,
  lang: String,
});
const stderr = ref('');
const stdout = ref('');
const code = ref(props.code);

const getRes = async () => {
  const codeText = props.editable ? code.value : props.code;
  if (!stderr.value || props.editable) {
    const res: any = await executeRustCode(codeText);
    const response = res.json();
    stderr.value = response?.stderr?.replace(/\n/g, '<br/>');
    stdout.value = response?.stdout?.replace(/\n/g, '<br/>');
  }
};
if (!props.async) getRes();
</script>

<template>
  <div class="playground" ref="playground">
    <codemirror
      ref="editor"
      v-if="!props.editable"
      v-model="code"
      placeholder="rust"
      class="editor"
      :autofocus="false"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      :disabled="true"
    />

    <codemirror
      ref="editor"
      v-if="props.editable"
      v-model="code"
      placeholder="rust"
      class="editor"
      :autofocus="false"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      :disabled="false"
    />
    <el-button
      class="button"
      v-if="props.async"
      @click="getRes"
      v-show="!stderr || props.editable"
    >
      运行
    </el-button>
    <div class="res">
      <h4>Standard Error(编译结果)</h4>
      <div
        v-show="stderr"
        class="xyz-in"
        xyz="fade up big"
        v-html="stderr"
      ></div>
      <h4>Standard Output(控制台输出)</h4>
      <div
        v-html="stdout"
        v-show="stdout"
        class="xyz-in"
        xyz="fade up big"
        style="color: green"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.res {
  div {
    // text-indent:2em;
    margin-left: 2em;
    background-image: linear-gradient(
      to left,
      var(--c-bg-lighter),
      var(--c-bg)
    );
    padding: 1em;
  }

  h4 {
    text-align: center;
  }
}

.editor {
  display: block !important;
}

.button {
  margin: 1em;
  font-size: 0.6em;
}

.playground {
  background-color: var(--c-bg);

  &:fullscreen {
    overflow-y: scroll;
  }
}
</style>
