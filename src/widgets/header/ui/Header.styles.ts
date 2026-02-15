import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';

const { Header: AntHeader } = AntLayout;

export const Header = styled(AntHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
