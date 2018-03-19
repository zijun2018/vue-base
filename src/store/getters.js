/* Description: 全局过滤（计算）函数 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/19 */

export default {
  // 根据全局状态name,计算返回固定格式
  fullName(state) {
    return state.name + '_fullName';
  }
}
