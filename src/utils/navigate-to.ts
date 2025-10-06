import { MAIN_PAGE_URL } from '../constants';

export const getBasePath = (): string => {
  return window.location.pathname.includes(`/${MAIN_PAGE_URL}/`) ? `/${MAIN_PAGE_URL}` : '';
};

export const navigateTo = (path: string, newTab: boolean = false) => {
  const basePath = getBasePath();
  const fullPath = `${basePath}${path}`;

  if (newTab) {
    window.open(fullPath, '_blank');
  } else {
    window.location.href = fullPath;
  }
};
