import styled from 'styled-components';

import { COLORS } from 'shared/styles';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const CardWrapper = styled.div`
  > div {
    border: none;
    box-shadow: none;
    background: transparent;
  }

  &::after {
    content: '';
    display: block;
    height: 1px;
    background: ${COLORS.tdColor};
    margin-top: 0;
  }

  &:last-child::after {
    display: none;
  }
`;
