import { useNavigate } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';

import { QueryWrapper } from 'shared/test/queryWrapper';

import { useLogout } from '../useLogout';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

describe('useLogout', () => {
  const useNavigateMocked = useNavigate as unknown as jest.Mock<() => void>;
  let navigateMock: jest.Func;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigateMocked.mockReturnValue(navigateMock);
  });

  it('should be call logout and redirect in LOGIN PAGE', async () => {
    const { result, waitFor } = renderHook(useLogout, { wrapper: QueryWrapper });
    result.current.mutate();

    await waitFor(() => result.current.isError || result.current.isSuccess);

    expect(navigateMock).toHaveBeenCalledWith('/login');
  });
});
