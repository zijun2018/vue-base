/* Description: 项目路由文件，实现按需加载 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/25 */

// 全局组件

export default [
  // 根目录,加载全局组件
  {
    path: '/',
    component: () => import('@/component/global/main'),
    redirect: {name: 'index'},
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/Index')
  },
  // 测试页面
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test')
  },
  // 404错误页面
  {
    path: '*',
    component: () => import('@/views/Error')
  }
]
