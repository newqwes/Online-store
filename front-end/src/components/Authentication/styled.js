import styled, { css } from 'styled-components';

import THEME_VARIANT from '../../constants/themeVariant';

export const FormWrapper = styled.section(
  ({
    theme: { background },
    themeVariant,
    backgroundImage = background.imageBackground[themeVariant],
  }) => css`
    background: url(${backgroundImage});
    width: 100%;
    min-height: 80vh;
    display: flex;

    div {
      margin: 0 auto;
    }
  `,
);

export const FormContent = styled.div(
  ({
    theme: { login },
    themeVariant,
    isErrorAnimation,
    linkColor = login.link.color[themeVariant],
    backgroundColor = login.background[themeVariant],
    boxShadowColor = login.shadow.main[themeVariant],
    boxShadowColorError = login.shadow.error[themeVariant],
    buttonbackgroundColor = login.button.background[themeVariant],
    buttonColor = login.button.color[themeVariant],
    buttonBorderColor = login.button.border[themeVariant],
    buttonBorderColorActive = login.button.shadow[themeVariant],
  }) => css`
    padding: 30px 60px;
    background-color: ${backgroundColor};
    box-shadow: 0px 0px 20px ${boxShadowColor};

    animation-name: ${isErrorAnimation && 'error'};
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-duration: 0.8s;
    animation-delay: 0.5s;

    button {
      display: block;
      margin: 15px auto 10px;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 0;
      border: 1px solid ${buttonBorderColor};
      background-color: ${buttonbackgroundColor}10;
      color: ${buttonColor};

      &:active {
        border-radius: 0;
        box-shadow: 0px 0px 20px -5px ${buttonBorderColorActive};
      }
    }

    a {
      font-size: 15px;
      color: ${linkColor};
    }

    @keyframes error {
      50% {
        box-shadow: 0px 0px 20px ${boxShadowColorError};
      }
    }
  `,
);

export const InputFieldContent = styled.div(
  ({
    theme: { login },
    themeVariant,
    isError,
    labelColor = login.label.color[themeVariant],
    inputBorderColor = login.input.border[isError ? THEME_VARIANT.warning : themeVariant],
  }) => css`
    label {
      display: block;
      margin: 20px 15px 10px;
      font-size: 16px;
      color: ${labelColor};
    }

    input {
      padding: 0.5rem 1rem;
      border: 1px solid ${inputBorderColor};
      margin-bottom: 10px;
    }

    span {
      position: absolute;
    }
  `,
);
