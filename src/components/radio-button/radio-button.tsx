import React from 'react';

import { Styled } from './styled';


interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  return (
    <Styled.RadioContainer>
      <Styled.HiddenRadio
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Styled.Radio $checked={checked} />
      <Styled.RadioLabel>{label}</Styled.RadioLabel>
    </Styled.RadioContainer>
  );
};
