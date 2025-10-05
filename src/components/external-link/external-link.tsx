import React from 'react';

import { Styled } from './styled';


interface Props {
  url?: string;
}

export const ExternalLink: React.FC<Props> = ({ url }) => {
  if (!url) {
    return (
      <Styled.ExternalLinkDisabled>
        Подробнее
      </Styled.ExternalLinkDisabled>
    );
  }

  return (
    <Styled.ExternalLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Подробнее
    </Styled.ExternalLink>
  );
};
