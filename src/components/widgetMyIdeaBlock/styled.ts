import styled from 'styled-components';

interface WidgetContainerProps {
  $backgroundColor?: string;
  $padding?: string;
  $maxWidth?: string;
}

export const WidgetContainer = styled.div<WidgetContainerProps>`
  padding: ${p => p.$padding || '6px 15px'};
  border-radius: 10px;
  background: ${p => {
    if (p.$backgroundColor) {
      // Если это CSS переменная (начинается с --)
      if (p.$backgroundColor.startsWith('--')) {
        return `var(${p.$backgroundColor})`;
      }
      // Если это hex код, gradient или название цвета
      return p.$backgroundColor;
    }
    // Цвет по умолчанию
    return 'var(--primary-color-super-light-rose)';
  }};
  ${p => p.$maxWidth && `
    max-width: ${p.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;
`;

export const Styled = {
  WidgetContainer,
};
