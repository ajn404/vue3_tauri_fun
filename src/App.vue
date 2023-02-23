<script setup lang="ts" name="App">
import { RouterView, useRoute } from 'vue-router';
import { ref, watch,getCurrentInstance } from "vue";
const transitionName = ref("");
const route = useRoute();
const app = getCurrentInstance();
console.log(app);


watch(
  route,
  (to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    if (toDepth === fromDepth) {
      transitionName.value = ''
    } else {
      transitionName.value = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  })

  // if (sessionStorage.getItem('store')) {
  //     this.$store.replaceState(
  //       Object.assign(
  //         {},
  //         this.$store.state,
  //         JSON.parse(sessionStorage.getItem('store')
  //         )
  //       )
  //     )
  //   }


    //在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener('beforeunload', () => {
    //   sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    // })


</script>

<template>
  <transition :name="transitionName">
    <keep-alive>
      <RouterView />
    </keep-alive>
  </transition>
</template>
