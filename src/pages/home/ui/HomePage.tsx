import { Typography } from 'antd';

import { ROUTES } from 'shared/consts';
import { NavigateButton } from 'shared/ui/navigateButton';

import { Container, StyledCard } from './HomePage.styles';

const { Paragraph, Title } = Typography;

export const HomePage = () => {
  return (
    <Container>
      <Title>Главная страница</Title>
      <StyledCard title="Управление пользователями">
        <Paragraph>Добавление, просмотр и редактирование пользователей</Paragraph>
        <NavigateButton to={ROUTES.USERS}>Перейти к пользователям</NavigateButton>
      </StyledCard>
    </Container>
  );
};
