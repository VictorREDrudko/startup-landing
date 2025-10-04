import styled from 'styled-components';

import elegantBackground from '../../assets/image-plant/elegantnyi-fon-evkalipta.png';
import { H2 } from '../../components/text';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 120px;
  padding: 65px 0;
  border-radius: 10px;
  background: var(--primary-color-super-light-beige);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1300px) {
    padding: 65px 0;
  }

  @media (max-width: 1200px) {
    padding: 65px 0;
  }

  @media (max-width: 1150px) {
    padding: 65px 0;
  }

  @media (max-width: 1100px) {
    padding: 65px 0;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    padding: 65px 0;
    justify-content: center;
  }

  @media (max-width: 650px) {
    padding: 45px 0;
  }

  @media (max-width: 480px) {
    padding: 40px 0;
    margin-bottom: 80px;
  }

  @media (max-width: 390px) {
    padding: 30px 0;
    margin-bottom: 60px;
  }

  @media (max-width: 375px) {
    padding: 25px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  margin-right: 35px;
  width: 100%;
  max-width: calc(100% - 392px);
  padding-left: 90px;

  ${H2} {
    width: 100%;
    text-align: left;
  }

  /* Когда картинка исчезает (1100px) - центрируем весь контент */
  @media (max-width: 1100px) {
    align-items: center;
    max-width: 100%;
    margin-right: 0;
    padding-left: 40px;
    padding-right: 40px;
    
    ${H2} {
      text-align: center;
    }
  }

  @media (max-width: 1300px) {
    max-width: calc(100% - 372px);
    margin-right: 30px;
    padding-left: 70px;
  }

  @media (max-width: 1200px) {
    max-width: calc(100% - 352px);
    margin-right: 25px;
    padding-left: 60px;
  }

  @media (max-width: 1150px) {
    max-width: calc(100% - 342px);
    margin-right: 20px;
    padding-left: 50px;
  }

  @media (max-width: 1100px) {
    max-width: calc(100% - 332px);
    margin-right: 18px;
    padding-left: 40px;
  }

  @media (max-width: 1050px) {
    max-width: calc(100% - 312px);
    margin-right: 15px;
    padding-left: 35px;
  }

  @media (max-width: 650px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 390px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 375px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 370px 370px;
  grid-template-rows: 260px 260px;
  gap: 20px;
  justify-content: flex-start;
  width: 100%;

  /* Когда картинка исчезает (1100px) - центрируем grid */
  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 1300px) {
    grid-template-columns: 350px 350px;
    grid-template-rows: 250px 250px;
    gap: 18px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 340px 340px;
    grid-template-rows: 240px 240px;
    gap: 20px;
  }

  @media (max-width: 1150px) {
    grid-template-columns: 330px 330px;
    grid-template-rows: 235px 235px;
    gap: 18px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 320px 320px;
    grid-template-rows: 230px 230px;
    gap: 18px;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 300px 300px;
    grid-template-rows: 220px 220px;
    gap: 16px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 290px 290px;
    grid-template-rows: 240px 240px;
    gap: 30px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 280px 280px;
    grid-template-rows: 230px 230px;
    gap: 25px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 270px 270px;
    grid-template-rows: 220px 220px;
    gap: 20px;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 20px;
    max-width: 400px;
  }

  @media (max-width: 650px) {
    max-width: 380px;
    gap: 18px;
  }

  @media (max-width: 550px) {
    max-width: 360px;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    max-width: 350px;
  }

  @media (max-width: 430px) {
    max-width: 340px;
    gap: 14px;
  }

  @media (max-width: 390px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 12px;
    max-width: 320px;
  }

  @media (max-width: 375px) {
    max-width: 300px;
    gap: 10px;
  }

  @media (max-width: 360px) {
    max-width: 280px;
    gap: 10px;
  }
`;

export const Img = styled.div`
  width: 357px;
  height: 665px;
  background-image: url(${elegantBackground});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: absolute;
  right: 20px;
  bottom: 0;
  flex-shrink: 0;

  @media (max-width: 1300px) {
    width: 340px;
    height: 630px;
    right: 20px;
  }

  @media (max-width: 1250px) {
    width: 330px;
    height: 620px;
    right: 20px;
  }

  @media (max-width: 1200px) {
    width: 320px;
    height: 600px;
    right: 20px;
  }

  @media (max-width: 1150px) {
    width: 310px;
    height: 580px;
    right: 20px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 35px 30px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  background: var(--primary-color-beige);
  overflow: hidden;

  @media (max-width: 1150px) {
    padding: 32px 28px;
    gap: 11px;
  }

  @media (max-width: 1050px) {
    padding: 30px 25px;
    gap: 10px;
  }

  @media (max-width: 1100px) {
    padding: 25px 20px;
    gap: 10px;
  }

  @media (max-width: 750px) {
    padding: 25px 20px;
    gap: 8px;
    height: auto;
    min-height: 180px;
  }

  @media (max-width: 650px) {
    padding: 22px 18px;
    gap: 7px;
    min-height: 170px;
  }

  @media (max-width: 550px) {
    padding: 20px 16px;
    gap: 6px;
    min-height: 160px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
    gap: 6px;
    height: 190px;
  }

  @media (max-width: 430px) {
    padding: 18px 14px;
    gap: 5px;
    height: 180px;
  }

  @media (max-width: 390px) {
    padding: 18px 12px;
    gap: 5px;
    height: 170px;
  }

  @media (max-width: 375px) {
    padding: 16px 10px;
    gap: 4px;
    height: 160px;
  }

  @media (max-width: 360px) {
    padding: 15px 8px;
    gap: 4px;
    height: 150px;
  }
`;

export const InfoLightBeige = styled(Info)`
  background: var(--primary-color-super-light-rose);
`;

export const InfoGradient = styled(Info)`
  background: linear-gradient(0deg, #E8D6E3 0%, #EDEBE6 87%, #EDEBE6 100%);
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