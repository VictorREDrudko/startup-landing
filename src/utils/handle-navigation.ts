export const ANCHORS = ['services', 'about', 'approach', 'contacts', 'myWork'];

export const handleNavigation = (targetId: string) => {
  if (ANCHORS.includes(targetId)) {
    const isOnPrivacyPolicy = window.location.hash === '#/privacy-policy';
    
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
