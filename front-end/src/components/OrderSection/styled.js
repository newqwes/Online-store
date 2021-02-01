import styled from 'styled-components';

const OrderSectionWrapper = styled.section`
  background: url(${(props) => props.theme.background.imageBackground[props.themeVariant]});
  width: 100%;
  min-height: 85vh;
  padding: 20px 0;
`;

export default OrderSectionWrapper;
