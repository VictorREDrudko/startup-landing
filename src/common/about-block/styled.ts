import styled from 'styled-components';

import backgroundAbout from '../../assets/image-plant/background-about.png';
import { H2 } from '../../components/text';

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding: 50px 95px;
  /* border: 1px solid red; */

  background-image: url(${backgroundAbout});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    background-position: -150px center;
    padding: 50px;
  }

  @media (max-width: 930px) {
    gap: 50px;
    padding: 30px 20px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px 60px 20px;
    gap: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 20px;

  @media (max-width: 930px) {
    gap: 10px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Block1Wrapper = styled.div`
  padding: 30px 25px;
  display: flex;
  max-width: 270px;
  width: 100%;
  min-height: 160px;
  background-color: var(--primary-color-super-light-beige);
  border-radius: 10px;

  @media (max-width: 930px) {
    padding: 15px;
    max-width: 140px;
    min-height: 145px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    max-width: 400px;
    min-height: 100px;

    > p {
      font-size: 18px;
    }
  }
`;

export const Block2Wrapper = styled.div`
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 282px;
  width: 100%;
  min-height: 230px;
  background-color: var(--primary-color-light-rose);
  border-radius: 10px;

  ${H2} {
    text-align: left;
  }

  @media (max-width: 930px) {
    padding: 15px;
    min-height: 180px;
    max-width: 145px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    max-width: 400px;
    min-height: 100px;

    > p {
      font-size: 18px;
    }
  }
`;

export const Block3Wrapper = styled.div`
  padding: 30px 25px;
  display: flex;
  max-width: 305px;
  width: 100%;
  min-height: 205px;
  background-color: var(--primary-color-super-light-rose);
  border-radius: 10px;

  @media (max-width: 930px) {
    padding: 15px;
    max-width: 155px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    max-width: 400px;
    min-height: 100px;

    > p {
      font-size: 18px;
    }
  }
`;

export const Block4Wrapper = styled.div`
  padding: 30px 25px;
  display: flex;
  max-width: 325px;
  width: 100%;
  min-height: 225px;
  background-color: var(--primary-color-beige);
  border-radius: 10px;

  @media (max-width: 930px) {
    padding: 15px;
    min-height: 220px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    max-width: 400px;
    min-height: 100px;

    > p {
      font-size: 18px;
    }
  }
`;

export const Styled = {
  Container,
  Content,
  Block1Wrapper,
  Block2Wrapper,
  Block3Wrapper,
  Block4Wrapper,
};
