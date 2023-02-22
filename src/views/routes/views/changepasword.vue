<template>
    <div>
      <div class="iframe">
        <iframe height="100%" width="100%" :src="src" frameborder="0"></iframe>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        src: ""
      }
    },
    mounted() {
      const token = localStorage.getItem('bocToken') || '';
      const url = 'https://stage.portal.salestool.ford.com.cn/salestool-h5/#/changePwd?token='
      this.src = url + token
      console.log(this.src)
    },
  }
  </script>
  
  <style scoped>
  .iframe {
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 60%;
  }
  </style>
  