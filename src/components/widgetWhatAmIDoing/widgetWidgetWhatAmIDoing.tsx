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

export const WidgetWhatAmIDoing: React.FC<Props> = ({
  text,
  backgroundColor,
  fontSize = 18,
  maxWidth,
  padding,
}) => {
  return (
    <Styled.WidgetContainer
      $backgroundColor={backgroundColor}
      $padding={padding}
      $maxWidth={maxWidth}
    >
      <Text fontSize={fontSize} lineHeight={1.1}>
        {text}
      </Text>
    </Styled.WidgetContainer>
  );
};
