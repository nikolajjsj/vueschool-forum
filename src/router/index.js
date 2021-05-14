import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    props: true,
    component: PageThreadShow
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
