import React from 'react';

import { Styled } from './styled';

interface Props {
  text: string;
  isTransparent?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ 
  text, 
  isTransparent = false, 
  disabled = false, 
  onClick,
}) => {
  return (
    <Styled.StyledButton
      type={'button'}
      $isTransparent={isTransparent}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {text}
    </Styled.StyledButton>
  );
};
