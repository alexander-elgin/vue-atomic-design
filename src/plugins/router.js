import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { template: 'default' },
    },
    {
      path: '/activities',
      name: 'activities',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/activities'),
      meta: { template: 'lite' },
    },
  ],
});
