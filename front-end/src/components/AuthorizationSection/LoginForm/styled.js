import styled from 'styled-components';

export const LoginWrapper = styled.div``;

export const LoginContent = styled.div`
  margin-top: 10%;
  padding: 2% 5%;
  background-color: ${(props) => props.theme.login.background[props.themeVariant]};
  box-shadow: 0px 0px 20px ${(props) => props.theme.login.shadow.main[props.themeVariant]};

  animation-name: ${(props) => (props.isSuccess ? 'success' : 'error')};
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 0.5s;

  label {
    display: block;
    margin: 15% 5% 4%;
    font-size: 16px;
    color: ${(props) => props.theme.login.label.color[props.themeVariant]};
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.login.input.border[props.themeVariant]};
  }

  button {
    display: block;
    margin: 15% auto 0;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 0;
    border: 1px solid ${(props) => props.theme.login.button.border[props.themeVariant]};
    background-color: ${(props) => props.theme.login.button.background[props.themeVariant]}10;
    color: ${(props) => props.theme.login.button.color[props.themeVariant]};

    &:active {
      border-radius: 0;
      box-shadow: 0px 0px 20px -5px ${(props) => props.theme.login.button.shadow[props.themeVariant]};
    }
  }

  @keyframes error {
    50% {
      box-shadow: 0px 0px 35px ${(props) => props.theme.login.shadow.error[props.themeVariant]};
    }
  }

  @keyframes success {
    50% {
      box-shadow: 0px 0px 35px ${(props) => props.theme.login.shadow.success[props.themeVariant]};
    }
  }
`;
