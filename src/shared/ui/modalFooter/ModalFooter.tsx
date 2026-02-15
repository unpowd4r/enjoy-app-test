import { ReactNode } from 'react';
import styled from 'styled-components';

interface FooterProps {
  justify: 'flex-end' | 'space-between' | 'center' | 'flex-start';
  children: ReactNode;
}

const Footer = styled.div<{ $justify: string }>`
  display: flex;
  justify-content: ${({ $justify }) => $justify};
  gap: 8px;
  margin-top: 16px;
`;

export const ModalFooter = ({ justify, children }: FooterProps) => {
  return <Footer $justify={justify}>{children}</Footer>;
};
