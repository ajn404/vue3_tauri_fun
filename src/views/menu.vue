<template>
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <li v-for="item in routes" :key="item.path" @click="routeClick(item)">{{ item.name }}</li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { endRoutes } from '@/router';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const routes = reactive(endRoutes);
const router = useRouter();

const routeClick = (route:endRoutes)=>{
    router.push({
        name:route.name,
        path:route.path,
    })
}

</script>
