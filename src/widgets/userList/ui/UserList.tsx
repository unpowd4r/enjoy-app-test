import { message, Space } from 'antd';

import { UserCard, UserListEmpty, UserListSkeleton, useUsers } from 'entities/users';
import { CreateUserButton, DeleteUserButton, EditUserModal } from 'features/user';
import { formatDate } from 'shared/lib/date';

import { useUsersList } from '../model/useUsersList';

import { CardWrapper, ListContainer } from './UserList.styles';

export const UsersList = () => {
  const { data: users, isLoading, isError, error } = useUsers();
  const { editingUser, handleEdit, handleCloseModal, handleDeleteSuccess } = useUsersList();

  if (isError) {
    message.error(error?.message || 'Не удалось загрузить пользователей');
    return null;
  }

  if (isLoading) return <UserListSkeleton />;
  if (!users?.length) return <UserListEmpty />;

  return (
    <>
      <ListContainer>
        {users.map((user) => (
          <CardWrapper key={user.id}>
            <UserCard
              name={user.name}
              avatar={user.avatar}
              date={formatDate(user.createdAt)}
              onClick={() => handleEdit(user)}
            />
          </CardWrapper>
        ))}
      </ListContainer>

      <Space style={{ marginTop: 16 }}>
        <CreateUserButton />
      </Space>

      <EditUserModal
        user={editingUser}
        open={!!editingUser}
        handleClose={handleCloseModal}
        deleteButton={<DeleteUserButton userId={editingUser?.id} onSuccess={handleDeleteSuccess} />}
      />
    </>
  );
};
