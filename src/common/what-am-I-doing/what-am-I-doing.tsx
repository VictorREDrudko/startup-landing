import React from 'react';

import { H2 } from '../../components/text';
import { WidgetWhatAmIDoing } from '../../components/widgetWhatAmIDoing';
import { Styled } from './styled';

const HEADER_TEXT = 'Что я делаю';
const widgetData = [
  'Синхронизирую ключевых людей и «архитекторов» бизнеса',
  'Строю стратегическую картину взаимодействия и будущего',
  'Помогаю пройти трансформационные этапы без потери субъектности',
  'Показываю, как команда может быть не источником выгорания, а источником роста',
  'Поддерживаю так, чтобы клиент не зависел от меня — а укреплялся',
];

export const WhatAmIDoing: React.FC = () => {
  const contentText = widgetData.map((text) => {
    return (
      <WidgetWhatAmIDoing
        text={text}
        fontSize={18}
        padding={'15px 20px'}
        // maxWidth={'fit-content'}
      />
    );
  });
  return (
    <Styled.Container>
      <Styled.MePhotoWrapper>
        <Styled.Iryna/>
      </Styled.MePhotoWrapper>
      <Styled.ContentWrapper>
        <H2 lineHeight={1.1}>{HEADER_TEXT}</H2>
        <Styled.WidgetWrapper>{contentText}</Styled.WidgetWrapper>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};
