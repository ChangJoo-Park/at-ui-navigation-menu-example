import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: Main
    },
    {
      path: 'about',
      name: 'about-page',
      component: About
    },
    {
      path: 'contact',
      name: 'contact-page',
      component: Contact
    }
  ]
})
