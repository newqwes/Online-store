import styled from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';
import THEME_VARIANT from '../../constants/themeVariant';

export const OrderSectionWrapper = styled.section`
  background: ${({ theme, themeVariant }) => theme.order.background[themeVariant]};
  padding: 30px 0;
`;

export const OrderSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  max-width: ${SECTION_WIDTH.midle}px;

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
      color: ${({ theme, themeVariant }) => theme.order.button.color[themeVariant]};
      border-color: ${({ theme, themeVariant }) => theme.order.button.background[themeVariant]};
      background-color: ${({ theme, themeVariant }) => theme.order.button.background[themeVariant]};
    }
  }
`;

export const InputFieldContent = styled.div.attrs(({ theme, themeVariant, isError }) => ({
  labelColor: theme.order.label[themeVariant],
  inputColor: theme.order.input.color[themeVariant],
  inputBorderColor: theme.order.input.border[isError ? THEME_VARIANT.warning : themeVariant],
}))`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  label {
    align-self: flex-start;
    margin-bottom: 10px;
    color: ${({ labelColor }) => labelColor};
  }

  span {
    position: absolute;
    padding-top: 20px;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    transition: 0.3s ease;
    color: ${({ inputColor }) => inputColor};
    border-bottom: 1px solid ${({ inputBorderColor }) => inputBorderColor};
  }
`;
