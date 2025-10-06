import React from 'react';

import { Button } from '../../components/button';
import { H2, H4, Text } from '../../components/text';
import { Widget } from '../../components/widget';
import { formatTextWithBoldStart, handleNavigation } from '../../utils';
import { Styled } from './styled';

const HEADER_TEXT = 'Мои услуги';
const SERVICE_BUTTON_TEXT = 'записаться';

const SERVICE_HEADER_TEXT_1 = 'Анализ и диагностика';
const SERVICE_WIDGET_TEXT_1 = '1-2 сессии → карта состояния системы';
const SERVICE_FORMAT_1 = `Формат: 1-2 индивидуальные встречи с собственником
  или ключевыми фигурами.`;
const SERVICE_GOAL_1 = `Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`;
const SERVICE_EXIT_1 = `На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`;

const SERVICE_HEADER_TEXT_2 = 'Диагностика команды';
const SERVICE_WIDGET_TEXT_2 = 'Интервью, наблюдение → отчёт и направления развития';
const SERVICE_FORMAT_2 = `Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`;
const SERVICE_GOAL_2 = `Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`;
const SERVICE_EXIT_2 = `На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`;

const SERVICE_HEADER_TEXT_3 = 'Архитектура изменений';
const SERVICE_WIDGET_TEXT_3 = 'Проект 2-3 месяца → новая культура взаимодействия';
const SERVICE_FORMAT_3 = `Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`;
const SERVICE_GOAL_3 = `Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`;
const SERVICE_EXIT_3 = `На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`;

const SERVICE_HEADER_TEXT_4 = 'Сопровождение';
const SERVICE_WIDGET_TEXT_4 = 'Контракты на 1-6 месяцев → устойчивость и автономия';
const SERVICE_FORMAT_4 = `Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`;
const SERVICE_GOAL_4 = `Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`;
const SERVICE_EXIT_4 = `На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`;

export const MyServicesBlock: React.FC = () => {
  return (
    <Styled.Container id="services">
      <H2>{HEADER_TEXT}</H2>
      <Styled.ServiceWrapper>
        <Styled.Service>
          <Styled.ServiceHeader>
            <H4 fontWeight={400}>{SERVICE_HEADER_TEXT_1}</H4>
            <Widget
              text={SERVICE_WIDGET_TEXT_1}
              fontSize={22}
              lineHeight={1.2}
              padding={'10px 20px'}
              backgroundColor={'--primary-color-light-rose'}
            />
          </Styled.ServiceHeader>
          <Styled.ServiceContent>
            <Styled.Description>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_FORMAT_1)}</Text>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_GOAL_1)}</Text>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_EXIT_1)}</Text>
            </Styled.Description>
            <Button
              text={SERVICE_BUTTON_TEXT}
              isTransparent={true}
              onClick={() => handleNavigation('contacts')}
            />
          </Styled.ServiceContent>
        </Styled.Service>
        <Styled.Service>
          <Styled.ServiceHeader>
            <H4 fontWeight={400}>{SERVICE_HEADER_TEXT_2}</H4>
            <Widget
              text={SERVICE_WIDGET_TEXT_2}
              fontSize={22}
              lineHeight={1.2}
              padding={'10px 20px'}
              backgroundColor={'--primary-color-light-rose'}
            />
          </Styled.ServiceHeader>
          <Styled.ServiceContent>
            <Styled.Description>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_FORMAT_2)}</Text>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_GOAL_2)}</Text>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_EXIT_2)}</Text>
            </Styled.Description>
            <Button
              text={SERVICE_BUTTON_TEXT}
              isTransparent={true}
              onClick={() => handleNavigation('contacts')}
            />
          </Styled.ServiceContent>
        </Styled.Service>
        <Styled.Service>
          <Styled.ServiceHeader>
            <H4 fontWeight={400}>{SERVICE_HEADER_TEXT_3}</H4>
            <Widget
              text={SERVICE_WIDGET_TEXT_3}
              fontSize={22}
              lineHeight={1.2}
              padding={'10px 20px'}
              backgroundColor={'--primary-color-light-rose'}
            />
          </Styled.ServiceHeader>
          <Styled.ServiceContent>
            <Styled.Description>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_FORMAT_3)}</Text>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_GOAL_3)}</Text>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_EXIT_3)}</Text>
            </Styled.Description>
            <Button
              text={SERVICE_BUTTON_TEXT}
              isTransparent={true}
              onClick={() => handleNavigation('contacts')}
            />
          </Styled.ServiceContent>
        </Styled.Service>
        <Styled.Service>
          <Styled.ServiceHeader>
            <H4 fontWeight={400}>{SERVICE_HEADER_TEXT_4}</H4>
            <Widget
              text={SERVICE_WIDGET_TEXT_4}
              fontSize={22}
              lineHeight={1.2}
              padding={'10px 20px'}
              backgroundColor={'--primary-color-light-rose'}
            />
          </Styled.ServiceHeader>
          <Styled.ServiceContent>
            <Styled.Description>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_FORMAT_4)}</Text>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_GOAL_4)}</Text>
              <Text fontSize={18}>{formatTextWithBoldStart(SERVICE_EXIT_4)}</Text>
            </Styled.Description>
            <Button
              text={SERVICE_BUTTON_TEXT}
              isTransparent={true}
              onClick={() => handleNavigation('contacts')}
            />
          </Styled.ServiceContent>
        </Styled.Service>
      </Styled.ServiceWrapper>
    </Styled.Container>
  );
};
