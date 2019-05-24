import Vue from 'vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/i18n';
import './plugins/vee-validate';
import './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
