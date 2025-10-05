import styled from 'styled-components';

interface IconLinkProps {
  $hasText?: boolean;
}

export const IconLink = styled.a<IconLinkProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.$hasText ? '10px' : '0'};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.img<IconLinkProps>`
  width: ${props => props.$hasText ? '24px' : '41px'};
  height: ${props => props.$hasText ? '20px' : '41px'};
  object-fit: contain;
  ${props => props.$hasText && `
    color: var(--primary-color-text-grey);
    fill: currentColor;
  `}
`;

export const LinkText = styled.span`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  color: var(--primary-color-text-grey);
`;

export const Styled = {
  IconLink,
  Icon,
  LinkText,
};
