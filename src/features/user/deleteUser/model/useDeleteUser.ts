import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { userKeys } from 'entities/users';
import { api } from 'shared/api/base';
import { API_ENDPOINTS } from 'shared/consts';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, string>({
    mutationFn: (id: string) => api.delete(`${API_ENDPOINTS.USERS}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    }
  });
};
