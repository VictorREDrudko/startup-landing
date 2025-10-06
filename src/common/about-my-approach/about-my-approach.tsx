import React, { useEffect, useState } from 'react';

import { FirstText, H2 } from '../../components/text';
import { Widget } from '../../components/widget';
import { WidgetAboutMyApproach } from '../../components/widgetAboutMyApproach';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Проверяем при загрузке
    checkScreenSize();

    // Добавляем слушатель изменения размера
    window.addEventListener('resize', checkScreenSize);

    // Убираем слушатель при размонтировании
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <Styled.Container id={'approach'}>
      <H2>{HEADER_TEXT}</H2>
      <Styled.ContentWrapper>
        {isMobile ? (
          <>
            <Styled.FirstRow>
              <Styled.FirstWidgetWrapper>
                <WidgetAboutMyApproach text={FIRST_WIDGET} maxWidth={'100%'} />
              </Styled.FirstWidgetWrapper>
              <Styled.Iryna1 />
            </Styled.FirstRow>

            <Styled.SecondRow>
              <Styled.Image4 />
              <Styled.MixWidgetContainer>
                <FirstText fontSize={24}>{MIX_WIDGET_TEXT}</FirstText>
                <Styled.WidgetWrapper>
                  <Widget
                    text={'а на уважении к опыту, к процессу'}
                    fontSize={24}
                    padding={'10px 15px'}
                    maxWidth={'fit-content'}
                  />
                  <Widget
                    text={'и к реальности бизнеса.'}
                    fontSize={24}
                    padding={'10px 15px'}
                    backgroundColor={'--primary-color-medium-rose'}
                    maxWidth={'fit-content'}
                  />
                </Styled.WidgetWrapper>
              </Styled.MixWidgetContainer>
            </Styled.SecondRow>

            <Styled.ThirdRow>
              <Styled.SecondWidgetWrapper>
                <WidgetAboutMyApproach
                  text={SECOND_WIDGET}
                  fontSize={24}
                  backgroundColor={'--primary-color-super-light-beige'}
                  maxWidth={'100%'}
                />
              </Styled.SecondWidgetWrapper>
              <Styled.LastWidgetWrapper>
                <WidgetAboutMyApproach
                  text={LAST_WIDGET}
                  fontSize={24}
                  backgroundColor={'linear-gradient(0deg, #E6D2E1 0%, #F7F4F1 100%)'}
                  maxWidth={'100%'}
                />
              </Styled.LastWidgetWrapper>
            </Styled.ThirdRow>
          </>
        ) : (
          <>
            <Styled.FirstRow>
              <Styled.FirstWidgetWrapper>
                <WidgetAboutMyApproach text={FIRST_WIDGET} maxWidth={'100%'} />
              </Styled.FirstWidgetWrapper>
              <Styled.Iryna1 />
              <Styled.MixWidgetContainer>
                <FirstText fontSize={24}>{MIX_WIDGET_TEXT}</FirstText>
                <Styled.WidgetWrapper>
                  <Widget
                    text={'а на уважении к опыту, к процессу'}
                    fontSize={24}
                    padding={'10px 15px'}
                    maxWidth={'fit-content'}
                  />
                  <Widget
                    text={'и к реальности бизнеса.'}
                    fontSize={24}
                    padding={'10px 15px'}
                    backgroundColor={'--primary-color-medium-rose'}
                    maxWidth={'fit-content'}
                  />
                </Styled.WidgetWrapper>
              </Styled.MixWidgetContainer>
            </Styled.FirstRow>

            <Styled.SecondRow>
              <Styled.Image4 />
              <Styled.SecondWidgetWrapper>
                <WidgetAboutMyApproach
                  text={SECOND_WIDGET}
                  fontSize={24}
                  backgroundColor={'--primary-color-super-light-beige'}
                  maxWidth={'100%'}
                />
              </Styled.SecondWidgetWrapper>
              <Styled.LastWidgetWrapper>
                <WidgetAboutMyApproach
                  text={LAST_WIDGET}
                  fontSize={24}
                  backgroundColor={'linear-gradient(0deg, #E6D2E1 0%, #F7F4F1 100%)'}
                  maxWidth={'100%'}
                />
              </Styled.LastWidgetWrapper>
            </Styled.SecondRow>
          </>
        )}
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};
