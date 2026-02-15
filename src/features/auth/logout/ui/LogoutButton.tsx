import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { useLogout } from '../model/useLogout';

export const LogoutButton = () => {
  const { mutate: logout, isLoading } = useLogout();

  return (
    <Button
      type="primary"
      danger
      icon={<LogoutOutlined />}
      onClick={() => logout()}
      loading={isLoading}
    >
      Выйти
    </Button>
  );
};
