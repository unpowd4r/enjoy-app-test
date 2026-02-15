import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

import { LogoutButton } from 'features/auth';
import { ROUTES } from 'shared/consts';

import { ButtonWrapper, Header } from './Header.styles';

const MENU_ITEMS = [
  { key: ROUTES.HOME, label: 'Главная' },
  { key: ROUTES.USERS, label: 'Пользователи' }
];

export const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={MENU_ITEMS}
        onClick={({ key }) => navigate(key)}
      />
      <ButtonWrapper>
        <LogoutButton />
      </ButtonWrapper>
    </Header>
  );
};
