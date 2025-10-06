import styled, { css } from 'styled-components';

interface ButtonStylesSettings {
  disabled?: boolean;
  $isTransparent?: boolean;
}

function getButtonStyles({ disabled, $isTransparent }: ButtonStylesSettings) {
  if (disabled) {
    return css`
      background-color: var(--primary-color-80);
      color: #FFFFFF;
      cursor: not-allowed;
      opacity: 0.7;
    `;
  } else if ($isTransparent) {
    return css`
      background-color: transparent;
      border: 1px solid var(--primary-color-button);
      color: var(--primary-color-button);
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(135, 169, 208, 0.2);
        transition: all 0.5s ease;
        color: #FFFFFF;
        background-color: var(--primary-color-button);
      }
      
      &:active {
        transform: translateY(-2px) scale(0.98);
        box-shadow: 0 2px 6px rgba(135, 169, 208, 0.3);
        transition: all 0.1s ease;
        color: #FFFFFF;
        background-color: var(--primary-color-button);
      }
    `;
  } else {
    return css`
      background-color: var(--primary-color-deep-blue-button);
      color: #FFFFFF;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(135, 169, 208, 0.3);
        background-color: var(--primary-color-button);
        transition: all 0.3s ease;
      }
      
      &:active {
        transform: translateY(-2px) scale(0.98);
        box-shadow: 0 2px 6px rgba(135, 169, 208, 0.4);
        transition: all 0.1s ease;
        background-color: var(--primary-color-button);
      }
    `;
  }
}

const StyledButton = styled.button<ButtonStylesSettings>`
  width: 210px;
  height: 50px;
  padding: 0;
  border-radius: 68px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: 0;
  font-weight: 400;
  transform: translateY(0) scale(1);

  ${p => getButtonStyles(p)}
`;

export const Styled = {
  StyledButton,
};
