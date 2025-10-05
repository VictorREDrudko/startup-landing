import styled from 'styled-components';

import { H2 } from '../../components/text';

export const Container = styled.div`
  max-width: 920px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin: 90px 0;
  box-sizing: border-box;

  @media (max-width: 780px) {
    margin: 70px 0;
  }

  @media (max-width: 420px) {
    > div {
      padding: 15px 9px;
    }
  }

  ${H2} {
    text-align: center;
  }
`;

export const Styled = {
  Container,
};
