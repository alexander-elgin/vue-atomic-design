import Vue from 'vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue';

import i18n from './plugins/i18n';
import router from './plugins/router';
import store from './plugins/store';
import './plugins/vee-validate';
import './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
