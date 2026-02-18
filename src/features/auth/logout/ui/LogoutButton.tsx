import { Button } from 'antd';

import { useLogout } from '../model/useLogout';

export const LogoutButton = () => {
  const { mutate: logout, isLoading } = useLogout();

  return (
    <Button type="primary" onClick={() => logout()} loading={isLoading}>
      Выход
    </Button>
  );
};
