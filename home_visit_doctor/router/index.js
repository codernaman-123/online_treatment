import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
      path: '/filter',
      name: 'Filter',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Filter.vue')
    },
    {
      path: '/DoctorsList',
      name: 'DoctorsList',
      component: () => import(/* webpackChunkName: "about" */ '../views/DoctorsList.vue')
    },
    {
      path: '/Department',
      name: 'Department',
      component: () => import(/* webpackChunkName: "about" */ '../views/Department.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
