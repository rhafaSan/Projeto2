import { createRouter, createWebHistory } from "vue-router";

import Login from '@/views/Login';
import Register from '@/views/Register';
import Dashboard from '@/views/Dashboard';
import Rating from '@/views/Rating';
import RegisterFood from '@/views/RegisterFood.vue';
import ShowSelected from '@/views/MenuDetails.vue';
import UpdateMenu from '@/views/UpdateMenu.vue';
import AllRatings from '@/views/AllRatings.vue';


const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard
    },
    {
      name: 'ShowSelected',
      path: '/food/:id',
      component: ShowSelected
    },
    {
      name: 'Rating',
      path: '/rating',
      component: Rating
    },
    {
      name: 'RegisterFood',
      path: '/register-food',
      component: RegisterFood
    },
    {
      name: 'UpdateMenu',
      path: '/food/update-menu/:id',
      component: UpdateMenu
    },
    {
      name: 'AllRatings',
      path: '/all-ratings',
      component: AllRatings
    }
  ]
})

export default router;