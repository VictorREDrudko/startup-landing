import styled from 'styled-components';

import { H1 } from '../../components/text';

export const Container = styled.div`
  width: 100%;
  padding: 110px 0 100px 85px;
  position: relative;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  background: var(--primary-color-super-light-beige);
  overflow: hidden;

  @media (max-width: 1290px) {
    padding: 110px 0 80px 35px;
  }

  @media (max-width: 720px) {
    height: 630px;
    padding: 0 20px 40px 20px;
    align-items: end;
  }

  @media (max-width: 400px) {
    width: calc(100% + 40px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 544px;
  width: 100%;
  position: relative;
  z-index: 2;

  ${H1} {
    margin-bottom: 25px;

    @media (max-width: 720px) {
      margin-bottom: 20px;
    }

    @media (max-width: 520px) {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 1125px) {
    max-width: 432px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 1125px) {
    gap: 50px;
  }

  @media (max-width: 720px) {
    gap: 25px;
  }
`;

export const Buttons = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 520px) {
    > button {
      font-size: 16px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: -50px;
  height: 100%;
  width: auto;

  @media (max-width: 1250px) {
    right: -100px;
  }

  @media (max-width: 860px) {
    right: -140px;
    top: -65px;
  }

  @media (max-width: 720px) {
    right: 0;
    top: -70px;

    mask-image: linear-gradient(
      to top,
      rgba(247, 244, 241, 0) 0%,
      rgba(247, 244, 241, 0.43) 45%,
      rgba(247, 244, 241, 1) 56%
    );
  }

  @media (max-width: 520px) {
    right: -50px;
    top: -50px;
  }
`;

export const Image = styled.img`
  height: 150%;
  width: auto;
  object-fit: cover;
  object-position: center;
  display: block;

  @media (max-width: 720px) {
    height: 110%;
  }
`;

export const Styled = {
  Container,
  Content,
  TextWrapper,
  Buttons,
  ImageContainer,
  Image,
};
