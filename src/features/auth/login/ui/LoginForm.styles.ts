import { Form, Typography } from 'antd';
import styled from 'styled-components';

export const AuthTitle = styled(Typography.Text)`
  display: block;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ButtonWrapper = styled(Form.Item)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0;
  padding-top: 20px;
`;
