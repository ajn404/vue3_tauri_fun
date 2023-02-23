// import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  this: () => ({
    token: '',
    dealerCode: '',
    userName: '',
    dealerName: '',
    mobile: '',
    employeeNo: '',
    menuLevel1: [],
    menuLevel2: [],
    menuLevel3: [],
    userMenu: [],
    buttonLevel: [],
    notification: [],
  }),
  getters: {
    token: () => this.token,
    dealerCode: () => this.dealerCode,
  },
  actions: {
    async login({ commit }, param) {
      return new Promise((resolve, reject) => {
        api.login
          .login(param)
          .then((loginMsg) => {
            const { TOKEN, USERMENU } = loginMsg.data;
            if (USERMENU && USERMENU.length) {
              const options = {
                menuLevel1: USERMENU.filter((item) => item.MENU_TYPE === 1001),
                menuLevel2: USERMENU.filter((item) => item.MENU_TYPE === 1002),
                menuLevel3: USERMENU.filter((item) => item.MENU_TYPE === 1003),
                userMenu: USERMENU,
              };
              commit('setMenu', options);
            }
            commit('setToken', TOKEN);
            commit('setUserMsaage', loginMsg.data);
            resolve(loginMsg);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async getAction({ commit }) {
      const menuAction = await api.login.getAction();
      commit('setButtonActions', menuAction.data.USERACTION);
    },

    async getNotication({ commit }) {
      const notificationList = await api.base.queryLaunchNotification({
        limit: 9999,
        all: false,
      });
      commit('setNotification', notificationList.data);
    },

    setToken(this, token) {
      if (token) {
        this.token = `Bearer ${token}`;
      } else {
        this.token = '';
      }
    },

    setUserMsaage(this, data) {
      this.dealerName = data.DEALERNAME;
      this.dealerCode = data.DEALERCODE;
      this.userName = data.USERNAME;
      this.employeeNo = data.EMPLOYEENO;
      this.mobile = data.MOBILE;
      this.userId = data.USERID;
    },

    setDealerCode(this, dealerCode) {
      this.dealerCode = dealerCode;
    },

    setMenu(this, option) {
      this.menuLevel1 = option.menuLevel1;
      this.menuLevel2 = option.menuLevel2;
      this.menuLevel3 = option.menuLevel3;
      this.userMenu = option.userMenu;
    },

    setButtonActions(this, option) {
      this.buttonLevel = option;
    },

    setNotification(this, data) {
      this.notification = data;
    },
  },
});
