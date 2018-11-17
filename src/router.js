import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
    },
    {
      path: '/register-success',
      name: 'register-success',
      component: () => import(/* webpackChunkName: "register-success" */ './views/RegisterSuccess.vue')
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import(/* webpackChunkName: "register-success" */ './views/Ranking.vue')
    },
    {
      path: '/view/:id',
      name: 'view',
      component: () => import(/* webpackChunkName: "register-success" */ './views/ViewUser.vue')
    }
  ]
})

export default router
