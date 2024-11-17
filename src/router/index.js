import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  // Ruta a tu vista principal

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,  // Componente que se renderiza en la ruta /
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),  // Carga dinámica para la ruta /about
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
