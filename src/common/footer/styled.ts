import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 130px;
  width: 100%;
  padding: 41px 70px;
  background: var(--primary-color-medium-rose);

  @media (max-width: 1175px) {
    padding: 41px;
  }
  @media (max-width: 815px) {
    padding: 38px;
  }
  @media (max-width: 778px) {
    padding: 20px;
  }
  @media (max-width: 700px) {
    padding: 35px 22px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 107px;

  > a {
    max-width: 180px;
    line-height: 1.2;
    letter-spacing: 0;
  }

  @media (max-width: 1175px) {
    gap: 50px;
  }
  @media (max-width: 815px) {
    gap: 40px;
  }
  @media (max-width: 778px) {
    gap: 30px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
  }
`;

export const Links = styled.div`
  /* display: flex; вернуть как будут ссылки на TG */
  display: none;
  align-items: center;
  gap: 124px;

  @media (max-width: 1175px) {
    gap: 50px;
  }
  @media (max-width: 815px) {
    gap: 40px;
  }
  @media (max-width: 778px) {
    gap: 30px;
  }
  @media (max-width: 700px) {
    gap: 50px;
    margin-bottom: 35px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const LinksWithTextWrapper = styled.div`
  margin-right: 20px;

  @media (max-width: 1175px) {
    margin-right: 0;
  }
`;

export const Logo = styled.img`
  width: 223px;
  height: 40px;
  object-fit: contain;

  @media (max-width: 1175px) {
    width: 190px;
    height: 34px;
  }
`;

export const Styled = {
  Container,
  Content,
  Links,
  LinksWrapper,
  LinksWithTextWrapper,
  Logo,
};
