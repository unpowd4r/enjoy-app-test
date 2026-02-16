import { isAuthenticated } from '../auth';

describe('formatDate', () => {
   it('should return false when token is not in LS', () => {
    expect(isAuthenticated()).toBeFalsy();
  });

  it('should return true when token exists in LS', () => {
    localStorage.setItem('token', '1234567890');
    expect(isAuthenticated()).toBeTruthy();
  });

  it('should return false after token is removed', () => {
    localStorage.setItem('token', '1234567890');
    expect(isAuthenticated()).toBeTruthy();
    
    localStorage.removeItem('token');
    expect(isAuthenticated()).toBeFalsy();
  });
});
