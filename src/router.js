import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SearchResults from './views/SearchResults.vue'
import Feature from './views/Feature.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/searchresults',
      name: 'searchresults',
      component: SearchResults
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/feature',
      name: 'feature',
      component: Feature
    }
  ]
})
