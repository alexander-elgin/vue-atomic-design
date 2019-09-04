/* eslint-disable no-param-reassign */
import axios from 'axios';

export default function (Vue) {
  Vue.prototype.$http = axios;
}
