import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosError } from 'axios';

import { type TUserData, userKeys } from 'entities/users';
import { api } from 'shared/api/base';
import { API_ENDPOINTS } from 'shared/consts';

export const useEditUser = () => {
  const queryClient = useQueryClient();

  return useMutation<TUserData, AxiosError, TUserData>({
    mutationFn: ({ id, ...userData }: TUserData) =>
      api.put<TUserData>(`${API_ENDPOINTS.USERS}/${id}`, userData).then(({ data }) => data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
    onError: (error) => {
      message.error('Ошибка при редактировании пользователя')
      console.error(error)
    }
  });
};
