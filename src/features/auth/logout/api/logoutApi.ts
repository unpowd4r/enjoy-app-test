export const logout = (): Promise<void> => {
  localStorage.removeItem('isAuth');

  return Promise.resolve();
};
