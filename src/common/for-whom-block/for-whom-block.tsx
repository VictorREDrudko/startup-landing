import React from 'react';

import { H2, Text } from '../../components/text';
import { Styled } from './styled';


const HEADER_TEXT = 'Для кого';
const HEADER_INFO_1 = 'Собственники и управленцы';
const DESCRIPTION_INFO_1 = 'которые уже вышли из фазы выживания и готовы к новому уровню зрелости';
const HEADER_INFO_2 = 'Организации';
const DESCRIPTION_INFO_2 = `стремящиеся к живой культуре,
  ясной коммуникации и долгосрочной устойчивости`;
const HEADER_INFO_3 = 'Партнёрские команды (2-4 человека)';
const DESCRIPTION_INFO_3 = 'особенно в случаях, когда есть сложные связи (семья, дружба, история)';
const HEADER_INFO_4 = 'Специалисты';
const DESCRIPTION_INFO_4 = `которые хотят освоить гештальт-подход в работе c бизнесом и
  изучить метод глубоко, осознанно`;


export const ForWhomBlock: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <H2>{HEADER_TEXT}</H2>
        <Styled.InfoWrapper>
          <Styled.Info>
            <Text fontSize={24}>{HEADER_INFO_1}</Text>
            <Text fontSize={22}>{DESCRIPTION_INFO_1}</Text>
          </Styled.Info>
          <Styled.InfoGradient>
            <Text fontSize={24}>{HEADER_INFO_2}</Text>
            <Text fontSize={22}>{DESCRIPTION_INFO_2}</Text>
          </Styled.InfoGradient>
          <Styled.InfoLightBeige>
            <Text fontSize={24}>{HEADER_INFO_3}</Text>
            <Text fontSize={22}>{DESCRIPTION_INFO_3}</Text>
          </Styled.InfoLightBeige>
          <Styled.Info>
            <Text fontSize={24}>{HEADER_INFO_4}</Text>
            <Text fontSize={22}>{DESCRIPTION_INFO_4}</Text>
          </Styled.Info>
        </Styled.InfoWrapper>
      </Styled.Content>
      <Styled.Img />
    </Styled.Container>
  );
};
