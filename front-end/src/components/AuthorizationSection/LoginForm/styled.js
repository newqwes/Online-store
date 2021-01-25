import styled from 'styled-components';

export const LoginWrapper = styled.div``;

export const LoginContent = styled.div`
  margin-top: 10%;
  padding: 2% 5%;
  background-color: ${({ theme, themeVariant }) => theme.login.background[themeVariant]};
  box-shadow: 0px 0px 20px ${({ theme, themeVariant }) => theme.login.shadow.main[themeVariant]};

  animation-name: ${({ isErrorAnimation }) => isErrorAnimation && 'error'};
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 0.7s;

  label {
    display: block;
    margin: 10% 5% 4%;
    font-size: 16px;
    color: ${({ theme, themeVariant }) => theme.login.label.color[themeVariant]};
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme, themeVariant }) => theme.login.input.border[themeVariant]};
    margin-bottom: 10px;
  }

  button {
    display: block;
    margin: 10% auto 5%;
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

  span {
    position: absolute;
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
