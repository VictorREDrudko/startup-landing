import styled from 'styled-components';

import { H1 } from '../../components/text';

export const Container = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 50px auto 90px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  ${H1} {
    max-width: 780px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color-text-grey);
  margin: 0;
  line-height: 1.3;
`;

export const Styled = {
  Container,
  Content,
  Section,
  SectionTitle,
};
