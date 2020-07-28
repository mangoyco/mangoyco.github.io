import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Linkpage from '@/views/Link'

Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior: () => ({
    // y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/link',
      name: 'Link',
      component: Linkpage
    },
  ]
})
