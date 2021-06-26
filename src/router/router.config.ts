import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterView } from 'vue-router'

// RouteView
export const asyncRouterMap = [
  {
    path: '/',
    name: 'menu.Home',
    component: BaseLayout,
    meta: { title: 'Home' },
    redirect: '/function',
    children: [
      {
        path: '/function',
        name: 'menu.function',
        meta: { title: 'function', icon: 'el-icon-s-grid' }, // icon @https://2x.antdv.com/components/icon-cn
        component: () => import('@/views/function/index.vue'),
      },
      {
        path: '/exp',
        name: 'menu.exp',
        meta: { title: 'function', icon: 'el-icon-info' }, // icon @https://2x.antdv.com/components/icon-cn
        component: RouterView,
        redirect: '/exp/function',
        children: [
          {
            path: '/exp/function',
            name: 'menu.test',
            meta: { title: 'function', icon: 'el-icon-error' }, // icon @https://2x.antdv.com/components/icon-cn
            component: () => import('@/views/exception/404.vue'),
          },
        ]
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/exception/404.vue')
  }
]