import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/portal',
    name: 'portal',
    component: () => import('@/views/index/portal')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/index/detail')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/index/list')
  },
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/admin/login')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/exception/403')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500')
  },
  {
    path: '/login2',
    name: 'login2',
    component: () => import('@/views/admin/login2')
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/overview',
    component: () => import('@/layout/adminLayout'),
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: () => import('@/views/admin/overview')
      },
      {
        path: 'book',
        name: 'book',
        component: () => import('@/views/admin/book')
      },
      {
        path: 'classification',
        name: 'classification',
        component: () => import('@/views/admin/classification')
      },
      {
        path: 'tag',
        name: 'tag',
        component: () => import('@/views/admin/tag')
      },
      {
        path: 'loginLog',
        name: 'loginLog',
        component: () => import('@/views/admin/login-log')
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('@/views/admin/comment')
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/admin/role')
      },
      {
        path: 'borrow',
        name: 'borrow',
        component: () => import('@/views/admin/borrow')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/admin/user')
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
