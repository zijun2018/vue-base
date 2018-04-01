/* Description: 注册全局组件入口文件 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/24 */


export default Vue => {
  Vue.component('z-loading', () => import('./ZLoading'));
  Vue.component('z-button', () => import('./ZButton'));
  Vue.component('z-ripple', () => import('./ZRipple'));
  Vue.component('z-animation', () => import('./ZAnimation'));
  Vue.component('z-scroll', () => import('./ZScroll'));
}
