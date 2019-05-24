/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue';

import './vuetify';
import i18n from '@/plugins/i18n';
import '@/plugins/vee-validate';
import store from '@/plugins/vuex';
import '@/plugins/vuetify';

addDecorator(() => ({
  template: '<v-app><story/></v-app>',
  i18n,
  store,
}));

const req = require.context('../../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
