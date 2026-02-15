import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { type TUserData, userKeys } from 'entities/users';
import { api } from 'shared/api/base';
import { API_ENDPOINTS } from 'shared/consts';

type TCreateUserDate = Omit<TUserData, 'id'>;

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<TUserData, AxiosError, TCreateUserDate>({
    mutationFn: (userData: TCreateUserDate) =>
      api.post<TUserData>(API_ENDPOINTS.USERS, userData).then(({ data }) => data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    }
  });
};
