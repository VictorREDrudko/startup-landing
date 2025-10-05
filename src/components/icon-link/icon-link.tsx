import React,{ useCallback }  from 'react';

import { Styled } from './styled';

interface Props {
  icon: string;
  text?: string;
  url: string;
}

export const IconLink: React.FC<Props> = ({ 
  icon,
  text,
  url,
}) => {
  const hasText = !!text;

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [url]);

  return (
    <Styled.IconLink
      href={url}
      onClick={handleClick}
      $hasText={hasText}
    >
      <Styled.Icon src={icon} $hasText={hasText} alt={text || 'Иконка'} />
      {text && <Styled.LinkText>{text}</Styled.LinkText>}
    </Styled.IconLink>
  );
};
