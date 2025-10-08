import React from 'react';

import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import logo from '../../assets/logo.svg';
import { IconLink } from '../../components/icon-link';
import { Link } from '../../components/link';
import { POLICY_PAGE_URL } from '../../constants';
import { Styled } from './styled';

const LINK_TEXT = 'Политика обработки персональных данных';

export const Footer: React.FC = () => {
  const handlePrivacyPolicyClick = () => {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('#')[0];
    window.open(`${baseUrl}#/${POLICY_PAGE_URL}`, '_blank');
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Logo src={logo} alt="Логотип" />
        <Styled.Links>
          <Styled.LinksWrapper style={{ display: 'none' }}>
            <IconLink icon={facebookIcon} url="https://facebook.com/******" />
            <IconLink icon={instagramIcon} url="https://instagram.com/*****" />
          </Styled.LinksWrapper>
          <Styled.LinksWithTextWrapper>
            <IconLink icon={telegramIcon} text="telegram" url="https://t.me/****" />
          </Styled.LinksWithTextWrapper>
        </Styled.Links>
        <Link text={LINK_TEXT} targetId={POLICY_PAGE_URL} onClick={handlePrivacyPolicyClick} />
      </Styled.Content>
    </Styled.Container>
  );
};
