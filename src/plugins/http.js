/* eslint-disable no-param-reassign */
import axios from 'axios';
import { isEmpty } from 'lodash';

import { getToken, isAuthorized } from '@/utils/current-user';

const supplementHeaders = (config) => {
  if (isEmpty(config.headers)) {
    config.headers = {};
  }

  if (isAuthorized()) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }

  config.headers.Accept = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  return config;
};

const HTTP_METHODS_WITHOUT_DATA = ['delete', 'get'];
const HTTP_METHODS_WITH_DATA = ['post', 'put'];

const originalMethods = HTTP_METHODS_WITHOUT_DATA.concat(HTTP_METHODS_WITH_DATA)
  .reduce((methods, method) => {
    methods[method] = axios[method];
    return methods;
  }, {});

HTTP_METHODS_WITHOUT_DATA.forEach((method) => {
  axios[method] = (url, config = {}) => {
    supplementHeaders(config);
    return originalMethods[method](url, config);
  };
});

HTTP_METHODS_WITH_DATA.forEach((method) => {
  axios[method] = (url, data, config = {}) => {
    supplementHeaders(config);
    return originalMethods[method](url, data, config);
  };
});

export default function (Vue) {
  Vue.prototype.$http = axios;
}
