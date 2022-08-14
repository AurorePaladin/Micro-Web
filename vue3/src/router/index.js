import Index from '../pages/index/index.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
];

export default createRouter({
  history: createWebHashHistory('/vue3'),
  routes,
});
