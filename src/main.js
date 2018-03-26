// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vuex
import store from './store'
// 支持less、stylus,文件入口文件
import './style/main'
// 手机适配
import './assets/js/mobileAdaptation'
// 支持移动端调试VConsole工具
import VConsole from 'vconsole'
new VConsole();
// 全局引入font-awesome，version=4.7.0
import 'font-awesome/css/font-awesome.min.css'
// 全局引入阿里iconFont字体库
import './assets/js/iconfont'
// 注册的全局组件
import globalComponents from './components/global/main'
Vue.use(globalComponents);
// 支持点击水波纹效果
import Ripple from 'vue-ripple-directive'
Ripple.color = 'rgba(255, 255, 255, 0.5)';
Ripple.zIndex = 1000;
Vue.directive('ripple', Ripple);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: { App },
  template: '<App/>'
});
