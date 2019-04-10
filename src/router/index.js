import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pages from '@/components/Pages'
<<<<<<< HEAD
import Vuexx from '@/components/Vuex'
import aPage from '@/components/a'
import bPage from '@/components/b'
=======
>>>>>>> 7b5bc93c09906e4ae015f119239878fe7b4996e3

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'pages',
      component: Pages
    },
    {
      path: '/HelloWorld',
=======
>>>>>>> 7b5bc93c09906e4ae015f119239878fe7b4996e3
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
<<<<<<< HEAD
      path: '/aPage',
      name: 'aPage',
      component: aPage
    },
    {
      path: '/bPage',
      name: 'bPage',
      component: bPage
=======
      path: '/pages',
      name: 'pages',
      component: Pages
>>>>>>> 7b5bc93c09906e4ae015f119239878fe7b4996e3
    }
  ]
})
