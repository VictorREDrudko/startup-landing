export const getBasePath = (): string => {
  return window.location.pathname.includes('/startup-landing/') ? '/startup-landing' : '';
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
