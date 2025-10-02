import React from 'react';

import { Styled } from './styled';


interface Props {
  text: string;
  targetId: string; // ID элемента, к которому прокручиваем
  onClick?: () => void;
}

export const Link: React.FC<Props> = ({ 
  text,
  targetId,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Плавная прокрутка к элементу
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <Styled.ScrollLink
      href={`#${targetId}`}
      onClick={handleClick}
    >
      {text}
    </Styled.ScrollLink>
  );
};
