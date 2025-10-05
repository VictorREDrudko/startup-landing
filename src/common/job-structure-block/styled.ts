import styled from 'styled-components';

import arrowPng from '../../assets/arrow-bar-right.png';

interface TabProps {
  $background?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 70px;

  @media (max-width: 390px) {
    padding: 0 10px;
  }
`;

export const TabsWrapper = styled.div`
  width: 100%;

  @media (min-width: 391px) {
    overflow-x: auto;
    padding-bottom: 10px;
  }

  @media (max-width: 390px) {
    height: 800px;
    overflow-y: auto;
    
    /* Скрываем скроллбар */
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Tab = styled.div<TabProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 160px;
  background: ${props => {
    if (props.$background?.includes('.png')) {
      return `url(${props.$background})`;
    }
    return props.$background || 'var(--primary-color-super-light-beige)';
  }};
  background-size: ${props => props.$background?.includes('.png') ? 'cover' : 'auto'};
  background-position: center;
  border-radius: 121px;
  position: relative;
  flex-shrink: 0;

  /* Стрелка для десктопа */
  @media (min-width: 391px) {
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -12px;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      background-image: url(${arrowPng});
      background-size: contain;
      background-repeat: no-repeat;
      background-color: transparent;
      z-index: 2;
    }
  }

  @media (max-width: 390px) {
    width: 100%;
    max-width: 300px;
    border-radius: 121px;
    margin: 0 auto;
    
    /* Стрелка для мобилки */
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%) rotate(90deg);
      width: 24px;
      height: 24px;
      background-image: url(${arrowPng});
      background-size: contain;
      background-repeat: no-repeat;
      background-color: transparent;
      z-index: 2;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0;

  @media (min-width: 391px) {
    width: max-content;
    min-width: 100%;
    padding: 0 calc(50% - 650px);
  }

  @media (max-width: 390px) {
    flex-direction: column;
    gap: 0;
    width: 100%;
    min-height: 800px;
  }
`;

export const ArrowIcon = styled.div`
  display: none;
`;

export const Styled = {
  Container,
  TabsWrapper,
  Tabs,
  Tab,
  ArrowIcon,
};
