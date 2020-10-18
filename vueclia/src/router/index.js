import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import test from './../views/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/home',
    component:Home
  },{
    path:'/test',
    component:test
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
