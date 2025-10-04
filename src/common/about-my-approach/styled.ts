import styled from 'styled-components';

import image4 from '../../assets/image-plant/4.png';
import iryna1 from '../../assets/photo/iryna-1.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 120px;
  padding: 0 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1301px;
`;

/* Первый ряд */
export const FirstRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const FirstWidgetWrapper = styled.div`
  width: 368px;
  height: 285px;
  flex-shrink: 0;

  @media (max-width: 700px) {
    width: 340px;
    height: 240px;
  }

  @media (max-width: 390px) {
    width: 350px;
    height: 190px;
  }
`;

export const Iryna1 = styled.div`
  width: 393px;
  height: 285px;
  border-radius: 10px;
  background-image: url(${iryna1});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;

  @media (max-width: 700px) {
    width: 340px;
    height: 240px;
  }

  @media (max-width: 390px) {
    width: 350px;
    height: 240px;
  }
`;

export const MixWidgetContainer = styled.div`
  width: 500px;
  height: 285px;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 78px;
  gap: 10px;
  border-radius: 10px;
  background: var(--primary-color-super-light-beige);
  flex-shrink: 0;
  box-sizing: border-box;

  @media (max-width: 700px) {
    width: 460px;
    height: 256px;
    padding: 30px;
  }

  @media (max-width: 390px) {
    width: 350px;
    height: 230px;
    padding: 20px;
  }
`;

/* Второй ряд */
export const SecondRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Image4 = styled.div`
  width: 188px;
  height: 205px;
  border-radius: 10px;
  background-image: url(${image4});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;

  @media (max-width: 700px) {
    width: 220px;
    height: 250px;
  }

  @media (max-width: 390px) {
    width: 350px;
    height: 165px;
  }
`;

export const SecondWidgetWrapper = styled.div`
  width: 602px;
  height: 205px;
  flex-shrink: 0;

  @media (max-width: 700px) {
    width: 340px;
    height: 278px;
  }

  @media (max-width: 390px) {
    width: 350px;
    height: 210px;
  }
`;

export const LastWidgetWrapper = styled.div`
  width: 469px;
  height: 205px;
  flex-shrink: 0;

  @media (max-width: 700px) {
    width: 340px;
    height: 278px;
  }

  @media (max-width: 390px) {
    width: 350px;
    height: 180px;
  }
`;

export const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Styled = {
  Container,
  ContentWrapper,
  FirstRow,
  SecondRow,
  FirstWidgetWrapper,
  Iryna1,
  MixWidgetContainer,
  Image4,
  SecondWidgetWrapper,
  LastWidgetWrapper,
  WidgetWrapper,
};
