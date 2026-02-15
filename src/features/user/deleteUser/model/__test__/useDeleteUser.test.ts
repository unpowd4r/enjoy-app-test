import { useQueryClient } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';

import { api } from 'shared/api/base';
import { QueryWrapper } from 'shared/test/queryWrapper';

import { useDeleteUser } from '../useDeleteUser';

jest.mock('shared/api/base', () => ({
  api: { delete: jest.fn() }
}));

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQueryClient: jest.fn()
}));

describe('useDeleteUser', () => {
  const apiMocked = api as unknown as { delete: jest.Mock };
  const useQueryClientMocked = useQueryClient as unknown as jest.Mock<{
    invalidateQueries: jest.Func;
  }>;

  let invalidateMock: jest.Func;
  let deleteMock: jest.Func;

  beforeEach(() => {
    invalidateMock = jest.fn();
    deleteMock = jest.fn(() => Promise.resolve());
    useQueryClientMocked.mockReturnValue({
      invalidateQueries: invalidateMock
    });

    apiMocked.delete.mockImplementation(deleteMock);
  });

  it('should call delete with userId', async () => {
    const { result, waitFor } = renderHook(useDeleteUser, { wrapper: QueryWrapper });

    result.current.mutate('1');

    await waitFor(() => result.current.isError || result.current.isSuccess);

    expect(deleteMock).toHaveBeenCalledWith('/users/1');
    expect(invalidateMock).toHaveBeenCalledWith({ queryKey: ['users', 'list'] });
  });
});
