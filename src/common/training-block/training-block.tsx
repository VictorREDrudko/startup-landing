import React from 'react';

import gradient from '../../assets/for-the-training-block/gradient.png';
import essential_1 from '../../assets/for-the-training-block/office-desk-essentials-1.png';
import essential_2 from '../../assets/for-the-training-block/office-desk-essentials-2.png';
import essential_3 from '../../assets/for-the-training-block/office-desk-essentials-3.png';
import essential_4 from '../../assets/for-the-training-block/office-desk-essentials-4.png';
import { ExternalLink } from '../../components/external-link';
import { H2, H5, Text } from '../../components/text';
import { Widget } from '../../components/widget';
import { formatTextWithBoldStart } from '../../utils';
import { Styled } from './styled';

const HEADER_TEXT = 'Обучение';

const TRAINING_HEADER_TEXT_1 = 'Специализация';
const TRAINING_WIDGET_TEXT_1 = '→ 1,5 года';
const TRAINING_DESCRIPTION_1 = `Онлайн-программа по организационному консультированию.
  Глубокое погружение в гештальт-подход в работе с бизнесом, командами и лидерами.`;
const TRAINING_FORMAT_1 = `Формат: организации как живые системы, построение эффективных отношений,
  управление энергией внутри структур.`;
const TRAINING_URL_1 = 'http://psysevents.tilda.ws/gpo';

const TRAINING_HEADER_TEXT_2 = 'Очный семинар';
const TRAINING_WIDGET_TEXT_2 = '→ 14-21.102025, Стамбул';
const TRAINING_DESCRIPTION_2 = `Практика применения гештальт-подхода в
  организационной среде.`;
const TRAINING_FORMAT_2 = `Формат: проживание, групповая динамика, разбор кейсов,
  обучение через опыт и наблюдение.`;
const TRAINING_URL_2 = 'http://orgconsalting-istanbul2025.tilda.ws/';

const TRAINING_HEADER_TEXT_3 = 'Супервизорская группа';
const TRAINING_WIDGET_TEXT_3 = '→ старт: ноябрь 2025';
const TRAINING_DESCRIPTION_3 = `Программа профессиональной поддержки для практикующих
  консультантов и фасилитаторов.`;
const TRAINING_FORMAT_3 = `Формат: регулярные встречи, разбор случаев,
  развитие профессиональной позиции.`;
const TRAINING_URL_3 = '';

const TRAINING_HEADER_TEXT_4 = 'Новые программы';
const TRAINING_WIDGET_TEXT_4 = '→ старт: осень 2026';
const TRAINING_DESCRIPTION_4 = `Готовятся новые курсы по гештальт-коучингу:
  — в работе с собственниками,
  — в построении командных практик.`;

export const TrainingBlock: React.FC = () => {
  return (
    <Styled.Container>
      <H2>{HEADER_TEXT}</H2>
      <Styled.TrainingWrapper>
        <Styled.Training 
          $gradient={gradient} 
          $background={essential_1}
        >
          <H5 fontWeight={400}>{TRAINING_HEADER_TEXT_1}</H5>
          <Widget
            text={TRAINING_WIDGET_TEXT_1}
            fontSize={18}
            lineHeight={1.2}
            letterSpacing={0.84}
            padding={'6px 20px'}
            backgroundColor={'--primary-color-super-light-rose'}
          />
          <Styled.DescriptionEnd>
            <Text fontSize={18}>{TRAINING_DESCRIPTION_1}</Text>
            <Text fontSize={18}>{formatTextWithBoldStart(TRAINING_FORMAT_1)}</Text>
          </Styled.DescriptionEnd>
          <ExternalLink url={TRAINING_URL_1} />
        </Styled.Training>
        <Styled.Training 
          $gradient={gradient} 
          $background={essential_2}
        >
          <H5 fontWeight={400}>{TRAINING_HEADER_TEXT_2}</H5>
          <Widget
            text={TRAINING_WIDGET_TEXT_2}
            fontSize={18}
            lineHeight={1.2}
            letterSpacing={0.84}
            padding={'6px 20px'}
            backgroundColor={'--primary-color-super-light-rose'}
          />
          <Styled.DescriptionEnd>
            <Text fontSize={18}>{TRAINING_DESCRIPTION_2}</Text>
            <Text fontSize={18}>{formatTextWithBoldStart(TRAINING_FORMAT_2)}</Text>
          </Styled.DescriptionEnd>
          <ExternalLink url={TRAINING_URL_2} />
        </Styled.Training>
        <Styled.Training 
          $gradient={gradient} 
          $background={essential_3}
        >
          <H5 fontWeight={400}>{TRAINING_HEADER_TEXT_3}</H5>
          <Widget
            text={TRAINING_WIDGET_TEXT_3}
            fontSize={18}
            lineHeight={1.2}
            letterSpacing={0.84}
            padding={'6px 20px'}
            backgroundColor={'--primary-color-super-light-rose'}
          />
          <Styled.DescriptionEnd>
            <Text fontSize={18}>{TRAINING_DESCRIPTION_3}</Text>
            <Text fontSize={18}>{formatTextWithBoldStart(TRAINING_FORMAT_3)}</Text>
          </Styled.DescriptionEnd>
          <ExternalLink url={TRAINING_URL_3} />
        </Styled.Training>
        <Styled.Training 
          $gradient={gradient} 
          $background={essential_4}
        >
          <H5 fontWeight={400}>{TRAINING_HEADER_TEXT_4}</H5>
          <Widget
            text={TRAINING_WIDGET_TEXT_4}
            fontSize={18}
            lineHeight={1.2}
            letterSpacing={0.84}
            padding={'6px 20px'}
            backgroundColor={'--primary-color-super-light-rose'}
          />
          <Styled.DescriptionWithLineBreaks>
            <Text fontSize={18}>{TRAINING_DESCRIPTION_4}</Text>
          </Styled.DescriptionWithLineBreaks>
        </Styled.Training>
      </Styled.TrainingWrapper>
    </Styled.Container>
  );
};
