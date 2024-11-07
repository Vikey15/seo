import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router';

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
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import('./views/ForgotPasswordView.vue'), // Lazy loading
  },
  {
    path: '/password-reset',
    name: 'passwordReset',
    component: () => import('./views/PasswordResetView.vue'), // Lazy loading
  },
  {
    path: '/password-reset-success',
    name: 'passwordResetSuccess',
    component: () => import('./views/PasswordResetSuccess.vue'), // Lazy loading
  },
  {
    path: '/otp-verification',
    name: 'otpVerification',
    component: () => import('./views/OtpVerificationView.vue'), // Lazy loading
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('./views/ProductView.vue'), // Lazy loading
  },
];

const router = createRouter({
  // Use createMemoryHistory for SSR, and createWebHistory for the browser
  history: isServer ? createMemoryHistory() : createWebHashHistory(),
  routes,
});

export default router;
