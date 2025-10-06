import styled from 'styled-components';

import { ScrollLink } from '../../components/link/styled';
import { Text, TinyText } from '../../components/text';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color-beige);
  width: 100%;
  padding: 50px 20px;
  box-sizing: border-box;

  @media (max-width: 391px) {
    padding: 47px 20px;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  max-width: 572px;

  > ${Text} {
    text-align: center;
  }
`;

export const DataFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45px 45px;
  row-gap: 20px;
  column-gap: 12px;

  @media (max-width: 391px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 12px;
  }
`;

export const LabelFormWrapper = styled.div`
  margin-top: 15px;

  @media (max-width: 391px) {
    margin-top: 0;
  }
`;

export const Massagers = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;

  @media (max-width: 370px) {
    gap: 5px;
  }
`;

export const MassagerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputMassage = styled.div`
  width: 100%;
  border-radius: 10px;

  ${TinyText} {
    font-size: 12px;

    @media (max-width: 391px) {
      font-size: 13px;
    }
  }
  ${ScrollLink} {
    text-decoration: underline;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 0.2px;

    @media (max-width: 391px) {
      font-size: 13px;
      display: block;
      white-space: pre-line;
    }
  } 
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Styled = {
  Container,
  Form,
  DataFields,
  Inputs,
  LabelFormWrapper,
  Massagers,
  MassagerContainer,
  InputMassage,
  ButtonContainer,
};
