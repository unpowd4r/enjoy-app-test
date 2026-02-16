export const logout = (): Promise<void> => {
  localStorage.removeItem('token');

  return Promise.resolve();
};
