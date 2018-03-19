/* Description: vuex入口文件，在main.js中引入 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/19 */

import Vue from 'vue'
import vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './action'

Vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
});
