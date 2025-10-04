import React from 'react';

import { H2 } from '../../components/text';
import { Widget } from '../../components/widget';
import { Styled } from './styled';

const WIDGET_TEXT = 'Бизнес с человеческим лицом';
const QUOTE_TEXT = 'Когда в центре — не контроль, а смыслы. И не борьба, а согласованность.';


export const QuoteBlock: React.FC = () => {
  return (
    <Styled.Container>
      <Widget
        text={WIDGET_TEXT}
        fontSize={22}
      />
      <H2>{QUOTE_TEXT}</H2>
    </Styled.Container>
  );
};
