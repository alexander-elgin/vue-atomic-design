import {
  get,
  getJSON,
  remove,
  set,
} from 'js-cookie';
import { isEmpty } from 'lodash';

const BASIC_STORAGE_NAME = 'CURRENT_USER';
const DATA_STORAGE_NAME = `${BASIC_STORAGE_NAME}/DATA`;
const TOKEN_STORAGE_NAME = `${BASIC_STORAGE_NAME}/TOKEN`;

export function getData() {
  return getJSON(DATA_STORAGE_NAME);
}

export function getToken() {
  return get(TOKEN_STORAGE_NAME);
}

export function getType() {
  const user = getData();
  return isEmpty(user) ? undefined : user.type;
}

export function isAuthorized() {
  return getToken() !== undefined;
}

export function setData(userData) {
  set(DATA_STORAGE_NAME, userData);
}

export function setToken(token) {
  set(TOKEN_STORAGE_NAME, token);
}

export function signOut() {
  remove(TOKEN_STORAGE_NAME);
  remove(TOKEN_STORAGE_NAME);
}
