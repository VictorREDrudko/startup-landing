import React from 'react';

import { H2, Text } from '../../components/text';
import { Styled } from './styled';

const TITLE = 'Обо мне';
const SUBTITLE = '20+';

const text = {
  block1: 'Психолог, фасилитатор, преподаватель гештальт-подхода',
  block2: 'лет опыта — в индивидуальной работе, в команде, в бизнесе',
  block3: `Мой метод — это комбинация гештальт-подхода, фасилитации,
    системного мышления и стратегического видения.`,
  block4: `Метод Азидеса — один из ориентиров в моей работе.
    Он помогает глубже понимать, как формируются смыслы, и как выстраиваются зрелые,
    живые системы — от команды до всей организации.`,
};

export const AboutBlock: React.FC = () => {
  return (
    <Styled.Container id='about'>
      <H2 lineHeight={1.1}>{TITLE}</H2>
      <Styled.Content>
        <Styled.Block1Wrapper>
          <Text>{text.block1}</Text>
        </Styled.Block1Wrapper>
        <Styled.Block2Wrapper>
          <H2 lineHeight={1.1}>{SUBTITLE}</H2>
          <Text>{text.block2}</Text>
        </Styled.Block2Wrapper>
        <Styled.Block3Wrapper>
          <Text>{text.block3}</Text>
        </Styled.Block3Wrapper>
        <Styled.Block4Wrapper>
          <Text>{text.block4}</Text>
        </Styled.Block4Wrapper>
      </Styled.Content>
    </Styled.Container>
  );
};
