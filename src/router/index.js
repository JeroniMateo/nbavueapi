import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Games from '../views/Games.vue'
import Players from '../views/Players.vue'
import Teams from '../views/Teams.vue'
import Stats from '../views/Stats.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  {
    path: '/games',
    name: 'Games',
    component: Games
  },  {
    path: '/players',
    name: 'players',
    component: Players
  },  {
    path: '/teams',
    name: 'teams',
    component: Teams
  },  {
    path: '/stats',
    name: 'stats',
    component: Stats
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
