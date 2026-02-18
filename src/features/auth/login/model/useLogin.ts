import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosError } from 'axios';

import { useInvalidateAuth } from 'shared/lib/auth';

import { loginRequest } from '../api/loginApi';

import { TLoginCredentials } from './types';

export const useLogin = () => {
  const invalidateAuth = useInvalidateAuth();

  return useMutation<boolean, AxiosError, TLoginCredentials>({
    mutationFn: ({ login, password }: TLoginCredentials) => loginRequest(login, password),
    onSuccess: (success) => {
      if (success) {
        invalidateAuth()
        message.success('Добро пожаловать');
      } else {
        message.error('Неверный логин или пароль');
      }
    },
      onError: (error) => {
        message.error('Ошибка при входе');
        console.error(error);
      }
  });
};
