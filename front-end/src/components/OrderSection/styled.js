import styled from 'styled-components';
import SECTION_WIDTH from '../../constants/sectionWidth';

export const OrderSectionWrapper = styled.section`
  background: ${(props) => props.theme.cart.background[props.themeVariant]};
  width: 100%;
  min-height: 85vh;
  padding: 20px 0;
`;

export const TotalPriceContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${SECTION_WIDTH.midle}px;

  div {
    margin: 10px 20%;
  }

  span {
    padding-left: 10px;
  }

  button {
    font-size: 15px;
    padding: 10px;
  }
`;
