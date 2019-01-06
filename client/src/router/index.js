import Vue from 'vue'
import Router from 'vue-router'
import WebAdmin from '@/components/WebAdmin'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebAdmin',
      component: WebAdmin
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
