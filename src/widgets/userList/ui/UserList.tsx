import { Flex, Space } from 'antd';

import { UserCard, UserEmptyState, UserListSkeleton, useUsers } from 'entities/users';
import { CreateUserButton } from 'features/user/createUser';
import { EditUserModal } from 'features/user/editUser';
import { formatDate } from 'shared/lib/date';

import { useUsersList } from '../model/useUsersList';

export const UsersList = () => {
  const { data: users, isLoading } = useUsers();
  const { editingUser, handleEdit, handleCloseModal } = useUsersList();

  if (isLoading) return <UserListSkeleton />;
  if (!users?.length) return <UserEmptyState />;

  return (
    <>
      <Flex vertical gap={6}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            avatar={user.avatar}
            date={formatDate(user.createdAt)}
            onClick={() => handleEdit(user)}
          />
        ))}

        <Space>
          <CreateUserButton />
        </Space>
      </Flex>

      <EditUserModal user={editingUser} open={!!editingUser} handleClose={handleCloseModal} />
    </>
  );
};
