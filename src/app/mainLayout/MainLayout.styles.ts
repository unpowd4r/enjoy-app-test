import { Layout as AntLayout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import styled from 'styled-components';

export const Layout = styled(AntLayout)`
  min-height: 100vh;
  display: flex;
  padding-right: clamp(60px, 15vw, 250px);
`;

export const PageContainer = styled(Content)`
  padding: 20px 30px;
  flex: 1;
`;
