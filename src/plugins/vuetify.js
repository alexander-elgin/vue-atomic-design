import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors';
import ru from 'vuetify/es5/locale/ru';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

const palette = {
  primary: colors.blue,
};

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: palette,
      light: palette,
    },
    options: {
      customProperties: true,
    },
  },
  icons: {
    iconfont: 'md',
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
