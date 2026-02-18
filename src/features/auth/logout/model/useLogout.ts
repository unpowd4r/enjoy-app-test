import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosError } from 'axios';

import { useInvalidateAuth } from 'shared/lib/auth';

import { logout } from '../api/logoutApi';

export const useLogout = () => {
  const invalidateAuth = useInvalidateAuth()

  return useMutation<void, AxiosError>({
    mutationFn: logout,
    onSuccess: () => {
      invalidateAuth()
    },
    onError: (error) => {
      message.error('Ошибка при выходе')
      console.error(error)
    }
  });
};
