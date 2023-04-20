<template>
  <form @submit.prevent="onSubmit">
    <input v-model="value" />

    <button type="submit" :disabled="isLoading">Submit</button>
    <h2>{{ isLoading ? '加载中' : '结束加载' }}</h2>
  </form>
</template>

<script lang="ts">
import { socket } from '@/script/socket';

export default {
  name: 'MyForm',

  data() {
    return {
      isLoading: false,
      value: '',
    };
  },

  methods: {
    onSubmit() {
      this.isLoading = true;
      socket.timeout(5000).emit('create-something', this.value, () => {
        this.isLoading = false;
      });
    },
  },
};
</script>
