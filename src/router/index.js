import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import User from '../components/User.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Login
},{
  path: '/user',
  component: User
}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
