import React from 'react';

import { FirstText } from '../text';
import { Styled } from './styled';

interface Props {
  text: string;
  backgroundColor?: string;
  fontSize?: number;
  maxWidth?: string;
}

export const WidgetAboutMyApproach: React.FC<Props> = ({
  text,
  backgroundColor,
  maxWidth,
}) => {
  return (
    <Styled.WidgetContainer
      $backgroundColor={backgroundColor}
      $maxWidth={maxWidth}
    >
      <FirstText>
        {text}
      </FirstText>
    </Styled.WidgetContainer>
  );
};
