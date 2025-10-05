import styled from 'styled-components';

import irynaPhoto from '../../assets/photo/iryna-2.png';

export const Container = styled.div`
  max-width: 1210px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 90px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 780px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 25px;
  }

  /* @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 25px;
  } */
`;

export const Block1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 382px;
  width: 100%;
  min-height: 254px;
  gap: 12px;

  H3 {
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    order: 2;
    max-width: 340px;
    min-height: 235px;

    H3 {
      margin-bottom: 18px;
    }
  }

  @media (max-width: 779px) {
    margin-bottom: 25px;
  }
`;

export const Block2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 382px;
  width: 100%;
  min-height: 254px;
  gap: 12px;

  H3 {
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    order: 3;
    max-width: 340px;
    min-height: 235px;

    H3 {
      margin-bottom: 18px;
    }
  }
`;

export const MePhotoWrapper = styled.div`
  max-width: 340px;
  width: 100%;
  height: 390px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    order: 1;
    margin: 0 150px;
  }

  /* @media (max-width: 1000px) {
    max-width: 700px;
  } */
`;

export const Iryna = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${irynaPhoto});
  background-size: cover;
  background-position: center;
`;

export const Styled = {
  Container,
  Iryna,
  MePhotoWrapper,
  Block1Wrapper,
  Block2Wrapper,
};
