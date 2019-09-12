export default {
  state: {
    pageTitle: '',
  },
  actions: {
    setPageTitle({ commit }, title) {
      commit('setPageTitle', title);
    },
  },
  mutations: {
    setPageTitle(state, title) {
      // eslint-disable-next-line no-param-reassign
      state.pageTitle = title;
    },
  },
};
