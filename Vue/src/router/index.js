import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Lending from '../views/Lending.vue';
import TraficLight from '../views/TraficLight.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/modeling',
      name: 'modeling',
      component: () => import('../views/Modeling.vue')
    },
    {
      path: '/ArrCal',
      name: 'ArrCal',
      component: () => import('../views/ArrCal.vue')
    },
    {
      path: '/traffic',
      component: TraficLight
    },
    {
      path: '/lending',
      component: Lending
    },
    {
      path:'/test',
      component: () => import('../views/Test.vue')
    }
  ]
})

export default router
