/* eslint-disable no-param-reassign */

const state = {
  main: 0,
};

const mutations = {
  DECREASE_COUNTER(currentState) {
    currentState.main -= 1;
  },
  INCREASE_COUNTER(currentState) {
    currentState.main += 1;
  },
};

const actions = {
  increase({ commit }) {
    commit('INCREASE_COUNTER');
  },
};

export default {
  state,
  mutations,
  actions,
};
