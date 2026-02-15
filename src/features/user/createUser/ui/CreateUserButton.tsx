import { useState } from 'react';
import { Button } from 'antd';

import { CreateUserModal } from './CreateUserModal';

export const CreateUserButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Button type="primary" size="large" onClick={() => setIsModalOpen(true)}>
        Создать пользователя
      </Button>

      <CreateUserModal open={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </>
  );
};
