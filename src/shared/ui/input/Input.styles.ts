import Input from 'antd/es/input';
import styled from 'styled-components';

const inputStyles = `
  input::placeholder {  
    font-weight: 500;
  }

  &::placeholder {      
    font-weight: 500;
  }
`;

export const StyledBaseInput = styled(Input)`
  ${inputStyles}
`;

export const StyledBasePassword = styled(Input.Password)`
  ${inputStyles}
`;
