import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from 'shared/api/base';
import { API_ENDPOINTS } from 'shared/consts';

import { type TUserData } from './types';

export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const
};

export const useUsers = () =>
  useQuery<TUserData[], AxiosError>({
    queryKey: userKeys.lists(),
    queryFn: () => api.get<TUserData[]>(API_ENDPOINTS.USERS).then(({ data }) => data)
  });
