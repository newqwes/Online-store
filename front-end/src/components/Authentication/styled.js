import styled from 'styled-components';

import THEME_VARIANT from '../../constants/themeVariant';

export const FormWrapper = styled.section`
  background: url(${(props) => props.theme.background.imageBackground[props.themeVariant]});
  width: 100%;
  min-height: 85vh;
  display: flex;

  div {
    margin: 0 auto;
  }
`;

export const FormContent = styled.div`
  padding: 30px 60px;
  background-color: ${({ theme, themeVariant }) => theme.login.background[themeVariant]};
  box-shadow: 0px 0px 20px ${({ theme, themeVariant }) => theme.login.shadow.main[themeVariant]};

  animation-name: ${({ isErrorAnimation }) => isErrorAnimation && 'error'};
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
    border: 1px solid ${({ theme, themeVariant }) => theme.login.button.border[themeVariant]};
    background-color: ${({ theme, themeVariant }) => theme.login.button.background[themeVariant]}10;
    color: ${({ theme, themeVariant }) => theme.login.button.color[themeVariant]};

    &:active {
      border-radius: 0;
      box-shadow: 0px 0px 20px -5px ${({ theme, themeVariant }) => theme.login.button.shadow[themeVariant]};
    }
  }

  a {
    font-size: 15px;
    color: ${({ theme, themeVariant }) => theme.login.link.color[themeVariant]};
  }

  @keyframes error {
    50% {
      box-shadow: 0px 0px 20px
        ${({ theme, themeVariant }) => theme.login.shadow.error[themeVariant]};
    }
  }
`;

export const InputFieldContent = styled.div.attrs(({ theme, themeVariant, isError }) => ({
  labelColor: theme.login.label.color[themeVariant],
  inputBorderColor: theme.login.input.border[isError ? THEME_VARIANT.warning : themeVariant],
}))`
  label {
    display: block;
    margin: 20px 15px 10px;
    font-size: 16px;
    color: ${({ labelColor }) => labelColor};
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid ${({ inputBorderColor }) => inputBorderColor};
    margin-bottom: 10px;
  }

  span {
    position: absolute;
  }
`;
