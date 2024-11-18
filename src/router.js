import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
} from "vue-router";


const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('./views/LoginView.vue'), // Lazy loading
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

export const createRouter = () =>
  _createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory("/")
      : createWebHistory("/"),
    routes,
  });
