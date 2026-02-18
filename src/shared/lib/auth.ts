import { useQuery, useQueryClient } from '@tanstack/react-query';

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('token');
};

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: isAuthenticated,
    staleTime: Infinity,
  });
};

export const useInvalidateAuth = () => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: ['auth'] });
};