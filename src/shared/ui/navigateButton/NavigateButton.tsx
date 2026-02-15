import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button as AntButton } from 'antd';

import { ROUTES } from 'shared/consts';

type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

type TProps = {
  children: ReactNode;
  to: RoutePath;
  type?: 'default' | 'dashed' | 'primary' | 'link' | 'text';
} & React.ComponentProps<typeof AntButton>;

export const NavigateButton = ({ children, to, type = 'primary', ...props }: TProps) => {
  const navigate = useNavigate();

  return (
    <AntButton {...props} type={type} onClick={() => navigate(to)}>
      {children}
    </AntButton>
  );
};
