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
  ${(p) => p.fontWeight && `font-weight: ${p.fontWeight};`}
  color: ${(props) => {
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
  user-select: ${(props) => (props.nonSelect ? 'none' : 'auto')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'initial')};
  white-space: ${(props) => (props.nowrap ? 'nowrap' : 'normal')};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}px` : 'normal')};
  text-transform: ${(p) => (p.textTransform ? p.textTransform : 'none')};
  word-break: ${(p) => (p.wordBreak ? p.wordBreak : 'normal')};
  overflow: ${(p) => p.overflow || 'visible'};
  word-wrap: break-word;
  margin: 0;
  padding: 0;
  ${(p) => p.letterSpacing && `letter-spacing: ${p.letterSpacing}px;`}

  ${(p) =>
    p.withEllipsis
      ? css`
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        `
      : ''}
`;

export const H1 = styled.h1<TextProps>`
  ${GenericText}
  font-family: 'Playfair Display', serif;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 400;

  @media (max-width: 1125px) {
    font-size: 42px;
  }

  @media (max-width: 520px) {
    font-size: 34px;
  }
`;

export const H2 = styled.h2<TextProps>`
  ${GenericText}
  font-family: 'Playfair Display', serif;
  font-size: 45px;
  line-height: 1.1;
  font-weight: 400;

  @media (max-width: 780px) {
    font-size: 34px;
  }

  @media (max-width: 490px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const H3 = styled.h3<TextProps>`
  ${GenericText}
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  line-height: 1.1;
`;

export const H4 = styled.h3<TextProps>`
  ${GenericText}
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: 0.84px;
`;

export const H5 = styled.h4<TextProps>`
  ${GenericText}
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 0.84px;
`;

export const H6 = styled.h6<TextProps>`
  ${GenericText}
  font-size: 18px;
  line-height: 27px;
`;

export const BigText = styled.p<TextProps>`
  ${GenericText}
  font-size: 36px;
  line-height: 1.1;
  font-weight: 300;

  @media (max-width: 1125px) {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const MainText = styled.p<TextProps>`
  ${GenericText}
  font-size: 22px;
  line-height: 1.1;

  @media (max-width: 1125px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Text = styled.p<TextProps>`
  ${GenericText}
  font-size: ${(props) => props.fontSize || 16}px;
  line-height: ${(props) => props.lineHeight || 1.3};
`;

export const TinyText = styled.p<TextProps>`
  ${GenericText}
  font-size: ${(props) => props.fontSize || 14}px;
  line-height: ${(props) => props.lineHeight || '18px'};
  letter-spacing: ${(props) => props.letterSpacing || 0.2}px;
`;
