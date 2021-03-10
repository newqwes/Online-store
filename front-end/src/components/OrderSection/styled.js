import styled, { css } from 'styled-components';

import SECTION_WIDTH from '../../constants/sectionWidth';
import THEME_VARIANT from '../../constants/themeVariant';

export const OrderSectionWrapper = styled.section(
  ({ theme: { order }, themeVariant, backgroundColor = order.background[themeVariant] }) => css`
    background: ${backgroundColor};
    padding: 30px 0;
  `,
);

export const OrderSectionContent = styled.div(
  ({
    theme: { order },
    themeVariant,
    formBoxShadow = order.hoverShadow[themeVariant],
    buttonTextColor = order.button.color[themeVariant],
    buttonBorderColor = order.button.background[themeVariant],
    buttonBackgroundColor = order.button.background[themeVariant],
  }) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 auto;
    max-width: ${SECTION_WIDTH.midle}px;

    .order-section-label {
      align-self: flex-start;
      margin-bottom: 20px;
    }

    .order-section-cart {
      width: 100%;
    }

    form {
      background-color: white;
      width: 85%;
      padding: 30px;
      border-radius: 10px;
      align-self: flex-start;
      box-shadow: 0 0 10px -8px ${formBoxShadow};

      button {
        width: 100%;
        height: 40px;
        margin-top: 10px;
        color: ${buttonTextColor};
        border-color: ${buttonBorderColor};
        background-color: ${buttonBackgroundColor};
      }
    }
  `,
);

export const InputFieldContent = styled.div(
  ({
    theme: { order },
    themeVariant,
    isError,
    labelColor = order.label[themeVariant],
    inputColor = order.input.color[themeVariant],
    inputBorderColor = order.input.border[isError ? THEME_VARIANT.warning : themeVariant],
  }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;

    label {
      align-self: flex-start;
      margin-bottom: 10px;
      color: ${labelColor};
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
      color: ${inputColor};
      border-bottom: 1px solid ${inputBorderColor};
    }
  `,
);
