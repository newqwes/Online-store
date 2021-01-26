import styled from 'styled-components';

const RegistrationFormContent = styled.div`
  margin-top: 50px;
  padding: 30px 80px;
  background-color: ${({ theme, themeVariant }) => theme.login.background[themeVariant]};
  box-shadow: 0px 0px 20px ${({ theme, themeVariant }) => theme.login.shadow.main[themeVariant]};

  button {
    display: block;
    margin: 25px auto 10px;
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
`;

export default RegistrationFormContent;
