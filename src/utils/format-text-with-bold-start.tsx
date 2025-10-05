// Функция для форматирования текста с жирным началом
export const formatTextWithBoldStart = (text: string) => {
  const parts = text.split(':');
  if (parts.length > 1) {
    return (
      <>
        <span style={{ fontWeight: 700 }}>{parts[0]}:</span>
        {parts.slice(1).join(':')}
      </>
    );
  }
  return text;
};
