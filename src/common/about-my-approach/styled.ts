import styled from 'styled-components';

import image4 from '../../assets/image-plant/4.png';
import iryna1 from '../../assets/photo/iryna-1.png';

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 120px;

  @media (max-width: 780px) {
    margin-bottom: 70px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

/* Первый ряд */
export const FirstRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  min-height: 285px;
  height: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 680px) {
    min-height: 190px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const FirstWidgetWrapper = styled.div`
  max-width: 368px;
  width: 100%;

  > div {
    min-height: 285px;
    height: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 700px;

    > div {
      min-height: 240px;
    }
  }

  @media (max-width: 780px) {
    max-width: 340px;
  }

  @media (max-width: 680px) {
    max-width: 680px;

    > div {
      min-height: 100px;
    }
  }

  @media (max-width: 490px) {
    > div {
      min-height: 190px;
    }
  }
`;

export const Iryna1 = styled.div`
  max-width: 390px;
  width: 100%;
  min-height: 285px;
  border-radius: 10px;
  background-image: url(${iryna1});
  background-size: cover;
  background-repeat: no-repeat;
  align-self: stretch;

  @media (max-width: 780px) {
    max-width: 340px;
  }

  @media (max-width: 680px) {
    max-width: 680px;
  }

  @media (max-width: 490px) {
    min-height: 240px;
  }
`;

export const MixWidgetContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 10px;
  border-radius: 10px;
  background: var(--primary-color-super-light-beige);
  box-sizing: border-box;

  @media (max-width: 1150px) {
    padding: 35px;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
    min-height: 250px;
  }

  @media (max-width: 780px) {
    max-width: 460px;

    > div > div p {
      font-size: 22px;
    }
  }

  @media (max-width: 680px) {
    order: 1;
    padding: 25px;
    max-width: 680px;
    min-height: 150px;
    height: 100%;

    > div > div p {
      font-size: 20px;
    }

    > div > div {
      max-width: 100%;
    }
  }
`;

/* Второй ряд */
export const SecondRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  min-height: 205px;
  height: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Image4 = styled.div`
  max-width: 190px;
  width: 100%;
  min-height: 205px;
  border-radius: 10px;
  background-image: url(${image4});
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    max-width: 280px;
    min-height: 250px;
  }

  @media (max-width: 780px) {
    max-width: 220px;
  }

  @media (max-width: 680px) {
    order: 2;
    min-height: 250px;
    max-width: 680px;
    background-repeat: no-repeat;
    background-position: center -180px;
  }

  @media (max-width: 590px) {
    max-width: 490px;
    min-height: 165px;
    background-position: center -160px;
  }

  @media (max-width: 490px) {
    background-position: center -120px;
  }
`;

export const SecondWidgetWrapper = styled.div`
  max-width: 600px;
  width: 100%;

  > div {
    min-height: 205px;
    height: 100%;
  }

  @media (max-width: 780px) {
    max-width: 340px;

    > div {
      min-height: 250px;
    }
  }

  @media (max-width: 680px) {
    max-width: 680px;

    > div {
      min-height: 100px;
    }
  }

  @media (max-width: 490px) {
    > div {
      min-height: 180px;
    }
  }
`;

export const LastWidgetWrapper = styled.div`
  max-width: 470px;
  width: 100%;

  > div {
    min-height: 180px;
    height: 100%;
  }

  @media (max-width: 780px) {
    max-width: 340px;

    > div {
      min-height: 280px;
    }
  }

  @media (max-width: 680px) {
    max-width: 680px;

    > div {
      min-height: 100px;
    }
  }

  @media (max-width: 490px) {
    > div {
      min-height: 180px;
    }
  }
`;

/* Третий ряд */
export const ThirdRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  min-height: 205px;
  height: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
  ThirdRow,
  WidgetWrapper,
};
