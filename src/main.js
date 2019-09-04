import Vue from 'vue';

import App from './organisms/app';

import setupHttpClient from './plugins/http';
import i18n from './plugins/i18n';
import router from './plugins/router';
import store from './plugins/vuex';
import registerTemplates from './plugins/templates';
import './plugins/vee-validate';
import './plugins/vuetify';

registerTemplates(Vue);
setupHttpClient(Vue);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
