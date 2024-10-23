import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

const isServer = typeof window === 'undefined';

export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('./views/LoginView.vue'), // Lazy loading
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./views/HomeView.vue'), // Lazy loading
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/AboutView.vue'), // Lazy loading
  },
];

const router = createRouter({
  // Use createMemoryHistory for SSR, and createWebHistory for the browser
  history: isServer ? createMemoryHistory() : createWebHistory(),
  routes,
});

export default router;
