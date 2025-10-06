import { useEffect } from 'react';

import { ANCHORS } from '../utils';

export const usePendingScroll = () => {
  useEffect(() => {
    const pendingScroll = sessionStorage.getItem('pendingScroll');

    if (pendingScroll && ANCHORS.includes(pendingScroll)) {
      // Небольшая задержка для гарантии что DOM полностью загружен
      setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Очищаем после использования
        sessionStorage.removeItem('pendingScroll');
      }, 100);
    }
  }, []);
};
