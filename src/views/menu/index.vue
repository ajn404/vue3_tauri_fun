<template>
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" ref="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">

                <li v-for="item in routes" :key="item.path"
                    :class="[(item.name === route.name ? 'active' : ''), `level-${item.rank + 1}`]"
                    @click="routeClick(item)">
                    {{ item.name }}
                    <span>
                        ({{ item.path }})
                    </span>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { endRoutes } from '@/router';
import { reactive, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const routes = reactive(endRoutes);
const router = useRouter();
const route = useRoute();
const checkbox: Ref<HTMLInputElement | undefined> = ref();

const routeClick = (route: endRoutes) => {
    router.push({
        name: route.name,
        path: route.path,
    })
    if (route.rank !== 0) checkbox.value?.click();
}

</script>


<style lang="scss">
$li-font-size: 22px;

nav {
    position: relative;

    #menuToggle {
        display: block;
        position: fixed;
        top: 50px;
        left: 50px;
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;

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

        &>span {
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

            &:nth-last-child(3) {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }

            &:nth-last-child(2) {
                transform: rotate(-45deg) translate(0, -1px);
            }

        }

        input:checked~ul {
            transform: none;
        }

    }

    #menu {
        position: absolute;
        min-width: 30%;
        min-height: 100vh;
        max-height: 100vh;
        overflow: scroll;
        margin: -100px 0 0 -50px;
        padding: 50px;
        top: 0;
        padding-top: 225px;
        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

        li {
            padding: 10px 0;
            text-decoration: none;
            color: #232323;
            transition: color 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                font-weight: 100;
            }

            &.active,
            &:hover {
                color: tomato;
            }

            @for $i from 1 through 4 {
                $fontsize: calc(44px / $i);
                $font-weight: calc(400 / $i );
                $margin-left-right: calc($i*20px);

                &.level-#{$i} {
                    font-size: $fontsize;
                    margin: 0 $margin-left-right;
                    font-weight: $font-weight;
                    line-height: $fontsize;

                    span {
                        font-size: calc($fontsize /2);
                    }
                }
            }
        }
    }
}
</style>