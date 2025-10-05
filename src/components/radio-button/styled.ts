import styled from 'styled-components';


const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const Radio = styled.div<{ $checked: boolean }>`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${props => props.$checked && `
    border-color: var(--primary-color-medium-rose);
  `}

  &::after {
    content: '';
    width: 17.56px;
    height: 17px;
    border-radius: 50%;
    background: var(--primary-color-medium-rose);
    opacity: ${props => props.$checked ? 1 : 0};
    transform: ${props => props.$checked ? 'scale(1)' : 'scale(0)'};
    transition: all 0.3s ease;
  }

  @media (max-width: 390px) {
    width: 26px;
    height: 24px;

    &::after {
      width: 19px;
      height: 18px;
    }
  }
`;

const RadioLabel = styled.span`
  font-size: 14px;
  color: var(--primary-color-text-grey);
`;

export const Styled = {
  RadioContainer,
  HiddenRadio,
  Radio,
  RadioLabel,
};
