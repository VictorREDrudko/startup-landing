import styled from 'styled-components';

import { H4 } from '../../components/text';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 70px;
  box-sizing: border-box;

  @media (max-width: 1235px) {
    h2 {
      font-size: 34px;
    }
  }
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 20px;
  row-gap: 25px;
  width: 100%;

  @media (max-width: 1235px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 2px var(--primary-color-light-rose);
  overflow: hidden;
`;

export const ServiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 50px;
  width: 100%;
  background: var(--primary-color-medium-rose);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-height: 220px;
  height: 100%;

  @media (max-width: 1235px) {
    max-height: 230px;
  }

  @media (max-width: 500px) {
    max-height: 350px;
    padding: 25px;

    ${H4} {
      font-size: 30px;
    }
  }

  ${H4} {
    width: 100%;
  }
  div {
    width: 100%;
  }
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 40px 50px 20px;
  width: 100%;

  @media (max-width: 1235px) {
    padding: 40px 50px 30px;
  }

  @media (max-width: 500px) {
    padding: 35px 25px 45px;

    /* Button становится как isTransparent = false */
    button {
      background-color: var(--primary-color-button) !important;
      color: #FFFFFF !important;
      border: none !important;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (max-width: 500px) {
    div > p {
      font-size: 18px;
    }
  }
`;

export const Styled = {
  Container,
  ServiceWrapper,
  Service,
  ServiceHeader,
  ServiceContent,
  Description,
};
