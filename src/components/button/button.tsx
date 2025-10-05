import React from 'react';

import { Styled } from './styled';

interface Props {
  text: string;
  isTransparent?: boolean;
  disabled?: boolean;
  type?: 'reset' | 'button' | 'submit' | undefined;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ 
  text,
  isTransparent = false,
  disabled = false,
  type = 'button',
  onClick,
}) => {
  return (
    <Styled.StyledButton
      type={type}
      $isTransparent={isTransparent}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {text}
    </Styled.StyledButton>
  );
};
