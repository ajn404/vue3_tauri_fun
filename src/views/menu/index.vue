<template>
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" ref="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <li v-for="item in routes" :key="item.path" @click="routeClick(item)">{{ item.name }}</li>
                <li v-for="item in routes" :key="item.path" @click="routeClick(item)">{{ item.name }}</li>
                <li v-for="item in routes" :key="item.path" @click="routeClick(item)">{{ item.name }}</li>
                <li v-for="item in routes" :key="item.path" @click="routeClick(item)">{{ item.name }}</li>
                <li v-for="item in routes" :key="item.path" @click="routeClick(item)">{{ item.name }}</li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { endRoutes } from '@/router';
import { reactive ,ref, type Ref} from 'vue';
import { useRouter } from 'vue-router';
const routes = reactive(endRoutes);
const router = useRouter();
const checkbox:Ref<HTMLInputElement| undefined> = ref();

const routeClick = (route: endRoutes) => {
    router.push({
        name: route.name,
        path: route.path,
    })
    checkbox.value?.click();
}

</script>


<style lang="scss">
nav {
    #menuToggle {
        display: block;
        position: relative;
        top: 50px;
        left: 50px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;

        li {
            text-decoration: none;
            color: #232323;
            transition: color 0.3s ease;

            &:hover {
                color: tomato;
            }
        }

        input {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;
            cursor: pointer;
            opacity: 0;
            z-index: 2;
            -webkit-touch-callout: none;
        }

        span {
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            position: relative;
            background: #cdcdcd;
            border-radius: 3px;
            z-index: 1;
            transform-origin: 4px 0px;
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
                background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
                opacity 0.55s ease;

            &:nth-last-child(2) {
                transform-origin: 0% 100%;
            }

            &:first-child {
                transform-origin: 0% 0%;
            }

        }

        input:checked~span {
            opacity: 1;
            transform: rotate(45deg) translate(-2px, -1px);
            background: #232323;
        }

        input:checked~span:nth-last-child(3) {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
        }

        input:checked~span:nth-last-child(2) {
            transform: rotate(-45deg) translate(0, -1px);
        }

        input:checked~ul {
            transform: none;
        }

    }

    #menu {
        position: absolute;
        min-width: 100%;
        min-height: 100vh;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 125px;
        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

        li {
            padding: 10px 0;
            font-size: 22px;
        }
    }
}
</style>