/* Description: 注册全局组件入口文件 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/24 */

import ZLoading from './ZLoading'

export default Vue => {
  Vue.component('z-loading', ZLoading);
}
