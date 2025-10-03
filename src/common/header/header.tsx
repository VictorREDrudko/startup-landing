import React from 'react';

import logo from '../../assets/logo.png';
import { Link } from '../../components/link';
import { Styled } from './styled';


export const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.LinksWrapper>
          <Link text={'услуги'} targetId={'services'} />
          <Link text={'обо мне'} targetId={'services'} />
        </Styled.LinksWrapper>
        <Styled.Logo src={logo} alt="Логотип" />
        <Styled.LinksWrapper>
          <Link text={'мой подход'} targetId={'services'} />
          <Link text={'контакты'} targetId={'services'} />
        </Styled.LinksWrapper>
      </Styled.Content>
    </Styled.Container>
  );
};
