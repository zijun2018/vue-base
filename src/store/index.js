/* Description: vuex入口文件，在main.js中引入 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/19 */

import Vue from 'vue'
import vuex from 'vuex'

// 某大型模块
import global from './module-large'
// 登录模块
import login from './mudule/login'
// 根模块
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    global,
    login
  },
  strict: debug
});



