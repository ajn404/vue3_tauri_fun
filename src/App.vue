<script setup lang="ts" name="App">
import { RouterView, useRoute, useRouter } from 'vue-router';
import { watch, ref, version, provide } from 'vue';
import { useStore } from './stores';
import { invoke } from '@tauri-apps/api';
import { handleIsTauri } from '@/script/utils';
import { setProvide } from '@/script/provide';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
if (handleIsTauri())
    invoke('greet', { name: 'World' }).then((response) => console.log(response));

const route = useRoute();
const router = useRouter();
const loading = ref(false);
router.beforeEach((to, from, next) => {
    NProgress.start();
    loading.value = true;
    to.matched.forEach((record) => { });
    next();
});

router.afterEach(() => {
    // console.clear();
    NProgress.done();
});

watch(
    () => route.path,
    (newPath, oldPath) => {
        // console.log(`路由从 ${oldPath} 切换到了 ${newPath}`);
    }
);

const store = useStore();
const component = ref(null);

const err = () => {
    err();

}

//err();
setProvide();
// console.log('当前使用的vue版本为', version);
</script>

<template>
    <div class="App">
        <keep-alive>
            <search></search>
        </keep-alive>
        <router-view v-slot="{ Component }">
            <KeepAlive>
                <XyzTransition appear :xyz="`fade stagger-1`" mode="in-out">
                    <component class="component view" ref="component" :style="store.viewStyle" :is="Component" />
                </XyzTransition>
            </KeepAlive>
        </router-view>
    </div>
</template>
