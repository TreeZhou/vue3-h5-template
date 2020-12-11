import Vuex from 'vuex';
import { api } from '@/api';

var base = {
  state: {
    openId: '',
    openToken: '',
    userInfo: {}
  },
  getters: {},
  mutations: {
    setOpenInfo(state, data) {
      state.openId = data.openId;
      state.openToken = data.openToken;
    },
    setUserInfo(state, payload) {
      Object.assign(state.userInfo, payload);
    }
  },
  actions: {
    async login({ commit }) {
      try {
        let res = await api.loginApi({
          openId: this.state.openId,
          openToken: this.state.openToken
        });
        if (!res.ok) {
          return app.config.globalProperties.$toast('网络繁忙，请稍后重试');
        }
        commit('setUserInfo', res.result);
        return Promise.resolve(res.result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async getOpenInfo({ commit }) {
      commit('setOpenInfo', openInfo);
      return Promise.resolve(openInfo);
    }
  }
};

export const store = new Vuex.Store({
  ...base,
  modules: {}
});
