/*
 * @Descripttion:
 * @version: init
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-09-18 17:42:04
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-10 16:11:45
 */
import Vue from 'vue';
import Router from 'vue-router';
import Layout from './layout/index.vue';
import DashBoard from './views/Dashboard/index.vue';
import Guide from './views/Guide/index.vue';
import Clipboard from './views/Clipboard/index.vue';
import E404 from './views/404/index.vue';
import E401 from './views/401/index.vue';
import I18N from './views/I18N/index.vue';
import ReloadPage from './views/ReloadPage/index.vue';
import middlePage from './views/ReloadPage/middlePage.vue';
import GPY from './views/GPY/index.vue';
import FileReader from './views/FileReader/index.vue';
import WebSocket from './views/Websocket/index.vue';
import Field from './views/Field/index.vue';
import WebCam from './views/WebCam.vue';

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
        {
          path: 'clipboard',
          component: Clipboard,
          name: 'Clipboard',
        },
        {
          path: '404',
          component: E404,
          name: '404',
        },
        {
          path: '401',
          component: E401,
          name: '401',
        },
        {
          path: 'i18n',
          component: I18N,
          name: 'I18N',
        },
        {
          path: 'reload',
          component: ReloadPage,
          name: 'ReloadPage',
        },
        {
          path: 'middlepage',
          component: middlePage,
          name: 'middlePage',
        },
        {
          path: 'gpy',
          component: GPY,
          name: 'GPY',
        },
        {
          path: 'file',
          component: FileReader,
          name: 'FileReader',
        },
        {
          path: 'socket',
          component: WebSocket,
          name: 'WebSocket',
        },
        {
          path: 'field',
          component: Field,
          name: 'Field',
        },
        {
          path: 'webCam',
          component: WebCam,
          name: 'webCam',
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
