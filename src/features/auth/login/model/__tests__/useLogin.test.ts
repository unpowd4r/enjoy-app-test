import { renderHook } from '@testing-library/react-hooks';

import { useInvalidateAuth } from 'shared/lib/auth';
import { QueryWrapper } from 'shared/test/queryWrapper';

import { loginRequest } from '../../api/loginApi';
import { useLogin } from '../useLogin';

jest.mock('../../api/loginApi', () => ({
  loginRequest: jest.fn()
}));

jest.mock('shared/lib/auth', () => ({
  ...jest.requireActual('shared/lib/auth'),
  useInvalidateAuth: jest.fn()
}));

describe('useLogin', () => {
  const loginRequestMocked = loginRequest as jest.Mock;
  const useInvalidateAuthMocked = useInvalidateAuth as unknown as jest.Mock<() => void>;
  let invalidateAuthMock: jest.Func;

  beforeEach(() => {
    invalidateAuthMock = jest.fn();
    useInvalidateAuthMocked.mockReturnValue(invalidateAuthMock);
  });

  it('should successful login', async () => {
    loginRequestMocked.mockReturnValue(true);
    const { result, waitFor } = renderHook(useLogin, { wrapper: QueryWrapper });
    result.current.mutate({ login: 'test', password: 'test' });

    await waitFor(() => result.current.isError || result.current.isSuccess);

    expect(invalidateAuthMock).toHaveBeenCalled();
  });

  it('should unsuccessful login', async () => {
    loginRequestMocked.mockReturnValue(false);
    const { result, waitFor } = renderHook(useLogin, { wrapper: QueryWrapper });
    result.current.mutate({ login: 'test', password: 'test' });

    await waitFor(() => result.current.isError || result.current.isSuccess);

    expect(invalidateAuthMock).not.toHaveBeenCalled();
  });
});
