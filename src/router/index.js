import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import {index, programmer, arrayGames} from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/programmer',
      name: 'programmer',
      component: programmer
    },
    {
      path: '/game',
      name: 'game',
      component: arrayGames
    }
  ]
})
