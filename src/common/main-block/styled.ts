import styled from 'styled-components';

import { H1, H3, H5 } from '../../components/text';

export const Container = styled.div`
  width: 100%;
  padding: 110px 0 100px 85px;
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background: var(--primary-color-super-light-beige);
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 544px;
  position: relative;
  z-index: 2;

  ${H1} {
    margin-bottom: 25px;
  }
  ${H3} {
    margin-bottom: 70px;
  }
  ${H5} {
    margin-bottom: 25px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: auto;
  max-width: none;
  border-radius: 10px;
  overflow: visible;
  z-index: 1;
`;

export const Image = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  right: 578px;
  top: 0;
  height: 100%;
  width: 214px;
  background: linear-gradient(
    to right,
    var(--primary-color-super-light-beige) 0%,
    var(--primary-color-super-light-beige) 43%,
    rgba(247, 244, 241, 0) 100%
  );
  z-index: 2;
`;

export const Styled = {
  Container,
  Content,
  Buttons,
  ImageContainer,
  Image,
  GradientOverlay,
};
