/* Description: 全局mutations */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/27 */

export default {

  // 显示全局组件ZLoading
  showLoading(state, payload) {
    state.isShowLoading = true;
    state.loadMsg = payload && payload.loadMsg;
    state.loadType = payload ? payload.loadType ? Number(payload.loadType) : 0 : 0;
  },

  // 隐藏全局组件ZLoading
  hideLoading(state, payload) {
    state.isShowLoading = false
  }

}
