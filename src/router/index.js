import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/Index'
import Docs from 'pages/Docs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs
    }
  ]
})
