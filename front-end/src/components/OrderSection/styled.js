import styled from 'styled-components';

export const OrderSectionWrapper = styled.section`
  background: ${(props) => props.theme.cart.background[props.themeVariant]};
  width: 100%;
  min-height: 85vh;
  padding: 20px 0;
`;

export const TotalPriceContent = styled.div`
  text-align: right;
  margin-right: 30%;
  span {
    margin-left: 30px;
  }
`;
