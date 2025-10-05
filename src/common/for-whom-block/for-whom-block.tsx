import React from 'react';

import elegantBackground from '../../assets/image-plant/elegantnyi-fon-evkalipta.png';
import { H2, H6Bold, TextForWhom } from '../../components/text';
import { Styled } from './styled';

const HEADER_TEXT = 'Для кого';
const HEADER_INFO_1 = 'Собственники и управленцы';
const DESCRIPTION_INFO_1 = 'которые уже вышли из фазы выживания и готовы к новому уровню зрелости';
const HEADER_INFO_2 = 'Организации';
const DESCRIPTION_INFO_2 = `стремящиеся к живой культуре,
  ясной коммуникации и долгосрочной устойчивости`;
const HEADER_INFO_3 = ['Партнёрские команды', '(2-4 человека)'];
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
            <H6Bold>{HEADER_INFO_1}</H6Bold>
            <TextForWhom fontSize={22}>{DESCRIPTION_INFO_1}</TextForWhom>
          </Styled.Info>
          <Styled.InfoGradient>
            <H6Bold>{HEADER_INFO_2}</H6Bold>
            <TextForWhom fontSize={22}>{DESCRIPTION_INFO_2}</TextForWhom>
          </Styled.InfoGradient>
          <Styled.InfoLightBeige>
            <div>
              <H6Bold>{HEADER_INFO_3[0]}</H6Bold>
              <H6Bold>{HEADER_INFO_3[1]}</H6Bold>
            </div>
            <TextForWhom fontSize={22}>{DESCRIPTION_INFO_3}</TextForWhom>
          </Styled.InfoLightBeige>
          <Styled.Info>
            <H6Bold>{HEADER_INFO_4}</H6Bold>
            <TextForWhom fontSize={22}>{DESCRIPTION_INFO_4}</TextForWhom>
          </Styled.Info>
        </Styled.InfoWrapper>
      </Styled.Content>
      <Styled.Img src={elegantBackground} alt="Фон с эвкалиптом"/>
    </Styled.Container>
  );
};
