import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/link',
    name: 'Link',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Link.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog/*',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  // scrollBehavior: (to, from, savedPosition) => {
  //   console.log(to)
  //   console.log(from)
  //   console.log(savedPosition)
  //   if (to.name === 'Blog') {
  //     return {
  //       y: to.meta.y,
  //     }
  //   } else {
  //     return savedPosition
  //     return new Promise(res => { 
  //       setTimeout(() => {
  //         res(savedPosition)
  //       },10)
  //     })
  //     return savedPosition
  //   }
  // },
  base: process.env.BASE_URL,
  routes
})

export default router
