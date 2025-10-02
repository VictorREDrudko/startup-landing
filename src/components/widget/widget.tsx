import React from 'react';

import { Text } from '../text';
import { Styled } from './styled';


interface Props {
  text: string;
  backgroundColor?: string;
  fontSize?: number;
  maxWidth?: string;
  padding?: string;
}

export const Widget: React.FC<Props> = ({ 
  text,
  backgroundColor,
  fontSize = 16,
  maxWidth,
  padding,
}) => {
  return (
    <Styled.WidgetContainer
      $backgroundColor={backgroundColor}
      $padding={padding}
      $maxWidth={maxWidth}
    >
      <Text fontSize={fontSize}>
        {text}
      </Text>
    </Styled.WidgetContainer>
  );
};
