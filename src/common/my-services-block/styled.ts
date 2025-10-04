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
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 20px;
  row-gap: 25px;
  width: 100%;
`;

export const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid var(--primary-color-light-rose);
  overflow: hidden;
`;

export const ServiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 50px 60px;
  width: 100%;
  background: var(--primary-color-medium-rose);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-height: 220px;
  height: 100%;

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
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const Styled = {
  Container,
  ServiceWrapper,
  Service,
  ServiceHeader,
  ServiceContent,
  Description,
};
