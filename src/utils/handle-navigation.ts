import { POLICY_PAGE_URL } from '../constants';

export const ANCHORS = ['services', 'about', 'approach', 'contacts', 'myWork'];

export const handleNavigation = (targetId: string) => {
  if (ANCHORS.includes(targetId)) {
    const isOnPrivacyPolicy = window.location.hash === `#/${POLICY_PAGE_URL}`;
    
    if (isOnPrivacyPolicy) {
      sessionStorage.setItem('pendingScroll', targetId);
      // Переходим на главную
      window.location.hash = '#/';
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
