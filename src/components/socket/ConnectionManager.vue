<template>
  <div class="flex gap-10">
    <el-button @click="connect()">Connect</el-button>
    <el-button @click="disconnect()">Disconnect</el-button>
  </div>
</template>

<script lang="ts">
import { socket } from '@/script/socket';

export default {
  name: 'ConnectionManager',

  methods: {
    connect() {
      socket.connect();
    },
    disconnect() {
      socket.disconnect();
    },
  },
};
</script>
