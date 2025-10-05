import styled from 'styled-components';

export const ScrollLink = styled.a`
  font-size: 14px;
  color: var(--primary-color-text-grey);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-80);
  }
`;

export const ExternalLink = styled.a`
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: 0;
  font-weight: 400;
  color: var(--primary-color-button);
  text-decoration: underline;
  text-decoration-color: var(--primary-color-button);
  text-underline-offset: 2px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ExternalLinkDisabled = styled.span`
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: 0;
  font-weight: 400;
  color: var(--primary-color-80);
  text-decoration: underline;
  text-decoration-color: var(--primary-color-80);
  text-underline-offset: 2px;
  cursor: not-allowed;
  opacity: 0.6;
`;

export const Styled = {
  ScrollLink,
  ExternalLink,
  ExternalLinkDisabled,
};
