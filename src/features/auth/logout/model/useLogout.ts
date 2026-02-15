import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { ROUTES } from 'shared/consts';

import { logout } from '../api/logoutApi';

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate(ROUTES.LOGIN);
    }
  });
};
