import { Flex, message, Space } from 'antd';

import { UserCard, UserEmptyState, UserListSkeleton, useUsers } from 'entities/users';
import { CreateUserButton, DeleteUserButton, EditUserModal } from 'features/user';
import { formatDate } from 'shared/lib/date';

import { useUsersList } from '../model/useUsersList';

export const UsersList = () => {
  const { data: users, isLoading, isError, error } = useUsers();
  const { editingUser, handleEdit, handleCloseModal, handleDeleteSuccess } = useUsersList();

  if (isError) {
    message.error(error?.message || 'Не удалось загрузить пользователей');
    return null;
  }

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

      <EditUserModal user={editingUser} open={!!editingUser} handleClose={handleCloseModal} deleteButton={<DeleteUserButton userId={editingUser?.id}  onSuccess={handleDeleteSuccess}/>}/>
    </>
  );
};
