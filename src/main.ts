/*
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-09-18 17:42:04
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-28 18:32:36
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
