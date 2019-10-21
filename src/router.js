import Vue from 'vue'
import Router from 'vue-router'

/* Ovde se importuju sve stranice */

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
      path: '/', // kosa crta je putanja za home stranicu
      name: 'home',
      component: Home //za svaku rutu navodite koju komponentu ce onda da koristi (ta komponenta je stranica koju ste gore importovali)
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/explore/:id',
      /*
      Za dinamicke stranice parametar prosledjujete ovako, ovde mu dajete naziv
      Posle mu pristupate sa this.$route.params.id (tj this.$route.params.imeparametra)
      */
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
