import { defineStore } from 'pinia';

interface State {
  menu: Boolean;
  animationIds: number;
}
export const useStore = defineStore('menu', {
  state: (): State => {
    return { menu: false, animationIds: 0 };
  },
  // 也可以这样定义
  // state: () => ({ menu: 0 })
  actions: {
    increment() {
      this.menu = !this.menu;
    },
  },
});
