/* Description: 注册全局组件入口文件 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/24 */

import ZLoading from './ZLoading'
import ZButton from './ZButton'
import ZRipple from './ZRipple'
import ZAnimation from './ZAnimation'

export default Vue => {
  Vue.component('z-loading', ZLoading);
  Vue.component('z-button', ZButton);
  Vue.component('z-ripple', ZRipple);
  Vue.component('z-animation', ZAnimation);
}
