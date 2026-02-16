import { Button } from 'antd';
import styled from 'styled-components';

import { colors } from 'shared/styles';

export const ModalButton = styled(Button)`
  border: 1px solid ${colors.modalButtonBorder};

  &:hover {
    border-color: ${colors.modalButton};
    color: ${colors.modalButton};
  }
`;
