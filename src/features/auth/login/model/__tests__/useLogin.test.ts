import { useNavigate } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';

import { QueryWrapper } from 'shared/test/queryWrapper';

import { loginRequest } from '../../api/loginApi';
import { useLogin } from '../useLogin';

jest.mock('../../api/loginApi', () => ({
  loginRequest: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

describe('useLogin', () => {
  const loginRequestMocked = loginRequest as jest.Mock;
  const useNavigateMocked = useNavigate as unknown as jest.Mock<() => void>;
  let navigateMock: jest.Func;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigateMocked.mockReturnValue(navigateMock);
  });

  it('should successful login', async () => {
    loginRequestMocked.mockReturnValue(true);
    const { result, waitFor } = renderHook(useLogin, { wrapper: QueryWrapper });
    result.current.mutate({ login: 'test', password: 'test' });

    await waitFor(() => result.current.isError || result.current.isSuccess);

    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('should unsuccessful login', async () => {
    loginRequestMocked.mockReturnValue(false);
    const { result, waitFor } = renderHook(useLogin, { wrapper: QueryWrapper });
    result.current.mutate({ login: 'test', password: 'test' });

    await waitFor(() => result.current.isError || result.current.isSuccess);

    expect(navigateMock).not.toHaveBeenCalled();
  });
});
