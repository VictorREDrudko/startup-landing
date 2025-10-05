import React from 'react';

import { H3, TextMyIdeaBlock } from '../../components/text';
import { WidgetMyIdeaBlock } from '../../components/widgetMyIdeaBlock';
import { Styled } from './styled';

const HEADER_1 = 'Мой подход';
const HEADER_2 = 'Ключевая идея';
const widgetData = {
  block1: {
    text1: 'Не чиню — раскрываю',
    text2: 'Не навязываю — синхронизирую',
    text3: 'Не выстраиваю сверху — слушаю, замечаю, показываю',
  },
  block2: {
    text1: 'синергия вместо соперничества',
    text2:
      'Именно это даёт команде силу. Когда нет внутренней войны — появляется энергия для движения.',
  },
};

export const MyIdeaBlock: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Block1Wrapper>
        <H3>{HEADER_1}</H3>
        <TextMyIdeaBlock>{widgetData.block1.text1}</TextMyIdeaBlock>
        <WidgetMyIdeaBlock
          text={widgetData.block1.text2}
          backgroundColor="--primary-color-super-light-rose"
        />
        <WidgetMyIdeaBlock
          text={widgetData.block1.text3}
          backgroundColor="--primary-color-light-rose"
        />
      </Styled.Block1Wrapper>
      <Styled.MePhotoWrapper>
        <Styled.Iryna />
      </Styled.MePhotoWrapper>
      <Styled.Block2Wrapper>
        <H3>{HEADER_2}</H3>
        <WidgetMyIdeaBlock
          text={widgetData.block2.text1}
          backgroundColor="--primary-color-light-rose"
        />
        <TextMyIdeaBlock>{widgetData.block2.text2}</TextMyIdeaBlock>
      </Styled.Block2Wrapper>
    </Styled.Container>
  );
};
