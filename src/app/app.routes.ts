import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  // blank
  {
    canActivate: [authGuard],
    path: '',
    loadComponent: () => import('./layouts/blank-layout/blank-layout').then((c) => c.BlankLayout),
    children: [
      { path: '', redirectTo: 'diplomes', pathMatch: 'full' },
      {
        path: 'diplomes',
        loadComponent: () =>
          import('./features/dashbord/components/diplomes/diplomes').then((c) => c.Diplomes),
        title: 'Diplomes',
      },
    ],
  },

  // auth
  {
    path: '',
    loadComponent: () => import('./layouts/auth-layout/auth-layout').then((c) => c.AuthLayout),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login').then((c) => c.Login),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register').then((c) => c.Register),
        title: 'Register',
        children: [
          { path: '', redirectTo: 'userEmail', pathMatch: 'full' },
          {
            path: 'userEmail',
            loadComponent: () =>
              import('./features/auth/register/components/user-email/user-email').then(
                (c) => c.UserEmail,
              ),
            title: 'User Email',
          },
          {
            path: 'verifyEmail',
            loadComponent: () =>
              import('./features/auth/register/components/verify-email/verify-email').then(
                (c) => c.VerifyEmail,
              ),
            title: 'Verfiy Email',
          },
          {
            path: 'userInfo',
            loadComponent: () =>
              import('./features/auth/register/components/user-info/user-info').then(
                (c) => c.UserInfo,
              ),
            title: 'User Info',
          },
          {
            path: 'userPassword',
            loadComponent: () =>
              import('./features/auth/register/components/user-password/user-password').then(
                (c) => c.UserPassword,
              ),
            title: 'User Password',
          },
        ],
      },
      {
        path: 'forgotPassword',
        loadComponent: () =>
          import('./features/auth/forgot-password/forgot-password').then((c) => c.ForgotPassword),
        title: 'Forgot Password',
      },
      {
        path: 'resetPassword',
        loadComponent: () =>
          import('./features/auth/reset-password/reset-password').then((c) => c.ResetPassword),
        title: 'Reset Password',
      },
      {
        path: 'newPassword',
        loadComponent: () =>
          import('./features/auth/new-password/new-password').then((c) => c.NewPassword),
        title: 'Create Password',
      },
    ],
  },

  // not found
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found').then((c) => c.NotFound),
    title: 'Not Found',
  },
];
