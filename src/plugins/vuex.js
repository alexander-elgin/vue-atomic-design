import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const files = require.context('../vuex', true, /\.js$/);
const modules = {};

files.keys().forEach((filePath) => {
  modules[filePath.replace('./', '').replace('/index.js', '').replace('.js', '')] = {
    namespaced: true,
    ...files(filePath).default,
  };
});

const vuex = new Vuex.Store({
  modules,
  devtools: process.env.NODE_ENV !== 'production',
});
export default vuex;
