/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue';

import './vuetify';
import '@/plugins/vuetify';

addDecorator(() => ({
  template: '<v-app><story/></v-app>',
}));

const req = require.context('../../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
