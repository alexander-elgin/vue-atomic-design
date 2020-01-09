import Vue from 'vue';
import Vuetify from 'vuetify';

import ru from 'vuetify/es5/locale/ru';
import colors from 'vuetify/es5/util/colors';

import 'vuetify/dist/vuetify.min.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const palette = {
  primary: colors.amber,
  secondary: colors.red,
  success: colors.green,
};

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { ru },
    current: 'ru',
  },
  theme: palette,
});
