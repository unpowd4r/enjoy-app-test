import { ModalButton } from 'shared/ui/modalButton';

import { useDeleteUser } from '../model/useDeleteUser';

interface TProps {
  userId: string;
  onSuccess?: () => void;
}

export const DeleteUserButton = ({ userId, onSuccess }: TProps) => {
  const { mutate: deleteUser, isLoading } = useDeleteUser();

  const handleDelete = () => {
    deleteUser(userId, {
      onSuccess: () => {
        onSuccess?.();
      }
    });
  };

  return (
    <ModalButton type="primary" onClick={handleDelete} loading={isLoading}>
      Удалить
    </ModalButton>
  );
};
