import { RouteObject } from 'react-router-dom';

import { MainLayout } from 'app/mainLayout';
import { RouteGuard } from 'features/auth';
import { HomePage } from 'pages/home';
import { LoginPage } from 'pages/login';
import { NotFoundPage } from 'pages/notFound';
import { UsersPage } from 'pages/users';
import { ROUTES } from 'shared/consts';

export const routes: RouteObject[] = [
  {
    path: ROUTES.LOGIN,
    element: (
      <RouteGuard type="public">
        <LoginPage />
      </RouteGuard>
    )
  },
  {
    element: (
      <RouteGuard type="protected">
        <MainLayout />
      </RouteGuard>
    ),
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.USERS, element: <UsersPage /> }
    ]
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />
  }
];