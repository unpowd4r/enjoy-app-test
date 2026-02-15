import { InputProps, PasswordProps } from 'antd/es/input';

import { StyledBaseInput, StyledBasePassword } from './Input.styles';

type TProps = {
  type?: 'text' | 'password';
} & (InputProps | PasswordProps);

export const Input = ({ type = 'text', ...props }: TProps) => {
  if (type === 'password') {
    return <StyledBasePassword {...(props as PasswordProps)} />;
  }
  return <StyledBaseInput {...(props as InputProps)} />;
};
