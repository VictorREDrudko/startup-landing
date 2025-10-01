import styled, { css } from 'styled-components';

export interface TextProps {
  fontWeight?: number;
  color?: string;
  nonSelect?: boolean;
  textAlign?: string;
  nowrap?: boolean;
  lineHeight?: number;
  fontSize?: number;
  textTransform?: string;
  wordBreak?: string;
  overflow?: string;
  withEllipsis?: boolean;
  letterSpacing?: number;
}

const GenericText = css<TextProps>`
  ${p => p.fontWeight && `font-weight: ${p.fontWeight};`}
  color: ${props => {
    if (props.color) {
      // Если color это CSS переменная (начинается с --)
      if (props.color.startsWith('--')) {
        return `var(${props.color})`;
      }
      // Если color это hex код или название цвета
      return props.color;
    }
    // Цвет по умолчанию
    return 'var(--primary-color-text-grey)';
  }};
  user-select: ${props => (props.nonSelect ? 'none' : 'auto')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'initial')};
  white-space: ${props => (props.nowrap ? 'nowrap' : 'normal')};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}px` : 'normal')};
  text-transform: ${p => (p.textTransform ? p.textTransform : 'none')};
  word-break: ${p => (p.wordBreak ? p.wordBreak : 'normal')};
  overflow: ${p => (p.overflow || 'visible')};
  word-wrap: break-word;
  margin: 0;
  padding: 0;
  ${p => p.letterSpacing && `letter-spacing: ${p.letterSpacing}px;`}

  ${p => p.withEllipsis ? css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  ` : ''}
`;

// функция для расчета line-height
function getLineHeight(props: TextProps): string {
  if (props.lineHeight) {
    return `${props.lineHeight}px`;
  }
  if (props.fontSize) {
    return `${Math.ceil(props.fontSize * 1.5)}px`;
  }
  return '24px';
}

export const H1 = styled.h1<TextProps>`
  ${GenericText}
  font-size: 60px;
  line-height: 75px;
`;

export const H2 = styled.h2<TextProps>`
  ${GenericText}
  font-size: 52px;
  line-height: 78px;
`;

export const H3 = styled.h3<TextProps>`
  ${GenericText}
  font-size: 36px;
  line-height: 54px;
`;

export const H4 = styled.h4<TextProps>`
  ${GenericText}
  font-size: 30px;
  line-height: 45px;
`;

export const H5 = styled.h5<TextProps>`
  ${GenericText}
  font-size: 22px;
  line-height: 33px;
`;

export const H6 = styled.h6<TextProps>`
  ${GenericText}
  font-size: 18px;
  line-height: 27px;
`;

export const Text = styled.p<TextProps>`
  ${GenericText}
  font-size: ${props => props.fontSize || 16}px;
  line-height: ${getLineHeight};
`;

export const TinyText = styled.p<TextProps>`
  ${GenericText}
  font-size: 12px;
  line-height: 18px;
`;
