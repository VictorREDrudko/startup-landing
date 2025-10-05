import React from 'react';

import { Styled } from './styled';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <div>
      <Styled.Input $hasError={!!error} {...props} />
      {error && <Styled.ErrorText>{error}</Styled.ErrorText>}
    </div>
  );
};
