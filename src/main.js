import Vue from 'vue';

import App from './App.vue';

import i18n from './plugins/i18n';
import router from './plugins/router';
import store from './plugins/store';
import './plugins/vee-validate';
import './plugins/vuetify';

const templates = require.context('./templates', false, /\.vue$/);

templates.keys().forEach((fileName) => {
  const templateName = fileName.replace('./', '').replace('.vue', '');
  Vue.component(`${templateName}-template`, templates(fileName).default);
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
