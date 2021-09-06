import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Contents from '@/pages/Contents'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Home
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // Contents
    {
      path: '/contents/',
      name: 'Contents',
      component: Contents
    },
    // login
    {
      path: '/login/',
      name: 'Login',
      component: Login
    },
    // NotFound
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
