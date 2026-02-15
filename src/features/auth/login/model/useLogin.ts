import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosError } from 'axios';

import { ROUTES } from 'shared/consts';

import { loginRequest } from '../api/loginApi';

import { TLoginCredentials } from './types';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation<boolean, AxiosError, TLoginCredentials>({
    mutationFn: ({ login, password }: TLoginCredentials) => loginRequest(login, password),
    onSuccess: (success) => {
      if (success) {
        navigate(ROUTES.HOME);
        message.success('Добро пожаловать');
      } else {
        message.error('Неверный логин или пароль');
      }
    }
  });
};
