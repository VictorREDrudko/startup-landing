import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1050px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin: 90px 0;
  box-sizing: border-box;

  > div > p {
    text-align: center;
  }

  @media (max-width: 780px) {
    margin: 70px 0;
  }

  @media (max-width: 420px) {
    > div {
      padding: 15px 9px;
    }
  }
`;

export const Styled = {
  Container,
};
