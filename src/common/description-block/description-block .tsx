import React from 'react';

import { H2 } from '../../components/text';
import { Widget } from '../../components/widget';
import { Styled } from './styled';

const WIDGET_TEXT = 'С уважением к уже существующей системе';
const DESCRIPTION_TEXT = `Всегда начинается с понимания контекста.
  Не «внедрение», а выстраивание вместе с вами.`;


export const DescriptionBlock: React.FC = () => {
  return (
    <Styled.Container>
      <Widget
        text={WIDGET_TEXT}
        fontSize={22}
      />
      <H2>{DESCRIPTION_TEXT}</H2>
    </Styled.Container>
  );
};
