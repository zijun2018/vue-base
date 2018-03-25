/* Description: 项目路由文件，实现按需加载 */
/* Author: daijun<zijun2030@gmail.com> */
/* Time: 2018/3/25 */

// 全局组件

export default [
  // 根目录,加载全局组件
  {
    path: '/',
    component: () => import('@/components/global/main'),
    children: [
      { path: '',
        component: () => import('@/views/Index')
      }
    ]
  },
  // 测试文件
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test')
  },
  {
    path: '*',
    component: () => import('@/views/error')
  }
]
