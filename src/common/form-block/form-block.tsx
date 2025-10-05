import React from 'react';
import { Controller,useForm } from 'react-hook-form';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Link } from '../../components/link';
import { RadioButton } from '../../components/radio-button';
import { H2, Text, TinyText } from '../../components/text';
import { Textarea } from '../../components/text-area';
import { navigateTo } from '../../utils';
import { Styled } from './styled';

const HEADER_TEXT = 'Хочу обсудить задачу';
const DESCRIPTION = 'Оставьте свои контакты и запрос и я вернусь к вам с предложением';
const LABEL_FORM_TEXT = 'Свяжитесь со мной через';
const TEXT_AREA_LABEL_PART1 = `* Нажимая кнопку «Отправить», я даю согласие на обработку
  персональных данных и получение рекламных материалов. `;
const TEXT_AREA_LABEL_PART2 = 'Ознакомиться с политикой конфиденциальности.';

interface FormData {
  name: string;
  telegram: string;
  phone: string;
  email: string;
  contactMethod: string;
  message: string;
}

// Функция отправки формы
const sendEmailWithFormSubmit = async (data: FormData) => {
  const formData = new FormData();
  formData.append('Имя', data.name);
  formData.append('Telegram', data.telegram || 'не указал');
  formData.append('Телефон', data.phone || 'не указал');
  formData.append('E-mail', data.email || 'не указал');
  formData.append('Метод для контакта', data.contactMethod  || 'не указал');
  formData.append('Сообщение', data.message);

  // Бесплатно - вроде до 1000 отправок в месяц
  return fetch('https://formsubmit.co/ajax/evgeny.chausov@kreo.net', {
    method: 'POST',
    body: formData,
  });
};

export const FormBlock: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const watchedValues = watch();
  
  // Проверяем, можно ли активировать кнопку отправки
  const isSubmitDisabled = !watchedValues.name || 
    (!watchedValues.email && !watchedValues.phone && !watchedValues.telegram) ||
    isSubmitting;

  const onSubmit = async (data: FormData) => {
    try {
      const response = await sendEmailWithFormSubmit(data);
      
      if (response.ok) {
        alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
        reset();
      } else {
        throw new Error('Ошибка отправки');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert(`Произошла ошибка при отправке сообщения.
        Пожалуйста, попробуйте еще раз или свяжитесь другим способом.`,
      );
    }
  };

  const handlePrivacyPolicyClick = () => {
    navigateTo('/privacy-policy', true);
  };

  // Валидационные правила
  const emailValidation = {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Введите корректный email',
    },
  };

  const phoneValidation = {
    pattern: {
      value: /^\+?[\d\s\-()]+$/,
      message: 'Введите корректный номер телефона',
    },
  };

  return (
    <Styled.Container>
      <Styled.Form as="form" onSubmit={handleSubmit(onSubmit)}>
        <H2>{HEADER_TEXT}</H2>
        <Text
          fontSize={18}
          letterSpacing={0.2}
          lineHeight={1.2}
        >
          {DESCRIPTION}
        </Text>
        <Styled.DataFields>
          <Styled.Inputs>
            <Input
              placeholder="Имя"
              {...register('name', { required: 'Имя обязательно' })}
              error={errors.name?.message}
            />
            <Input
              placeholder="Ник в Telegram"
              {...register('telegram')}
              error={errors.telegram?.message}
            />
            <Input
              placeholder="Телефон"
              {...register('phone', phoneValidation)}
              error={errors.phone?.message}
            />
            <Input
              placeholder="E-mail"
              {...register('email', emailValidation)}
              error={errors.email?.message}
            />
          </Styled.Inputs>
          <Styled.LabelFormWrapper>
            <TinyText>{LABEL_FORM_TEXT}</TinyText>
          </Styled.LabelFormWrapper>
          <Styled.Massagers>
            <Styled.MassagerContainer key="email-radio">
              <Controller
                name="contactMethod"
                control={control}
                render={({ field }) => (
                  <RadioButton
                    name="contactMethod"
                    value="email"
                    checked={field.value === 'email'}
                    onChange={field.onChange}
                    label="e-mail"
                  />
                )}
              />
            </Styled.MassagerContainer>
            <Styled.MassagerContainer key="whatsapp-radio">
              <Controller
                name="contactMethod"
                control={control}
                render={({ field }) => (
                  <RadioButton
                    name="contactMethod"
                    value="whatsapp"
                    checked={field.value === 'whatsapp'}
                    onChange={field.onChange}
                    label="whatsapp"
                  />
                )}
              />
            </Styled.MassagerContainer>
            <Styled.MassagerContainer key="telegram-radio">
              <Controller
                name="contactMethod"
                control={control}
                render={({ field }) => (
                  <RadioButton
                    name="contactMethod"
                    value="telegram"
                    checked={field.value === 'telegram'}
                    onChange={field.onChange}
                    label="telegram"
                  />
                )}
              />
            </Styled.MassagerContainer>
          </Styled.Massagers>
        </Styled.DataFields>
        <Styled.InputMassage>
          <Textarea
            placeholder="Как я могу быть Вам полезна?"
            {...register('message')}
            error={errors.message?.message}
            rows={4}
          />
          <TinyText
            fontSize={12}
            lineHeight={1.3}
            letterSpacing={0}
          >
            {TEXT_AREA_LABEL_PART1}
            <Link 
              text={TEXT_AREA_LABEL_PART2}
              targetId="privacy-policy"
              onClick={handlePrivacyPolicyClick}
            />
          </TinyText>
        </Styled.InputMassage>
        <Styled.ButtonContainer>
          <Button
            text={isSubmitting ? 'отправка...' : 'отправить'}
            isTransparent={true}
            disabled={isSubmitDisabled}
            type="submit"
          />
        </Styled.ButtonContainer>
      </Styled.Form>
    </Styled.Container>
  );
};
