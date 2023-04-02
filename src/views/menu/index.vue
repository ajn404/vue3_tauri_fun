<template>
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" ref="checkbox" @click="menuClick" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu" ref="menu">
        <li
          v-for="item in routes"
          :key="item.path"
          :class="[
            item.name === route.name ? 'active' : '',
            `level-${item.rank + 1}`,
          ]"
          @click="routeClick(item)"
        >
          {{ item.name }}
          <span> ({{ item.path }}) </span>
        </li>
        <div class="after" ref="drag" @mousedown="mousedown"></div>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup name="menu">
import { endRoutes } from '@/router';
import { reactive, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '@/stores';

const store = useStore();

const routes = reactive(endRoutes);
const router = useRouter();
const route = useRoute();
const checkbox: Ref<HTMLInputElement | undefined> = ref();
const menu: Ref<HTMLInputElement | undefined> = ref();
const drag: Ref<HTMLInputElement | undefined> = ref();

const menuClick = (pe: MouseEvent) => {
  store.menu = (pe.target as HTMLInputElement)?.checked;

  store.viewStyle = {
    transform: store.menu
      ? `translate(${document.querySelector('#menu')?.clientWidth}px,0)`
      : 'none',
    width: store.menu
      ? `calc(100% - ${document.querySelector('#menu')?.clientWidth}px)`
      : '100%',
  };
};

const routeClick = (route: endRoutes) => {
  router.push({
    name: route.name,
    path: route.path,
  });
};

const mousemove = (e: MouseEvent) => {
  const x = e.clientX;
  drag.value?.classList.add('dragging');

  if (drag.value && menu.value && menu.value?.clientWidth >= 90) {
    const target = drag.value;
    const event = new Event('resize');
    dispatchEvent(event);

    if (x > 0 && target) {
      target.style.left = `${x - 4}px`;

      store.viewStyle = {
        transform: store.menu ? `translate(${x}px,0)` : 'none',
        width: store.menu ? `calc(100% - ${x}px)` : '100%',
      };

      if (menu.value) menu.value.style.width = `${x}px`;
    }
  }
};

const mousedown = () => {
  addEventListener('mousemove', mousemove, false);

  addEventListener('mouseup', () =>
    removeEventListener('mousemove', mousemove, false)
  );
};
</script>

<style lang="scss">
$li-font-size: 22px;

nav {
  position: relative;

  #menuToggle {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;

    input {
      display: block;
      width: 33px;
      height: 33px;
      cursor: pointer;
      position: absolute;
      top: -7px;
      left: -5px;
      opacity: 0;
      z-index: 2;
      -webkit-touch-callout: none;
    }

    &:hover {
      & > span {
        border-color: skyblue;
      }
    }

    & > span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      background: transparent;
      border: 0.5px solid #e0e0e0;

      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

      &:nth-last-child(2) {
        transform-origin: 0% 100%;
      }

      &:first-child {
        transform-origin: 0% 0%;
      }
    }

    input:checked ~ span {
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

    input:checked ~ ul {
      transform: none;
    }
  }

  #menu {
    position: absolute;
    width: 30%;
    width: 300px;
    min-height: calc(100vh + 100px);
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 100%;
    margin: -100px 0 0 -10px;
    padding: 175px 50px 50px 100px;
    box-sizing: border-box;
    top: 0;
    background-image: radial-gradient(#999, #fff);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    padding-inline-start: 40px;
    .after {
      display: inline-block;
      width: 4px;
      height: 100%;
      position: fixed;
      background-image: linear-gradient(to bottom, #000, #fff);
      top: 0;
      left: 296px;
      &:hover {
        cursor: move;
        cursor: col-resize;
      }
      &.dragging {
        background: transparent;
        opacity: 0.4;
      }
    }
    li {
      padding: 10px ;
      text-decoration: none;
      color: #887723;
      transition: color 0.3s ease;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      span {
        font-weight: 100;
      }

      &.active,
      &:hover {
        color: #f60000;
      }

      @for $i from 1 through 4 {
        $fontsize: calc(44px / $i);
        $font-weight: calc(400 / $i);
        $margin-left-right: calc($i * 20px);
        cursor: pointer;

        &.level-#{$i} {
          font-size: $fontsize;
          margin: 0 $margin-left-right;
          font-weight: $font-weight;
          line-height: $fontsize;

          span {
            font-size: calc($fontsize / 2);
          }
        }
      }
    }
  }
}
</style>
