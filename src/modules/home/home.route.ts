import { RouteConfig } from 'vue-router';

const homeRoute: RouteConfig[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('./Home.vue')
  }
];

export default homeRoute;
