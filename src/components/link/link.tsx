import React from 'react';

import { Styled } from './styled';


interface Props {
  text: string;
  targetId?: string;
  onClick?: () => void;
  externalUrl?: string;
}

export const Link: React.FC<Props> = ({ 
  text,
  targetId,
  onClick,
  externalUrl,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (externalUrl) {
      // Для внешних ссылок - открываем в новой вкладке
      e.preventDefault();
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      // Для внутренних действий
      e.preventDefault();
      onClick();
    }
    // Для якорных ссылок оставляем стандартное поведение
  };

  return (
    <Styled.ScrollLink
      href={externalUrl || (targetId ? `#${targetId}` : '#')}
      onClick={handleClick}
    >
      {text}
    </Styled.ScrollLink>
  );
};
