import '@/styles/index.scss';
import '@animxyz/core';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import VueAnimXyz from '@animxyz/vue3';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ElLoadingService, ElMessage, type MessageParams } from 'element-plus';
// 将 CSSPlugin 添加到 GSAP 插件中
gsap.registerPlugin(CSSPlugin);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueAnimXyz);
app.config.globalProperties.$myVue = app;
// 将 GSAP 添加到 Vue 实例的原型中
app.config.globalProperties.$gsap = gsap;

//vue全局配置element-plus的loading
app.config.globalProperties.$el_loading = ElLoadingService;

app.config.errorHandler = (err, vm, info) => {
  const option: MessageParams = {
    message: info,
    grouping: true,
    type: 'error',
  };
  ElMessage(option);
  console.error(err, vm, info);

  // TODO: 错误处理
  // throw err;
};
app.mount('#app');
