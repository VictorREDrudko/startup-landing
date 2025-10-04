import styled from 'styled-components';

import { H2 } from '../../components/text';


export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin: 90px 0;
  padding: 0 25px;
  box-sizing: border-box;

  ${H2} {
    text-align: center;
  }
`;

export const Styled = {
  Container,
};
