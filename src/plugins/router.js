import Vue from 'vue';
import Router from 'vue-router';

import { getType, isAuthorized } from '@/utils/current-user';

import Home from '../pages/Home.vue';

Vue.use(Router);

const redirectToNotAuthorized = (to, from, next) => next(isAuthorized() ? undefined : '/sign-in');
const redirectToAuthorized = (to, from, next) => next(isAuthorized() ? '/' : undefined);
const isUserType = userTypes => (to, from, next) => next(userTypes.includes(getType()) ? undefined : '/sign-in');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      beforeEnter: redirectToNotAuthorized,
      path: '/',
      name: 'home',
      component: Home,
      meta: { template: 'default' },
    },
    {
      beforeEnter: isUserType(['admin']),
      path: '/activities',
      name: 'activities',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/activities'),
      meta: { template: 'lite' },
    },
    {
      beforeEnter: redirectToAuthorized,
      path: '/sign-in',
      name: 'sign-in',
      component: () => import(/* webpackChunkName: "page-sign-in" */ '@/pages/sign-in'),
      meta: { template: 'center' },
    },
    {
      beforeEnter: redirectToNotAuthorized,
      path: '/sign-out',
      name: 'sign-out',
      component: () => import('@/pages/sign-out'),
      meta: { template: 'default' },
    },
  ],
});
