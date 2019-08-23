import Vue from 'vue'
import Router from 'vue-router'
import Mock from '@/components/Mock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mock',
      component: Mock
    }
  ]
})
