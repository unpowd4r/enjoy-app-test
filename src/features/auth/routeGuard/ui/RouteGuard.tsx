import { Navigate } from 'react-router-dom';

import { ROUTES } from 'shared/consts';
import { isAuthenticated } from 'shared/lib/auth';

interface TProps {
  children: JSX.Element;
  type: 'protected' | 'public';
}

export const RouteGuard = ({ children, type }: TProps) => {
  const isAuth = isAuthenticated();

  if (type === 'protected' && !isAuth) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (type === 'public' && isAuth) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
};
