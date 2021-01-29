import styled from 'styled-components';

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
