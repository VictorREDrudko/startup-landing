import React from 'react';

import { TextMyIdeaBlock } from '../text';
import { Styled } from './styled';

interface Props {
  text: string;
  backgroundColor?: string;
  fontSize?: number;
  maxWidth?: string;
  padding?: string;
}

export const WidgetMyIdeaBlock: React.FC<Props> = ({
  text,
  backgroundColor,
  maxWidth,
  padding,
}) => {
  return (
    <Styled.WidgetContainer
      $backgroundColor={backgroundColor}
      $padding={padding}
      $maxWidth={maxWidth}
    >
      <TextMyIdeaBlock>{text}</TextMyIdeaBlock>
    </Styled.WidgetContainer>
  );
};
