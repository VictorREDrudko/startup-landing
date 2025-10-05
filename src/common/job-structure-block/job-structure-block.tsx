import React from 'react';

import plant from '../../assets/image-plant/plant-2.png';
import { H2, Text } from '../../components/text';
import { Styled } from './styled';

const HEADER_TEXT = 'Как устроена работа';

export const JobStructureBlock: React.FC = () => {
  return (
    <Styled.Container>
      <H2>{HEADER_TEXT}</H2>
      <Styled.TabsWrapper>
        <Styled.Tabs>
          <Styled.Tab $background="var(--primary-color-super-light-beige)">
            <Text fontSize={26} lineHeight={1.1} fontWeight={400}>
              Встреча
            </Text>
            <Styled.ArrowIcon />
          </Styled.Tab>
          <Styled.Tab $background="var(--primary-color-beige)">
            <Text fontSize={26} lineHeight={1.1} fontWeight={400}>
              Диагностика
            </Text>
            <Styled.ArrowIcon />
          </Styled.Tab>
          <Styled.Tab $background="var(--primary-color-super-light-rose)">
            <Text fontSize={26} lineHeight={1.1} fontWeight={400}>
              Карта
            </Text>
            <Styled.ArrowIcon />
          </Styled.Tab>
          <Styled.Tab $background="var(--primary-color-light-rose)">
            <Text fontSize={26} lineHeight={1.1} fontWeight={400}>
              Предложение
            </Text>
            <Styled.ArrowIcon />
          </Styled.Tab>
          <Styled.Tab $background={plant}>
            <Text fontSize={26} lineHeight={1.1} fontWeight={400}>
              Запуск
            </Text>
          </Styled.Tab>
        </Styled.Tabs>
      </Styled.TabsWrapper>
    </Styled.Container>
  );
};
