/* Description: vuex入口文件，在main.js中引入 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/19 */

import Vue from 'vue'
import vuex from 'vuex'

// 全局模块
import global from './module-large'
// 登录模块
import login from './mudule/login'

Vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new vuex.Store({
  modules: {
    global,
    login
  },
  strict: debug
});



