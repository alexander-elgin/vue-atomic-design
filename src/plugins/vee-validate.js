import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import ruLocale from 'vee-validate/dist/locale/ru';

Validator.localize('ru', ruLocale);
Vue.use(VeeValidate, {
  locale: 'ru',
});
