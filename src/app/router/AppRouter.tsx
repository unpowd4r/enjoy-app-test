import { BrowserRouter, useRoutes } from 'react-router-dom';

import { routes } from './config';


const AppRoutes = () => useRoutes(routes);

export const AppRouter = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);