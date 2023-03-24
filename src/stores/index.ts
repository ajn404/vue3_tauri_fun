import { defineStore } from 'pinia';

interface State {
  menu: Boolean;
  viewStyle: {};
  animationIds: number;
}
export const useStore = defineStore('menu', {
  state: (): State => {
    return {
      menu: false,
      animationIds: 0,
      viewStyle: {
        width: '100%',
        transform: 'none',
      },
    };
  },
  // 也可以这样定义
  // state: () => ({ menu: 0 })
  actions: {
    increment() {
      this.menu = !this.menu;
    },
  },
});
