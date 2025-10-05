import React from 'react';

import { Styled } from './styled';


interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ error, ...props }) => {
  return (
    <div>
      <Styled.Textarea $hasError={!!error} {...props} />
      {error && <Styled.ErrorText>{error}</Styled.ErrorText>}
    </div>
  );
};
