import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import axios from '@/components/axios'
import fetch from '@/components/Typeahead'
import music from '@/music/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/axios',
      component: axios
    },
    {
      path: '/fetch',
      component: fetch
    },
    {
      path: '/music',
      component: music
    }
  ]
})
