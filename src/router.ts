/*
 * @Descripttion:
 * @version: init
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-09-18 17:42:04
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-30 10:57:52
 */
import Vue from 'vue';
import Router from 'vue-router';
import Layout from './layout/index.vue';
import DashBoard from './views/Dashboard/index.vue';
import Guide from './views/Guide/index.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: DashBoard,
          name: 'DashBoard',
          meta: {
            keepAlive: true,
          },
        },
        {
          path: 'guide',
          component: Guide,
          name: 'Guide',
        },
      ],
    },
    // {
    //   path: '/dashboard',
    //   name: 'DashBoard',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/Dashboard/index.vue'),
    // },
  ],
});
