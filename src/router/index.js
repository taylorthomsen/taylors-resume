import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
