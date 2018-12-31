import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const components = {
  home:()=>import('@/views/home'),
  second:()=>import('@/views/second'),
  index:()=>import('@/views/index'),
  about:()=>import('@/views/about'),
  server:()=>import('@/views/server'),
}


export default new Router({
  mode :'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: components.home,
      redirect:'/1',
      children:[
        {
          path:'1',
          name: 'index',
          component: components.index
        },
        {
          path:'2',
          name: 'about',
          component: components.about
        },
        {
          path:'3',
          name: 'server',
          component: components.server
        },
      ]
    },
    // {
    //   path: '/second',
    //   name: 'second',
    //   component: components.second
    // },
  ]
})
