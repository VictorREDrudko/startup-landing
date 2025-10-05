import styled from 'styled-components';

const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border-radius: 10px;
  background: #FFFCFC;
  border: 1px solid ${props => props.$hasError ? '#ff4444' : '#DBDBDB'};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: var(--primary-color-text-grey);
  transition: all 0.3s ease;

  &::placeholder {
    color: #A3A3A3;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-medium-rose);
    box-shadow: 0 0 0 2px rgba(213, 181, 205, 0.2);
  }

  &:hover {
    border-color: var(--primary-color-60);
  }

  @media (max-width: 390px) {
    &::placeholder {
      font-size: 16px;
    }
  }
`;

const ErrorText = styled.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

export const Styled = {
  Input,
  ErrorText,
};
