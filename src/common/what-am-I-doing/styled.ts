import styled from 'styled-components';

import irynaPhoto from '../../assets/photo/iryna-3.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 120px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 25px;
  }
`;

export const MePhotoWrapper = styled.div`
  max-width: 570px;
  width: 100%;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1000px) {
    max-width: 700px;
  }
`;

export const Iryna = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${irynaPhoto});
  background-size: cover;
  background-position: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 495px;
  width: 100%;

  @media (max-width: 1000px) {
    max-width: 700px;
  }
`;

export const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 780px) {
    gap: 12px;
  }
`;

export const Styled = {
  Container,
  ContentWrapper,
  Iryna,
  WidgetWrapper,

  MePhotoWrapper,
};
