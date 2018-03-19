/* Description: 变更全局状态的方法 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/19 */

export default {
  // 测试变更
  CONSTRUCTION (state,{firstName, lastName}) {
    state.name = 'hello world ' + firstName + lastName;
  }

}
