import styled from 'styled-components';

import { H2 } from '../../components/text';

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin-bottom: 120px;
  padding: 65px 0;
  border-radius: 10px;
  background: var(--primary-color-super-light-beige);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 780px) {
    padding: 45px;
  }

  @media (max-width: 720px) {
    padding: 30px 20px;
  }

  @media (max-width: 490px) {
    width: calc(100% + 40px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  margin-left: 45px;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 490px) {
    ${H2} {
      width: 100%;
      text-align: center;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 370px 370px;
  grid-template-rows: 260px 260px;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 290px 290px;
    grid-template-rows: 240px 240px;
    gap: 30px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 190px;
    gap: 20px;
  }

  @media (max-width: 490px) {
    gap: 12px;
  }
`;

export const Img = styled.img`
  display: inline-block;
  max-width: 355px;
  width: 100%;
  max-height: 665px;
  height: 100%;
  position: relative;
  bottom: -65px;

  object-fit: cover;
  object-position: center;
  flex-shrink: 1;
  min-width: 0;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  padding: 35px 30px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  background: var(--primary-color-beige);
  overflow: hidden;

  @media (max-width: 490px) {
    padding: 25px;
    min-height: 190px;
  }
`;

export const InfoLightBeige = styled(Info)`
  background: var(--primary-color-super-light-rose);
`;

export const InfoGradient = styled(Info)`
  background: linear-gradient(0deg, #e8d6e3 0%, #edebe6 87%, #edebe6 100%);
`;

export const Styled = {
  Container,
  Content,
  InfoWrapper,
  Img,
  Info,
  InfoLightBeige,
  InfoGradient,
};
