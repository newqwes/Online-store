import styled from 'styled-components';

const LoginFormContent = styled.div`
  margin-top: 10%;
  padding: 2% 5%;
  background-color: ${({ theme, themeVariant }) => theme.login.background[themeVariant]};
  box-shadow: 0px 0px 20px ${({ theme, themeVariant }) => theme.login.shadow.main[themeVariant]};

  animation-name: ${({ isErrorAnimation }) => isErrorAnimation && 'error'};
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 0.8s;
  animation-delay: 0.5s;

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

export default LoginFormContent;
