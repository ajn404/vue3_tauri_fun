import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
import '@animxyz/core';
import VueAnimXyz from '@animxyz/vue3';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// 将 CSSPlugin 添加到 GSAP 插件中
gsap.registerPlugin(CSSPlugin);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueAnimXyz);
app.config.globalProperties.$myVue = app;
// 将 GSAP 添加到 Vue 实例的原型中
app.config.globalProperties.$gsap = gsap;
app.mount('#app');
