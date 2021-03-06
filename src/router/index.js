import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index/index'

import LifeCycle from '../view/lifeCycle/lifeCycle'
import Param from '../view/param/param'
import Query from '../view/param/query'
import Rest from '../view/param/rest'
import HeightLayout from '../view/layout/heightLayout'
import Secret from '../view/secret/index'

import Error from '../pages/error/index'
import Home from '../pages/home/index'
import Mine from '../pages/mine/index'
import Test from '../pages/test/test'

Vue.use(Router)

const router = new Router({
  mode: 'history', // history 模式时，URL 就像正常的 url
  routes: [
    {
      path: '/', redirect: '/index'
    },
    {
      path: '/home', name: 'home', component: Home, meta: { title: '首页' }
    },
    {
      path: '/mine', name: 'mine', component: Mine, meta: { title: '我的' }
    },
    {
      path: '/test', name: 'Test', component: Test, meta: { title: '测试' }
    },
    {
      path: '/index', name: 'index', component: Index, meta: { title: '首页' }
    },
    {
      path: '/lifeCycle', name: 'lifeCycle', component: LifeCycle, meta: { title: '测试vue生命周期' }
    },
    {
      path: '/param', name: 'param', component: Param, meta: { title: '测试Vue Param传递参数' }
    },
    {
      path: '/query', name: 'query', component: Query, meta: { title: '测试Vue Query传递参数' }
    },
    {
      path: '/rest/:id', name: 'rest', component: Rest, meta: { title: '测试Vue Rest传递参数' }
    },
    {
      path: '/layout/height', name: 'layout/height', component: HeightLayout, meta: { title: '测试高度分块布局' }
    },
    {
      path: '/secret', name: 'secret', component: Secret, meta: { title: '数据加密测试' }
    },
    {
      path: '/error', name: 'error', component: Error, meta: { title: '页面数据异常' }
    }
  ]
})
// 设置页面标题
router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  if (to.matched.length === 0) {
    console.error('页面不存在：' + to.path)
    next('/error')
    return
  }
  if (to.meta.title) { // 判断是否有标题
    document.title = to.meta.title
  }
  next() // 执行进入路由，如果不写就不会进入目标页
})

export default router
