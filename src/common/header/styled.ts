import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 70px;
  margin-bottom: 25px;
  width: 100%;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 632px;
  width: 100%;
  height: 40px;

  @media (max-width: 630px) {
    justify-content: center;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 630px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 223px;
  height: auto;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 165px;
  }
`;

export const Styled = {
  Container,
  Content,
  LinksWrapper,
  Logo,
};
