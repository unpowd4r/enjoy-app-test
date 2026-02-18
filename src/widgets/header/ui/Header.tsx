import { LogoutButton } from 'features/auth';

import { ButtonWrapper } from './Header.styles';

export const AppHeader = () => {
  return (
    <ButtonWrapper>
      <LogoutButton />
    </ButtonWrapper>
  );
};
