import styled from 'styled-components';
import SECTION_WIDTH from '../../constants/sectionWidth';

export const OrderSectionWrapper = styled.section`
  background: ${({ theme, themeVariant }) => theme.order.background[themeVariant]};
  width: 100%;
  min-height: 85vh;
  padding: 30px 0;
`;

export const OrderSectionContent = styled.div`
  margin: 0 auto;
  max-width: ${SECTION_WIDTH.midle}px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .order-section__label {
    align-self: flex-start;
    margin-bottom: 20px;
  }

  .order-section__cart {
    width: 100%;
  }

  form {
    background-color: white;
    width: 85%;
    padding: 30px;
    border-radius: 10px;
    align-self: flex-start;
    box-shadow: 0 0 10px -8px ${({ theme, themeVariant }) => theme.order.hoverShadow[themeVariant]};

    button {
      width: 100%;
      height: 40px;
      margin-top: 10px;
      background-color: ${({ theme, themeVariant }) => theme.order.button.background[themeVariant]};
      border-color: ${({ theme, themeVariant }) => theme.order.button.background[themeVariant]};
      color: ${({ theme, themeVariant }) => theme.order.button.color[themeVariant]};
    }
  }
`;
