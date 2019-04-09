import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pages from '@/components/Pages'
import Vuexx from '@/components/Vuex'
import aPage from '@/components/a'
import bPage from '@/components/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pages',
      component: Pages
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aPage',
      name: 'aPage',
      component: aPage
    },
    {
      path: '/bPage',
      name: 'bPage',
      component: bPage
    }
  ]
})
