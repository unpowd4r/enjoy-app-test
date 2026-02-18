import { Button } from 'antd';
import styled from 'styled-components';

import { COLORS } from 'shared/styles';

export const ModalButton = styled(Button)`
  &:hover {
    border-color: ${COLORS.modalButton};
    color: ${COLORS.modalButton};
  }
`;
