import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from'@/views/home/index'
import Detail from '@/views/detail/index' 

Vue.use(VueRouter)

const routes = [
 {
  path:'/',
  component:Index

 },
 {
   path:'/detail',
   component:Detail
 }
]

const router = new VueRouter({
  routes
})

export default router
