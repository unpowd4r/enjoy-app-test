export const isAuthenticated = (): boolean => {
  const isAuth = !!localStorage.getItem('token');
  
  return isAuth
};
