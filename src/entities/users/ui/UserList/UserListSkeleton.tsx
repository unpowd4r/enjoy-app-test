import { Flex } from 'antd';

import { UserCardSkeleton } from './UserCardSkeleton';

export const UserListSkeleton = () => (
  <Flex vertical gap={6}>
    {[...Array(4)].map((_, i) => (
      <UserCardSkeleton key={i} />
    ))}
  </Flex>
);
