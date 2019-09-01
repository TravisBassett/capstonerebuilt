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
    },
    {
      path: '/feature',
      name: 'feature',
      component: Feature
    }
  ]
})
