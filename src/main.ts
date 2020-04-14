/*
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-09-18 17:42:04
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-29 13:39:36
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css';
import App from './App.vue';
import router from './router';
import I18N from './views/I18N/lang/index.js';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.directive('loadmore', {
	bind(el, binding) {
    const selectWrap = el.querySelector('.el-table__body-wrapper');
    // this.$nextTick(() => {
    //   const SINGLELINE = el.querySelectorAll('.el-table__row');
    //   console.log(SINGLELINE)
    // })
		selectWrap.addEventListener('scroll', function() {
      let _scrollTop = selectWrap.scrollTop;
      console.log('scroll')
      console.log(binding.value)
      // 表格row的高度
      // const SINGLELINE = this.querySelectorAll('.el-table__row')[0].offsetHeight;
      // console.log(SINGLELINE)
    //   console.log(selectWrap)
    //   console.log(SINGLELINE)
		// // if (this.scrollHeight === this.clientHeight) return;
		// // 	let sign = 100;
		// // 	const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight;
		// // 	if (scrollDistance <= sign) {
		// // 		binding.value();
		// // 	}
		})
	}
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
