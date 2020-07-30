import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Linkpage from '@/views/Link'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => { 
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition;
    }
    // 异步滚动操作
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          x: 0,
          y: 1
        });
      }, 0);
    });
  },
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
