import api from '@/api/';

export default {
  namespaced: true,
  state: {
    key: 'value'
  },
  getters: {
    gettersKey(state, getters, rootState, rootGetters) {
      return state;
    }
  },
  mutations: {
    methods(state, payload) {
      console.log(state);
    }
  },
  actions: {
    async methods({ commit, state, rootState }) {
      let res = await api.Api(); // eslint-disable-line
      commit('mutationName', res);
    }
  }
};
