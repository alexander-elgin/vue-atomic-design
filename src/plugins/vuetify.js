import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';
import ru from 'vuetify/es5/locale/ru';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify, {
  theme: {
    primary: colors.green,
    secondary: colors.red,
  },
  options: {
    customProperties: true,
  },
  iconfont: 'md',
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
