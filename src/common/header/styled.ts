import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 70px;
  margin-bottom: 25px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 632px;
  width: 100%;
  height: 40px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
`;

export const Styled = {
  Container,
  Content,
  LinksWrapper,
  Logo,
};
