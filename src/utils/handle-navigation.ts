const anchors = ['services', 'about', 'approach', 'contacts', 'myWork'];

export const handleNavigation = (targetId: string) => {
  if (anchors.includes(targetId)) {
    const element = document.getElementById(targetId);
    if (element) {
      // Прокрутка к элементу
      element.scrollIntoView({ behavior: 'smooth' });

      // Получаем базовый путь из окружения или используем по умолчанию
      const basename = import.meta.env.BASE_URL || '/startup-landing/';

      alert(import.meta.env.BASE_URL);

      // Обновление URL с якорем и базовым путем
      window.history.pushState(null, '', `${basename}#${targetId}`);
    }
  }
};
