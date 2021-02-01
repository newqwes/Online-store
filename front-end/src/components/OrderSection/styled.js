import styled from 'styled-components';

export const OrderSectionWrapper = styled.section`
  background: url(${(props) => props.theme.background.imageBackground[props.themeVariant]});
  width: 100%;
  min-height: 85vh;
  div {
    margin: 0 auto;
  }
`;

export const OrderSectionContent = styled.div`
  margin: 20px;
  padding: 30px 60px;
  background-color: ${({ theme, themeVariant }) => theme.login.background[themeVariant]};
  box-shadow: 0px 0px 20px ${({ theme, themeVariant }) => theme.login.shadow.main[themeVariant]};
`;
