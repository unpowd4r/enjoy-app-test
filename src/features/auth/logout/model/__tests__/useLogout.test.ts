import { renderHook } from '@testing-library/react-hooks';

import { useInvalidateAuth } from 'shared/lib/auth';
import { QueryWrapper } from 'shared/test/queryWrapper';

import { useLogout } from '../useLogout';

jest.mock('shared/lib/auth', () => ({
  ...jest.requireActual('shared/lib/auth'),
  useInvalidateAuth: jest.fn()
}));

describe('useLogout', () => {
  const useInvalidateAuthMocked = useInvalidateAuth as unknown as jest.Mock<() => void>;
  let invalidateAuthMock: jest.Func;

  beforeEach(() => {
    invalidateAuthMock = jest.fn();
    useInvalidateAuthMocked.mockReturnValue(invalidateAuthMock);
  });

  it('should be call logout and redirect in LOGIN PAGE', async () => {
    const { result, waitFor } = renderHook(useLogout, { wrapper: QueryWrapper });
    result.current.mutate();

    await waitFor(() => result.current.isError || result.current.isSuccess);

    expect(invalidateAuthMock).toHaveBeenCalled();
  });
});
