import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 引入路由文件
import routes from './routes'

export default new Router({
  // HTML5 History 模式
  mode: 'history',
  // 滚动行为设置：先模拟锚点，再模拟记录位置，否则滚动到页面顶部
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if(savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})
