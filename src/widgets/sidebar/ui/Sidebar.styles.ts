import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: clamp(100px, 15vw, 250px);
  padding: 20px 30px;
  height: 100vh;
`;

export const ButtonWrapper = styled.div`
  padding-right: 20px;
`;
