/* Description: vuex入口文件，在main.js中引入 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/19 */

import Vue from 'vue'
import vuex from 'vuex'

import component from './component'
import global from './global'

Vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new vuex.Store({
  modules: {
    component,
    global
  },
  strict: debug
});



