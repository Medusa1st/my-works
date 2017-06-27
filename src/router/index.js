import Vue from 'vue'
import Router from 'vue-router'
import Works from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'works', component: Works } 
  ]})
