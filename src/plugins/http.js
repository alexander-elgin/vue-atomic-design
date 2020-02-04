/* eslint-disable no-param-reassign */
import axios from 'axios';
import { isEmpty } from 'lodash';
import LRU from 'receptacle';

import { getToken, isAuthorized } from '@/utils/current-user';

// eslint-disable-next-line no-confusing-arrow
const serializeParam = param => typeof param === 'object' ? JSON.stringify(param) : param;
const serializeParams = params => Object.keys(params)
  .map(param => `${param}=${encodeURIComponent(serializeParam(params[param]))}`).join('&');

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

const cache = new LRU({ max: 128 });

const HTTP_METHODS_WITHOUT_DATA = ['delete', 'get'];
const HTTP_METHODS_WITH_DATA = ['post', 'put'];

const originalMethods = HTTP_METHODS_WITHOUT_DATA.concat(HTTP_METHODS_WITH_DATA)
  .reduce((methods, method) => {
    methods[method] = axios[method];
    return methods;
  }, {});

HTTP_METHODS_WITHOUT_DATA.forEach((method) => {
  axios[method] = (baseUrl, data = {}, config = {}) => {
    supplementHeaders(config);
    const url = `${baseUrl}${isEmpty(data) ? '' : `?${serializeParams(data)}`}`;

    if ((config.cache !== undefined) && cache.has(url)) {
      return cache.get(url);
    }

    const result = originalMethods[method](url, config);

    if (config.cache !== undefined) {
      cache.set(url, result, { ttl: config.cache });
    }

    return result;
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
