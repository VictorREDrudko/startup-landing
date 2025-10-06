import styled from 'styled-components';

import { H5 } from '../../components/text';
import { WidgetStyled } from '../../components/widget';


interface TrainingProps {
  $background: string;
}


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 70px;
  box-sizing: border-box;

  @media (max-width: 1235px) {
    h2 {
      font-size: 34px;
    }
  }
`;

export const TrainingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 620px;
  gap: 12px;
  width: 100%;

  @media (max-width: 1235px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 620px;
    gap: 20px;
  }

  @media (max-width: 545px) {
    display: flex;
    overflow-x: auto;
    gap: 12px;
    padding: 10px 0;
  }
`;

export const Training = styled.div<TrainingProps>`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 25px 22px 34px;
  background-image: ${props => `url(${props.$background})`};
  background-size: cover, cover;
  background-position: center bottom, center center;
  background-repeat: no-repeat;
  flex-shrink: 0;
  overflow: hidden;
  height: 620px;

  ${H5} {
    height: 76px;
    margin-bottom: 12px;
    flex-shrink: 0;
  }
  ${WidgetStyled.WidgetContainer} {
    margin-bottom: auto;
  }

  @media (max-width: 545px) {
    flex-shrink: 1;
    min-width: 316px; /* Фиксированная ширина для скролла */
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 25px;
`;

export const DescriptionEnd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 45px;
  height: 100%;
  justify-content: flex-end;
`;

export const DescriptionCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const DescriptionWithLineBreaks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;

  p {
    white-space: pre-line; /* Сохраняет переносы строк */
  }
`;


export const Styled = {
  Container,
  TrainingWrapper,
  Training,
  Description,
  DescriptionEnd,
  DescriptionCenter,
  DescriptionWithLineBreaks,
};
