import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/home';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user-center',
      name: 'user-center',
      component: () => import('./views/user-center/index')
    }
  ]
});

export default router;
