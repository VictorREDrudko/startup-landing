import React from 'react';

import mainImage from '../../assets/photo/main.png';
import { Button } from '../../components/button';
import { H1, Text } from '../../components/text';
import { Styled } from './styled';

const TEXTS = {
  title: 'СТРАТЕГИЧЕСКИЕ ИЗМЕНЕНИЯ',
  subtitle: 'с уважением к людям',
  description: `Архитектор изменений для собственников и команд,
    которые выбирают путь осознанного роста.`,
  button1: 'смотреть подробнее',
  button2: 'запросить встречу',
} as const;

export const MainBlock: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <H1>{TEXTS.title}</H1>
        <Text fontSize={36}>{TEXTS.subtitle}</Text>
        <Text>{TEXTS.description}</Text>
        <Styled.Buttons>
          <Button text={TEXTS.button1} isTransparent={true} />
          <Button text={TEXTS.button2} />
        </Styled.Buttons>
      </Styled.Content>
      {/* <Styled.GradientOverlay /> */}
      <Styled.ImageContainer>
        <Styled.Image src={mainImage} alt={'Стратегические изменения'} />
      </Styled.ImageContainer>
    </Styled.Container>
  );
};
