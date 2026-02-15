export const isAuthenticated = (): boolean => {
  return localStorage.getItem('isAuth') === 'true';
};
