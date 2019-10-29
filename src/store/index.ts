/*
 * @Descripttion: init
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-29 09:10:46
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-29 09:52:16
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isSideBarOpen: false,
};
const mutations = {
  toggleSideBar(state) {
    state.isSideBarOpen = !state.isSideBarOpen;
  },
};
const getters = {};
const actions = {};


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
