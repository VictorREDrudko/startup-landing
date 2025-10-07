import styled from 'styled-components';

const Textarea = styled.textarea<{ $hasError?: boolean }>`
  width: 100%;
  height: 90px;
  min-height: 90px;
  max-height: 120px; /* примерно 6 строк */
  padding: 12px 15px;
  border-radius: 10px;
  background: #FFFFFF;
  border: 1px solid ${props => props.$hasError ? '#ff4444' : '#DBDBDB'};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: var(--primary-color-text-grey);
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;

  &::placeholder {
    color: #A3A3A3;
    font-family: 'Roboto Condensed';
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2;
    font-weight: 400;
    max-width: 165px;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-medium-rose);
    box-shadow: 0 0 0 2px rgba(213, 181, 205, 0.2);
  }

  &:hover {
    border-color: var(--primary-color-60);
  }

  @media (max-width: 391px) {
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
  Textarea,
  ErrorText,
};
