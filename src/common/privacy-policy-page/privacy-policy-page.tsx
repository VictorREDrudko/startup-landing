/* eslint-disable max-len */
import React from 'react';

import { Footer } from '../../common/footer';
import { Header } from '../../common/header';
import { H1, Text } from '../../components/text';
import { Styled } from './styled';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Content>
          <H1>Политика конфиденциальности</H1>
          
          <Text fontSize={18} lineHeight={1.3}>
            Настоящая Политика конфиденциальности определяет порядок сбора, хранения и использования персональных данных, которые вы оставляете на этом сайте.
          </Text>

          <Styled.Section>
            <Styled.SectionTitle>1. Какие данные собираются</Styled.SectionTitle>
            <Text fontSize={16} lineHeight={1.3}>
              Мы можем собирать и обрабатывать следующие данные: — имя, адрес электронной почты и телефон — если вы заполняете форму обратной связи; — данные cookies и техническую информацию (IP-адрес, тип устройства, браузер, время посещения) для аналитики и улучшения работы сайта.
            </Text>
          </Styled.Section>

          <Styled.Section>
            <Styled.SectionTitle>2. Для чего используются данные</Styled.SectionTitle>
            <Text fontSize={16} lineHeight={1.3}>
              Собранные данные мы используем исключительно для: — обратной связи по вашему запросу; — отправки информации о продуктах, услугах и событиях (только с вашего согласия); — анализа посещаемости сайта и улучшения качества материалов.
            </Text>
          </Styled.Section>

          <Styled.Section>
            <Styled.SectionTitle>3. Дети</Styled.SectionTitle>
            <Text fontSize={16} lineHeight={1.3}>
              Наш сайт и услуги не предназначены для лиц младше 13 лет. Мы сознательно не собираем их данные. Если вы считаете, что ребёнок предоставил нам свои данные, пожалуйста, свяжитесь с нами — мы удалим их.
            </Text>
          </Styled.Section>

          <Styled.Section>
            <Styled.SectionTitle>4. Передача данных третьим лицам</Styled.SectionTitle>
            <Text fontSize={16} lineHeight={1.3}>
              Мы не продаём и не передаём ваши данные третьим лицам, за исключением случаев, когда это требуется по закону. Для аналитики мы можем использовать внешние сервисы (например, Google Analytics), которые обрабатывают обезличенные данные.
            </Text>
          </Styled.Section>

          <Styled.Section>
            <Styled.SectionTitle>5. Хранение и защита данных</Styled.SectionTitle>
            <Text fontSize={16} lineHeight={1.3}>
              Все персональные данные обрабатываются в соответствии с действующим законодательством. Мы принимаем разумные технические и организационные меры для защиты информации от несанкционированного доступа. Данные хранятся только столько времени, сколько это необходимо для целей, ради которых они были собраны.
            </Text>
          </Styled.Section>

          <Styled.Section>
            <Styled.SectionTitle>6. Ваши права</Styled.SectionTitle>
            <Text fontSize={16} lineHeight={1.3}>
              Вы имеете право: — запросить копию своих персональных данных; — потребовать исправления или удаления данных; — отозвать согласие на их обработку. Для этого напишите нам на e-mail, указанный в разделе «Контакты».
            </Text>
          </Styled.Section>

          <Styled.Section>
            <Styled.SectionTitle>7. Cookies</Styled.SectionTitle>
            <Text fontSize={16} lineHeight={1.3}>
              Наш сайт может использовать cookies для корректной работы и анализа посещаемости. Вы можете отключить cookies в настройках браузера, однако это может повлиять на корректность работы некоторых функций.
            </Text>
          </Styled.Section>

          <Styled.Section>
            <Styled.SectionTitle>8. Контакты</Styled.SectionTitle>
            <Text fontSize={16} lineHeight={1.3}>
              По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами: info@irynaharelik.com
            </Text>
          </Styled.Section>
        </Styled.Content>
      </Styled.Container>
      <Footer />
    </>
  );
};
