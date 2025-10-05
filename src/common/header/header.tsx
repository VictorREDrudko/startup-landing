import React from 'react';

import logo from '../../assets/logo.png';
import { Link } from '../../components/link';
import { Styled } from './styled';


export const Header: React.FC = () => {
  const handleNavigation = (targetId: string) => {
    if (targetId === 'services') {
      // Прокрутка к блоку на главной странице
      if (window.location.pathname !== '/') {
        window.location.href = '/';
      } else {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.LinksWrapper>
          <Link
            text={'услуги'}
            targetId={'services'}
            onClick={() => handleNavigation('services')}
          />
          <Link
            text={'обо мне'}
            targetId={'about'}
            onClick={() => handleNavigation('about')}
          />
        </Styled.LinksWrapper>
        <Styled.Logo src={logo} alt="Логотип" />
        <Styled.LinksWrapper>
          <Link
            text={'мой подход'}
            targetId={'approach'}
            onClick={() => handleNavigation('approach')}
          />
          <Link
            text={'контакты'}
            targetId={'contacts'}
            onClick={() => handleNavigation('contacts')}
          />
        </Styled.LinksWrapper>
      </Styled.Content>
    </Styled.Container>
  );
};
