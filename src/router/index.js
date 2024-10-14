import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/alumnos',
    name:'alumno',
    component: () => import('../views/AlumnoView.vue')
  },
{
 path:'/cliente',
 name:'cliente',
 component: () => import('../views/Cliente.vue')
},
{
  path: '/pitagoras',
  name: 'pitagoras',
  component: () => import('../views/Pitagoras.vue')
},

{
  path: '/persona',
  name: 'Persona',
  component: () => import('../views/Persona.vue')
}


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
