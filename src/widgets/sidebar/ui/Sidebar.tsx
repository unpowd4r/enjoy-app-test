import { LogoutButton } from 'features/auth';

import { ButtonWrapper, SidebarContainer } from './Sidebar.styles';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <ButtonWrapper>
        <LogoutButton />
      </ButtonWrapper>
    </SidebarContainer>
  );
};
