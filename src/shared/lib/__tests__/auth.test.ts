import { isAuthenticated } from '../auth';

describe('formatDate', () => {
  it('should return correct value when LS is empty', () => {
    expect(isAuthenticated()).toBeFalsy();
  });

  it('should return correct value when LS have isAuth: true', () => {
    localStorage.setItem('isAuth', 'true');
    expect(isAuthenticated()).toBeTruthy();
  });

  it('should return correct value when LS have isAuth: false', () => {
    localStorage.setItem('isAuth', 'false');
    expect(isAuthenticated()).toBeFalsy();
  });
});
