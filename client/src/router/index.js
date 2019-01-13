import Vue from 'vue'
import Router from 'vue-router'
import WebAdmin from '@/components/WebAdmin'
import Login from '@/components/Login'
import Cards from '@/components/Cards'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebAdmin',
      component: WebAdmin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})
