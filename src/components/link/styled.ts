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

export const Styled = {
  ScrollLink,
};
