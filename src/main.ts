import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/styles/index.scss';
import '@animxyz/core';
import VueAnimXyz from '@animxyz/vue3';
// console.log('应用的环境变量', import.meta.env);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAnimXyz);

app.config.globalProperties.$myVue = app;
app.mount('#app');
