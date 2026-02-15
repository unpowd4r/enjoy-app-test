import { useState } from 'react';

import { type TUserData } from 'entities/users';

export const useUsersList = () => {
  const [editingUser, setEditingUser] = useState<TUserData | null>(null);

  const handleEdit = (user: TUserData) => {
    setEditingUser(user);
  };

  const handleCloseModal = () => {
    setEditingUser(null);
  };

  return {
    editingUser,
    handleEdit,
    handleCloseModal
  };
};
