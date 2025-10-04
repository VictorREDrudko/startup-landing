import React from 'react';

import { H2, Text } from '../../components/text';
import { Widget } from '../../components/widget';
import { Styled } from './styled';


const HEADER_TEXT = 'О моем подходе';
const FIRST_WIDGET = `Я помогаю собственникам бизнеса и командам выстраивать
  культуру взаимодействия, в которой энергия людей направлена на общее движение вперёд.`;
const MIX_WIDGET_TEXT = 'Работа строится не на «чинить» и не на «учить жить»,';
const SECOND_WIDGET = `Это не классический консалтинг и не терапия — это архитектура трансформаций,
  в которых сохраняется уникальность, а изменения происходят изнутри.`;
const LAST_WIDGET = `Подход основан на гештальт-методе, системном мышлении и принципах Адизеса — для
  тех, кто ищет не шаблоны, а живые решения.`;

export const AboutMyApproachBlock: React.FC = () => {
  return (
    <Styled.Container>
      <H2>{HEADER_TEXT}</H2>
      <Styled.ContentWrapper>
        {/* Первый ряд */}
        <Styled.FirstRow>
          <Styled.FirstWidgetWrapper>
            <Widget
              text={FIRST_WIDGET}
              fontSize={21}
              padding={'40px 40px 55px'}
              maxWidth={'100%'}
            />
          </Styled.FirstWidgetWrapper>
          <Styled.Iryna1 />
          <Styled.MixWidgetContainer>
            <Text fontSize={21}>{MIX_WIDGET_TEXT}</Text>
            <Styled.WidgetWrapper>
              <Widget
                text={'а на уважении к опыту, к процессу'}
                fontSize={21}
                padding={'10px 15px'}
                maxWidth={'fit-content'}
              />
              <Widget
                text={'и к реальности бизнеса.'}
                fontSize={21}
                padding={'10px 15px'}
                backgroundColor={'--primary-color-medium-rose'}
                maxWidth={'fit-content'}
              />
            </Styled.WidgetWrapper>
          </Styled.MixWidgetContainer>
        </Styled.FirstRow>
        {/* Второй ряд */}
        <Styled.SecondRow>
          <Styled.Image4 />
          <Styled.SecondWidgetWrapper>
            <Widget
              text={SECOND_WIDGET}
              fontSize={23}
              padding={'40px 40px 60px'}
              backgroundColor={'--primary-color-super-light-beige'}
              maxWidth={'100%'}
            />
          </Styled.SecondWidgetWrapper>
          <Styled.LastWidgetWrapper>
            <Widget
              text={LAST_WIDGET}
              fontSize={22}
              padding={'38px 40px 35px'}
              backgroundColor={'linear-gradient(0deg, #E6D2E1 0%, #F7F4F1 100%)'}
              maxWidth={'100%'}
            />
          </Styled.LastWidgetWrapper>
        </Styled.SecondRow>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};
