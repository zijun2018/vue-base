/* Description: 大型模块（备用） */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/27 */

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
