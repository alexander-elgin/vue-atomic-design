import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors';
import ru from 'vuetify/es5/locale/ru';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green,
        secondary: colors.red,
      },
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
