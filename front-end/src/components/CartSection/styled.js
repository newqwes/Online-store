import styled from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';

export const CartSectionWrapper = styled.section`
  width: 100%;
  min-height: 80vh;
  padding: 20px 0;
  background: ${(props) => props.theme.cart.background[props.themeVariant]};
`;

export const CartSectionContent = styled.div`
  margin: 0 25%;
`;

export const TotalPriceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 25%;
  max-width: ${SECTION_WIDTH.midle}px;

  button {
    font-size: 15px;
    margin-top: 20px;
    padding: 10px;
  }
`;
