import { Button } from 'antd';
import styled from 'styled-components';

import { colors } from 'shared/styles';

export const ModalButton = styled(Button)`
  &:hover {
    border-color: ${colors.modalButton};
    color: ${colors.modalButton};
  }
`;
