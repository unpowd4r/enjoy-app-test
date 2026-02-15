import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from 'app/mainLayout';
import { RouteGuard } from 'features/auth';
import { HomePage } from 'pages/home';
import { LoginPage } from 'pages/login';
import { NotFoundPage } from 'pages/notFound';
import { UsersPage } from 'pages/users';
import { ROUTES } from 'shared/consts';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={ROUTES.LOGIN}
        element={
          <RouteGuard type="public">
            <LoginPage />
          </RouteGuard>
        }
      />

      <Route
        element={
          <RouteGuard type="protected">
            <MainLayout />
          </RouteGuard>
        }
      >
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.USERS} element={<UsersPage />} />
      </Route>

      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
