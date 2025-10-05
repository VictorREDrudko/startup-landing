import React from 'react';

import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import logo from '../../assets/logo.png';
import { IconLink } from '../../components/icon-link';
import { Link } from '../../components/link';
import { navigateTo } from '../../utils';
import { Styled } from './styled';

const LINK_TEXT = 'Политика обработки персональных данных';

export const Footer: React.FC = () => {
  const handlePrivacyPolicyClick = () => {
    navigateTo('/privacy-policy', true);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Logo src={logo} alt="Логотип" />
        <Styled.Links>
          <Styled.LinksWrapper>
            <IconLink 
              icon={facebookIcon} 
              url="https://facebook.com/******" 
            />
            <IconLink 
              icon={instagramIcon} 
              url="https://instagram.com/*****" 
            />
          </Styled.LinksWrapper>
          <Styled.LinksWithTextWrapper>
            <IconLink 
              icon={telegramIcon} 
              text="telegram"
              url="https://t.me/CHES7777" 
            />
          </Styled.LinksWithTextWrapper>
        </Styled.Links>
        <Link 
          text={LINK_TEXT} 
          targetId={'privacy-policy'}
          onClick={handlePrivacyPolicyClick}
        />
      </Styled.Content>
    </Styled.Container>
  );
};
