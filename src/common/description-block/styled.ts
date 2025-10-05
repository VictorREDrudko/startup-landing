import styled from 'styled-components';

import { H2 } from '../../components/text';
import { WidgetStyled } from '../../components/widget';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 90px;
  max-width: 1037px;
  box-sizing: border-box;

  ${H2} {
    text-align: center;
    white-space: pre-line;
  }
  ${WidgetStyled.WidgetContainer} {
    p {
      text-align: center;
    }
  }

  @media (max-width: 390px) {
    ${H2} {
      font-size: 24px;
    }
  }
`;

export const Styled = {
  Container,
};
