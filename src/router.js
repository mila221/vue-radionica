import Vue from 'vue'
import Router from 'vue-router'

import Explore from './views/Explore'
import Home from './views/Home'
import User from './views/User'
import Contact from './views/Contact'
import SinglePost from './views/SinglePost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/explore/:id',
      component: SinglePost
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
